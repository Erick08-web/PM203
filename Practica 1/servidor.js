
console.log("Hola mundo js desde el servidor")


/* medir el tiempo del proceso */
console.time("miProceso")

for(let i =0; i<10000000; i++){}

console.timeEnd("miProceso")




let usuarios = [
    {nombre: "Erick", edad:20},
    {nombre: "Erick", edad:21}
]

console.table(usuarios)