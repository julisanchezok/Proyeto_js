class Socio {
    constructor (nombre, apellido, fechadeNac,edad) {
    this.nombre=nombre;
    this.apellido = apellido;
    this.fechadeNac = Date.parse(fechadeNac).toString();
    this.edad = edad;
    }
    Imprimir(persona){
        console.log(persona.nombre + " " + persona.apellido + " "+ persona.fechadeNac + " "+ persona.edad )
    }
 }


const nombre = prompt("Ingrese su nombre")

alert(nombre + "! Te damos la bienvenida a La Estación del Fitness!")

const apellido = prompt("Ingrese su apellido")
let fechadeNac = Date.parse(prompt("Ingrese su fecha de nacimiento"))
let fechaNac = new Date (fechadeNac);
const nacimiento = fechaNac.getFullYear();
let fechaHoy = new Date ();
const hoy= fechaHoy.getFullYear();
let edad = hoy - nacimiento ; 
console.log(apellido)
console.log(nombre)
console.log(fechadeNac) 
console.log(fechaNac)
console.log(nacimiento)
console.log(fechaHoy)
console.log(hoy)
console.log(edad) 



let persona = new Socio (nombre, apellido, fechadeNac, edad)

/*persona.Imprimir(persona);
*/
