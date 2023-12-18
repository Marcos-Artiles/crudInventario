import { Login } from './login';
import { ConsoleUI } from '../capa de presentacion/interfaz';
import { Producto } from '../capa de datos/bd';
import * as readlineSync from 'readline-sync';

function iniciarAplicacion(): void {

  const loginInstance = new Login("Grupo POO", "Admin 123");
  loginInstance.realizarLogin();

  ConsoleUI.mostrarInterfaz();

const productosAlmacenados: Producto[] = [];

 const numProductos = parseInt(readlineSync.question("\nIngrese el número de productos que desea ingresar: ")) || 0;

  for (let i = 1; i <= numProductos; i++) {
    console.log(`\nIngrese los datos para el producto #${i}`);
    const nuevoProducto = ingresarProducto();
    productosAlmacenados.push(nuevoProducto);
  }

  console.log("\nProductos almacenados:");

  Producto.mostrarProductos(productosAlmacenados);

  const codigoEliminar = parseInt(readlineSync.question("\nIngrese el código del producto que desea eliminar: ")) || 0;

  Producto.eliminarProductoPorCodigo(productosAlmacenados, codigoEliminar);

  console.log("\nProductos almacenados después de eliminar:");

  Producto.mostrarProductos(productosAlmacenados);
}

function ingresarProducto(): Producto {
  const nombre = readlineSync.question("Ingrese el nombre del producto: ") || "";
  const codigo = parseInt(readlineSync.question("Ingrese el código del producto: ")) || 0;
  const precio = parseFloat(readlineSync.question("Ingrese el precio del producto: ")) || 0;

  return new Producto(nombre, codigo, precio);
}

iniciarAplicacion();
