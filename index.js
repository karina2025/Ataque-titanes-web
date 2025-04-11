fetch('https://api.attackontitanapi.com/characters')
    .then(res => res.json())
    .then(data => {
        const contenedor = document.getElementById('personajes');

        data.forEach(personaje => {
            contenedor.innerHTML += `
                <div>
                    <h2>${personaje.name}</h2>
                    <img src="${personaje.image}" width="200">
                    <button onclick='verMas(${JSON.stringify(personaje)})'>Ver más</button>
                </div>
            `;
        });
    });

function verMas(personaje) {
    localStorage.setItem('personaje', JSON.stringify(personaje));
    window.location.href = 'detalle.html';
}
