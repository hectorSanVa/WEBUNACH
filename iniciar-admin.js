const express = require('express')
const path = require('path')
const { exec } = require('child_process')

const app = express()
const PORT = 3001

// Función para abrir el navegador
function openBrowser(url) {
  const { platform } = process
  let command

  switch (platform) {
    case 'win32': {
      command = `start ${url}`
      break
    }

    case 'darwin': {
      command = `open ${url}`
      break
    }

    default: {
      command = `xdg-open ${url}`
    }
  }

  exec(command, error => {
    if (error) {
      console.log('⚠️  No se pudo abrir el navegador automáticamente')
      console.log(`🌐 Por favor, abre manualmente: ${url}`)
    } else {
      console.log('✅ Navegador abierto automáticamente')
    }
  })
}

// Servir archivos estáticos
app.use('/dist', express.static(path.join(__dirname, 'dist')))
app.use('/admin-assets', express.static(path.join(__dirname, 'dist')))

// Rutas
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'admin-index.html'))
})

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'pages', 'admin', 'login.html'))
})

app.get('/admin/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'pages', 'admin', 'dashboard.html'))
})

app.get('/admin/quejas', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'pages', 'admin', 'quejas.html'))
})

// Manejar rutas de admin
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

// Iniciar servidor
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

  // Abrir navegador después de 2 segundos
  setTimeout(() => {
    console.log('🌐 Abriendo navegador automáticamente...')
    openBrowser(`http://localhost:${PORT}/admin`)
  }, 2000)
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
                body { 
                    font-family: Arial, sans-serif; 
                    text-align: center; 
                    padding: 2rem; 
                    background: linear-gradient(135deg, #192D63, #D4B012);
                    color: white;
                    min-height: 100vh;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .container { 
                    max-width: 500px; 
                    margin: 0 auto; 
                    background: rgba(255,255,255,0.1);
                    padding: 2rem;
                    border-radius: 10px;
                }
                h1 { color: #D4B012; }
                a { 
                    color: #D4B012; 
                    text-decoration: none; 
                    background: white;
                    padding: 10px 20px;
                    border-radius: 5px;
                    margin: 10px;
                    display: inline-block;
                }
                a:hover {
                    background: #f0f0f0;
                }
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

// Manejar cierre del servidor
process.on('SIGINT', () => {
  console.log('\n🛑 Cerrando servidor...')
  process.exit(0)
})

