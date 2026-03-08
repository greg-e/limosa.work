param(
  [Parameter(Mandatory = $true)]
  [string]$ResourceGroup,

  [Parameter(Mandatory = $true)]
  [string]$Location,

  [Parameter(Mandatory = $true)]
  [string]$GitHubToken,

  [string]$WorkflowName = 'actualdeck-cards-sync',
  [string]$RepoOwner = 'greg-e',
  [string]$RepoName = 'limosa.work',
  [string]$CardsFilePath = 'assets/actual-deck/cards.json'
)

$ErrorActionPreference = 'Stop'

az group create --name $ResourceGroup --location $Location | Out-Null

az deployment group create --resource-group $ResourceGroup --template-file "infra/logicapp-cards-github.bicep" --parameters workflowName=$WorkflowName location=$Location githubToken=$GitHubToken repoOwner=$RepoOwner repoName=$RepoName cardsFilePath=$CardsFilePath

Write-Host ''
Write-Host 'Deployment complete.' -ForegroundColor Green
Write-Host 'Next step: In Azure Portal, open the Logic App, copy the HTTP trigger URL, and set it in your browser:' -ForegroundColor Yellow
Write-Host "localStorage.setItem('logic_app_url', 'https://.../triggers/manual/paths/invoke?...')"
