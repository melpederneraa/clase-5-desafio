const productos = ["Celular", "tablet", "computadora", "auricularew", "cargador"];

// Mostrar el contenido del array utilizando un bucle `for`
console.log("Lista de productos inicial:");
for (let i = 0; i < productos.length; i++) {
    console.log("Producto " + (i + 1) + ": " + productos[i]);
}

// Simular la venta de productos y actualizar el stock
console.log("\nActualizando el stock después de cada venta:");

while (productos.length > 0) {
    // Eliminar el último producto
    const productoVendido = productos.pop();
    
    // Mostrar el nuevo stock después de la venta
    console.log("Producto vendido: " + productoVendido);
    console.log("Nuevo stock de productos:");
    
    for (let i = 0; i < productos.length; i++) {
        console.log("Producto " + (i + 1) + ": " + productos[i]);
    }
    
    if (productos.length === 0) {
        console.log("No quedan más productos en stock.");
    }
}
