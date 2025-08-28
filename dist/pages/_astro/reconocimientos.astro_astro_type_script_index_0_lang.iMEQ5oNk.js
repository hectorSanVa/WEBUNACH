localStorage.getItem("adminLoggedIn")||(window.location.href="login.html");let o=[{id:1,folio:"RC-2024-001",fecha:"2024-01-20",remitente:"Carlos Ruiz",email:"carlos.ruiz@email.com",personaReconocida:"Dr. Manuel García",cargo:"Profesor Titular",motivo:"Excelente atención y dedicación en la enseñanza de anatomía, siempre disponible para resolver dudas de los estudiantes.",categoria:"excelencia_academica",estado:"pendiente",prioridad:"alta",comentarios:"",fechaAprobacion:""},{id:2,folio:"RC-2024-002",fecha:"2024-01-19",remitente:"María López",email:"maria.lopez@email.com",personaReconocida:"Lic. Ana Martínez",cargo:"Coordinadora de Servicios Estudiantiles",motivo:"Increíble compromiso con el bienestar estudiantil, organizando actividades extracurriculares que enriquecen la experiencia universitaria.",categoria:"servicio_dedicado",estado:"aprobado",prioridad:"media",comentarios:"Reconocimiento aprobado por el comité de excelencia",fechaAprobacion:"2024-01-25"},{id:3,folio:"RC-2024-003",fecha:"2024-01-18",remitente:"Roberto Silva",email:"roberto.silva@email.com",personaReconocida:"Dr. Patricia Hernández",cargo:"Directora de Investigación",motivo:"Liderazgo excepcional en proyectos de investigación que han posicionado a la facultad a nivel nacional.",categoria:"liderazgo",estado:"publicado",prioridad:"alta",comentarios:"Publicado en el boletín institucional",fechaAprobacion:"2024-01-30"}];document.addEventListener("DOMContentLoaded",function(){c(),d(),b()});function c(){const a=o.length,e=o.filter(i=>i.estado==="pendiente").length,t=o.filter(i=>i.estado==="aprobado").length,n=o.filter(i=>i.estado==="publicado").length;document.getElementById("totalReconocimientos").textContent=a,document.getElementById("pendientes").textContent=e,document.getElementById("aprobados").textContent=t,document.getElementById("publicados").textContent=n}function d(){const a=document.getElementById("reconocimientosTableBody");a.innerHTML="",o.forEach(e=>{const t=document.createElement("tr");t.innerHTML=`
            <td>${e.folio}</td>
            <td>${e.fecha}</td>
            <td>${e.remitente}</td>
            <td>${e.personaReconocida}</td>
            <td>${e.motivo.substring(0,60)}...</td>
            <td><span class="badge ${r(e.estado)}">${l(e.estado)}</span></td>
            <td><span class="badge ${m(e.prioridad)}">${e.prioridad}</span></td>
            <td>
              <button class="btn btn-sm btn-primary" onclick="verReconocimiento(${e.id})">
                <i class="bi bi-eye"></i>
              </button>
              <button class="btn btn-sm btn-warning" onclick="editarReconocimiento(${e.id})">
                <i class="bi bi-pencil"></i>
              </button>
              <button class="btn btn-sm btn-danger" onclick="eliminarReconocimiento(${e.id})">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          `,a.appendChild(t)})}function r(a){return{pendiente:"bg-info",aprobado:"bg-success",publicado:"bg-primary",rechazado:"bg-danger"}[a]||"bg-secondary"}function l(a){return{pendiente:"Pendiente",aprobado:"Aprobado",publicado:"Publicado",rechazado:"Rechazado"}[a]||a}function m(a){return{baja:"bg-success",media:"bg-warning",alta:"bg-danger"}[a]||"bg-secondary"}function b(){document.getElementById("searchBtn").addEventListener("click",function(){const a=document.getElementById("searchInput").value.toLowerCase(),e=o.filter(t=>t.personaReconocida.toLowerCase().includes(a)||t.remitente.toLowerCase().includes(a)||t.motivo.toLowerCase().includes(a));s(e)}),document.getElementById("filterEstado").addEventListener("change",function(){const a=this.value;if(a){const e=o.filter(t=>t.estado===a);s(e)}else d()}),document.getElementById("saveReconocimientoBtn").addEventListener("click",function(){g()}),document.getElementById("updateReconocimientoBtn").addEventListener("click",function(){u()})}function s(a){const e=document.getElementById("reconocimientosTableBody");e.innerHTML="",a.forEach(t=>{const n=document.createElement("tr");n.innerHTML=`
            <td>${t.folio}</td>
            <td>${t.fecha}</td>
            <td>${t.remitente}</td>
            <td>${t.personaReconocida}</td>
            <td>${t.motivo.substring(0,60)}...</td>
            <td><span class="badge ${r(t.estado)}">${l(t.estado)}</span></td>
            <td><span class="badge ${m(t.prioridad)}">${t.prioridad}</span></td>
            <td>
              <button class="btn btn-sm btn-primary" onclick="verReconocimiento(${t.id})">
                <i class="bi bi-eye"></i>
              </button>
              <button class="btn btn-sm btn-warning" onclick="editarReconocimiento(${t.id})">
                <i class="bi bi-pencil"></i>
              </button>
              <button class="btn btn-sm btn-danger" onclick="eliminarReconocimiento(${t.id})">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          `,e.appendChild(n)})}function g(){const a=document.getElementById("reconocimientoForm"),e=new FormData(a),t={id:o.length+1,folio:`RC-2024-${String(o.length+1).padStart(3,"0")}`,fecha:new Date().toISOString().split("T")[0],remitente:e.get("remitente"),email:e.get("email"),personaReconocida:e.get("personaReconocida"),cargo:e.get("cargo"),motivo:e.get("motivo"),categoria:e.get("categoria"),estado:"pendiente",prioridad:"media",comentarios:"",fechaAprobacion:""};o.push(t),c(),d(),bootstrap.Modal.getInstance(document.getElementById("addReconocimientoModal")).hide(),a.reset(),alert("Reconocimiento guardado exitosamente")}function u(){const a=document.getElementById("editReconocimientoForm"),e=new FormData(a),t=parseInt(e.get("id")),n=o.findIndex(i=>i.id===t);n!==-1&&(o[n]={...o[n],remitente:e.get("remitente"),personaReconocida:e.get("personaReconocida"),cargo:e.get("cargo"),motivo:e.get("motivo"),estado:e.get("estado"),comentarios:e.get("comentarios"),fechaAprobacion:e.get("fechaAprobacion")},c(),d(),bootstrap.Modal.getInstance(document.getElementById("editReconocimientoModal")).hide(),alert("Reconocimiento actualizado exitosamente"))}
