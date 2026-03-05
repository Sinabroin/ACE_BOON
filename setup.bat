@echo off
echo [1/2] 이미지 복사 중...

set ASSETS=C:\Users\HDEC\.cursor\projects\c-Users-HDEC-Desktop-ace-good\assets
set PUBLIC=%~dp0public

if not exist "%PUBLIC%" mkdir "%PUBLIC%"

copy /Y "%ASSETS%\c__Users_HDEC_AppData_Roaming_Cursor_User_workspaceStorage_8e97106e2e01f19299653f2f4711634e_images_playground_logo_edit__3_-removebg-preview-b9549ad5-3061-4bcf-b722-9d95ac3f73de.png" "%PUBLIC%\logo.png"
copy /Y "%ASSETS%\c__Users_HDEC_AppData_Roaming_Cursor_User_workspaceStorage_8e97106e2e01f19299653f2f4711634e_images_image-3eae6ff7-a8ac-4202-ba32-fcc9528f723f.png" "%PUBLIC%\pricing-cursor.png"
copy /Y "%ASSETS%\c__Users_HDEC_AppData_Roaming_Cursor_User_workspaceStorage_8e97106e2e01f19299653f2f4711634e_images_image-9b0be5d3-c45a-4cd1-a05e-76b59177e512.png" "%PUBLIC%\pricing-genspark.png"
copy /Y "%ASSETS%\c__Users_HDEC_AppData_Roaming_Cursor_User_workspaceStorage_8e97106e2e01f19299653f2f4711634e_images_image-e19b1ac8-c51b-48f6-9680-9cbaea089af1.png" "%PUBLIC%\pricing-claude.png"
copy /Y "%ASSETS%\c__Users_HDEC_AppData_Roaming_Cursor_User_workspaceStorage_8e97106e2e01f19299653f2f4711634e_images_image-3ee7047d-b8d4-40cc-aadd-273b93482910.png" "%PUBLIC%\pricing-lovable.png"
copy /Y "%ASSETS%\c__Users_HDEC_AppData_Roaming_Cursor_User_workspaceStorage_8e97106e2e01f19299653f2f4711634e_images_image-282e6cd3-69d6-403c-b60a-32c17fb00219.png" "%PUBLIC%\pricing-n8n.png"

echo.
echo [2/2] npm 패키지 설치 중...
cd /d "%~dp0"
call npm install

echo.
echo ==========================================
echo  설치 완료!  npm run dev 로 실행하세요.
echo ==========================================
pause
