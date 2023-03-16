//título, foto, descrição, preço e um botão funcional de adicionar ao carrinho  CARDS
function createCards(list) {
    for (let i = 0; i < list.length; i++) {
        //CRIANDO UMA CONSTANTE GLOBAL PARA ADICIONAR OS CARDS DOS ITENS DA LOJA
        let ulItens = document.querySelector('.vitrine_item')
        let liItem = document.createElement('li')

        ulItens.appendChild(liItem)
        liItem.innerHTML = 
        `<div class="img_item_div">
            <img id="product_img" src="${list[i].img}" alt="">
         </div>
         <h2 class="name_item">${list[i].nameItem}</h2>
         <p class="desc_item">${list[i].description}</p>
         <p class="price_item"> ${list[i].value}</p>
         <button class="btn_add_cart" id="${list[i].id}">${list[i].addCart}</button>`
    }
}
createCards(data)


// ---------------------- TIRAR DUVIDA COM MONITORES------------------------------------
// function createCards(list) {

//     //CRIANDO UMA CONSTANTE GLOBAL PARA ADICIONAR OS CARDS DOS ITENS DA LOJA
//     let ulItens = document.querySelector('.vitrine_item')
    
//     for (let i = 0; i < list.length; i++) {

//         //CRIAR CARD//
//         let liItem = document.createElement('li')
//         let cardItem = document.createElement('div') 
//         let imgDiv = document.createElement('div')
//         let imgItem = document.createElement('img')
//         let nameIten = document.createElement('h3')
//         let descItem = document.createElement('p')
//         let valueItem = document.createElement('p')
//         let btnCartAdd = document.createElement('button')

//         //ATRIBUINDO CLASSES SE NECESSÁRIO
        
        
//         //ATRIBUINDO OS VALORES DAS KEYS
//         imgItem.src = list[i].img
//         nameIten.innerText = list[i].nameItem
//         descItem.innerText = list[i].description
//         valueItem.innerText = list[i].value
//         btnCartAdd = list[i].addCart
        
//         //INSERINDO OS ELEMENTOS FILHO DENTRO DO ELEMENTO PAI 
//         ulItens.appendChild(liItem)
//         liItem.appendChild(cardItem)

//         cardItem.appendChild(imgDiv)
//         imgDiv.appendChild(imgItem)
//         cardItem.appendChild(nameIten)
//         cardItem.appendChild(descItem)
//         cardItem.appendChild(valueItem)
//         cardItem.appendChild(btnCartAdd)
//     }
// }
// createCards(data)
