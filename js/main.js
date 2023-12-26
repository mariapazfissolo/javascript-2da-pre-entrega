// Defino los productos mediante arrays con strings y con números.
const productos = [
    { articulo:'Remera', talle: 'S', color: 'Negro', precio: 2300 },
    { articulo:'Remera', talle: 'M', color: 'Rosa', precio: 2500 },
    { articulo:'Remera', talle: 'L', color: 'Blanco', precio: 2700 }
];

// Función para mostrar los productos y manejar el carrito mediante prompts.
function manejarCarrito() {
    const carrito = [];
    let total = 0;

    while (true) { //Uso while para que se ejecute las veces que sea necesario hasta que finalice.
        const opcion = prompt(
            "Seleccione una opción:\n" +
            "1. Mostrar talles\n" +
            "2. Agregar producto al carrito\n" +
            "3. Ver carrito\n" +
            "4. Salir"
        );

        switch (opcion) { //Se evalúa cada condición y también si se cumple lo que esta indicado en cada case.
            case '1':
                mostrarProductos();
                break;
            case '2':
                agregarAlCarrito();
                break;
            case '3':
                mostrarCarrito();
                break;
            case '4':
                alert(`Gracias por su compra. Total a pagar: $${total}`);
                return;
            default:
                alert("Opción no válida. Intente de nuevo.");
        }
    }

    function mostrarProductos() { //En esta funcion se muestran los 3 productos con los talles, color y precios que se declararon al principio.
        alert("Productos disponibles:\n" +
            productos.map((producto, index) => //Se usa el método map ya que crea un nuevo array con todos los elementos del original.
                `${index + 1}. Articulo: ${producto.articulo}, Talle: ${producto.talle}, Color: ${producto.color}, Precio: $${producto.precio}`
            ).join('\n')
        );
    }

    function agregarAlCarrito() {
        const indiceProducto = prompt("Ingrese el número del producto que desea agregar al carrito:");

        if (indiceProducto >= 1 && indiceProducto <= productos.length) { //Length para identificar cuantos productos tenemos.
            const productoElegido = productos[indiceProducto - 1];
            carrito.push(productoElegido); //Push para sumar el producto que hayamos elegido.
            total += productoElegido.precio;
            alert("Producto agregado al carrito."); //Una vez que ponemos el número del producto que queremos se guarda en el carrito de compras.
        } else {
            alert("Número de producto no válido.");//Si ingresamos otro número que no está disponible se muestra con un alert que no es válido. 
        }
    }

    function mostrarCarrito() { //En la parte del carrito si agregamos anteriormente uno de los productos se muestra cual es, y si no agregamos ninguno este aparecerá vacio.
        if (carrito.length === 0) {
            alert("El carrito está vacío.");
        } else {
            const detallesCarrito = carrito.map(producto =>
                `Articulo: ${producto.articulo}, Talle: ${producto.talle}, Color: ${producto.color}, Precio: $${producto.precio}`
            ).join('\n'); //Con join hacemos un solo string con todos los elementos del array.

            alert(`Carrito de compras:\n${detallesCarrito}\nTotal: $${total}`);
        }
    }
}

manejarCarrito();