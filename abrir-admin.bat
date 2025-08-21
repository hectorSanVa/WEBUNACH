@echo off
echo =====================================
echo    PANEL DE ADMINISTRACION FMH UNACH
echo =====================================
echo.
echo Iniciando servidor y abriendo navegador...
echo.
echo Credenciales de acceso:
echo Usuario: admin
echo Contraseña: admin123
echo.
echo =====================================

REM Intentar puerto 3001 primero
echo Intentando puerto 3001...
start /B node iniciar-admin.js

REM Esperar un momento para que el servidor inicie
timeout /t 3 /nobreak >nul

REM Verificar si el puerto 3001 está funcionando
curl -s http://localhost:3001/admin >nul 2>&1
if %errorlevel% equ 0 (
    echo ✅ Servidor iniciado en puerto 3001
    start "" "http://localhost:3001/admin"
) else (
    echo ⚠️ Puerto 3001 ocupado, intentando puerto 3002...
    taskkill /f /im node.exe >nul 2>&1
    timeout /t 2 /nobreak >nul
    start /B node iniciar-admin-puerto3002.js
    timeout /t 3 /nobreak >nul
    start "" "http://localhost:3002/admin"
    echo ✅ Servidor iniciado en puerto 3002
)

echo.
echo 🔐 Panel de Admin disponible
echo.
echo Para detener el servidor, cierra esta ventana o presiona Ctrl+C
echo.
pause
