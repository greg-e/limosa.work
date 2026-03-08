# GitHub API Integration for Actual Deck

The Actual Deck app can now save cards directly to the GitHub repository using the GitHub API. This enables persistence on GitHub Pages.

## Setup

### Step 1: Create a GitHub Personal Access Token

1. Go to https://github.com/settings/tokens
2. Click "Generate new token (classic)"
3. Give it a name like "Actual Deck Editor"
4. Select these scopes:
   - `repo` - Full control of private repositories
5. Click "Generate token"
6. Copy the token (you won't be able to see it again)

### Step 2: Add Token to Actual Deck

When you open the Actual Deck for the first time, you'll need to authenticate:

**Option A: Via URL Parameter (Temporary)**
```
https://limosa.work/actual/?gh_token=YOUR_TOKEN_HERE
```

**Option B: Browser Console (Persistent in localStorage)**
```javascript
localStorage.setItem('github_token', 'YOUR_TOKEN_HERE')
```

**Option C: In-App (When implemented)**
Settings button will allow token input

## How It Works

1. When you create or edit a card and click "Save card"
2. The app sends the updated cards JSON to GitHub via the REST API
3. GitHub creates a new commit in the repository
4. GitHub Pages automatically deploys the updated site
5. The next time you visit, you'll see the changes

## Security Notes

- **NEVER** commit your token to version control
- **NEVER** share your token in public
- Use a personal access token with minimal required scopes
- Tokens should be short-lived if possible
- Rotate tokens regularly

## Troubleshooting

### "GitHub token is invalid"
- Your token may have expired or been revoked
- Generate a new token and update your browser's localStorage
- Delete old token: `localStorage.removeItem('github_token')`

### "Failed to save cards to GitHub"
- Check your internet connection
- Verify the token has `repo` scope
- Check browser console for detailed errors

### Changes saved locally but not to GitHub
- Ensure you're providing a valid GitHub token
- Check that the token hasn't expired
- Verify the app can reach GitHub API
