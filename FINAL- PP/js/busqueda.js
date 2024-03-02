document.querySelector('#btn-buscar').addEventListener('onclick', respuesta);

function respuesta(){
  const tipo = document.getElementById('tipo-propiedad').value; //Obtenemos el tipo de propiedad segun su value
  const ubicacion = document.getElementById('busqueda').value;
  const xhttp = new XMLHttpRequest();

  
  let url='';


  if(tipo === 'casa') {
    url = '/json/casas.json';
  } else if(tipo === 'departamento') {
    url = '/json/departamentos.json'; 
  } else {
    url = '/json/habitaciones.json';
  }

  xhttp.open('GET', url, ubicacion, true);
  xhttp.send();

  xhttp.onreadystatechange = function(){

    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let datos = JSON.parse(this.responseText);
        let resultados = document.querySelector('#resultados');
        resultados.innerHTML = '';

        datos.forEach(item => {
          if (item.ubicacion === ubicacion) {
            const card = document.createElement('div');
            card.classList.add('card');

            card.addEventListener("click", function() {
              window.location.href = "pagina3.html";
            });

            const titulo = document.createElement('h2');
            titulo.textContent = item.titulo;
            card.appendChild(titulo);

            const imagen = document.createElement('img');
            imagen.src = item.imagen;
            card.appendChild(imagen);

            const precio = document.createElement('p');
            precio.textContent = `Precio: ${item.precio}`;
            card.appendChild(precio);

            const ubicacion = document.createElement('p');
            ubicacion.textContent = `Ubicación: ${item.ubicacion}`;
            card.appendChild(ubicacion);

            resultados.appendChild(card);
          }
        });
      }
    }
  }


}