extract_error_log
=================

# Setup
```
npm install
```

## 実行ファイルの権限
shbangを使用するにあたり
権限のチェックと変更


## conf.rbの仕様

```
PRODUCTION_USER:
  XXXXX
STAGING_USER:
  XXXXX
PATH_TO_PRODUCTION:
  XXXXX
PATH_TO_STAGING:
  XXXXX
PATH_TO_LOGS:
  XXXXX
PATH_TO_NGINX_LOGS:
  XXXXX

```

conf.ymlに設定を記述して、conf.rbで環境変数に入れます。
自分の環境の環境変数に指定されたものはcron_scpにて使用されます。


# Usage

```
$ ./main.js [module_name]
```

# Modules

## backup_logs
ログを環境からセキュアコピーします。

```
$ ./main.js backup_logs
```

## export_report
レポートを作成します。

```
$ ./main.js export_report [import] [export]
```