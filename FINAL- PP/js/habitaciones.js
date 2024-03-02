document.addEventListener("DOMContentLoaded", function() {
    let xmlhttp = new XMLHttpRequest();
  
    xmlhttp.open("GET", "json/habitaciones.json", true);
    xmlhttp.send();
  
    xmlhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        let datos = JSON.parse(this.responseText);
        let mostrar = document.getElementById("cargar");
  
        
        for(let i = 0; i < 6; i++) {
  
          if(i >= datos.length) break;
        
          const departamento = datos[i];
  
            const div = document.createElement('div');
            div.classList.add('div');

            const imagen = document.createElement('img');
            imagen.src = departamento.imagen;
            div.appendChild(imagen);

            const contenido = document.createElement('div');
            contenido.classList.add('contenido')
            contenido.classList.add('div');
  
            const titulo = document.createElement('h2');
            titulo.textContent = departamento.titulo;
            titulo.classList.add('titulo');
            titulo.addEventListener('click', () => {
              window.location.href = "pagina3.html"; 
            });
            div.appendChild(titulo);
            
            const desc = document.createElement('p');
            desc.textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda, mollitia.";
            div.appendChild(desc);
  
            const a = document.createElement('a');
            a.textContent = "Ver más";
            a.href = "pagina3.html";
            div.appendChild(a);
            a.classList.add('dep_a');
  
            mostrar.appendChild(div);
        };
      }
    };
  
  });
  