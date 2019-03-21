
let dataRequest = () => {
  var divresultado = document.getElementById('resultado');
  var loading = document.getElementById('loading');
  divresultado.innerHTML = '';
  loading.style.display = 'block';

  axios.get('https://lanbide-node.herokuapp.com?limit=10')
    .then(function (response) {
      divresultado.innerHTML = '<p>Respuesta: ' + response.status + ' ' + response.statusText + '</p>';
      datos = response.data.response.payload.result;

      var i;
      for (i in datos){
        divresultado.innerHTML += `<dl> <dt>Name</dt><dd> ${datos[i].name} </dd>
        <dt>Username</dt><dd>${datos[i].username} </dd>
        <dt>Email</dt><dd> ${datos[i].email} </dd>
        <dt>Avatar</dt><dd> ${datos[i].avatar} </dd></dl>`;
           }
       }

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

let postRequest = (e) => {
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
