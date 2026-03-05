$assetsBase = "C:\Users\HDEC\.cursor\projects\c-Users-HDEC-Desktop-ace-good\assets"
$publicDir  = "C:\Users\HDEC\Desktop\ace_good\public"

New-Item -ItemType Directory -Force -Path $publicDir | Out-Null

$map = @{
  "c__Users_HDEC_AppData_Roaming_Cursor_User_workspaceStorage_8e97106e2e01f19299653f2f4711634e_images_playground_logo_edit__3_-removebg-preview-b9549ad5-3061-4bcf-b722-9d95ac3f73de.png" = "logo.png"
  "c__Users_HDEC_AppData_Roaming_Cursor_User_workspaceStorage_8e97106e2e01f19299653f2f4711634e_images_image-3eae6ff7-a8ac-4202-ba32-fcc9528f723f.png" = "pricing-cursor.png"
  "c__Users_HDEC_AppData_Roaming_Cursor_User_workspaceStorage_8e97106e2e01f19299653f2f4711634e_images_image-9b0be5d3-c45a-4cd1-a05e-76b59177e512.png" = "pricing-genspark.png"
  "c__Users_HDEC_AppData_Roaming_Cursor_User_workspaceStorage_8e97106e2e01f19299653f2f4711634e_images_image-e19b1ac8-c51b-48f6-9680-9cbaea089af1.png" = "pricing-claude.png"
  "c__Users_HDEC_AppData_Roaming_Cursor_User_workspaceStorage_8e97106e2e01f19299653f2f4711634e_images_image-3ee7047d-b8d4-40cc-aadd-273b93482910.png" = "pricing-lovable.png"
  "c__Users_HDEC_AppData_Roaming_Cursor_User_workspaceStorage_8e97106e2e01f19299653f2f4711634e_images_image-282e6cd3-69d6-403c-b60a-32c17fb00219.png" = "pricing-n8n.png"
}

foreach ($src in $map.Keys) {
  $srcPath  = Join-Path $assetsBase $src
  $destPath = Join-Path $publicDir $map[$src]
  if (Test-Path $srcPath) {
    Copy-Item $srcPath $destPath -Force
    Write-Host "OK: $($map[$src])"
  } else {
    Write-Host "MISSING: $srcPath"
  }
}
