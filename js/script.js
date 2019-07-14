$(document).ready(function(){
    /* Initialize Swiper del loop infinito */
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }); /* Fin Swiper loop infinito. */


    /* Swiper coverflow */
    //var swiper2 = new Swiper('.swiper-container2', { /* Options here */
    /*    effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
        },
        pagination: {
            el: '.swiper-pagination',
        },

    });*/


    $('.aviso').hide(); /* Esto es para ocultar "bienvenido usuario". */
    $('.aviso2').hide(); /* Esto es para ocultar "bienvenido usuario". */
    //$('#simple-menu').sidr(); /*Esto es para activar el menu responsive de Sidr (plugin). */

    $('#acceder2').click(function(){ /*Muestra "bienvenido usuario" al hacer clic en "acceder". */
        var usuario = $('#usuario').val(); /*Nombre de usuario. */
        var contrasena = $('#contrasena').val(); /*Contraseña */
        if(usuario === "andres123" && contrasena === "123"){
            $('.aviso').show();
            $.modal.close(); /* Cierra el modal. */
        }
        else{
            alert('The username and/or password are incorrect.');
        }
    });

    /*Función para darte de alta. Te muestra un mensaje "se ha enviado un enlace a tu email" */
    $('#altaConfirmar').click(function(){
        var contrasena2 = $('#contrasena2').val();
        var contrasena3 = $('#contrasena3').val(); /*Estas 2 variables las voy a comparar para confirmar contraseña. */
        var usuario2 = $('.usuario2').val();
        var correo = $('.correo').val();
        var caractEmail = new RegExp(/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/);

        /* Aqui voy a poner que todos los campos esten llenos */
        if(usuario2 != "" && contrasena2 != "" && contrasena2 === contrasena3 && correo != "" && $('#check0').prop('checked') && $('#check1').prop('checked')  ){
            /*Voy a usar un regular expression para compararlo con el correo y verificar que sea válido. */
            if(caractEmail.test(correo)) {
                // alert('Correcto');
                $('.aviso2').show(); /* Muestro el mensaje de "Revisa tu email". */
            }
            else{
                alert('The email address is not valid.');
            }
        }
        else{
            alert('Please, fill out all fields.');
        }
    });

    /*Función para volver al inicio. */
    $('#volverAlInicio').click(function(){
        $('html,body').animate({
            scrollTop: 0
        });
    });

});

