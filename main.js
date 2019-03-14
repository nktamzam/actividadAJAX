

document.getElementById("data").addEventListener("click", dataRequest);

function dataRequest() {

  var resultado = document.getElementById('resultado');
  resultado.innerHTML = '';

  axios.get('https://lanbide-node.herokuapp.com')
    .then(function (response) {
      resultado.innerHTML = successHTMLOutput(response);
    })
    .catch(function (error) {
      resultado.innerHTML = errorHTMLOutput(error);
    });

}

function successHTMLOutput(response) {
  return  '<h4>Respuesta</h4>' +
          '<h5>Estado:</h5> ' +
          '<pre>' + response.status + ' ' + response.statusText + '</pre>' +
          '<h5>Headers:</h5>' +
          '<pre>' + JSON.stringify(response.headers, null, '\t') + '</pre>' +
          '<h5>Datos:</h5>' +
          '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';
}

function errorHTMLOutput(error) {
  return  '<h4>Result</h4>' +
          '<h5>Message:</h5> ' +
          '<pre>' + error.message + '</pre>' +
          '<h5>Estado:</h5> ' +
          '<pre>' + error.response.status + ' ' + error.response.statusText + '</pre>' +
          '<h5>Headers:</h5>' +
          '<pre>' + JSON.stringify(error.response.headers, null, '\t') + '</pre>' +
          '<h5>Datos:</h5>' +
          '<pre>' + JSON.stringify(error.response.data, null, '\t') + '</pre>';
}
