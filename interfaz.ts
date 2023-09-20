class ConsoleUI {
    public static mostrarInterfaz(): void {
      console.clear();
      console.log("========================================");
      console.log("           Aplicación de Inventario      ");
      console.log("========================================\n");
  // Son los diferentes tipos de interacciones.
      console.log("Opciones:");
      console.log("1. Agregar Producto");
      console.log("2. Eliminar Producto");
      console.log("3. Listar Productos");
      console.log("4. Salir\n");
    }
  //Mostramos el mensaje.
    public static mostrarMensaje(mensaje: string): void {
      console.log(`\n${mensaje}\n`);
    }
  }

  ConsoleUI.mostrarInterfaz();
  ConsoleUI.mostrarMensaje("¡Bienvenido a la aplicación de inventario!");
