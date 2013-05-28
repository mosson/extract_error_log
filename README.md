extract_error_log
=================

# Setup
```
npm install
```


# Modules

## concat.js
複数のファイルを1つにまとめます。

```
./concat.js [import] [import] .. [import] [export]
```
imort : 入力ファイル名
export : 出力ファイル名

## getErrors.js
40xと50xのステータスコードを含むエラーログを抽出します。

file : 入力ファイル名
export : 出力ファイル名

```
./getErrors.js [import] [export]
```