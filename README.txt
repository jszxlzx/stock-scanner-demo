使用說明（繁體中文）

這個 zip 解壓後會有 5 個檔案：
- index.html
- style.css
- data.js
- logic.js
- README.txt（本說明）

＝＝＝＝＝＝＝＝＝＝＝＝
一、喺你電腦本地測試
＝＝＝＝＝＝＝＝＝＝＝＝
1. 將所有檔案放同一個資料夾（例如 stock-scanner-demo）。
2. 直接用瀏覽器打開 index.html。
   - 你會見到黑底介面，同分類卡片：
     放量突破 / 支撐反彈 / 收斂待爆 / 動能啟動
3. data.js 入面嘅 SCAN_RESULTS 就係假數據。
   - 你可以改入你自己股票掃描結果，再 reload 頁面。

如果畫面冇樣式，檢查：
  - style.css 有冇放同一個資料夾
  - index.html 嘅 <link rel="stylesheet" href="style.css" /> 有冇改名走樣

＝＝＝＝＝＝＝＝＝＝＝＝
二、上載到 GitHub Pages（免費公開網址）
＝＝＝＝＝＝＝＝＝＝＝＝
前置：你需要 GitHub 帳號（免費）。

步驟：
1. 去 GitHub > 右上角「+」 > New repository
   - Repository name: 例如 stock-scanner-demo
   - Public （必須）
   - Create repository

2. 進入新 repo 頁面，揀「Add file」>「Upload files」
   - 一次過拖到以下檔案：
     index.html
     style.css
     data.js
     logic.js
     README.txt
   - 然後按最底嘅 Commit changes

3. Repo 入面檔案上載好之後：
   - 去上方「Settings」
   - 左邊搵「Pages」
   - Build and deployment:
        Source: Deploy from a branch
        Branch: main（或 master 視乎你用邊個） /root
     儲存（Save）

4. 幾秒到幾分鐘之後，同一個 Pages 畫面會出現網址：
   https://你的GitHub用戶名.github.io/你的repo名/
   用手機 / 電腦打開就可以睇。

＝＝＝＝＝＝＝＝＝＝＝＝
三、之後點更新內容
＝＝＝＝＝＝＝＝＝＝＝＝
1. 去 repo，撳入 data.js。
2. 右上角鉛筆 Edit。
3. 更新 SCAN_RESULTS 內容（例如價錢、原因等）。
4. 落到最底 Commit changes。
5. Reload 網址，前端就會即時用新資料。

即係話：你日後只需要改 data.js，
唔洗再改 HTML 結構。

＝＝＝＝＝＝＝＝＝＝＝＝
四、下一步可以做的升級
＝＝＝＝＝＝＝＝＝＝＝＝
1. 接 API：
   - data.js 可以改成伺服器 fetch 回來嘅資料，
     例如 fetch("https://你的serverless.com/api/scan")
   - 注意：API key 千萬唔可以放喺前端，
     要放喺 serverless function / Cloudflare Worker / Vercel Function。

2. 加詳細頁：
   - 之後可以加 stock.html?symbol=AMZN
     由 logic.js 根據 symbol 顯示蠟燭圖、技術解釋等。

3. 加Telegram / Email 通知：
   - 你可以用 serverless 寫一個 job，
     一有「放量突破」就推送訊息俾你。

現階段呢套檔案已經可以做你"每日收市後review watchlist"用，
同埋可以公開俾朋友睇，而唔駛交代技術流程。

（完）
