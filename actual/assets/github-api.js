// GitHub API utilities for saving cards
export async function saveCardsToGitHub(cardsToSave) {
  try {
    // Check for token - on deployed site, prompt user; in dev, check localStorage
    let token = localStorage.getItem('github_token');
    
    if (!token && typeof window !== 'undefined') {
      // Try to get from URL parameter (for secure passing)
      const params = new URLSearchParams(window.location.search);
      token = params.get('gh_token');
      if (token) {
        localStorage.setItem('github_token', token);
      }
    }
    
    if (!token) {
      console.warn('No GitHub token available. Cards not persisted to repository.');
      return false;
    }

    // GitHub API endpoint
    const owner = 'greg-e';
    const repo = 'limosa.work';
    const path = 'assets/actual-deck/cards.json';
    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

    // Get current file to get its SHA (required for updates)
    const getResponse = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });

    let sha = null;
    if (getResponse.ok) {
      const fileData = await getResponse.json();
      sha = fileData.sha;
    }

    // Prepare the content (base64 encoded)
    const content = btoa(JSON.stringify(cardsToSave, null, 2));
    
    // Create or update the file
    const saveResponse = await fetch(url, {
      method: 'PUT',
      headers: {
        'Authorization': `Bearer ${token}`,
        'X-GitHub-Api-Version': '2022-11-28',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        message: 'Update cards via Actual Deck editor',
        content: content,
        sha: sha,
        committer: {
          name: 'Actual Deck Editor',
          email: 'noreply@actualdeck.local'
        }
      })
    });

    if (saveResponse.ok) {
      const result = await saveResponse.json();
      console.log('Cards saved to GitHub:', result.commit.message);
      return true;
    } else {
      const errorData = await saveResponse.json();
      console.error('Failed to save cards to GitHub:', errorData);
      
      // Check if token is invalid
      if (errorData.message?.includes('Bad credentials') || errorData.message?.includes('token')) {
        localStorage.removeItem('github_token');
        console.error('GitHub token is invalid. Please set a new token.');
      }
      return false;
    }
  } catch (error) {
    console.error('Error saving to GitHub:', error);
    return false;
  }
}

export function getGitHubToken() {
  return localStorage.getItem('github_token');
}

export function setGitHubToken(token) {
  if (token) {
    localStorage.setItem('github_token', token);
  } else {
    localStorage.removeItem('github_token');
  }
}
