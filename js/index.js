//********************Reglas para Contactenos*********************/
$(function() {
  let cart = [];
console.log("hola")
$('.add-to-cart').click(function() {
    let item = $(this).closest('.caja1').find('figcaption p').text().trim();
    let price = parseFloat(item.match(/Precio: de ¢([\d.]+)/)[1]);
    let code = item.match(/Codigo: (\w+)/)[1];
    let exists = false;
    /*
    El método trim() se utiliza para eliminar cualquier espacio en
    blanco adicional al principio o al final del texto.*/

    /*let price = parseFloat(item.match(/Precio: de ¢([\d.]+)/)[1]);

    Se define una variable price que toma el valor de un número decimal extraído del texto almacenado 
    en la variable item. El método match() se utiliza para buscar una coincidencia de patrón en el texto 
    y devolver un array con los resultados. La expresión regular dentro de los corchetes encuentra una cadena 
    que comienza con la palabra "Precio: de ¢" seguida de uno o más dígitos o puntos decimales. 
    La función parseFloat() se utiliza para convertir el resultado coincidente en un número decimal.*/

    /*let code = item.match(/Codigo: (\w+)/)[1];

    La expresión regular dentro de los corchetes encuentra una cadena 
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
    /*
    El for recorre el arreglo cart para ver si ya existe algún producto con el mismo code (código) que el 
    producto que se está agregando. Si ya existe, entonces se aumenta en 1 la cantidad del producto en el 
    carrito y se establece la variable exists a true. Si no existe, entonces se agrega un nuevo objeto al 
    arreglo cart con el código, precio y cantidad del producto nuevo.
    */
    if (!exists) {
      cart.push({
        code: code,
        price: price,
        quantity: 1
      });
    }
    
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
    // Reglas de validación
    $("#contact-Form").validate({
      rules: {
        nombre: {
          required: true,
          lettersOnly: true,
          maxlength: 40
        },
        correo: {
          required: true,
          email: true
        },
        asunto: {
          required: true,
          maxlength: 20
        }
      },
      messages: {
        nombre: {
          required: "Por favor ingrese su nombre",
          lettersOnly: "El nombre solo debe contener letras",
          maxlength: "El nombre no debe exceder los 40 caracteres"
        },
        correo: {
          required: "Por favor ingrese su correo electrónico",
          email: "Por favor ingrese un correo electrónico válido"
        },
        asunto: {
          required: "Por favor ingrese un mensaje",
          maxlength : "Por favor no ingrese mas de 20 cacarteres"
        }
      }
    });
  
    // Validador de letras solamente
    $.validator.addMethod("lettersOnly", function(value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    }, "Por favor ingrese solo letras");
  
    // Validador de correo electrónico
    $.validator.addMethod("email", function(value, element) {
      return this.optional(element) || /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value);
    }, "Por favor ingrese un correo electrónico válido");


    //********************Reglas para trueques y cambios*********************/
    $("#trueques-form").validate({
        rules:{
            nombre:{
                required : true,
                lettersOnly: true,
                maxlength: 40
            },
            correo: {
              required: true,
              email: true
            },
            codigoArticulo: {
                required: true,
                //codigoArticuloValido: true
            },
            descripcion: {
                required: true,
                maxlength: 100
            },
            imagen:{
                required: true,
                extension: "jpg|jpeg|png|gif"
            }            
        },
        messages: {
            nombre: {
                required: "Por favor ingrese su nombre",
                lettersOnly: "El nombre solo debe contener letras",
                maxlength: "El nombre no debe exceder los 40 caracteres"
              },
            correo: {
                required: "Por favor ingrese su correo electrónico",
                email: "Por favor ingrese un correo electrónico válido"
              },
            codigoArticulo: {
              required: "Por favor ingrese un código de artículo",
              //codigoArticuloValido: "Por favor ingrese un código de artículo válido"
            },
            descripcion:{
                required: "Por favor ingrese su mensaje",
                maxlength: "La descripcion no debe exceder los 100 caracteres"
            },
            imagen:{
                required: "Por favor ingrese una imagen",
                extension: "Solo se permiten archivos de imagenes con extenciones jpg|jpeg|png|gif"
            }
        }
    });
    // Validador de letras solamente
    $.validator.addMethod("lettersOnly", function(value, element) {
      return this.optional(element) || /^[a-zA-Z\s]+$/.test(value);
    }, "Por favor ingrese solo letras");
  
    // Validador de correo electrónico
    $.validator.addMethod("email", function(value, element) {
      return this.optional(element) || /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(value);
    }, "Por favor ingrese un correo electrónico válido");

    //*********** no se logro esta validacion ************/
    /*$.validator.addMethod("codigoArticuloValido",function(value, element) {
    // Obtener el valor del código de artículo en la página de productos
        var codigoArticuloProducto = $(".codigoArticuloProducto01").text();
    // Verificar si el valor del campo de entrada coincide con el valor en la página de productos
        return this.optional(element) || value == codigoArticuloProducto;
    }, "Por favor ingrese un código de artículo válido");*/
    //*********** no se logro esta validacion ************/

});

/*
**********Para verificar si el logotipo se cargó correctamente**********

Utilizando el método addEventListener para escuchar el evento DOMContentLoaded,
 que se dispara cuando la estructura HTML se carga completamente en el navegador. 
*/
document.addEventListener('DOMContentLoaded', function() {
    let logo = document.querySelector('.logotipo img');
    if (!logo.complete || logo.naturalWidth === 0) {
      console.error('Error: No se pudo cargar el logotipo');
    }
});

//********Para verificar si los enlaces de navegación son válidos*********
document.addEventListener('DOMContentLoaded', function() {
    let links = document.querySelectorAll('.navegador a');
    for (var i = 0; i < links.length; i++) {
      var link = links[i];
      if (!link.href) {
        console.error('Error: Enlace sin URL en el menú de navegación');
      }
    }
});






  
