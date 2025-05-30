// const fs = require('fs');
// const path = require('path');

// // プロジェクトのルートディレクトリ
// const PROJECT_ROOT = path.resolve(__dirname, '.');

// /**
//  * SSIの `#include virtual` を解析して、
//  * 実際のファイルの内容に置き換える（再帰的に処理）
//  * @param {string} content - 元のファイルの内容
//  * @param {string} baseDir - 基準となるディレクトリ
//  * @returns {string} - 変換後のHTMLコンテンツ
//  */
// function resolveIncludes(content, baseDir) {
//   return content.replace(/<!--#include virtual="([^"]+)" -->/g, (match, includedPath) => {
//     let includeFilePath;

//     if (includedPath.startsWith('/')) {
//       // `/` で始まる場合はプロジェクトルートからのパス
//       includeFilePath = path.join(PROJECT_ROOT, includedPath);
//     } else {
//       // 相対パス（../ や ./）の場合
//       includeFilePath = path.resolve(baseDir, includedPath);
//     }

//     console.log(`🔍 Resolving: ${includedPath}`);
//     console.log(`   📂 Base Dir    : ${baseDir}`);
//     console.log(`   📄 Resolved Path : ${includeFilePath}`);

//     if (fs.existsSync(includeFilePath)) {
//       console.log(`✅ Found: ${includeFilePath}`);
//       const includedContent = fs.readFileSync(includeFilePath, 'utf8');
//       return resolveIncludes(includedContent, path.dirname(includeFilePath)); // 再帰的に処理
//     } else {
//       console.warn(`⚠️ Warning: ${includedPath} not found in ${baseDir}`);
//       return match; // 置き換えずそのまま返す
//     }
//   });
// }

// /**
//  * 指定された .shtml ファイルの SSI を展開し、.html に変換
//  * ただし、元の .shtml はすぐに削除しない
//  * @param {string} filePath - 処理対象のファイルパス
//  */
// function processSSI(filePath) {
//   console.log(`📂 Processing: ${filePath}`);
//   let content = fs.readFileSync(filePath, 'utf8');
//   content = resolveIncludes(content, path.dirname(filePath));

//   // `.shtml` → `.html` に変換
//   const newFilePath = filePath.replace('.shtml', '.html');
//   fs.writeFileSync(newFilePath, content);
//   console.log(`✅ Converted: ${filePath} → ${newFilePath}`);

//   return filePath; // 後で削除するために返す
// }

// /**
//  * 指定ディレクトリを再帰的に探索し、.shtml ファイルをリスト化する
//  * @param {string} dir - 処理対象のディレクトリ
//  * @param {string[]} fileList - .shtml ファイルを格納する配列
//  */
// function collectShtmlFiles(dir, fileList) {
//   fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
//     const fullPath = path.join(dir, entry.name);
//     if (entry.isDirectory()) {
//       // サブディレクトリがあれば再帰的に処理
//       collectShtmlFiles(fullPath, fileList);
//     } else if (entry.isFile() && fullPath.endsWith('.shtml')) {
//       fileList.push(fullPath);
//     }
//   });
// }

// const targetDirs = ['./zoidsofficial', './tsparkofficial', './include'];
// let shtmlFiles = [];

// targetDirs.forEach((dir) => collectShtmlFiles(dir, shtmlFiles));

// // 収集した .shtml ファイルを **親フォルダが先になるようにソート**
// shtmlFiles.sort((a, b) => a.split('/').length - b.split('/').length);

// // .shtml ファイルを変換
// const convertedFiles = shtmlFiles.map(processSSI);

// // 変換が終わった後に .shtml を削除
// convertedFiles.forEach((file) => {
//   fs.unlinkSync(file);
//   console.log(`🗑️ Deleted: ${file}`);
// });

const fs = require('fs');
const path = require('path');

// プロジェクトのルートディレクトリ
const PROJECT_ROOT = path.resolve(__dirname, '.');

// コマンドライン引数で `--delete` が指定されたかチェック
const shouldDelete = process.argv.includes('--delete');

/**
 * SSIの `#include virtual` を解析して、
 * 実際のファイルの内容に置き換える（再帰的に処理）
 * @param {string} content - 元のファイルの内容
 * @param {string} baseDir - 基準となるディレクトリ
 * @returns {string} - 変換後のHTMLコンテンツ
 */
function resolveIncludes(content, baseDir) {
  return content.replace(/<!--#include virtual="([^"]+)" -->/g, (match, includedPath) => {
    let includeFilePath;

    if (includedPath.startsWith('/')) {
      // `/` で始まる場合はプロジェクトルートからのパス
      includeFilePath = path.join(PROJECT_ROOT, includedPath);
    } else {
      // 相対パス（../ や ./）の場合
      includeFilePath = path.resolve(baseDir, includedPath);
    }

    console.log(`🔍 Resolving: ${includedPath}`);
    console.log(`   📂 Base Dir    : ${baseDir}`);
    console.log(`   📄 Resolved Path : ${includeFilePath}`);

    if (fs.existsSync(includeFilePath)) {
      console.log(`✅ Found: ${includeFilePath}`);
      const includedContent = fs.readFileSync(includeFilePath, 'utf8');
      return resolveIncludes(includedContent, path.dirname(includeFilePath)); // 再帰的に処理
    } else {
      console.warn(`⚠️ Warning: ${includedPath} not found in ${baseDir}`);
      return match; // 置き換えずそのまま返す
    }
  });
}

/**
 * 指定された .shtml ファイルの SSI を展開し、.html に変換
 * @param {string} filePath - 処理対象のファイルパス
 * @returns {string} - 削除対象のファイルパス（削除しない場合は null）
 */
function processSSI(filePath) {
  console.log(`📂 Processing: ${filePath}`);
  let content = fs.readFileSync(filePath, 'utf8');
  content = resolveIncludes(content, path.dirname(filePath));

  // `.shtml` → `.html` に変換
  const newFilePath = filePath.replace('.shtml', '.html');
  fs.writeFileSync(newFilePath, content);
  console.log(`✅ Converted: ${filePath} → ${newFilePath}`);

  return shouldDelete ? filePath : null; // 削除フラグがあれば削除対象として返す
}

/**
 * 指定ディレクトリを再帰的に探索し、.shtml ファイルをリスト化する
 * @param {string} dir - 処理対象のディレクトリ
 * @param {string[]} fileList - .shtml ファイルを格納する配列
 */
function collectShtmlFiles(dir, fileList) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      // サブディレクトリがあれば再帰的に処理
      collectShtmlFiles(fullPath, fileList);
    } else if (entry.isFile() && fullPath.endsWith('.shtml')) {
      fileList.push(fullPath);
    }
  });
}

const targetDirs = ['./zoidsofficial', './tsparkofficial', './include'];
let shtmlFiles = [];

targetDirs.forEach((dir) => collectShtmlFiles(dir, shtmlFiles));

// 収集した .shtml ファイルを **親フォルダが先になるようにソート**
shtmlFiles.sort((a, b) => a.split('/').length - b.split('/').length);

// .shtml ファイルを変換
const convertedFiles = shtmlFiles.map(processSSI).filter(Boolean);

// `--delete` が指定された場合のみ .shtml を削除
if (shouldDelete) {
  convertedFiles.forEach((file) => {
    fs.unlinkSync(file);
    console.log(`🗑️ Deleted: ${file}`);
  });
} else {
  console.log(`✅ All .shtml files have been processed, but not deleted.`);
}
