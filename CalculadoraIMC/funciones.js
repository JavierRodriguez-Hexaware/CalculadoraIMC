function calcularIMC() {
    var nombre = document.getElementById('nombre').value;
    var alturaEnCm = parseInt(document.getElementById('altura').value);
    var alturaEnMts = alturaEnCm / 100;
    var pesoEnKls = parseInt(document.getElementById('peso').value);
  
    var imc = Math.round(pesoEnKls / (alturaEnMts * alturaEnMts));
    var clasificacion;
    
    if (imc < 18.5) {
      clasificacion = 'eres muy delgado';
    } else if (imc < 25) {
      clasificacion = 'eres saludable';
    } else {
      clasificacion = 'padeces de sobrepeso';
    }
    var respuesta = 'Hola ' + nombre + ' tu IMC es ' + imc + ' y tu ' + clasificacion;
    alert(respuesta);
  }