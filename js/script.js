let produtos = document.querySelector('.produtos')

fetch('items-p.json')
    .then(resposta => resposta.json())
    .then(dados => dados.forEach((burger)=>{

        let card = document.createElement('a')
        card.classList.add('item-p')
        produtos.appendChild(card)

        card.innerHTML = `
        <div class="foto">
        <img class="texas-burger"src="./img/${burger.foto}.png">
        </div>
        <div class="txt-info">
        <div class="tipo">
        <p>${burger.tipo}</p>
        </div>
        <div class="nome-produto">
        <h4>${burger.nome}</h3>
        </div>
        <div class="valor-produto">${burger.valor}</div>
        </div>
        `
    }))