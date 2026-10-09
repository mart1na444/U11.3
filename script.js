let listaDeSuper = [];

listaDeSuper.push("Leche");
listaDeSuper.push("Pan");
listaDeSuper.push("Huevos");
listaDeSuper.push("Queso");
listaDeSuper.push("Galletitas");

// 1. Agregar dos productos al final
listaDeSuper.push("Fideos");
listaDeSuper.push("Arroz");

// 2. Agregar dos productos al principio
listaDeSuper.unshift("Manzanas");
listaDeSuper.unshift("Jabón");

// 3. Determinar el largo del arreglo
console.log(listaDeSuper.length);

// 4. Sacar un producto y guardarlo en noHabia
let noHabia = listaDeSuper.pop();
console.log(noHabia);

// 5. Sacar un producto y guardarlo en comprado
let comprado = listaDeSuper.shift();
console.log(comprado);

// 6. Determinar el largo del arreglo ahora
console.log(listaDeSuper.length);

console.log(listaDeSuper);

// PARTE III

// 1. Mostrar cada ítem usando un for loop
for (let i = 0; i < listaDeSuper.length; i++) {
    console.log(listaDeSuper[i]);
}

// 2. Crear la función logItems
function logItems(arreglo) {
    for (let i = 0; i < arreglo.length; i++) {
        console.log(arreglo[i]);
    }
}

// 3. Crear otro arreglo e invocar la función dos veces
let otraLista = ["Café", "Azúcar", "Yerba"];

logItems(listaDeSuper);
logItems(otraLista);

// 4. Refactorizar logItems para usar forEach
function logItems(arreglo) {
    arreglo.forEach(function(item) {
        console.log(item);
    });
}