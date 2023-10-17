import promptSync from 'prompt-sync';

export class Producto {

  constructor(public nombre: string, public codigo: number, public precio: number) {

  }

  public static mostrarProductos(productos: Producto[]): void {

    for (const producto of productos) {
      console.log(`Nombre: ${producto.nombre}, Código: ${producto.codigo}, Precio: ${producto.precio}`);
    }
  }

  public static eliminarProductoPorCodigo(productos: Producto[], codigo: number): void {

    const indice = productos.findIndex(producto => producto.codigo === codigo);

    if (indice !== -1) {

      console.log(`Producto con código ${codigo} eliminado:`);
      Producto.mostrarProductos([productos.splice(indice, 1)[0]]);

    } else {

      console.log(`Producto con código ${codigo} no encontrado.`);

    }
  }
}
function ingresarProducto(): Producto {

  const prompt = promptSync();
  const nombre = prompt("Ingrese el nombre del producto: ") || "";
  const codigo = parseInt(prompt("Ingrese el código del producto: ") || "0");
  const precio = parseFloat(prompt("Ingrese el precio del producto: ") || "0");

  return new Producto(nombre, codigo, precio);
}

function main() {

  const prompt = promptSync();
  const productosAlmacenados: Producto[] = [];

  const numProductos = parseInt(prompt("\nIngrese el número de productos que desea ingresar: ") || "0");

  for (let i = 1; i <= numProductos; i++) {

    console.log(`\nIngrese los datos para el producto #${i}`);
    const nuevoProducto = ingresarProducto();
    productosAlmacenados.push(nuevoProducto);
    
  }

  console.log("\nProductos almacenados:");
  Producto.mostrarProductos(productosAlmacenados);

  const codigoEliminar = parseInt(prompt("Ingrese el código del producto que desea eliminar: ") || "0");
  Producto.eliminarProductoPorCodigo(productosAlmacenados, codigoEliminar);

  console.log("\nProductos almacenados después de eliminar:");
  Producto.mostrarProductos(productosAlmacenados);
}

main();
