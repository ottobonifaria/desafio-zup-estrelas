container = document.querySelector('.container');

/* Fixa o numero maximo de personagens possíveis*/
const numeroMaximoDePersonagens = 671;

const gerarIdAleatorioDePersonagem = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

const buscarPersonagemAleatorio = () => {
    const idAleatorioDePersonagem = gerarIdAleatorioDePersonagem();
    return fetch(`https://rickandmortyapi.com/api/character/${idAleatorioDePersonagem}`, {
        method: 'GET',
        headers: {
            Accept: 'application/jason',
            "contente-Type": 'aplication/jason'
        }
    }).then((response) => response.json())
}

const incluirNovoCard = (data) => {
    container.innerHTML +=  `<div class="card">
                                <img src="` + data.image + `">
                                <table>
                                    <tr><td><strong>Nome:</strong></td><td><b>`+ data.name + `</b></td></tr>
                                    <tr><td><strong>Status:</strong></td><td><b>`+ data.status + `</b></td></tr>
                                    <tr><td><strong>Espécie:</strong></td><td><b>`+ data.species + `</b></td></tr>
                                    <tr><td><strong>Gênero:</strong></td><td><b>`+ data.gender + `</b></td></tr>
                                </table>
                            </div>`;
}

/* Busca Informações de 4 personagens aleatoriamente e inclui os cards de cada*/
for (var i = 0; i < 4; i++) {
    buscarPersonagemAleatorio()
        .then((data) => incluirNovoCard(data))
}