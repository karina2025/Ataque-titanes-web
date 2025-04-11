const params = new URLSearchParams(window.location.search);
const nombrePersonaje = params.get('nombre');

const contenedor = document.getElementById('info-personaje');

fetch(`https://api.attackontitanapi.com/characters/${nombrePersonaje}`)
  .then(response => response.json())
  .then(data => {
    contenedor.innerHTML = `
      <h2>${data.name}</h2>
      <img src="${data.image}" alt="${data.name}" width="200">
      <p><strong>Género:</strong> ${data.gender}</p>
      <p><strong>Afiliación:</strong> ${data.affiliation}</p>
      <p><strong>Historia:</strong> ${data.story}</p>
    `;
  })
  .catch(error => {
    contenedor.innerHTML = `<p>Error al cargar los datos</p>`;
  });
