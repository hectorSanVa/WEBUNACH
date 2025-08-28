localStorage.getItem("adminLoggedIn")||(window.location.href="login.html");let o=[{id:1,nombre:"Administrador Principal",email:"admin@unach.edu.mx",rol:"admin",estado:"activo",departamento:"Sistemas",ultimoAcceso:"2024-01-20 15:30",comentarios:"Usuario administrador principal del sistema"},{id:2,nombre:"María González",email:"maria.gonzalez@unach.edu.mx",rol:"moderador",estado:"activo",departamento:"Académico",ultimoAcceso:"2024-01-20 14:15",comentarios:"Moderadora de contenido académico"},{id:3,nombre:"Dr. Carlos Ruiz",email:"carlos.ruiz@unach.edu.mx",rol:"profesor",estado:"activo",departamento:"Medicina",ultimoAcceso:"2024-01-20 12:45",comentarios:"Profesor titular del departamento de medicina"},{id:4,nombre:"Ana Martínez",email:"ana.martinez@unach.edu.mx",rol:"estudiante",estado:"pendiente",departamento:"Estudiantil",ultimoAcceso:"2024-01-19 16:20",comentarios:"Estudiante de medicina, pendiente de verificación"}];document.addEventListener("DOMContentLoaded",function(){s(),d(),g()});function s(){const e=o.length,t=o.filter(i=>i.estado==="activo").length,n=o.filter(i=>i.estado==="pendiente").length,a=o.filter(i=>i.estado==="inactivo").length;document.getElementById("totalUsuarios").textContent=e,document.getElementById("usuariosActivos").textContent=t,document.getElementById("usuariosPendientes").textContent=n,document.getElementById("usuariosInactivos").textContent=a}function d(){const e=document.getElementById("usuariosTableBody");e.innerHTML="",o.forEach(t=>{const n=document.createElement("tr");n.innerHTML=`
            <td>${t.id}</td>
            <td>${t.nombre}</td>
            <td>${t.email}</td>
            <td><span class="badge ${c(t.rol)}">${l(t.rol)}</span></td>
            <td><span class="badge ${m(t.estado)}">${u(t.estado)}</span></td>
            <td>${t.ultimoAcceso}</td>
            <td>
              <button class="btn btn-sm btn-primary" onclick="verUsuario(${t.id})">
                <i class="bi bi-eye"></i>
              </button>
              <button class="btn btn-sm btn-warning" onclick="editarUsuario(${t.id})">
                <i class="bi bi-pencil"></i>
              </button>
              <button class="btn btn-sm btn-danger" onclick="eliminarUsuario(${t.id})">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          `,e.appendChild(n)})}function c(e){return{admin:"bg-danger",moderador:"bg-warning",usuario:"bg-secondary",estudiante:"bg-info",profesor:"bg-success"}[e]||"bg-secondary"}function l(e){return{admin:"Administrador",moderador:"Moderador",usuario:"Usuario",estudiante:"Estudiante",profesor:"Profesor"}[e]||e}function m(e){return{activo:"bg-success",pendiente:"bg-warning",inactivo:"bg-danger"}[e]||"bg-secondary"}function u(e){return{activo:"Activo",pendiente:"Pendiente",inactivo:"Inactivo"}[e]||e}function g(){document.getElementById("searchBtn").addEventListener("click",function(){const e=document.getElementById("searchInput").value.toLowerCase(),t=o.filter(n=>n.nombre.toLowerCase().includes(e)||n.email.toLowerCase().includes(e)||n.departamento.toLowerCase().includes(e));r(t)}),document.getElementById("filterRol").addEventListener("change",function(){const e=this.value;if(e){const t=o.filter(n=>n.rol===e);r(t)}else d()}),document.getElementById("saveUsuarioBtn").addEventListener("click",function(){b()}),document.getElementById("updateUsuarioBtn").addEventListener("click",function(){p()})}function r(e){const t=document.getElementById("usuariosTableBody");t.innerHTML="",e.forEach(n=>{const a=document.createElement("tr");a.innerHTML=`
            <td>${n.id}</td>
            <td>${n.nombre}</td>
            <td>${n.email}</td>
            <td><span class="badge ${c(n.rol)}">${l(n.rol)}</span></td>
            <td><span class="badge ${m(n.estado)}">${u(n.estado)}</span></td>
            <td>${n.ultimoAcceso}</td>
            <td>
              <button class="btn btn-sm btn-primary" onclick="verUsuario(${n.id})">
                <i class="bi bi-eye"></i>
              </button>
              <button class="btn btn-sm btn-warning" onclick="editarUsuario(${n.id})">
                <i class="bi bi-pencil"></i>
              </button>
              <button class="btn btn-sm btn-danger" onclick="eliminarUsuario(${n.id})">
                <i class="bi bi-trash"></i>
              </button>
            </td>
          `,t.appendChild(a)})}function b(){const e=document.getElementById("usuarioForm"),t=new FormData(e);if(t.get("password")!==t.get("confirmPassword")){alert("Las contraseñas no coinciden");return}const n={id:o.length+1,nombre:t.get("nombre"),email:t.get("email"),rol:t.get("rol"),estado:t.get("estado"),departamento:t.get("departamento"),ultimoAcceso:new Date().toLocaleString("es-MX"),comentarios:""};o.push(n),s(),d(),bootstrap.Modal.getInstance(document.getElementById("addUsuarioModal")).hide(),e.reset(),alert("Usuario guardado exitosamente")}function p(){const e=document.getElementById("editUsuarioForm"),t=new FormData(e),n=parseInt(t.get("id")),a=o.findIndex(i=>i.id===n);a!==-1&&(o[a]={...o[a],nombre:t.get("nombre"),email:t.get("email"),rol:t.get("rol"),estado:t.get("estado"),departamento:t.get("departamento"),comentarios:t.get("comentarios")},s(),d(),bootstrap.Modal.getInstance(document.getElementById("editUsuarioModal")).hide(),alert("Usuario actualizado exitosamente"))}
