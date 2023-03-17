//título, foto, descrição, preço e um botão funcional de adicionar ao carrinho  CARDS
// function createCards(list) {
//     for (let i = 0; i < list.length; i++) {
//         //CRIANDO UMA CONSTANTE GLOBAL PARA ADICIONAR OS CARDS DOS ITENS DA LOJA
//         let ulItens = document.querySelector('.vitrine_item')
//         let liItem = document.createElement('li')

//         liItem.className = 'card'
//         ulItens.appendChild(liItem)
//         liItem.innerHTML = 
//         `<div class="img_item_div">
//             <img id="product_img" src="${list[i].img}" alt="">
//          </div>
//          <h2 class="name_item">${list[i].nameItem}</h2>
//          <p class="desc_item">${list[i].description}</p>
//          <p class="price_item"> ${list[i].value}</p>
//          <button class="btn_add_cart" id="item_${list[i].id}">${list[i].addCart}</button>`
//     }
// }
// createCards(data)

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
let increaseValues = document.querySelector('#sum_value')
let spanQuant = document.querySelector('#span_quant')
let conttt = 0
let sumValue = 0
let listaUL = document.querySelector('.vitrine_item')
let cart_list = document.querySelector('.cart-products')
let CartEmpty = document.querySelector('.cart-empty')
let cartDetails = document.querySelector('.cart-details')

function createCards(list){

    for(let i = 0; i < list.length; i++){
        let produto = list[i]
    //ELEMENTOS DO CARD
        let li = document.createElement('li')
        let img =  document.createElement('img')
        let h3 = document.createElement('h3')
        let p1 =  document.createElement('p')
        let p2 =  document.createElement('p')
        let btn = document.createElement('button')

    //ATRIBUIÇÃO DE ID/CLASSES/VALORES AOS ELEMENTOS
        li.id = `id_${produto.id}`
        li.classList.add('card')
        img.src = produto.img
        img.className = 'img_tr'
        h3.innerText = produto.nameItem
        h3.className = 'h3_list'
        p1.innerText = produto.description
        p1.className = 'p1'
        p2.innerText = `R$ ${produto.value.toFixed(2)}`
        p2.className = 'p2'
        btn.innerHTML = `${produto.addCart}`
        btn.id = `item_id_${produto.id}`
        btn.classList.add('btn_add_cart')
        
    //INSERINDO OS ELEMENTOS TAG PAI/ ORDEM  HIERARQUIA
        li.appendChild(img)
        li.appendChild(h3)
        li.appendChild(p1)
        li.appendChild(p2)
        li.appendChild(btn)
        listaUL.appendChild(li)

    //INICIAR EM TELA OCULTADO
        cartDetails.style.display = 'none'
        
    //EVENTO DE CLIQUE, QUANDO O BOTÃO FOR CLICADO, SERÁ REFERENCIADO O ITEM, E RETORNADO A PARTIR DO ID AS INFORMAÇÕES
        btn.addEventListener('click', function(e){ 
            conttt++ // CONTADOR QUE ATUALIZADA CADA VEZ QUE O ITEM É ADICIONADO NO CARRINHO
            spanQuant.innerHTML = `${conttt}`
            
            sumValue += list[i].value //CADA VEZ QUE O BOTAO DE ADICIONAR FOR CLICACO, IRA SOMAR OS VALORES DOS ITENS NO CARRINHO
            increaseValues.innerHTML = `R$ ${sumValue.toFixed(2)}`
            
            let id_Produto = e.target.id     // atribuindo a referencia de id do item clicado
            let id =  parseInt(id_Produto.substring(8))  //recortar parte do indice a partir do indice informado
            
            let item = findItem(id) // FAZENDO USO DA FUNÇÃO FINDITEM PASSANDO COMO PARAMETRO O CLICK DO BOTÃO 
            
            let itemProduct = createItemCartCard(item) // VARIAVEL RECEBENDO COMO CONTEUDO A REFERENCIA DO ID RECEBIDO PELA ATRIBUIÇÃO ANTERIOR 'ITEM'
            // E CRIANDO UM MINI CARD PARA ARMAZENAR DENTRO DO CART
            cart_list.appendChild(itemProduct) //ADICIONA O OBJETO A UL HTML
            
            //OCULTAR E MOSTRAR CARRINHO VAZIO E DETALHES DO CARRINHO
            if(conttt > 0){
                CartEmpty.style.display = 'none'
                cartDetails.style.display = 'flex'
            }
        })
    }
}
//PROCURAR ITEM COM BASE NO ID DO BUTTON CLICADO E RETORNAR O OBJETO
function findItem(id){
    for(let i = 0; i < data.length; i++){
        if(data[i].id == id){
            return data[i]
        }
    }
}
function createItemCartCard(item){
//CRIANDO O CARD PARA EXIBIR DENTRO DO CARRINHO
    let li = document.createElement('li')
    let img = document.createElement('img')
    let divElements = document.createElement('div')
    let h3 = document.createElement('h3')
    let p2 = document.createElement('p')
    let btn = document.createElement('button')

    li.id = `idL_${item.id}`
    li.classList.add('card_list')
    img.src = item.img
    img.className = 'card_img'
    divElements.classList.add('div_elements_cart')
    h3.innerText = item.nameItem
    h3.className = 'h3_cart'
    p2.innerText = `R$ ${item.value.toFixed(2)}`
    p2.className = 'p2_cart'
    btn.innerHTML = 'Remover'
    btn.id = `cart_id_${item.id}`
    btn.classList.add('btn_remove_cart')

    li.appendChild(img)
    li.appendChild(divElements)
    divElements.appendChild(h3)
    divElements.appendChild(p2)
    divElements.appendChild(btn)

//EVENTO DE REMOÇÃO DO ITEM DO CARRINHO
    btn.addEventListener('click', function(event){

        let itemPath = event.composedPath() //CAMINHO DO ITEM PERTECENTE AO ID DO BOTAO CLICADO
        itemPath[2].remove()    // POSIÇÃO 1: REPRESENTA O PAI DO BOTÃO E TODOS OS ELEMENTOS REFERENTES AO ITEM DO BOTÃO A SER REMOVIDO DA LISTA
        console.log(itemPath)

        conttt-- // CONTADOR QUE ATUALIZADA CADA VEZ QUE O ITEM É REMOVIDO NO CARRINHO
        spanQuant.innerHTML = `${conttt}`

        sumValue -= item.value //CADA VEZ QUE O BOTAO DE ADICIONAR FOR CLICACO, IRA SOMAR OS CALORES DOS ITENS NO CARRINHO
        increaseValues.innerHTML = `R$ ${sumValue.toFixed(2)}`

        //MOSTRAR E OCULTAR O CARRINHO VAZIO E DETALHES DO CARRINHO
        if(conttt == 0){
            CartEmpty.style.display = 'flex'
            cartDetails.style.display = 'none'
        }
    })
    return li
}
createCards(data)

