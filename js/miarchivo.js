let usuario;
let usuarioEnLS=localStorage.getItem ('usuario');
let sessionIniciada;
//si habia un usuario almacenado lo recupero, sino, continuo con el registro
let mainB = document.getElementById("body");
let Registro = document.getElementById("grancont")
let tf= true;

function verificarUsuario() {
        if (usuarioEnLS && sessionIniciada){
            usuario = usuarioEnLS;
            Registro.className += " d-none";
            mainB.className += ' d-block';
            tf = false;
            mensajeBienvenida();

        }
        else {
            
        }
return tf;    
}


//si retorna true es porque no habia usuario, sino retorna false
let verdaderoFalso=verificarUsuario();

//si es verdadero q no hay usuario, agrega uno, verifica que haya usuario
    if(verdaderoFalso){
        agregarusuario();
        usuarioEnLS=localStorage.getItem ('usuario');
        console.log("verifica usuario en local")
        verificarUsuario();
        console.log("verifica el usuario con session")
    }




function agregarusuario(){
document.getElementById('formulario').addEventListener('submit', function(e){
    sessionIniciada = true;
   
//e.preventDefault();   //cuando toco registrarme agrega el usuario 

//intento con el for para recorrer formulario 
let formulario=document.getElementById('formulario');
 let usuario_de_Array ={};

 for( let i=0; i<formulario.elements.length; i++){
     const elemento = formulario.elements[i];
     usuario_de_Array[elemento.id] = elemento.value;
    
    }
// //si el usuario esta vacio 
 if (usuario_de_Array.inputUsuario === '') {
     console.log('El campo de nombre de usuario está vacío');
     return; // devuelve la función para detener la ejecución
 }

 localStorage.setItem("datos", JSON.stringify(usuario_de_Array));
localStorage.setItem("usuario", JSON.stringify(usuario_de_Array.inputUsuario));
localStorage.setItem("clave", JSON.stringify(usuario_de_Array.contraseña));

});
}



let cerrarSesion= document.getElementById('logout')
cerrarSesion.onclick =() => {sessionIniciada = false}

function mensajeBienvenida(){
    let title = document.getElementById('welcome')

    let datos = localStorage.getItem('datos')
    datos = JSON.parse(datos)
    const name = datos.inputName
    const gender = datos.inputSex
    if(gender == "Femenino"){
            title.innerText = "Bienvenida " + name +"!"
    }
    else{
            title.innerText = "Bienvenido " +  name +"!"
    }   
         
        
}


let datos = localStorage.getItem("datos")
JSON.parse(datos)
console.log(datos)