/* Fixa o numero maximo de personagens possíveis*/
const numeroMaximoDePersonagens = 671;

/* Busca Informações de 4 personagens aleatoriamente*/
for (var i = 0; i < 4; i++) {
    // gera valor aleatorio //
    const idAleatorio = Math.floor(Math.random() * numeroMaximoDePersonagens);

    /* Conecta a API à nossa pagina */
    fetch(`https://rickandmortyapi.com/api/character/${idAleatorio}`, {
        method: 'GET',
        headers: {
            Accept: 'application/jason',
            "contente-Type": 'aplication/jason'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            var container = document.querySelector('.container');
            container.innerHTML += `<div class="card">
                                        <img src="` + data.image + `">
                                        <table>
                                            <tr><td><strong>Nome:</strong></td><td>`+ data.name + `</td></tr>
                                            <tr><td><strong>Status:</strong></td><td>`+ data.status + `</td></tr>
                                            <tr><td><strong>Espécie:</strong></td><td>`+ data.species + `</td></tr>
                                        </table>
                                    </div>`;
        })
}