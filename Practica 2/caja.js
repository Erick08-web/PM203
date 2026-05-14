import { catalogo } from "./cocina";

const { catalogo, buscarProducto } = require("./cocina");

// Lista de pedidos (array que irá creciendo)
let pedidos = [];

// Total acumulado de ventas
let totalAcumulado = 0;

// Contador de pedidos para generar IDs
let contadorPedidos = 0;

// Función principal: agregar un pedido
function agregarPedido(nombreCliente, productosIds) {
    contadorPedidos++;

    // Buscar los productos del pedido
    const productosDelPedido = [];
    let subtotal = 0;

    for (let i = 0; i < productosIds.length; i++) {
        const producto = buscarProducto(productosIds[i]);
        if (producto && producto.disponible) {
            productosDelPedido.push({
                nombre: producto.nombre,
                precio: producto.precio
            });
            subtotal = subtotal + producto.precio;
        }
    }

    // Crear el objeto del pedido
    const nuevoPedido = {
        numeroPedido: contadorPedidos,
        cliente: nombreCliente,
        productos: productosDelPedido,
        subtotal: subtotal,
        fecha: new Date().toLocaleString()
    };

    // Agregar a la lista de pedidos
    pedidos.push(nuevoPedido);

    // Actualizar total acumulado
    totalAcumulado = totalAcumulado + subtotal;

    return nuevoPedido;
}

// Función para ver todos los pedidos
function verPedidos() {
    return pedidos;
}

// Función para obtener el total acumulado
function obtenerTotal() {
    return totalAcumulado;
}

// Función para ver resumen de un pedido específico
function verResumenPedido(numeroPedido) {
    const pedido = pedidos.find(p => p.numeroPedido === numeroPedido);
    return pedido;
}

// Exportar para usar en otros módulos
module.exports = { agregarPedido, verPedidos, obtenerTotal, verResumenPedido };