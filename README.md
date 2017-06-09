# 搜狗微信爬蟲
Use Node.js ES7 with Koa 2 Async and MongoDB.

# 文件
## 安裝與配置

系統需求：<br />
- MongoDB
- Node.js v7.6 or 或是更新版本
<br />

安裝與啟動服務：<br />
1. Clone 這個 Repo <br />
2. `cd /到這個 repo 的目錄/` <br />
3. `npm install` <br />
4. `npm run dev` (for testing, If you will deploy on your server, please run `npm run prd`)

## 開始爬資料
到你的瀏覽器中，訪問以下網址
1. `http://localhost:3000/spider/<wechat_public_account_id>` <br />
(ex. `http://localhost:3000/spider/WX-Pay`)
(ex. 你可以在 details 頁面找到 `<wechat_public_account_id>`)
2. 完成

