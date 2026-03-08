# Azure Logic App Setup For Actual Deck

This setup moves GitHub write access out of the browser and into Azure Logic App.

## 1. Prerequisites

- Azure CLI installed and signed in (`az login`)
- Resource group name and region (example: `limosa-rg`, `eastus`)
- GitHub Personal Access Token with `repo` scope

## 2. Deploy Logic App

Run from repo root:

```powershell
./infra/deploy-logicapp.ps1 \
  -ResourceGroup limosa-rg \
  -Location eastus \
  -GitHubToken ghp_xxx
```

This deploys a Logic App workflow that:

1. Receives `cards` JSON from the app
2. Reads current `assets/actual-deck/cards.json` from GitHub
3. Creates/updates the file via GitHub API

## 3. Copy Trigger URL

In Azure Portal:

1. Open Logic App `actualdeck-cards-sync`
2. Open workflow run designer
3. Click `When a HTTP request is received` trigger
4. Copy the generated HTTP POST URL

## 4. Configure The Deck App

In browser console on your deck page (`http://localhost:4000/actual/` or `https://limosa.work/actual/`):

```javascript
localStorage.setItem('logic_app_url', 'https://YOUR-LOGIC-APP-TRIGGER-URL')
```

Reload the page.

## 5. Test

1. Edit or create a card
2. Watch browser console for `Cards saved via Logic App`
3. Confirm a commit appears in GitHub repo

## Fallback Behavior

If `logic_app_url` is not set, the app falls back to direct GitHub API using `github_token` (legacy behavior).

## Security Notes

- Do not commit tokens to source control
- Rotate GitHub PATs periodically
- Prefer storing secrets in Azure Key Vault for production hardening
