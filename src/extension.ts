import * as vscode from 'vscode';
import * as fs from 'fs';
import * as https from 'https';
import * as path from 'path';

const placeHolder = '请输入 sourcemap.js 链接，行号和列数，比如： https://xxx.js:1:66';
const jsbs = require('js-beautify-sourcemap');

const handleCode = (code: string, line: number, column: number) => {
	const newStr: string = ` /************************** ${line}:${column} **************************/ `;
	const insertStr = (code: string, column: number, newStr: string) => {
		return code.slice(0, column) + newStr + code.slice(column);
	}
	const codeEveryLineArr = code.trim().split('\n')
	const newCode = codeEveryLineArr.map((v, i) => {
		if ((i + 1) === line) {
			return insertStr(v, column, newStr);
		} else {
			return v;
		}
	}).join('\n');
	return newCode;
}


// 获取 sourcecode 代码到本地
const getSourceCode = (src: string | undefined) => {
	return new Promise((resolve, reject) => {
		https.get(src || '', (res) => {
			res.setEncoding('utf8');
			let rawData = '';
			res.on('data', (chunk) => { rawData += chunk; });
			res.on('end', () => {
				try {
					resolve(rawData);
				} catch (e) {
					reject(e);
					console.error(e.message);
				}
			});
		}).on('error', (e) => {
			console.error(`出现错误: ${e.message}`);
		});
	});
};

export function activate(context: vscode.ExtensionContext) {
	console.log('Congratulations, your extension "beautify-sourcemap" is now active!');
	let sourcemap = vscode.commands.registerCommand('extension.sourcemap', ({ path }) => {
		(async () => {
			let longSrc: string | undefined = await vscode.window.showInputBox({ placeHolder });
			// 获取行，列和 sourcemap.js 链接
			let linkInformation = (longSrc || '').split(':');
			let column = linkInformation[linkInformation.length - 1];
			let line = linkInformation[linkInformation.length - 2];
			let srcArr: any = (longSrc || '').match(/https:\/\/.+.js/g);
			let src = srcArr[0];
			let sourceCode = await getSourceCode(src);
			let obj = jsbs(sourceCode, {}, {
				line,
				column
			});
			let code = handleCode(obj.code, obj.loc.line, obj.loc.column)
			// 写入被格式化后的代码
			fs.writeFileSync(path, `${code}\n//# ${JSON.stringify(obj.loc)}`);
			// 弹出查找结果
			vscode.window.showInformationMessage(`行为：${obj.loc.line}，列为：${obj.loc.column}`);
			// 格式化代码
			// console.log(obj.code);
			// 格式化后对应的行数
			// console.log(obj.loc);
		})();
		vscode.window.showInformationMessage(placeHolder);
	});
	let sourcemapinfile = vscode.commands.registerCommand('extension.sourcemapinfile', ({ path }) => {
		let sourceCode: string = fs.readFileSync(path).toString();
		let obj = jsbs(sourceCode);
		let code: string = obj.code;
		fs.writeFileSync(path, `${code}`);
		vscode.window.showInformationMessage(placeHolder);
	});

	// 欢迎提示
	let generatelog = vscode.commands.registerCommand('extension.generatelog', () => {
		const panel = vscode.window.createWebviewPanel(
			'testWelcome', // viewType
			"Generate Log", // 视图标题
			vscode.ViewColumn.One, // 显示在编辑器的哪个部位
			{
				enableScripts: true, // 启用JS，默认禁用
				retainContextWhenHidden: true, // webview被隐藏时保持状态，避免被重置
			}
		);
		panel.webview.html = fs.readFileSync(path.join(__dirname, './template/index.html')).toString();
	});

	context.subscriptions.push(sourcemap);
	context.subscriptions.push(sourcemapinfile);
	context.subscriptions.push(generatelog);
}
export function deactivate() { }

// workbench.action.gotoLine 跳行 Ctrl+G