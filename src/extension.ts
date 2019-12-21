import * as vscode from "vscode";
import * as fs from "fs";
import * as https from "https";

const placeHolder =
  "请输入 sourcemap.js 链接，行号和列数，比如： https://xxx.js:1:66";
const jsbs = require("js-beautify-sourcemap");

const handleCode = (code: string, line: number, column: number) => {
  const newStr: string = ` /************************** ${line}:${column} **************************/ `;
  const insertStr = (code: string, column: number, newStr: string) => {
    return code.slice(0, column) + newStr + code.slice(column);
  };
  const codeEveryLineArr = code.trim().split("\n");
  const newCode = codeEveryLineArr
    .map((v, i) => {
      if (i + 1 === line) {
        return insertStr(v, column, newStr);
      } else {
        return v;
      }
    })
    .join("\n");
  return newCode;
};

// 获取 sourcecode 代码到本地
const getSourceCode = (src: string | undefined) => {
  return new Promise((resolve, reject) => {
    https
      .get(src || "", res => {
        // const { statusCode } = res;
        // const contentType: any = res.headers['content-type'];
        // let error;
        // if (statusCode !== 200) {
        // 	error = new Error('请求失败\n' + `状态码: ${statusCode}`);
        // } else if (!/^application\/x-javascript/.test(contentType)) {
        // 	error = new Error('无效的 content-type.\n' + `期望的是 application/x-javascript 但接收到的是 ${contentType}`);
        // }
        // if (error) {
        // 	console.error(error.message);
        // 	// 消费响应数据来释放内存。
        // 	res.resume();
        // 	reject(error);
        // 	return;
        // }
        res.setEncoding("utf8");
        let rawData = "";
        res.on("data", chunk => {
          rawData += chunk;
        });
        res.on("end", () => {
          try {
            resolve(rawData);
          } catch (e) {
            reject(e);
            console.error(e.message);
          }
        });
      })
      .on("error", e => {
        console.error(`出现错误: ${e.message}`);
      });
  });
};
export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "beautify-sourcemap" is now active!'
  );
  let sourcemap = vscode.commands.registerCommand(
    "extension.sourcemap",
    ({ path }) => {
      (async () => {
        let longSrc: string | undefined = await vscode.window.showInputBox({
          placeHolder
        });
        // 获取行，列和 sourcemap.js 链接
        let linkInformation = (longSrc || "").split(":");
        let column = linkInformation[linkInformation.length - 1];
        let line = linkInformation[linkInformation.length - 2];
        let srcArr: any = (longSrc || "").match(/https:\/\/.+.js/g);
        let src = srcArr[0];

        let sourceCode = await getSourceCode(src);
        let obj = jsbs(
          sourceCode,
          {},
          {
            line,
            column
          }
        );
        let code = handleCode(obj.code, obj.loc.line, obj.loc.column);
        // 写入被格式化后的代码
        fs.writeFileSync(path, `${code}\n//# ${JSON.stringify(obj.loc)}`);
        // 弹出查找结果
        vscode.window.showInformationMessage(
          `行为：${obj.loc.line}，列为：${obj.loc.column}`
        );
        // 格式化代码
        // console.log(obj.code);
        // 格式化后对应的行数
        // console.log(obj.loc);
      })();
      vscode.window.showInformationMessage(placeHolder);
    }
  );
  let sourcemapinfile = vscode.commands.registerCommand(
    "extension.sourcemapinfile",
    ({ path }) => {
      let sourceCode: string = fs.readFileSync(path).toString();
      let obj = jsbs(sourceCode);
      let code: string = obj.code;
      fs.writeFileSync(path, `${code}`);
      vscode.window.showInformationMessage(placeHolder);
    }
  );

  context.subscriptions.push(sourcemap);
  context.subscriptions.push(sourcemapinfile);
}
export function deactivate() {}

// workbench.action.gotoLine 跳行 Ctrl+G