

document.getElementById("data").addEventListener("click", dataRequest);


function dataRequest() {

  var divresultado = document.getElementById('resultado');
  divresultado.innerHTML = '';

  axios.get('http://jsonplaceholder.typicode.com/todos/', {
    onDownloadProgress: function(event) {
       var porcentaje = Math.round((event.loaded  / event.total ) * 100);
       console.log('download', porcentaje);
       document.getElementById("progreso").value = porcentaje;
     }
    })
    .then(function (response) {
      divresultado.innerHTML = '<p>Respuesta: <pre>' + response.status + ' ' + response.statusText + '</pre></p>';
      //divresultado.innerHTML += JSON.stringify(response.headers, null, '\t');
      divresultado.innerHTML += '<p><pre>' + JSON.stringify(response.data, null, '\t') + '</p></pre>';
    })
    .catch(function (error) {
      divresultado.innerHTML = '<p>Respuesta: <pre>' + error.response.status + ' ' + error.response.statusText + '</pre></p>';
      divresultado.innerHTML += JSON.stringify(error.response.headers, null, '\t');
      divresultado.innerHTML += '<p><pre>' + JSON.stringify(error.response.data, null, '\t') + '</p></pre>';
    });
}
