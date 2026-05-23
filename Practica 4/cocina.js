const catalogo = [
    { id: 1, nombre: "Americano", categoria: "Café", precio: 45, descripcion: "Café negro intenso con agua caliente", disponible: true },
    { id: 2, nombre: "Cappuccino", categoria: "Café", precio: 55, descripcion: "Espresso con leche espumada y espuma de leche", disponible: true },
    { id: 3, nombre: "Latte", categoria: "Café", precio: 60, descripcion: "Espresso suave con abundante leche vaporizada", disponible: true },
    { id: 4, nombre: "Mocha", categoria: "Café", precio: 65, descripcion: "Espresso con chocolate y leche espumada", disponible: true },
    { id: 5, nombre: "Espresso", categoria: "Café", precio: 35, descripcion: "Shot concentrado de café puro", disponible: true },
    { id: 6, nombre: "Croissant", categoria: "Postre", precio: 40, descripcion: "Croissant de mantequilla recién horneado", disponible: true },
    { id: 7, nombre: "Muffin de Chocolate", categoria: "Postre", precio: 45, descripcion: "Muffin esponjoso con chips de chocolate", disponible: true },
    { id: 8, nombre: "Cheesecake", categoria: "Postre", precio: 70, descripcion: "Rebanada de cheesecake New York con frutos rojos", disponible: false },
    { id: 9, nombre: "Frappé de Café", categoria: "Bebida Fría", precio: 75, descripcion: "Café helado mezclado con hielo y crema batida", disponible: true },
    { id: 10, nombre: "Té Helado", categoria: "Bebida Fría", precio: 40, descripcion: "Té negro frío con limón y menta", disponible: true }
];

// funciones
function obtenerPorCategoria(categoria) {
    return catalogo.filter(producto => producto.categoria === categoria);
}

function obtenerDisponibles() {
    return catalogo.filter(producto => producto.disponible === true);
}

function obtenerProductosBaratos() {
    return catalogo.filter(producto => producto.precio < 50);
}

function obtenerProductosCaros() {
    return catalogo.filter(producto => producto.precio >= 60);
}

function obtenerBebidas() {
    return catalogo.filter(producto => producto.categoria === "Café" || producto.categoria === "Bebida Fría");
}

function obtenerPostres() {
    return catalogo.filter(producto => producto.categoria === "Postre");
}

function buscarProducto(id) {
    return catalogo.find(producto => producto.id === id);
}

function buscarProductoPorNombre(nombre) {
    return catalogo.find(producto => producto.nombre.toLowerCase() === nombre.toLowerCase());
}


function obtenerCategorias() {
    const categorias = [];
    for (let i = 0; i < catalogo.length; i++) {
        if (!categorias.includes(catalogo[i].categoria)) {
            categorias.push(catalogo[i].categoria);
        }
    }
    return categorias;
}


// funciones asincronas con promesas
function prepararProducto(idProducto) {
    return new Promise((resolve, reject) => {
        const producto = buscarProducto(idProducto);

        if (!producto) {
            reject("Error: producto con ID " + idProducto + " no existe");
            return;
        }

        if (!producto.disponible) {
            reject("Falta ingrediente: " + producto.nombre + " no esta disponible");
            return;
        }

        console.log("  [Cocina] Preparando " + producto.nombre + "...");

        const tiempoPreparacion = 2000 + Math.random() * 2000;

        setTimeout(() => {
            if (Math.random() < 0.1) {
                reject("Error en cocina: hubo un problema al preparar " + producto.nombre);
            } else {
                resolve({
                    id: producto.id,
                    nombre: producto.nombre,
                    precio: producto.precio,
                    mensaje: producto.nombre + " esta listo!"
                });
            }
        }, tiempoPreparacion);
    });
}


function prepararPedidoCompleto(productosIds) {
    const promesas = productosIds.map(id => prepararProducto(id));
    return Promise.allSettled(promesas);
}



module.exports = {
    catalogo, obtenerPorCategoria, obtenerDisponibles, buscarProducto,
    buscarProductoPorNombre, obtenerCategorias, obtenerProductosBaratos,
    obtenerProductosCaros, obtenerBebidas, obtenerPostres,
    prepararProducto, prepararPedidoCompleto
};