class Socio {
    constructor (nombre, apellido, fechadeNac,edad, actividad) {
        this.nombre=nombre;
        this.apellido = apellido;
        this.fechadeNac = fechadeNac;
        this.edad = edad;
        this.actividad =actividad;
    }
    Imprimir(persona){
        console.log(persona.nombre + " " + persona.apellido + " Fecha de nacimiento: "+ persona.fechadeNac + " Edad: "+ persona.edad )
    }
    Mostrar(persona){
        alert( "Tus datos: \n"+ persona.nombre + " " + persona.apellido + "\n Fecha de nacimiento: "+ persona.fechadeNac + "\n Edad: "+ persona.edad + "\n Inscripto en: " + persona.actividad)
    }
}

class Spinning{
 constructor(profesor, precio, horario, dia){
 this.profesor=profesor;
 this.precio= precio;
 this.horario=horario;
 this.dia = dia;
 }
 Imprimir_Spinning (Spinning){
    alert("La clase de Spinning tiene un valor de: $" + Spinning.precio + "\n Y se dicta los: " + Spinning.dia +  " a las: " + Spinning.horario + "\n Por: " + Spinning.profesor)
 }
 
}
class Pilates{
    constructor(profesor, precio, horario, dia){
    this.profesor=profesor;
    this.precio= precio;
    this.horario=horario
    this.dia = dia;
    }
    Imprimir_Pilates (Pilates){
        alert("La clase de Pilates tiene un valor de: $" + Pilates.precio + "\n Y se dicta los: " + Pilates.dia +  " a las: "+ Pilates.horario + "\n Por: " + Pilates.profesor)
    }
  
    
}
class Jumping{
    constructor(profesor, precio, horario, dia){
    this.profesor=profesor;
    this.precio= precio;
    this.horario=horario
    this.dia = dia;
    }
    Imprimir_Jumping (Jumping){
        alert("La clase de Jumping tiene un valor de: $" + Jumping.precio + "\n Y se dicta los: " + Jumping.dia +  " a las: " + Jumping.horario + "\n Por: " + Jumping.profesor)
    }
    
}
class Crossfit{
    constructor(profesor, precio, horario, dia){
    this.profesor=profesor;
    this.precio= precio;
    this.horario=horario
    this.dia = dia;
    }
    Imprimir_Crossfit (Crossfit){
        alert("La clase de Crossfit tiene un valor de: $" + Crossfit.precio + "\n Y se dicta los: " + Crossfit.dia +  " a las: "+ Crossfit.horario + "\n Por: " + Crossfit.profesor)
    }
    
}
class Boxeo{
    constructor(profesor, precio, horario, dia ){
    this.profesor=profesor;
    this.precio= precio;
    this.horario=horario
    this.dia = dia;
    }
    Imprimir_Boxeo (Boxeo){
        alert("La clase de Boxeo tiene un valor de: $" + Boxeo.precio + "\n Y se dicta los: " + Boxeo.dia +  " a las: "+ Boxeo.horario + "\n Por: " + Boxeo.profesor)
    }
    
}
class Funcional{
    constructor(profesor, precio, horario, dia){
    this.profesor=profesor;
    this.precio= precio;
    this.horario=horario
    this.dia = dia;
    }
    Imprimir_Funcional (Funcional){
        alert("La clase de Funcional tiene un valor de: $" + Funcional.precio + "\n Y Y se dicta los: " + Funcional.dia +  " a las: " + Funcional.horario + "a las: " + "\n Por: " + Funcional.profesor)
    }

    
}


let clase_Spinning = new Spinning ("Alejandra Flores", "3000", "18:30 hrs", "Lunes y Miercoles" )
const clase_Pilates = new Pilates ("Brian Britos", "3800", "8:00 hrs", "Martes y Jueves")
const clase_Jumping = new Jumping ("Emiliano Paredes", "2500", "17:00 hrs", "Miercoles y Viernes")
const clase_Crossfit = new Crossfit ("Claudio Martinez", "5000", "12:00 hrs", "Martes, Jueves y Sábados")
const clase_Boxeo = new Boxeo ("Lucas Degiorgi", "4500", "20:00 hrs", "Lunes, Miércoles y Viernes")
const clase_Funcional = new Funcional ("Fabiana Sanchez", "4000", "1:00 hrs", "Lunes y Miércoles")






const nombre_comun = prompt("Ingrese su nombre")
const nombre = nombre_comun.slice(0,1).toUpperCase() + nombre_comun.slice(1).toLowerCase();
alert(nombre + "! Te damos la bienvenida a La Estación del Fitness!")

const apellido_comun = prompt("Ingrese su apellido")
const apellido = apellido_comun.slice(0,1).toUpperCase() + apellido_comun.slice(1).toLowerCase();

let fechadeNac = prompt("Ingrese su fecha de nacimiento en el formato MM/DD/YY")
let fechaNac = new Date (fechadeNac);
const nacimiento = fechaNac.getFullYear();
let fechaHoy = new Date ();
const hoy= fechaHoy.getFullYear();
let edad = hoy - nacimiento ; 
let inscripcion = "";


let persona = new Socio (nombre, apellido, fechadeNac, edad)

persona.Imprimir(persona);

let eligeClase= prompt("A qué clase le gustaria inscribirse? Contamos con: \n Spinning \n Pilates \n Jumping \n Crossfit \n Boxeo \n Funcional")
eligeClase.toLowerCase()
switch (eligeClase) {
    case "spinning":
        clase_Spinning.Imprimir_Spinning(clase_Spinning);
        inscripcion= prompt("Desea inscribirse a Spinning?")
        inscripcion.toLowerCase()
        if(inscripcion == "si"){
            alert("Inscripcion Exitosa!")
            let socio = new Socio (nombre, apellido, fechadeNac, edad, "Spinning")
            socio.Mostrar(socio);
        }
        else{
            break;
        }  
        break;
    case "pilates":
        clase_Pilates.Imprimir_Pilates(clase_Pilates);
        inscripcion= prompt("Desea inscribirse a Pilates?")
        inscripcion.toLowerCase()
        if(inscripcion == "si"){
            alert("Inscripcion Exitosa!")
            let socio = new Socio (nombre, apellido, fechadeNac, edad, "Pilates")
            socio.Mostrar(socio);
        }
        else{
            break;
        }    
        break;
    case "jumping":
        clase_Jumping.Imprimir_Jumping(clase_Jumping);
        inscripcion= prompt("Desea inscribirse a Jumping?")
        inscripcion.toLowerCase()
        if(inscripcion == "si"){
            alert("Inscripcion Exitosa!")
            let socio = new Socio (nombre, apellido, fechadeNac, edad, "Jumping")
            socio.Mostrar(socio);
        }
        else{
            break;
        }    
        
        break;
    case "crossfit":
        clase_Crossfit.Imprimir_Crossfit(clase_Crossfit);
        inscripcion= prompt("Desea inscribirse a Crossfit?")
        inscripcion.toLowerCase()
        if(inscripcion == "si"){
            alert("Inscripcion Exitosa!")
            let socio = new Socio (nombre, apellido, fechadeNac, edad, "Crossfit")
            socio.Mostrar(socio);
        }
        else{
            break;
        } 
        break;
    case "boxeo":
        clase_Boxeo.Imprimir_Boxeo(clase_Boxeo);
        inscripcion= prompt("Desea inscribirse a Boxeo?")
        inscripcion.toLowerCase()
        if(inscripcion == "si"){
            alert("Inscripcion Exitosa!")
            let socio = new Socio (nombre, apellido, fechadeNac, edad, "Boxeo")
            socio.Mostrar(socio);
        }
        else{
            break;
        } 
        break;
    case "funcional":
        clase_Funcional.Imprimir_Funcional(clase_Funcional);
        inscripcion= prompt("Desea inscribirse a Funcional?")
        inscripcion.toLowerCase()
        if(inscripcion == "si"){
            alert("Inscripcion Exitosa!")
            let socio = new Socio (nombre, apellido, fechadeNac, edad, "Funcional")
            socio.Mostrar(socio);
        }
        else{
            break;
        } 
        break;
    default:
        break;
}