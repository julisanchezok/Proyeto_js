class cliente {
    constructor (num_cliente, nombre, apellido,  DNI, fecha, minconsumido, comboplus, preciocombo) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.DNI = DNI;
    this.num_cliente = num_cliente;
    this.fecha = fecha;
    this.minconsumido = minconsumido;
    this.comboplus=comboplus;
    this.preciocombo=preciocombo;
}
}

class empresa{
    constructor(precio, minutos,){
        this.precio=precio;
        this.minutos=minutos;
        this.listaclientes= [];
    }
    Agregar_cliente(cliente){
    this.listaclientes.push(cliente);
    }
    ImprimirCliente(cliente){
        document.write(cliente.nombre, cliente.apellido, cliente.DNI, cliente.fecha, cliente.minconsumido );
    }    

    Imprimir_ListaCliente(){
        for(cliente of this.listaclientes)

         document.write( "\n ***************" + cliente.nombre + " "  + cliente.apellido + " "  + cliente.DNI + " "  +
         cliente.fecha + " "  + cliente.minconsumido + " "  + cliente.comboplus + " " + cliente.preciocombo);
        
    }
}

const telecentro  =  new empresa("$4000", 900);
const cliente_1 = new cliente (0, "Juan", "Perez", 44728523, "15/03/2003", 800, true, telecentro.precio);

// telecentro.Agregar_cliente(cliente_1);


let contador=0
let nombres = prompt("ingrese el nombre del cliente o 0 para finalizar")

while (nombres !== "0" ){
    let ape = prompt("ingrese el apellido del cliente")
    let doc = prompt("ingrese el dni del cliente")
    let date = prompt("ingrese el fecha de alta del cliente")
    let mincons = prompt("ingrese minutos consumidos del cliente")
    let combo_plus = prompt("ingrese si tiene combo plus del cliente")
    contador +=1; 
    const cliente_2= new cliente (contador, nombres,ape,doc,date,mincons,combo_plus, telecentro.precio)
    telecentro.Agregar_cliente(cliente_2);
    nombres = prompt("ingrese el nombre del cliente o 0 para finalizar")
}

telecentro.Imprimir_ListaCliente();
