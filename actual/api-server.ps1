# Simple PowerShell HTTP server for cards API
$port = 3001
$listener = New-Object System.Net.HttpListener
$listener.Prefixes.Add("http://localhost:$port/")
$listener.Start()

Write-Host "Cards API Server listening on http://localhost:$port"
Write-Host "Accepting POST requests to /api/cards/save"

while ($listener.IsListening) {
    try {
        $context = $listener.GetContext()
        $request = $context.Request
        $response = $context.Response

        # Enable CORS
        $response.Headers.Add("Access-Control-Allow-Origin", "*")
        $response.Headers.Add("Access-Control-Allow-Methods", "POST, OPTIONS")
        $response.Headers.Add("Access-Control-Allow-Headers", "Content-Type")

        # Handle preflight CORS requests
        if ($request.HttpMethod -eq "OPTIONS") {
            $response.StatusCode = 200
            $response.Close()
            continue
        }

        # Handle POST requests
        if ($request.HttpMethod -eq "POST" -and $request.Url.AbsolutePath -eq "/api/cards/save") {
            try {
                # Read request body
                $reader = New-Object System.IO.StreamReader($request.InputStream)
                $body = $reader.ReadToEnd()
                $reader.Close()

                # Parse JSON
                $data = $body | ConvertFrom-Json
                $cards = $data.cards

                # Validate
                if ($null -eq $cards) {
                    throw "Cards array is required"
                }

                # Save to file
                $cardsPath = "C:\Users\GregEhrenberg\limosa.work\assets\actual-deck\cards.json"
                $json = $cards | ConvertTo-Json -Depth 10
                Set-Content -Path $cardsPath -Value $json -Encoding UTF8

                # Send success response
                $responseBody = @"
{"success":true,"message":"Saved $($cards.Count) cards","cardsCount":$($cards.Count)}
"@
                $response.ContentType = "application/json"
                $response.StatusCode = 200
                $response.ContentEncoding = [System.Text.Encoding]::UTF8
                $buffer = [System.Text.Encoding]::UTF8.GetBytes($responseBody)
                $response.OutputStream.Write($buffer, 0, $buffer.Length)

                Write-Host "Saved $($cards.Count) cards at $(Get-Date -Format 'HH:mm:ss')"
            }
            catch {
                $errorMsg = $_.Exception.Message
                Write-Host "Error: $errorMsg" -ForegroundColor Red

                $responseBody = @"
{"error":"Failed to save cards","details":"$errorMsg"}
"@
                $response.ContentType = "application/json"
                $response.StatusCode = 500
                $buffer = [System.Text.Encoding]::UTF8.GetBytes($responseBody)
                $response.OutputStream.Write($buffer, 0, $buffer.Length)
            }
            finally {
                $response.Close()
            }
        }
        else {
            # Unknown endpoint
            $response.StatusCode = 404
            $response.Close()
        }
    }
    catch {
        Write-Host "Error handling request: $($_.Exception.Message)" -ForegroundColor Red
    }
}

$listener.Stop()
