$(document).ready(function () {


    $("#formCorreoContacto").validate({
        rules: {
            nombre: {
                required: true
            },
            apellido: {
                required: true
            },
            correo: {
                required: true
            }
        },
        messages: {
            nombre: {
                required: "Por favor, ingrese nombre"
            },
            apellido: {
                required: "Por favor, ingrese apellido"
            },
            correo: {
                required: "Por favor, ingrese correo"
            }
        },
        errorElement: 'p',
        errorPlacement: function (error, element) {
            var placement = $(element).data('error');
            if (placement) {
                $(placement).append(error);
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: {
        }
    });



});