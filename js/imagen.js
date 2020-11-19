/* funcion almacenada en una variable.
recibe como parametro un evento, el cual
 * es cargar una imagen
y lo agrega la url de la etiqueta img
 */

var loadFile = function (event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
};


/*jquery que desplega el submenu en la tarjeta */
$(document).ready(function () {
    $(".ls-click").hover(function () {
        $("#sbls-di").toggle();
    });

    $(".ls-click-1").hover(function () {
        $("#sbls-do").toggle();
    });

});
