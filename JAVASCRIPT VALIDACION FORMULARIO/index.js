window.addEventListener("DOMContentLoaded", function (event) {
    var form_register = document.querySelector("#form-register");//obtiene el primer elemento del documento 
    form_register.addEventListener("submit", function (event) {//captura el instante en el que el usuario envia el formulario
        event.preventDefault();//evita qn se ejecuten funciones de forma predeterminada


        var canSubmit = true;
        var input_cedula = document.querySelector("#input_cedula");
        if (input_cedula.value == "") {
            document.querySelector("#cedula_container .input-error").innerHTML ="Error: Campo Cedula Obligatoria";// es una propiedad que nos permite leer un dato o asignarlo al contenido de un div
            canSubmit = false;
        } else {
            if (input_cedula.value.length < 10 || input_cedula.value.length > 10) {
                document.querySelector("#cedula_container .input-error").innerHTML = "Error:No contiene los 10 dígitos";
                canSubmit = false;
            } else {
                document.querySelector("#cedula_container .input-error").innerHTML = "";
            }
        }


        var input_name = document.querySelector("#input_name");
        if (input_name.value == "") {
            document.querySelector("#name_container .input-error").innerHTML ="Error: Campo Nombre Obligatorio";
            canSubmit = false;
        } else {
            if (input_name.value.length < 3) {
                document.querySelector("#name_container .input-error").innerHTML ="Error: El Nombre es muy corto";
                canSubmit = false;
            } else {
                document.querySelector("#name_container .input-error").innerHTML = "";
            }
        }



        var input_last_name = document.querySelector("#input_last_name");
        if (input_last_name.value == "") {
            document.querySelector("#last_name_container .input-error").innerHTML ="Error: Campo Apellido Obligatorio";
            canSubmit = false;
        } else {
            document.querySelector("#last_name_container .input-error").innerHTML =
                "";
        }



        /*
        var input_user_name = document.querySelector("#input_user_name");
        if (input_user_name.value == "") {
          document.querySelector("#input_user_name .input-error").innerHTML =
            "Error: Campo Usuario Obligatorio";
          canSubmit = false;
        } else {
          document.querySelector("#input_user_name .input-error").innerHTML =
            "";
        }*/




        var input_email = document.querySelector("#input_email");
        if (input_email.value == "") {
            document.querySelector("#email_container .input-error").innerHTML ="Error: Campo  Correo Obligatorio";
            canSubmit = false;
            console.log(input_email.value);
        } else {
            var indexOne = input_email.value.indexOf("@");
            var indexTwo = input_email.value.indexOf(".com");
            if (indexOne < 0 || indexTwo < 0 || indexOne > indexTwo) {
                document.querySelector("#email_container .input-error").innerHTML ="Error: El Correo invalido";
                canSubmit = false;
            } else {
                document.querySelector("#email_container .input-error").innerHTML = "";
            }
        }
/*
        var input_date = document.querySelector('#input_date')
        if (input_date.value == "") {
            document.querySelector('#date_container .input-error').innerHTML = "La fecha de pago es onligatorio";
            canSubmit = false;
        } else {
            document.querySelector("#email_container .input-error").innerHTML = "";
        }*/

        if (canSubmit) {
            
            event.preventDefault();
        }
    });
});