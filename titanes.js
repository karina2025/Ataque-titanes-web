function mostrarInfo(nombre) {
    fetch('https://api.attackontitanapi.com/characters')
      .then(response => response.json())
      .then(data => {
        const personajes = data;
        const personaje = personajes.find(p => p.name.toLowerCase().includes(nombre.toLowerCase()));
  
        if (personaje) {
          const contenedor = document.getElementById('detalle-personaje');
  
          contenedor.innerHTML = `
            <div class="card-personaje">
              <h2>${personaje.name}</h2>
              <img src="${personaje.img}" alt="${personaje.name}">
              <p><strong>Género:</strong> ${personaje.gender}</p>
              <p><strong>Altura:</strong> ${personaje.height}</p>
              <p><strong>Afiliación:</strong> ${personaje.affiliation}</p>
            </div>
          `;
        } else {
          alert('Personaje no encontrado');
        }
      })
      .catch(error => console.error('Error al obtener los datos:', error));
  }
  



