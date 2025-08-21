# 🚀 **ACCESO RÁPIDO AL ÁREA DE ADMINISTRACIÓN**

## 🎯 **OPCIONES DE ACCESO (Ordenadas por facilidad)**

### **🥇 OPCIÓN 1: Comando Automático (RECOMENDADO)**
```bash
npm run admin-auto
```
- ✅ **Abre navegador automáticamente**
- ✅ **Inicia servidor automáticamente**
- ✅ **Sin configuración adicional**

### **🥇 OPCIÓN 1B: Puerto Alternativo (Si 3001 está ocupado)**
```bash
npm run admin-alt
```
- ✅ **Usa puerto 3002**
- ✅ **Evita conflictos de puertos**
- ✅ **Misma funcionalidad**

### **🥈 OPCIÓN 2: Script de Windows**
**Hacer doble clic en:** `abrir-admin.bat`
- ✅ **No requiere comandos**
- ✅ **Inicia servidor y abre navegador**
- ✅ **Específico para Windows**

### **🥉 OPCIÓN 3: Comando Manual**
```bash
npm run admin
```
- ✅ **Inicia servidor**
- ⚠️ **Requiere abrir navegador manualmente**
- ⚠️ **Ir a:** `http://localhost:3001/admin`

### **🔧 OPCIÓN 4: Acceso Directo**
**Abrir en navegador:** `http://localhost:3001/admin`
- ⚠️ **Requiere que el servidor esté corriendo**
- ⚠️ **Requiere navegación manual**

---

## 🔑 **CREDENCIALES DE ACCESO**
```
Usuario: admin
Contraseña: admin123
```

---

## 🎯 **URLs IMPORTANTES**

### **Panel de Administración:**
- **Login:** `http://localhost:3001/admin`
- **Dashboard:** `http://localhost:3001/admin/dashboard`
- **Gestión de Quejas:** `http://localhost:3001/admin/quejas`

### **Página Principal:**
- **Admin Index:** `http://localhost:3001/`
- **Sitio Principal:** `http://localhost:3001/dist/pages/index.html`

---

## ⚡ **COMANDOS ÚTILES**

```bash
# Acceso automático (RECOMENDADO)
npm run admin-auto

# Servidor manual
npm run admin

# Compilar y abrir
npm run admin-dev

# Solo abrir navegador (si servidor está corriendo)
npm run admin-browser
```

---

## 🚨 **SOLUCIÓN A PROBLEMAS**

### **Puerto ocupado (Error EADDRINUSE)**
1. **Opción A:** Usar puerto alternativo: `npm run admin-alt`
2. **Opción B:** Cerrar procesos: `taskkill /f /im node.exe`
3. **Opción C:** Cambiar puerto en `iniciar-admin.js` línea 6

### **Navegador no se abre automáticamente**
1. Abrir manualmente: `http://localhost:3001/admin`
2. O usar: `npm run admin-browser`

### **Archivos no cargan**
1. Ejecutar: `npm run production`
2. Luego: `npm run admin-auto`

---

## 📁 **ARCHIVOS IMPORTANTES**

```
ProjectUnach/
├── iniciar-admin.js      # 🚀 Script automático
├── abrir-admin.bat       # 🪟 Script Windows
├── server-admin.js       # 🔧 Servidor original
├── admin.html           # 🌐 Página de acceso
└── dist/
    ├── admin-index.html  # 🏠 Página principal admin
    └── pages/admin/      # 📁 Páginas del admin
```

---

## 🎉 **¡LISTO PARA USAR!**

**Para empezar inmediatamente:**
1. Ejecutar: `npm run admin-auto`
2. Esperar 2 segundos
3. El navegador se abrirá automáticamente
4. Ingresar credenciales: `admin` / `admin123`

---

**🏛️ Sistema desarrollado para FMH UNACH Campus IV**
**© 2024 Facultad de Medicina Humana "Dr. Manuel Velasco Suárez"**
