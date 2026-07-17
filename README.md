# 1分でできる宿曜占星術 🌟

生年月日から運命の宿を占う、シンプルな宿曜占星術ツールです。

## 特徴

- ⚡ 1分で結果が出る
- 🎨 モダンで美しいUI
- 📱 レスポンシブデザイン
- 💰 無料（Cloudflare Pages）
- 🚀 デプロイが簡単

## 必要な情報

- **27の宿**（ナクシャトラ）
- **支配惑星**
- **五大元素**
- **動物シンボル**
- **性質と特性**

## 計算ロジック

1. 生年月日 → ユリウス通日（Julian Day Number）に変換
2. 月の黄経（Moon Longitude）を計算
3. 27の宿に分類（0-360°を27分割）
4. 対応する宿の情報を表示

## ファイル構成

```
nakshatras-tool/
├── index.html      # UI（入力フォーム + 結果表示）
├── script.js       # 計算ロジック + 27の宿データ
├── README.md       # このファイル
└── wrangler.toml   # Cloudflare設定（デプロイ用）
```

## ローカル実行方法

### 方法1: Python を使用

```bash
cd nakshatras-tool
python -m http.server 8000
```

ブラウザで `http://localhost:8000` を開く

### 方法2: Node.js を使用

```bash
cd nakshatras-tool
npx http-server
```

### 方法3: ファイルを直接開く

`index.html` をブラウザにドラッグ&ドロップ

## Cloudflare Pagesへのデプロイ手順

### ステップ1: Git初期化（初回のみ）

```bash
cd nakshatras-tool
git init
git add .
git commit -m "feat: 1分でできる宿曜占星術MVP実装"
```

### ステップ2: GitHubにリポジトリ作成

1. [GitHub](https://github.com/new) でリポジトリを作成
2. リポジトリ名: `nakshatras-tool`
3. Public / Private は自由
4. リモート追加:

```bash
git remote add origin https://github.com/YOUR_USERNAME/nakshatras-tool.git
git branch -M main
git push -u origin main
```

### ステップ3: Cloudflare Pagesにデプロイ

1. [Cloudflare Dashboard](https://dash.cloudflare.com) にログイン
2. **Workers & Pages** → **Pages** → **Create a project**
3. **Connect to Git** を選択
4. GitHubアカウント連携
5. `nakshatras-tool` リポジトリを選択
6. デプロイ設定:
   - **Framework**: None
   - **Build command**: (空白)
   - **Build output directory**: (空白)
7. **Save and Deploy** をクリック

**完了！** 数秒後に自動デプロイされます 🎉

## 使い方

1. 生年月日を入力
2. 「占う」ボタンをクリック
3. あなたの宿が表示される

## 計算精度について

このMVP版は**簡略版の計算**を使用しています。

- 月の黄経計算（ユリウス力学時）
- 時刻不明の場合は正午を基準
- 精密版は別途実装可能

## 今後の拡張案

- [ ] 複数の宿の相性診断
- [ ] ラッキーカラー・ラッキーナンバー表示
- [ ] 宿ごとの詳細な説明
- [ ] 運勢カレンダー
- [ ] SNS共有機能

## 技術スタック

- **フロントエンド**: HTML5 + Vanilla JavaScript
- **ホスティング**: Cloudflare Pages
- **デプロイ**: GitHub + Cloudflare自動連携

## ライセンス

MIT License

## お問い合わせ

バグ報告や機能提案は Issues にお願いします。

---

**作成**: Dejiina Agent  
**作成日**: 2026-07-18  
**バージョン**: 1.0.0 (MVP)
