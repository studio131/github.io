# takara-tomy

### 起動

```ts
docker compose up -d
```

### 停止

```ts
docker compose down
```

## 環境構築手順
### Apacheサーバーをビルド
docker build -t apache-server .
### コンテナ起動
docker compose up -d
### 設定ファイルをコンテナ内にコピー
docker cp ./httpd.conf apache_server:/usr/local/apache2/conf/httpd.conf
### Apache再起動
docker exec -it apache_server apachectl -k restart

### T-SPARK公式サイト
http://localhost:8080/zoidsofficial/

### ゾイドシリーズ公式サイト
http://localhost:8080/tsparkofficial/

## ローカルでSSIインクルードの処理を行うスクリプトの実行
node convert-ssi.js