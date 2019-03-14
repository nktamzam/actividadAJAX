

document.getElementById("data").addEventListener("click", dataRequest);

function dataRequest() {

  var divresultado = document.getElementById('resultado');
  divresultado.innerHTML = '';

  axios.get('http://jsonplaceholder.typicode.com/todos')
    .then(function (response) {
      divresultado.innerHTML = JSON.stringify(response.headers, null, '\t') ;
      var datos = JSON.parse(response.data);
    // divresultado.innerHTML += datos.UserId;
    })
    .catch(function (error) {
      divresultado.innerHTML = errorHTMLOutput(error);
    });

}

//function successHTMLOutput(response) {
//  return  '<p>Respuesta' + response.status + ' ' + response.statusText + '</p>' +
//          '<h3>Datos:</h3>';
//          '<pre>' + JSON.stringify(response.data, null, '\t') + '</pre>';

//}

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
