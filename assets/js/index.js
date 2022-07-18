const totalTareas = document.querySelector(".total")
const realizadasTareas = document.querySelector(".realizada")
const btnAgregar = document.querySelector(".agregarTarea")
const inputTarea = document.querySelector(".tareaInput")
const listaTabla = document.querySelector(".cuerpoTareas")
const idTarea = document.querySelector(".idTarea")
//
console.log(realizadasTareas.innerHTML)
//agregar tareas al listado con id y nombre
const todoList = [{ 
    id: 1, 
    nombre: "Hacer mercado", 
    estado: false
},
{ 
    id: 2, 
    nombre: "Estudiar para la prueba", 
    estado: false
},
{ 
    id: 3, 
    nombre: "Sacar a pasear a Rocky", 
    estado: false
}
]
console.log(todoList.length)
function cargaTareasInciales(todoList){
    let html = ""
    for (let list of todoList) {
        html += `
        <tr>
        <td>${list.id}</td>
        <td>${list.nombre}</td>
        <td><input type="checkbox" id="estado${list.id}" name="${list.id}" onClick="contarRealizadas('estado${list.id}')"></td>
        <td><i class="fa-solid fa-xmark" onclick="eliminarTarea(${list.id})"></i></td>
        </tr>`;
    }
    listaTabla.innerHTML = html;
    totalTareas.innerHTML = todoList.length;
   
}

btnAgregar.addEventListener("click", () => {
    /* Agregamos el tarea al arreglo */
    const nuevoTarea= inputTarea.value;
    todoList.push({ id: todoList.length+1, nombre: nuevoTarea , estado: false})
    inputTarea.value = ""
    /* Actualizamos la información en el HTML */
    let html = "";
    for (let list of todoList) {
        html += `
        <tr>
        <td>${list.id}</td>
        <td>${list.nombre}</td>
        <td><input type="checkbox" id="estado${list.id}" onClick="contarRealizadas('estado${list.id}')"></td>
        <td><i class="fa-solid fa-xmark" onclick="eliminarTarea(${list.id})"></i></td>
        </tr>`;
    }
    listaTabla.innerHTML = html;
    totalTareas.innerHTML = todoList.length //totaliza tareas
})



//contar tareas realizadas
function contarRealizadas(estado){
//span realizada
    let estadoTarea = document.querySelectorAll('input[type=checkbox]:checked');
    console.log(estadoTarea)
    let cont = 0;
    for (let i = 0, length = estadoTarea.length; i < length; i++) {
           cont += 1;        
    }
    console.log(cont)
    realizadasTareas.innerHTML = cont;
}

//eliminar tareas
function eliminarTarea(index){
    console.log("Eliminar tarea");   
    console.log(index);
    console.log(todoList)
    
    const tareaElimada = todoList.findIndex( todoLis => todoLis.id == index)
    console.log(tareaElimada)
    todoList.splice(tareaElimada, 1)
    console.log(todoList)
    cargaTareasInciales(todoList);

   contarRealizadas();
    
}

cargaTareasInciales(todoList);