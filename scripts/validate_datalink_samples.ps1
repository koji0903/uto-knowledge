Set-Location (Split-Path -Parent $PSScriptRoot)

$samples = @(
  @{ File = "04_DataLink/producers/sample_prodcr_001.md"; Type = "producer"; Collection = "producers"; Id = "prodcr_001" },
  @{ File = "04_DataLink/products/sample_prod_001.md"; Type = "product"; Collection = "products"; Id = "prod_001" },
  @{ File = "04_DataLink/projects/sample_prj_001.md"; Type = "project"; Collection = "projects"; Id = "prj_001" },
  @{ File = "04_DataLink/logs/sample_log_20260503_001.md"; Type = "log"; Collection = "logs"; Id = "log_20260503_001" }
)

$checked = 0

foreach ($sample in $samples) {
  if (-not (Test-Path -Path $sample.File -PathType Leaf)) {
    continue
  }

  $checked += 1
  $content = Get-Content $sample.File

  if (-not ($content -contains "id: $($sample.Id)")) {
    Write-Error "invalid id in $($sample.File)"
    exit 1
  }

  if (-not ($content -contains "type: $($sample.Type)")) {
    Write-Error "invalid type in $($sample.File)"
    exit 1
  }

  if ($sample.Type -ne "log" -and -not ($content -contains "firestore_collection: $($sample.Collection)")) {
    Write-Error "invalid collection in $($sample.File)"
    exit 1
  }

  if (-not ($content -contains "firestore_doc_id: $($sample.Id)")) {
    Write-Error "invalid firestore_doc_id in $($sample.File)"
    exit 1
  }
}

Write-Output "datalink sample validation passed: $checked sample files checked"
