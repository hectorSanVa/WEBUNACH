# 🏛️ Área de Administración - FMH UNACH

## 📋 Descripción

El área de administración del Sistema de Buzón de Quejas, Sugerencias y Reconocimientos de la Facultad de Medicina Humana "Dr. Manuel Velasco Suárez" Campus IV, proporciona una interfaz completa para la gestión y administración de todas las entradas del sistema.

## 🚀 Características Principales

### 🔐 **Sistema de Autenticación**
- **Login seguro** con validación de credenciales
- **Sesiones persistentes** con localStorage
- **Protección de rutas** para usuarios no autenticados

### 📊 **Dashboard Administrativo**
- **Estadísticas en tiempo real** de quejas, sugerencias y reconocimientos
- **Gráficos de actividad** (simulados)
- **Tabla de últimas entradas** con acciones rápidas
- **Resumen de casos pendientes**

### 🛠️ **Gestión de Contenido**
- **CRUD completo** para quejas, sugerencias y reconocimientos
- **Filtros avanzados** por estado, fecha, prioridad
- **Búsqueda inteligente** por folio, asunto, remitente
- **Exportación de datos** a Excel

### 👥 **Gestión de Usuarios**
- **Asignación de casos** a personal específico
- **Seguimiento de responsabilidades**
- **Comentarios administrativos**

## 🔑 **Acceso al Sistema**

### **Credenciales de Prueba**
```
Usuario: admin
Contraseña: admin123
```

### **URLs de Acceso**
- **Login**: `/dist/pages/admin/login.html`
- **Dashboard**: `/dist/pages/admin/dashboard.html`
- **Gestión de Quejas**: `/dist/pages/admin/quejas.html`

## 📁 **Estructura de Archivos**

```
src/html/pages/admin/
├── login.astro              # Página de autenticación
├── dashboard.astro          # Dashboard principal
├── quejas.astro            # Gestión de quejas
├── sugerencias.astro       # Gestión de sugerencias (pendiente)
├── reconocimientos.astro   # Gestión de reconocimientos (pendiente)
├── usuarios.astro          # Gestión de usuarios (pendiente)
├── reportes.astro          # Reportes y estadísticas (pendiente)
└── configuracion.astro     # Configuración del sistema (pendiente)

src/html/components/admin/
└── _admin-sidenav.astro    # Navegación lateral del admin
```

## 🎨 **Diseño y UX**

### **Colores Institucionales**
- **Azul UNACH**: `#192D63` (fondo principal)
- **Dorado UNACH**: `#D4B012` (acentos y texto destacado)
- **Blanco**: Texto principal y fondos claros

### **Componentes de Interfaz**
- **Sidebar fijo** con navegación lateral
- **Tarjetas informativas** con estadísticas
- **Tablas responsivas** con acciones
- **Modales** para edición y visualización
- **Filtros y búsqueda** avanzada

## 🔧 **Funcionalidades Implementadas**

### ✅ **Completadas**
- [x] Sistema de login con autenticación
- [x] Dashboard con estadísticas
- [x] Gestión completa de quejas (CRUD)
- [x] Filtros y búsqueda
- [x] Modales para edición
- [x] Navegación lateral específica
- [x] Protección de rutas
- [x] Enlace desde la barra superior

### 🚧 **Pendientes**
- [ ] Gestión de sugerencias
- [ ] Gestión de reconocimientos
- [ ] Gestión de usuarios
- [ ] Reportes y estadísticas avanzadas
- [ ] Configuración del sistema
- [ ] Exportación real a Excel
- [ ] Gráficos con Chart.js
- [ ] Base de datos real

## 🛡️ **Seguridad**

### **Medidas Implementadas**
- **Validación de sesión** en cada página
- **Redirección automática** a login si no autenticado
- **Protección de rutas** del lado cliente
- **Logout seguro** con limpieza de datos

### **Recomendaciones para Producción**
- Implementar autenticación del lado servidor
- Usar HTTPS obligatorio
- Implementar rate limiting
- Agregar validación de entrada
- Usar base de datos segura
- Implementar auditoría de acciones

## 📱 **Responsividad**

El sistema es completamente responsive y funciona en:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (320px - 767px)

## 🚀 **Cómo Usar**

### **1. Múltiples Formas de Acceder al Sistema**

#### **Opción A: Comando directo (RECOMENDADO)**
```bash
npm run admin
```
Esto abrirá un servidor en `http://localhost:3001` con acceso directo al panel.

#### **Opción B: Archivo de acceso rápido**
```bash
npm run open-admin
```
O simplemente hacer doble clic en `admin.html`

#### **Opción C: Script de Windows**
Hacer doble clic en `abrir-admin.bat`

#### **Opción D: Acceso web directo**
1. Abrir en navegador: `file:///[ruta-del-proyecto]/dist/admin-index.html`
2. O navegar a: `dist/pages/admin/login.html`

#### **Opción E: Desde la página principal**
1. Navega a la página principal
2. Haz clic en "Administración" en la barra superior
3. Ingresa las credenciales: `admin` / `admin123`

### **2. Navegar por el Dashboard**
- **Dashboard**: Vista general con estadísticas
- **Gestión de Quejas**: Administrar quejas recibidas
- **Volver al Sitio**: Regresar al sitio público

### **3. Gestionar Quejas**
- **Ver**: Hacer clic en el ícono de ojo
- **Editar**: Hacer clic en el ícono de lápiz
- **Eliminar**: Hacer clic en el ícono de basura
- **Nueva Queja**: Botón "Nueva Queja"

### **4. Filtrar y Buscar**
- Usar los filtros por estado, fecha, prioridad
- Buscar por folio o asunto
- Aplicar múltiples filtros simultáneamente

## 🔄 **Compilación y Desarrollo**

### **Compilar el Proyecto**
```bash
npm run production
```

### **Modo Desarrollo**
```bash
npm run dev
```

### **Acceder a las Páginas**
Después de la compilación, las páginas estarán disponibles en:
- `/dist/pages/admin/login.html`
- `/dist/pages/admin/dashboard.html`
- `/dist/pages/admin/quejas.html`

## 📞 **Soporte**

Para soporte técnico o preguntas sobre el área de administración:
- **Desarrollador**: [Tu información de contacto]
- **Facultad**: FMH UNACH Campus IV
- **Email**: [email de contacto]

---

**© 2024 Facultad de Medicina Humana "Dr. Manuel Velasco Suárez" Campus IV - UNACH** 