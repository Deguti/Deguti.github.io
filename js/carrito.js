let cart = [];
$('.add-to-cart').click(function() {
    let item = $(this).closest('.caja1').find('figcaption p').text().trim();
    let price = parseFloat(item.match(/Precio: de ¢([\d.]+)/)[1]);
    let code = item.match(/Codigo: (\w+)/)[1];
    let exists = false;
    /*
    let item = $(this).closest('.caja1').find('figcaption p').text().trim();

    Se define una variable item que toma el valor del texto contenido en el elemento <p>
    dentro del elemento <figcaption> del elemento .caja1 más cercano al elemento que desencadenó 
    el evento que está ocurriendo. El método trim() se utiliza para eliminar cualquier espacio en
    blanco adicional al principio o al final del texto.*/

    /*let price = parseFloat(item.match(/Precio: de ¢([\d.]+)/)[1]);

    Se define una variable price que toma el valor de un número decimal extraído del texto almacenado 
    en la variable item. El método match() se utiliza para buscar una coincidencia de patrón en el texto 
    y devolver un array con los resultados. La expresión regular dentro de los corchetes encuentra una cadena 
    que comienza con la palabra "Precio: de ¢" seguida de uno o más dígitos o puntos decimales. 
    La función parseFloat() se utiliza para convertir el resultado coincidente en un número decimal.*/

    /*let code = item.match(/Codigo: (\w+)/)[1];

    Se define una variable code que toma el valor de una cadena de texto extraída del texto almacenado en 
    la variable item. El método match() se utiliza para buscar una coincidencia de patrón en el texto y 
    devolver un array con los resultados. La expresión regular dentro de los corchetes encuentra una cadena 
    que comienza con la palabra "Codigo: " seguida de uno o más caracteres alfanuméricos. El índice [1] se utiliza 
    para acceder al primer resultado coincidente dentro del array.*/

    /*let exists = false;

    Se define una variable exists y se inicializa en false. Esta variable se utiliza posteriormente 
    para verificar si ya existe un elemento con el mismo código en algún lugar de la página. */
  
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].code === code) {
        cart[i].quantity++;
        exists = true;
        break;
      }
    }
    if (!exists) {
      cart.push({
        code: code,
        price: price,
        quantity: 1
      });
    }
    /*
    El for recorre el arreglo cart para ver si ya existe algún producto con el mismo code (código) que el 
    producto que se está agregando. Si ya existe, entonces se aumenta en 1 la cantidad del producto en el 
    carrito y se establece la variable exists a true. Si no existe, entonces se agrega un nuevo objeto al 
    arreglo cart con el código, precio y cantidad del producto nuevo.
    */

    updateCart();
  });
  function updateCart() {
    let total = 0;
    let cartItems = $('.cart-items');
    cartItems.empty();
  
    for (let i = 0; i < cart.length; i++) {
      let item = cart[i];
      let subtotal = item.price * item.quantity;
      total += subtotal;
  
      cartItems.append('<li>' + item.code + ' x ' + item.quantity + ' - ¢' + subtotal.toFixed(2) + '</li>');
    }
  
    $('.total').text('Total: ¢' + total.toFixed(2));
  }
    