# 🎯 **INSTRUCCIONES PARA ACCEDER AL ÁREA DE ADMINISTRACIÓN**

## 🚀 **OPCIONES DE ACCESO (Ordena por facilidad)**

### **1. 🥇 OPCIÓN MÁS FÁCIL - Comando NPM**
```bash
npm run admin
```
- ✅ **Más rápido y confiable**
- ✅ **Abre servidor en puerto 3001**
- ✅ **Rutas cortas**: `http://localhost:3001/admin`
- ✅ **Sin problemas de archivos estáticos**

**URLs disponibles:**
- `http://localhost:3001/admin` - Login
- `http://localhost:3001/admin/dashboard` - Dashboard
- `http://localhost:3001/admin/quejas` - Gestión de Quejas
- `http://localhost:3001/sitio` - Sitio Principal

---

### **2. 🥈 OPCIÓN ALTERNATIVA - Archivo HTML**
**Hacer doble clic en:** `admin.html`
- ✅ **No requiere comandos**
- ✅ **Redirección automática**
- ⚠️ **Puede tener problemas con rutas de archivos**

---

### **3. 🥉 OPCIÓN WINDOWS - Script BAT**
**Hacer doble clic en:** `abrir-admin.bat`
- ✅ **Específico para Windows**
- ✅ **Muestra credenciales**
- ⚠️ **Solo funciona en Windows**

---

### **4. 🔧 OPCIÓN MANUAL - Acceso directo**
**Navegar a:** `dist/admin-index.html`
- ✅ **Control total**
- ⚠️ **Requiere navegación manual**

---

### **5. 🌐 OPCIÓN WEB - Desde sitio principal**
1. Abrir `dist/pages/index.html`
2. Clic en "Administración" (barra superior)
3. Login con credenciales

---

## 🔑 **CREDENCIALES DE ACCESO**
```
Usuario: admin
Contraseña: admin123
```

## 🎯 **RECOMENDACIÓN**

**Para desarrollo:** Usar `npm run admin`
**Para pruebas rápidas:** Hacer doble clic en `admin.html`
**Para producción:** Configurar servidor web apropiado

## 🚨 **SOLUCIÓN A PROBLEMAS COMUNES**

### **Error 404 - Not Found**
1. Ejecutar: `npm run production` (para recompilar)
2. Luego: `npm run admin`

### **Archivos no cargan**
- Usar `npm run admin` en lugar de abrir archivos directamente
- El servidor Express resuelve rutas correctamente

### **Puerto ocupado**
- Cambiar puerto en `server-admin.js` línea: `const PORT = 3001;`
- O cerrar otros procesos en el puerto 3001

## 📁 **ESTRUCTURA DE ARCHIVOS**
```
ProjectUnach/
├── admin.html              # Página de acceso rápido
├── abrir-admin.bat         # Script de Windows
├── server-admin.js         # Servidor Express
├── dist/
│   ├── admin-index.html    # Página principal admin
│   └── pages/admin/        # Páginas del admin
│       ├── login.html      # ✅ Login
│       ├── dashboard.html  # ✅ Dashboard
│       └── quejas.html     # ✅ Gestión quejas
│       └── (reconocimientos eliminado) # ❌ Eliminado
└── src/html/pages/admin/   # Código fuente
```

## ⚡ **COMANDOS ÚTILES**
```bash
# Compilar y abrir admin
npm run admin-dev

# Solo compilar
npm run production

# Solo servidor admin
npm run admin

# Acceso rápido (Windows)
npm run open-admin
```

---

**🏛️ Sistema desarrollado para FMH UNACH Campus IV**
**© 2024 Facultad de Medicina Humana "Dr. Manuel Velasco Suárez"**


