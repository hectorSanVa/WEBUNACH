# 🏛️ Panel de Administración - FMH UNACH

## 📋 Descripción General

Este es el panel de administración completo para el sistema de gestión de quejas, sugerencias y reconocimientos de la **Facultad de Medicina Humana "Dr. Manuel Velasco Suárez"** de la UNACH.

## 🚀 Características Implementadas

### ✅ **Módulos Completos**

1. **🔐 Sistema de Login**
   - Autenticación segura
   - Credenciales por defecto: `admin` / `admin123`
   - Redirección automática al dashboard

2. **📊 Dashboard Principal**
   - Estadísticas en tiempo real
   - Resumen de actividades
   - Gráficos de actividad reciente
   - Tabla de últimas entradas

3. **⚠️ Gestión de Quejas**
   - Lista completa de quejas
   - Filtros por estado y categoría
   - Búsqueda avanzada
   - Estadísticas rápidas
   - Modales para crear/editar

4. **💡 Gestión de Sugerencias**
   - CRUD completo de sugerencias
   - Categorización por tipo
   - Sistema de prioridades
   - Seguimiento de estados
   - Comentarios administrativos

5. **⭐ Gestión de Reconocimientos**
   - Gestión de reconocimientos
   - Categorías por tipo de personal
   - Estados de aprobación
   - Sistema de prioridades
   - Historial de cambios

6. **👥 Gestión de Usuarios**
   - Administración de usuarios del sistema
   - Roles y permisos
   - Estados de cuenta
   - Gestión de departamentos
   - Seguridad de contraseñas

7. **📈 Reportes y Estadísticas**
   - Gráficos interactivos con Chart.js
   - Filtros por período
   - Análisis de tendencias
   - Exportación de datos
   - Métricas de rendimiento

8. **⚙️ Configuración del Sistema**
   - Configuración general
   - Notificaciones por email
   - Políticas de seguridad
   - Backup y mantenimiento
   - Configuración SMTP

## 🛠️ Tecnologías Utilizadas

- **Frontend**: HTML5, CSS3, JavaScript ES6+
- **Framework CSS**: Bootstrap 5.3.3
- **Iconos**: Bootstrap Icons 1.11.3
- **Gráficos**: Chart.js
- **Tema**: AdminLTE 4
- **Fuentes**: Source Sans 3
- **Scrollbars**: OverlayScrollbars

## 📁 Estructura de Archivos

```
dist/pages/admin/
├── login.html              # Página de inicio de sesión
├── dashboard.html          # Dashboard principal
├── quejas.html            # Gestión de quejas
├── sugerencias.html       # Gestión de sugerencias
├── reconocimientos.html   # Gestión de reconocimientos
├── usuarios.html          # Gestión de usuarios
├── reportes.html          # Reportes y estadísticas
└── configuracion.html     # Configuración del sistema
```

## 🔑 Acceso al Sistema

### **Credenciales por Defecto**
- **Usuario**: `admin`
- **Contraseña**: `admin123`

### **URL de Acceso**
```
http://localhost:3000/admin.html
```

## 📱 Funcionalidades por Módulo

### **Dashboard Principal**
- Estadísticas en tiempo real
- Gráficos de actividad
- Resumen de entradas recientes
- Navegación rápida a todos los módulos

### **Gestión de Quejas**
- ✅ Crear nueva queja
- 👁️ Ver detalles completos
- ✏️ Editar información
- 🗑️ Eliminar queja
- 🔍 Búsqueda y filtros
- 📊 Estadísticas por estado

### **Gestión de Sugerencias**
- ✅ Crear nueva sugerencia
- 👁️ Ver detalles completos
- ✏️ Editar información
- 🗑️ Eliminar sugerencia
- 🔍 Búsqueda avanzada
- 📊 Estadísticas por categoría
- 🏷️ Sistema de prioridades

### **Gestión de Reconocimientos**
- ✅ Crear nuevo reconocimiento
- 👁️ Ver detalles completos
- ✏️ Editar información
- 🗑️ Eliminar reconocimiento
- 🔍 Filtros por estado y categoría
- 📊 Estadísticas por tipo
- 🏷️ Sistema de prioridades

### **Gestión de Usuarios**
- ✅ Crear nuevo usuario
- 👁️ Ver perfil completo
- ✏️ Editar información
- 🗑️ Eliminar usuario
- 🔍 Búsqueda por nombre/email
- 🔒 Gestión de roles y estados
- 📊 Estadísticas de usuarios

### **Reportes y Estadísticas**
- 📊 Gráficos interactivos
- 📅 Filtros por período
- 📈 Análisis de tendencias
- 📋 Tablas de resumen
- 💾 Exportación de datos
- 🔍 Filtros avanzados

### **Configuración del Sistema**
- ⚙️ Configuración general
- 📧 Configuración de notificaciones
- 🔒 Políticas de seguridad
- 💾 Backup y mantenimiento
- 🌐 Configuración SMTP

## 🎨 Características de Diseño

### **Colores Institucionales**
- **Azul UNACH**: `#192d63`
- **Dorado UNACH**: `#d4b012`
- **Blanco**: `#ffffff`

### **Responsive Design**
- ✅ Compatible con móviles
- ✅ Tablet-friendly
- ✅ Desktop optimizado
- ✅ Navegación táctil

### **Accesibilidad**
- ✅ Contraste adecuado
- ✅ Navegación por teclado
- ✅ Etiquetas descriptivas
- ✅ Iconos intuitivos

## 🔧 Configuración del Servidor

### **Requisitos**
- Servidor web (Apache, Nginx, o servidor local)
- Navegador moderno (Chrome, Firefox, Safari, Edge)
- JavaScript habilitado

### **Instalación Local**
1. Clona o descarga el proyecto
2. Coloca los archivos en tu servidor web
3. Accede a `admin.html`
4. Inicia sesión con las credenciales por defecto

## 📊 Datos de Ejemplo

El sistema incluye datos simulados para demostrar todas las funcionalidades:

- **Quejas**: 15 entradas de ejemplo
- **Sugerencias**: 8 entradas de ejemplo
- **Reconocimientos**: 12 entradas de ejemplo
- **Usuarios**: 4 usuarios de ejemplo
- **Estadísticas**: Datos simulados para gráficos

## 🚀 Funcionalidades Futuras

### **Próximas Implementaciones**
- [ ] Sistema de notificaciones push
- [ ] API REST para integración
- [ ] Sistema de auditoría completo
- [ ] Backup automático a la nube
- [ ] Dashboard móvil nativo
- [ ] Integración con sistemas externos

### **Mejoras Planificadas**
- [ ] Sistema de roles más granular
- [ ] Workflow de aprobación
- [ ] Reportes personalizables
- [ ] Exportación a más formatos
- [ ] Sistema de plantillas de email

## 🐛 Solución de Problemas

### **Problemas Comunes**

1. **No se puede acceder al login**
   - Verifica que el servidor esté funcionando
   - Confirma que las rutas sean correctas

2. **Los gráficos no se muestran**
   - Verifica la conexión a internet (Chart.js CDN)
   - Confirma que JavaScript esté habilitado

3. **Los modales no funcionan**
   - Verifica que Bootstrap esté cargado correctamente
   - Confirma que no haya conflictos de JavaScript

### **Logs del Sistema**
- Revisa la consola del navegador para errores
- Verifica la pestaña Network para problemas de carga
- Confirma que todos los archivos CSS/JS se carguen

## 📞 Soporte

### **Contacto Técnico**
- **Desarrollador**: Sistema de Gestión FMH UNACH
- **Email**: soporte@unach.mx
- **Teléfono**: (961) 6178000 ext. 5695

### **Documentación Adicional**
- Manual de usuario en desarrollo
- Guía de administración del sistema
- FAQ del sistema

## 📄 Licencia

Este proyecto está desarrollado para la **Facultad de Medicina Humana "Dr. Manuel Velasco Suárez"** de la UNACH.

---

**🏛️ Facultad de Medicina Humana "Dr. Manuel Velasco Suárez" - UNACH**  
**📍 Carretera Puerto Madero Km. 10.5, Finca Santa Teresa, Tapachula, Chiapas, México**  
**📞 Tel: (961) 6178000 ext. 5695**  
**🌐 www.medicina.unach.mx** 