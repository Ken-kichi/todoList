## docker で React の開発環境 を作成する

1. ディレクトリを作成
   mkdir reactApp
2. docker-compose.yml と Dockerfile があることを確認し、ターミナルで　 docker-compose build 　を実行
3. docker-compose run --rm react-app sh -c "npm install -g create-react-app && create-react-app my-app --template typescript
4. $ docker-compose up -d で React 環境を起動

## Firebase で プロジェクトを作成

1. firebase でプロジェクトを作成
2. ターミナルで　 npm install firebase 　を実行する
3. reactApp/my-app/src 　に firebase.tsx を作成し、初期化するコードを記載する

## Firestore Database の Web 上でデータを挿入

1. Cloud Firebase でデータベースを作成
2. ロケーションを Tokyo にし、データベースを作成
3. コレクション ID を「todolist」にしコレクションを作成
4. ドキュメントを以下のように設定して保存
   ドキュメント ID：自動 ID
   フィールド：item タイプ：string 　値：買い物に行く
   フィールド：check タイプ：boolean 　値：false
   フィールド：timestamp タイプ：timestamp 　日付：2023 年 2 月 1 日　時刻：10:00

## 一覧表示を作成

1. src/components/display.tsx を作成
2. useState で初期値を設定
3. useEffect で表示するデータを読み込む

## データ追加を実装

1. src/components/form.tsx を作成
2. useState で初期値を設定
3. form で firebase にデータを送るコードを実装

## データ削除を実装

## 取り消し線を実装

## 参考文献

docker で React 環境を構築
https://zenn.dev/rihito/articles/96dfad8d4990f9
Firebase
https://firebase.google.com/?hl=ja
Firebase document
https://firebase.google.com/docs/web/setup?hl=ja
