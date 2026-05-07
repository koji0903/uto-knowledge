Set-Location (Split-Path -Parent $PSScriptRoot)

$Ai = ""
$Task = ""
$HandoffOut = ""
$ConflictReport = "tmp/ai_conflict_report.md"

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
    "--conflict-report" {
      $i++
      $ConflictReport = if ($i -lt $args.Count) { $args[$i] } else { "" }
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
git -c core.quotePath=false status --short --branch --ignored

Write-Output ""
Write-Output "== generate AI context =="
powershell -ExecutionPolicy Bypass -File ".\scripts\generate_ai_context.ps1"

Write-Output ""
Write-Output "== detect AI conflicts =="
powershell -ExecutionPolicy Bypass -File ".\scripts\detect_ai_conflicts.ps1" --out $ConflictReport

if ($Ai -ne "") {
  Write-Output ""
  Write-Output "== generate AI handoff =="
  if ($HandoffOut -ne "") {
    powershell -ExecutionPolicy Bypass -File ".\scripts\generate_handoff_prompt.ps1" --ai $Ai --task $Task --out $HandoffOut --conflict-report $ConflictReport
  } else {
    powershell -ExecutionPolicy Bypass -File ".\scripts\generate_handoff_prompt.ps1" --ai $Ai --task $Task --conflict-report $ConflictReport
  }
}

Write-Output ""
Write-Output "== local maintenance =="
powershell -ExecutionPolicy Bypass -File ".\scripts\maintenance_check.ps1" local

Write-Output ""
Write-Output "start work completed"
Write-Output "next: read tmp/ai_context.md, tmp/ai_conflict_report.md, and AGENTS.md"
if ($Ai -ne "") {
  Write-Output "next: share the generated handoff prompt with $Ai"
} else {
  Write-Output "next: generate handoff with: powershell -ExecutionPolicy Bypass -File .\scripts\start_work.ps1 --ai claude --task ""依頼内容"""
}
