//********************Reglas para Contactenos*********************/
$(function() {
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

//*******************Redirecciona al producto seleccionado********************/
// obtener todas las cajas que contienen los productos
const cajasProductos = document.querySelectorAll('.caja1');
// agregar un listener de click a cada caja de producto
cajasProductos.forEach(caja => {
  caja.addEventListener('click', () => {
    // obtener el código del producto dentro de la caja seleccionada
    const codigo = caja.querySelector('.codigoArticuloProducto').textContent;
    alert(`Se ha seleccionado el producto con código ${codigo}`);
    // redireccionar a la página del producto seleccionado
    window.location.href = `TruequesCambios.html?codigo=${codigo}`;
  });
});




  
