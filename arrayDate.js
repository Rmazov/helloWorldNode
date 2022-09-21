// array
const fechaNacimiento = new Date(1988, 08, 25)
const libro = {
    nombre:"elprincipito",
    autor:"f",
    fecha: new Date(1999, 05, 20),
    url: "https://ricardomazo.mazoseguros.com/"


}
const listaEjercicio=["Ricardo Mazo", 34, true, fechaNacimiento,libro ]

console.log(listaEjercicio)



const lista = [1, "hola", true, undefined];
const lista2 = new Array(2, "hola, true,");
const lista3 = new Array(3);
lista3[0]="sony el primer elemento"
const lista4 = [lista,lista2,lista3];


console.log(lista);
console.log(lista2);
console.log(lista3);
console.log(lista4);

//objetos
const movil ={
    altura:10,
    marca:"xiaomi",
    isWhite: false,
    contactos:["gorke","martin"],
    tarjeta:{
            almacenamiento:32,
            camara:16
    }
  
}

movil.anyo=2019;
movil.marca ="samsung";

console.log(movil.marca)

// fechas
//librerias de apoyo moment.js
const now = new Date()
console.log(now);

const fecha_milis = new Date(10);// utilizando los milisegundos
console.log(fecha_milis)

const fecha_cadena = new Date("march 25 2020")
console.log(fecha_cadena)


const fecha_valores = new Date(2022, 0, 15)
console.log(fecha_valores)

const dia = now.getDate()
const mes = now.getMonth()+1
const anyo = now.getFullYear()

console.log(dia, mes, anyo);
