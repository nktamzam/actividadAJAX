
function dataRequest() {
  var divresultado = document.getElementById('resultado');
  var loading = document.getElementById('loading');
  divresultado.innerHTML = '';
  loading.style.display = 'block';

  axios.get('https://lanbide-node.herokuapp.com/')
    .then(function (response) {
      divresultado.innerHTML = '<p>Respuesta: ' + response.status + ' ' + response.statusText + '</p>';
      divresultado.innerHTML += '<p><pre>' + JSON.stringify(response.data, null, '\t') + '</p></pre>';
    })
    .catch(function (error) {
      divresultado.innerHTML = '<p>Respuesta: <pre>' + error.response.status + ' ' + error.response.statusText + '</pre></p>';
      divresultado.innerHTML += JSON.stringify(error.response.headers, null, '\t');
      divresultado.innerHTML += '<p><pre>' + JSON.stringify(error.response.data, null, '\t') + '</p></pre>';
    })
    .then(function() {
      loading.style.display = 'none';
    });
};

function postRequest(e) {
  loading.style.display = 'block';
  var divresultado = document.getElementById('resultado');
  var nombre = document.getElementById('name').value;
  var nombreUsuario = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var avatar = document.getElementById('avatar').value;
  divresultado.innerHTML = '';

  axios.post('https://lanbide-node.herokuapp.com/', {
    name: nombre,
    username:nombreUsuario,
    avatar:avatar,
    email: email,
    active:true
  })
  .then(function (response) {
    divresultado.innerHTML = '<p>Respuesta: ' + response.status + ' ' + response.statusText + '</p>';
    divresultado.innerHTML += '<p><pre>' + JSON.stringify(response.data, null, '\t') + '</p></pre>';
  })
  .catch(function (error) {
    divresultado.innerHTML = '<p>Respuesta: ' + error.response.status + ' ' + error.response.statusText + '</p>';
    divresultado.innerHTML += JSON.stringify(error.response.headers, null, '\t');
    divresultado.innerHTML += '<p><pre>' + JSON.stringify(error.response.data, null, '\t') + '</p></pre>';
  })
  .then(function() {
    loading.style.display = 'none';
  });

  e.preventDefault();
};
