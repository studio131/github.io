const fs = require('fs');
const path = require('path');

/**
 * `#include virtual` を元の状態に戻す（再帰的に処理）
 * @param {string} content - 変換されたHTMLの内容
 * @param {string} baseDir - 基準となるディレクトリ
 * @returns {string} - 元のSSIタグを復元したHTML
 */
function restoreIncludes(content, baseDir) {
  return content.replace(/<!--#include virtual="([^"]+)" -->/g, (match, includedPath) => {
    const includeFilePath = path.join(baseDir, includedPath);

    if (fs.existsSync(includeFilePath)) {
      // `#include virtual` を元の形に戻す
      return `<!--#include virtual="${includedPath}" -->`;
    } else {
      console.warn(`Warning: ${includedPath} not found.`);
      return match;
    }
  });
}

/**
 * `.html` ファイルを `.shtml` に戻し、SSI タグを復元する
 * @param {string} filePath - `.html` ファイルのパス
 */
function revertSSI(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  content = restoreIncludes(content, path.dirname(filePath));

  // `.html` → `.shtml` に変換
  const newFilePath = filePath.replace('.html', '.shtml');
  fs.writeFileSync(newFilePath, content);
  console.log(`Reverted: ${filePath} → ${newFilePath}`);

  // `.html` を削除
  fs.unlinkSync(filePath);
  console.log(`Deleted: ${filePath}`);
}

/**
 * 指定ディレクトリを再帰的に探索し、`.html` ファイルを `.shtml` に戻す
 * @param {string} dir - 処理対象のディレクトリ
 */
function processDirectory(dir) {
  fs.readdirSync(dir, { withFileTypes: true }).forEach((entry) => {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath); // 再帰的に処理
    } else if (entry.isFile() && fullPath.endsWith('.html')) {
      revertSSI(fullPath);
    }
  });
}

// 対象ディレクトリを指定し、再帰的に探索
const targetDirs = ['./zoidsofficial', './tsparkofficial', './include'];
targetDirs.forEach(processDirectory);
