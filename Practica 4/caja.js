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
        estado: "recibido",
        fecha: new Date().toLocaleString()
    };

    pedidos.push(nuevoPedido);

    totalAcumulado = totalAcumulado + total;

    return nuevoPedido;
}

//callback
function procesarPedido(numeroPedido, Listo, Cancelado) {
    const pedido = pedidos.find(({ numeroPedido: num }) => num === numeroPedido);

    if (!pedido) {
        Cancelado(null, "No se encontro el pedido #" + numeroPedido);
        return;
    }

    if (pedido.productos.length === 0) {
        pedido.estado = "cancelado";
        Cancelado(pedido, "El pedido no tiene productos disponibles");
        return;
    }


    pedido.estado = "preparando";

    //simulamos 
    setTimeout(() => {
        const errorAleatorio = Math.random() < 0.15;

        if (errorAleatorio) {
            pedido.estado = "cancelado";
            Cancelado(pedido, "Error en la preparacion del pedido");
        } else {
            pedido.estado = "listo";
            Listo(pedido);
        }
    }, 3000);
}

function entregarPedido(numeroPedido, Entregado) {
    const pedido = pedidos.find(({ numeroPedido: num }) => num === numeroPedido);

    if (pedido && pedido.estado === "listo") {
        pedido.estado = "entregado";
        Entregado(pedido);
    }
}

function cambiarEstado(numeroPedido, nuevoEstado) {
    const pedido = pedidos.find(({ numeroPedido: num }) => num === numeroPedido);
    if (pedido) {
        pedido.estado = nuevoEstado;
    }
    return pedido;
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

module.exports = {
    agregarPedido,
    procesarPedido,
    entregarPedido,
    cambiarEstado,
    verPedidos,
    obtenerTotal,
    verResumenPedido,
    recalcularTotal,
    TASA_IVA
};