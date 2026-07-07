
//SE PUEDE DENOMINAR UN ARRAY O ARREGLO 
//A UNA FORMA DE ALMACENAR DATOS DEL MISMO
//TIPO O CLASE

//LOS DATOS SE ALMACENAN EN LOS CAMPOS

const arreglo1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arreglo1.length; i++) {
    console.log(arreglo1[i]);
}

const arreglo2 = ["Hola", "Mundo", "Desde", "Javascript"];
for (let i = 0; i < arreglo2.length; i++) {
    console.log(arreglo2[i]);
} 

const mascotas = ["perrito", "gatito", "conejito"];
for (let i = 0; i < mascotas.length; i++) {
    console.log(mascotas[i]);
}

//OTRA FORMA
const arreglo4 = new Array(1, 2, 3, 4, 5);
for (let i = 0; i < arreglo4.length; i++) {
    console.log(arreglo4[i]);
}