const personaje = JSON.parse(localStorage.getItem('personaje'));

document.getElementById('detalle').innerHTML = `
    <div class="card">
        <h2>${personaje.name}</h2>
        <img src="${personaje.image}" alt="${personaje.name}">
        <p>${personaje.about}</p>
    </div>
`;

