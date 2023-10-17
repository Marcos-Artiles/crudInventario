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
