const { catalogo, buscarProducto } = require("./cocina");

let pedidos = [];

let totalAcumulado = 0;

let contadorPedidos = 0;

const TASA_IVA = 0.16;

function agregarPedido(nombreCliente, productosIds) {
    contadorPedidos++;

    const productosDelPedido = productosIds
        .map(id => buscarProducto(id))
        .filter(producto => producto && producto.disponible)
        .map(({ nombre, precio }) => ({ nombre, precio }));


    const subtotal = productosDelPedido.reduce((acum, producto) => acum + producto.precio, 0);


    const iva = +(subtotal * TASA_IVA).toFixed(2);
    const total = +(subtotal + iva).toFixed(2);


    const nuevoPedido = {
        numeroPedido: contadorPedidos,
        cliente: nombreCliente,
        productos: productosDelPedido,
        subtotal,
        iva,
        total,
        fecha: new Date().toLocaleString()
    };


    pedidos.push(nuevoPedido);


    totalAcumulado = totalAcumulado + total;

    return nuevoPedido;
}


function verPedidos() {
    return pedidos;
}


function obtenerTotal() {
    return totalAcumulado;
}


function verResumenPedido(numeroPedido) {
    const pedido = pedidos.find(({ numeroPedido: num }) => num === numeroPedido);
    return pedido;
}


function recalcularTotal() {
    totalAcumulado = pedidos.reduce((acum, { total }) => acum + total, 0);
    return totalAcumulado;
}


module.exports = { agregarPedido, verPedidos, obtenerTotal, verResumenPedido, recalcularTotal, TASA_IVA };
