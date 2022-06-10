"use strict";
const newUID = () => Math.random().toString(36).slice(2);
let p1 = {
    Codigo: newUID(),
    Articulo: "Lapiz",
    Detalle: "B2b",
    Cantidad: 3,
    Precio: 0.80,
};
let p2 = {
    Codigo: newUID(),
    Articulo: "Cuaderno",
    Detalle: "Norma",
    Cantidad: 8,
    Precio: 2,
};
let p3 = {
    Codigo: newUID(),
    Articulo: "Carpeta",
    Detalle: "supaFile",
    Cantidad: 3,
    Precio: 3.50,
};
var p4 = {
    Codigo: newUID(),
    Articulo: "Papelografo",
    Detalle: "",
    Cantidad: 5,
    Precio: 0.30,
};
var p5 = {
    Codigo: newUID(),
    Articulo: "Papelografo",
    Detalle: "",
    Cantidad: 10,
    Precio: 0.30,
};
class Factura {
    constructor() {
        this.producto = [];
        this.pt = 0;
        this.st = 0;
    }
    añadirprod(product) {
        this.producto.push(product);
        console.log(`(${product.Cantidad})  Articulos ${product.Articulo} agregados`);
    }
    listarp(Articulo, dato) {
        for (let prod of this.producto) {
            if (prod.Articulo == Articulo) {
                prod.Cantidad = prod.Cantidad + dato;
                console.log(`Producto ${prod.Cantidad} repetido`);
            }
        }
    }
    calculo() {
        this.producto.forEach(e => {
            this.operacion(e.Precio, e.Cantidad);
        });
        return this.imprFactura();
    }
    operacion(cant, n) {
        this.st += cant * n;
        this.pt += this.st * 1.12;
    }
    imprFactura() {
        var r = "";
        r = r + `SUBTOTAL DE PRODUCTOS = ${this.st} \n`;
        r = r + `TOTAL DE PRODUCTOS = ${this.pt} \n`;
        return r;
    }
}
var detalle = new Factura();
detalle.añadirprod(p1);
detalle.añadirprod(p2);
detalle.añadirprod(p3);
detalle.añadirprod(p4);
detalle.añadirprod(p5);
console.log("***********************FACTURA*******************************");
console.log(detalle.producto);
console.log(detalle.calculo());
detalle.listarp("Carpeta", 10);
