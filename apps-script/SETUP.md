# Registration → Google Sheets setup

This connects the `register.html` form to a Google Sheet using a Google Apps
Script Web App. No backend server or database is needed.

## 1. Create the Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet.
2. Name it something like **"RoboSeekho Registrations 2026"**.
3. You don't need to add any columns yourself — the script creates a
   `Registrations` sheet/tab with headers automatically on first submission.

## 2. Add the Apps Script

1. In the spreadsheet, go to **Extensions → Apps Script**.
2. Delete any starter code in `Code.gs` and paste in the entire contents of
   [`Code.gs`](./Code.gs) from this folder.
3. Click the **Save** icon (💾).

## 3. Deploy as a Web App

1. Click **Deploy → New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in:
   - **Description**: `RoboSeekho registration endpoint`
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
4. Click **Deploy**.
5. Google will ask you to authorize the script — click **Authorize access**,
   choose your account, click **Advanced → Go to (project name)**, then
   **Allow**. This is expected for scripts you own that touch your own Sheet.
6. Copy the **Web app URL** it gives you. It looks like:
   `https://script.google.com/macros/s/AKfycb.../exec`

## 4. Connect the form

1. Open [`js/register.js`](../js/register.js) in this project.
2. Find this line near the top:
   ```js
   var RC_CONFIG = {
     GAS_URL: 'PASTE_YOUR_GOOGLE_APPS_SCRIPT_WEB_APP_URL_HERE'
   };
   ```
3. Replace the placeholder with the Web app URL you copied in step 3.6.
4. Save the file.

## 5. Test it

1. Open `register.html` in a browser and submit a test registration.
2. Check your Google Sheet — a new `Registrations` tab should appear with a
   header row and your test entry, including an auto-generated
   `Registration ID` like `RSIC2026-0001`.
3. The next submission will be `RSIC2026-0002`, and so on (the number is based
   on how many rows already exist in the sheet).

## Updating the script later

If you edit `Code.gs` again after deploying:

- Go to **Deploy → Manage deployments**, click the pencil (✏️) icon on the
  active deployment, and choose **New version** under "Version", then
  **Deploy**. This keeps the same Web App URL — no need to update
  `register.js` again.
- Only use **New deployment** (not "Manage deployments") if you want a
  brand-new URL.

## Troubleshooting

- **"Registration backend is not configured yet" error on the site**: you
  haven't replaced the placeholder URL in `js/register.js` yet (step 4).
- **Submissions aren't reaching the sheet / network error in the browser
  console**: double-check "Who has access" is set to `Anyone` on the
  deployment, and that you copied the `/exec` URL (not `/dev`).
- **Authorization errors**: re-run **Deploy → Manage deployments** and confirm
  the deployment is still active; re-authorize if Google prompts you again
  after script changes.
- **Data not appearing after a script edit**: make sure you deployed a **New
  version** (see "Updating the script later" above) — editing `Code.gs`
  alone does not update a live deployment.
