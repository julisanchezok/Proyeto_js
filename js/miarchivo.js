class cliente {
    constructor (num_cliente, nombre, apellido,  DNI, fecha, minconsumido, cp, prec) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.DNI = DNI;
    this.num_cliente = num_cliente;
    this.fecha = fecha;
    this.minconsumido = minconsumido;
    this.comboplus=cp;
    this.preciocombo=prec;
}
}

class empresa{
    constructor(precio, minutos,){
        this.precio=precio;
        this.minutos=minutos;
    }
    Agregar_cliente(cliente){
    const listaclientes= []
    listaclientes.push(cliente);
    }
    ImprimirCliente(cliente){
        document.write(cliente.nombre, cliente.apellido, cliente.DNI, cliente.fecha, cliente.minconsumido );
    }    
}

const telecentro  =  new empresa("$4000", 900);
const cliente_1 = new cliente (0, "Juan", "Perez", 44728523, "15/03/2003", 800, true, telecentro.precio);
telecentro.Agregar_cliente(cliente_1);
telecentro.ImprimirCliente(cliente_1);
