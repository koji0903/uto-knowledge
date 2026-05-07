Set-Location (Split-Path -Parent $PSScriptRoot)

$Ai = ""
$Task = ""
$HandoffOut = ""

for ($i = 0; $i -lt $args.Count; $i++) {
  switch ($args[$i]) {
    "--ai" {
      $i++
      $Ai = if ($i -lt $args.Count) { $args[$i] } else { "" }
    }
    "--task" {
      $i++
      $Task = if ($i -lt $args.Count) { $args[$i] } else { "" }
    }
    "--handoff-out" {
      $i++
      $HandoffOut = if ($i -lt $args.Count) { $args[$i] } else { "" }
    }
    "-h" {
      Write-Output "usage: powershell -ExecutionPolicy Bypass -File .\scripts\start_work.ps1 [--ai claude|gemini|chatgpt|codex --task ""依頼内容""]"
      exit 0
    }
    "--help" {
      Write-Output "usage: powershell -ExecutionPolicy Bypass -File .\scripts\start_work.ps1 [--ai claude|gemini|chatgpt|codex --task ""依頼内容""]"
      exit 0
    }
    default {
      Write-Error "unknown argument: $($args[$i])"
      exit 1
    }
  }
}

if ((($Ai -ne "") -and ($Task -eq "")) -or (($Ai -eq "") -and ($Task -ne ""))) {
  Write-Error "--ai and --task must be provided together"
  exit 1
}

Write-Output "== git status =="
git status --short --branch --ignored

Write-Output ""
Write-Output "== generate AI context =="
powershell -ExecutionPolicy Bypass -File ".\scripts\generate_ai_context.ps1"

if ($Ai -ne "") {
  Write-Output ""
  Write-Output "== generate AI handoff =="
  if ($HandoffOut -ne "") {
    powershell -ExecutionPolicy Bypass -File ".\scripts\generate_handoff_prompt.ps1" --ai $Ai --task $Task --out $HandoffOut
  } else {
    powershell -ExecutionPolicy Bypass -File ".\scripts\generate_handoff_prompt.ps1" --ai $Ai --task $Task
  }
}

Write-Output ""
Write-Output "== local maintenance =="
powershell -ExecutionPolicy Bypass -File ".\scripts\maintenance_check.ps1" local

Write-Output ""
Write-Output "start work completed"
Write-Output "next: read tmp/ai_context.md and AGENTS.md"
if ($Ai -ne "") {
  Write-Output "next: share the generated handoff prompt with $Ai"
} else {
  Write-Output "next: generate handoff with: powershell -ExecutionPolicy Bypass -File .\scripts\start_work.ps1 --ai claude --task ""依頼内容"""
}
