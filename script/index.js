let increaseValues = document.querySelector('#sum_value')
let spanQuant = document.querySelector('#span_quant')
let conttt = 0
let sumValue = 0
let listaUL = document.querySelector('.vitrine_item')
let cart_list = document.querySelector('.cart-products')
let CartEmpty = document.querySelector('.cart-empty')
let cartDetails = document.querySelector('.cart-details')

function createCards(list) {

    for (let i = 0; i < list.length; i++) {
        let produto = list[i]
        //ELEMENTOS DO CARD
        let li = document.createElement('li')
        let img = document.createElement('img')
        let h3 = document.createElement('h3')
        let p1 = document.createElement('p')
        let p2 = document.createElement('p')
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
        if(conttt == 0){
            cartDetails.style.display = 'none'
        }

        //EVENTO DE CLIQUE, QUANDO O BOTÃO FOR CLICADO, SERÁ REFERENCIADO O ITEM, E RETORNADO A PARTIR DO ID AS INFORMAÇÕES
        btn.addEventListener('click', function (e) {
            conttt++
            spanQuant.innerHTML = `${conttt}`
            sumValue += list[i].value
            increaseValues.innerHTML = `R$ ${sumValue.toFixed(2)}`

            let id_Produto = e.target.id
            let id = parseInt(id_Produto.substring(8))  //recortar parte do indice a partir do indice informado

            let item = findItem(id) //FAZENDO USO DA FUNÇÃO FINDITEM PASSANDO COMO PARAMETRO O CLICK DO BOTÃO 
            let itemProduct = createItemCartCard(item)

            cart_list.appendChild(itemProduct)

            //OCULTAR E MOSTRAR CARRINHO VAZIO E DETALHES DO CARRINHO
            if (conttt > 0) {
                CartEmpty.style.display = 'none'
                cartDetails.style.display = 'flex'
            }
        })
    }
}
//PROCURAR ITEM COM BASE NO ID DO BUTTON CLICADO E RETORNAR O OBJETO
function findItem(id) {
    for (let i = 0; i < data.length; i++) {
        if (data[i].id == id) {
            return data[i]
        }
    }
}
function createItemCartCard(item) {

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
    btn.addEventListener('click', function (event) {

        let itemPath = event.composedPath() //CAMINHO DO ITEM PERTECENTE AO ID DO BOTAO CLICADO
        itemPath[2].remove()    // POSIÇÃO 2: REPRESENTA O PAI DO BOTÃO E TODOS OS ELEMENTOS REFERENTES AO ITEM DO BOTÃO A SER REMOVIDO DA LISTA
        conttt--
        spanQuant.innerHTML = `${conttt}`
        sumValue -= item.value
        increaseValues.innerHTML = `R$ ${sumValue.toFixed(2)}`

        //MOSTRAR E OCULTAR O CARRINHO VAZIO E DETALHES DO CARRINHO
        if (conttt == 0) {
            CartEmpty.style.display = 'flex'
            cartDetails.style.display = 'none'
        }
    })
    return li
}
createCards(data)

//BARRA DE PESQUISA (DEMO/TIRA-DÚVIDAS -> WILSON)
let findButtonItem = document.querySelector('.search-button')

findButtonItem.addEventListener('click', function(){

    let findItemInput = document.querySelector('.search-input')
    let foundItemReturn = data.filter(function (item){

        let normalizeString = findItemInput.value.toUpperCase()
        if(item.nameItem.toUpperCase().includes(normalizeString)){
            return true
        }
        return false
    })
    // "REMOVENDO/ REESCREVENDO O VALOR PARA VAZIO" DA VITRINE PARA RECEBER APENAS O ITEM QUE FOI PESQUISADO
    listaUL.innerHTML = ''
    createCards(foundItemReturn)
})

//CHAMANDO E DECLARANDO OS BOTOES DO NAV
const buttonsFilter = document.querySelectorAll('.filter-p')

function filterCards(tagName){
    if(tagName === 'Todos'){
        return data
    }

    let usersFiltred = []

    for(let i = 0; i < data.length; i++){
        if (data[i].tag == tagName) {
            usersFiltred.push(data[i])
        }
    }
    return usersFiltred
}

// const cardsss = filterCards('Todos')
// console.log(cardsss)

//QUANDO UM DOS BOTOES DO NAV FOREM CLICADOS, SEU VALOR EM STRING SERÁ COMPARADO COM O VALOR DAS TAGS DO ITENS
// ---- (DEMO 13/03 --> WILSON) ---- //
for(let i = 0; i < buttonsFilter.length; i++){
    buttonsFilter[i].addEventListener('click', function(){
        const tag = buttonsFilter[i].innerText
        const cardsFiltred = filterCards(tag)
        console.log(cardsFiltred)
        listaUL.innerHTML = ''
        createCards(cardsFiltred)
    })
}