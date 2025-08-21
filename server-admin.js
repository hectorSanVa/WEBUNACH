const express = require('express')
const path = require('path')
const app = express()
const PORT = 3001

// Función para abrir el navegador automáticamente
function openBrowser() {
  const url = `http://localhost:${PORT}/admin`
  const start = process.platform === 'darwin' ? 'open' : (process.platform === 'win32' ? 'start' : 'xdg-open')
  require('child_process').exec(`${start} ${url}`)
}

// Servir archivos estáticos desde el directorio dist
app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/admin-assets', express.static(path.join(__dirname, 'dist')))

// Ruta principal del admin
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'admin-index.html'))
})

// Ruta específica para el admin
app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'pages', 'admin', 'login.html'))
})

// Ruta para el dashboard
app.get('/admin/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'pages', 'admin', 'dashboard.html'))
})

// Ruta para la gestión de quejas
app.get('/admin/quejas', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'pages', 'admin', 'quejas.html'))
})

// Manejar todas las rutas de admin
app.get('/admin/*', (req, res) => {
  const fileName = path.basename(req.path) + '.html'
  const filePath = path.join(__dirname, 'dist', 'pages', 'admin', fileName)
  res.sendFile(filePath, err => {
    if (err) {
      res.status(404).send(`
                <h1>404 - Página no encontrada</h1>
                <p>La página admin${req.path} no existe.</p>
                <a href="/admin">Ir al Login de Administración</a>
            `)
    }
  })
})

app.listen(PORT, () => {
  console.log('🏛️  SERVIDOR DE ADMINISTRACIÓN FMH UNACH')
  console.log('=========================================')
  console.log(`✅ Servidor corriendo en: http://localhost:${PORT}`)
  console.log(`🔐 Panel de Admin: http://localhost:${PORT}/admin`)
  console.log(`📊 Dashboard: http://localhost:${PORT}/admin/dashboard`)
  console.log(`📋 Gestión de Quejas: http://localhost:${PORT}/admin/quejas`)
  console.log('=========================================')
  console.log('Credenciales: admin / admin123')
  console.log('=========================================')
  console.log('🌐 Abriendo navegador automáticamente...')

  // Abrir navegador después de 1 segundo
  setTimeout(() => {
    openBrowser()
  }, 1000)
})

// Manejar errores
app.use((err, req, res, _next) => {
  console.error('Error:', err)
  res.status(500).send('Error interno del servidor')
})

// Manejar rutas no encontradas
app.use((req, res) => {
  res.status(404).send(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>404 - Página no encontrada</title>
            <style>
                body { font-family: Arial, sans-serif; text-align: center; padding: 2rem; }
                .container { max-width: 500px; margin: 0 auto; }
                h1 { color: #192D63; }
                a { color: #D4B012; text-decoration: none; }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>404 - Página no encontrada</h1>
                <p>La página que buscas no existe.</p>
                <a href="/admin">🔐 Ir al Panel de Administración</a><br><br>
                <a href="/dist/pages/index.html">🏠 Ir al Sitio Principal</a>
            </div>
        </body>
        </html>
    `)
})
