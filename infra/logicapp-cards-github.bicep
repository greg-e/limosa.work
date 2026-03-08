param workflowName string = 'actualdeck-cards-sync'
param location string = resourceGroup().location
@secure()
param githubToken string
param repoOwner string = 'greg-e'
param repoName string = 'limosa.work'
param cardsFilePath string = 'assets/actual-deck/cards.json'

resource workflow 'Microsoft.Logic/workflows@2019-05-01' = {
  name: workflowName
  location: location
  properties: {
    state: 'Enabled'
    parameters: {
      githubToken: {
        value: githubToken
      }
      repoOwner: {
        value: repoOwner
      }
      repoName: {
        value: repoName
      }
      cardsFilePath: {
        value: cardsFilePath
      }
    }
    definition: {
      '$schema': 'https://schema.management.azure.com/providers/Microsoft.Logic/schemas/2016-06-01/workflowdefinition.json#'
      contentVersion: '1.0.0.0'
      parameters: {
        githubToken: {
          type: 'SecureString'
        }
        repoOwner: {
          type: 'String'
        }
        repoName: {
          type: 'String'
        }
        cardsFilePath: {
          type: 'String'
        }
      }
      triggers: {
        manual: {
          type: 'Request'
          kind: 'Http'
          inputs: {
            schema: {
              type: 'object'
              properties: {
                cards: {
                  type: 'array'
                }
                commitMessage: {
                  type: 'string'
                }
              }
              required: [
                'cards'
              ]
            }
          }
        }
      }
      actions: {
        Get_Current_Cards: {
          type: 'Http'
          runAfter: {}
          inputs: {
            method: 'GET'
            uri: "@{concat('https://api.github.com/repos/', parameters('repoOwner'), '/', parameters('repoName'), '/contents/', parameters('cardsFilePath'))}"
            headers: {
              Authorization: "@{concat('Bearer ', parameters('githubToken'))}"
              Accept: 'application/vnd.github+json'
              'X-GitHub-Api-Version': '2022-11-28'
              'User-Agent': 'actual-deck-logic-app'
            }
          }
        }
        Upsert_Cards_File: {
          type: 'Http'
          runAfter: {
            Get_Current_Cards: [
              'Succeeded'
              'Failed'
            ]
          }
          inputs: {
            method: 'PUT'
            uri: "@{concat('https://api.github.com/repos/', parameters('repoOwner'), '/', parameters('repoName'), '/contents/', parameters('cardsFilePath'))}"
            headers: {
              Authorization: "@{concat('Bearer ', parameters('githubToken'))}"
              Accept: 'application/vnd.github+json'
              'X-GitHub-Api-Version': '2022-11-28'
              'User-Agent': 'actual-deck-logic-app'
              'Content-Type': 'application/json'
            }
            body: {
              message: "@{coalesce(triggerBody()?['commitMessage'], 'Update cards via Actual Deck Logic App')}"
              content: "@{base64(string(triggerBody()?['cards']))}"
              sha: "@{if(equals(actions('Get_Current_Cards').status, 'Succeeded'), body('Get_Current_Cards')?['sha'], null)}"
              committer: {
                name: 'Actual Deck Logic App'
                email: 'noreply@actualdeck.local'
              }
            }
          }
        }
        Return_Result: {
          type: 'Response'
          runAfter: {
            Upsert_Cards_File: [
              'Succeeded'
              'Failed'
            ]
          }
          inputs: {
            statusCode: "@{if(equals(actions('Upsert_Cards_File').status, 'Succeeded'), 200, 500)}"
            body: {
              success: "@{equals(actions('Upsert_Cards_File').status, 'Succeeded')}"
              upsertStatus: "@{actions('Upsert_Cards_File').status}"
              githubStatusCode: "@{outputs('Upsert_Cards_File')?['statusCode']}"
              githubBody: "@{outputs('Upsert_Cards_File')?['body']}"
            }
          }
        }
      }
      outputs: {}
    }
  }
}

output workflowResourceId string = workflow.id
output workflowNameOut string = workflow.name
