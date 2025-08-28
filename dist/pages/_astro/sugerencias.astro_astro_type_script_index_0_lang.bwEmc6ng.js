localStorage.getItem("adminLoggedIn")||(window.location.href="login.html");let a=[{id:1,folio:"SG-2024-001",fecha:"2024-01-20",remitente:"María López",email:"maria.lopez@email.com",asunto:"Mejora en la biblioteca",descripcion:"Sugiero implementar un sistema de reservas online para los libros más solicitados.",estado:"pendiente",prioridad:"media",categoria:"servicios",comentarios:""},{id:2,folio:"SG-2024-002",fecha:"2024-01-19",remitente:"Carlos Ruiz",email:"carlos.ruiz@email.com",asunto:"Nuevos horarios de consulta",descripcion:"Sería conveniente extender el horario de consulta hasta las 8 PM para estudiantes que trabajan.",estado:"en_revision",prioridad:"alta",categoria:"academico",comentarios:"En revisión por el comité académico"},{id:3,folio:"SG-2024-003",fecha:"2024-01-18",remitente:"Ana Martínez",email:"ana.martinez@email.com",asunto:"App móvil para estudiantes",descripcion:"Desarrollar una aplicación móvil para consultar horarios, calificaciones y trámites.",estado:"aprobada",prioridad:"alta",categoria:"tecnologia",comentarios:"Aprobada para desarrollo en Q2 2024"}];document.addEventListener("DOMContentLoaded",function(){d(),r(),m()});function d(){const n=a.length,e=a.filter(o=>o.estado==="pendiente").length,t=a.filter(o=>o.estado==="en_revision").length,i=a.filter(o=>o.estado==="implementada").length;document.getElementById("totalSugerencias").textContent=n,document.getElementById("pendientes").textContent=e,document.getElementById("enRevision").textContent=t,document.getElementById("implementadas").textContent=i}function r(){const n=document.getElementById("sugerenciasTableBody");n.innerHTML="",a.forEach(e=>{const t=document.createElement("tr");t.innerHTML=`
            <td>${e.folio}</td>
            <td>${e.fecha}</td>
            <td>${e.remitente}</td>
            <td>${e.asunto}</td>
            <td>${e.descripcion.substring(0,50)}...</td>
            <td><span class="badge ${s(e.estado)}">${c(e.estado)}</span></td>
            <td><span class="badge ${l(e.prioridad)}">${e.prioridad}</span></td>
            <td>
              <button class="btn btn-sm btn-primary" onclick="verSugerencia(${e.id})">
                <i class="bi bi-eye"></i>
              </button>
              <button class="btn btn-sm btn-warning" onclick="editarSugerencia(${e.id})">
                <i class="bi bi-pencil"></i>
              </button>
              <button class="btn btn-sm btn-danger" onclick="eliminarSugerencia(${e.id})">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          `,n.appendChild(t)})}function s(n){return{pendiente:"bg-warning",en_revision:"bg-info",aprobada:"bg-success",implementada:"bg-primary",rechazada:"bg-danger"}[n]||"bg-secondary"}function c(n){return{pendiente:"Pendiente",en_revision:"En Revisión",aprobada:"Aprobada",implementada:"Implementada",rechazada:"Rechazada"}[n]||n}function l(n){return{baja:"bg-success",media:"bg-warning",alta:"bg-danger"}[n]||"bg-secondary"}function m(){document.getElementById("searchBtn").addEventListener("click",function(){const n=document.getElementById("searchInput").value.toLowerCase(),e=a.filter(t=>t.asunto.toLowerCase().includes(n)||t.remitente.toLowerCase().includes(n)||t.descripcion.toLowerCase().includes(n));u(e)}),document.getElementById("saveSugerenciaBtn").addEventListener("click",function(){g()}),document.getElementById("updateSugerenciaBtn").addEventListener("click",function(){b()})}function u(n){const e=document.getElementById("sugerenciasTableBody");e.innerHTML="",n.forEach(t=>{const i=document.createElement("tr");i.innerHTML=`
            <td>${t.folio}</td>
            <td>${t.fecha}</td>
            <td>${t.remitente}</td>
            <td>${t.asunto}</td>
            <td>${t.descripcion.substring(0,50)}...</td>
            <td><span class="badge ${s(t.estado)}">${c(t.estado)}</span></td>
            <td><span class="badge ${l(t.prioridad)}">${t.prioridad}</span></td>
            <td>
              <button class="btn btn-sm btn-primary" onclick="verSugerencia(${t.id})">
                <i class="bi bi-eye"></i>
              </button>
              <button class="btn btn-sm btn-warning" onclick="editarSugerencia(${t.id})">
                <i class="bi bi-pencil"></i>
              </button>
              <button class="btn btn-sm btn-danger" onclick="eliminarSugerencia(${t.id})">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          `,e.appendChild(i)})}function g(){const n=document.getElementById("sugerenciaForm"),e=new FormData(n),t={id:a.length+1,folio:`SG-2024-${String(a.length+1).padStart(3,"0")}`,fecha:new Date().toISOString().split("T")[0],remitente:e.get("remitente"),email:e.get("email"),asunto:e.get("asunto"),descripcion:e.get("descripcion"),estado:"pendiente",prioridad:e.get("prioridad"),categoria:e.get("categoria"),comentarios:""};a.push(t),d(),r(),bootstrap.Modal.getInstance(document.getElementById("addSugerenciaModal")).hide(),n.reset(),alert("Sugerencia guardada exitosamente")}function b(){const n=document.getElementById("editSugerenciaForm"),e=new FormData(n),t=parseInt(e.get("id")),i=a.findIndex(o=>o.id===t);i!==-1&&(a[i]={...a[i],remitente:e.get("remitente"),asunto:e.get("asunto"),descripcion:e.get("descripcion"),estado:e.get("estado"),comentarios:e.get("comentarios")},d(),r(),bootstrap.Modal.getInstance(document.getElementById("editSugerenciaModal")).hide(),alert("Sugerencia actualizada exitosamente"))}
