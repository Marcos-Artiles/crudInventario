export class ConsoleUI {

  public static mostrarInterfaz(): void {
    console.clear();
    console.log("¡Bienvenido a la aplicación de inventario!\n");
    console.log("========================================");
    console.log("           Aplicación de Inventario      ");
    console.log("========================================\n");
    console.log("1. Agregar Producto");
    console.log("2. Eliminar Producto");
    console.log("3. Salir\n");
  }

}
