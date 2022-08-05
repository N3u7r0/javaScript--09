const listaPokemom = document.getElementById("listaPokemon");

fetch("./data.json")
    .then(respeusta => respeusta.json())
    .then(pokemones => {
        pokemones.forEach(pokemon => {
            const li = document.createElement("li");
            li.innerHTML = `
                <h2>${pokemon.nombre}</h2>
                <p>tipo:${pokemon.tipo}</p>
                <p>Lvl:${pokemon.lvl}</p>
                <p>Ataque esp:${pokemon.ataque}</p>
                <p>N°:${pokemon.pokedex}</p>
                <p>Proxima evolucion:${pokemon.evolucion}</p>
                <hr/>
            `;
            listaPokemom.append(li);
        });
    });