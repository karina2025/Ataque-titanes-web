const contenedor = document.getElementById('personajes');

fetch('https://api.attackontitanapi.com/characters')
  .then(res => res.json())
  .then(data => {
    data.forEach(personaje => {
      contenedor.innerHTML += `
        <div>
          <h2>${personaje.name}</h2>
          <a href="detalle.html?id=${personaje.id}">Ver más</a>
        </div>
      `;
    });
  });


