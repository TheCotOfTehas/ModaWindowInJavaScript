let fruits =[
    {id: 1, title: 'Сыр 1', price: 1000, img: 'https://kipmu.ru/wp-content/uploads/syr.jpg'},
    {id: 2, title: 'Сыр 2', price: 1100, img: 'http://russkayakuhnya1.ru/wp-content/uploads/2014/12/kolbasa-sir-foto-07.jpg'},
    {id: 3, title: 'Сыр 3', price: 1200, img: 'https://najzdravijahrana.com/wp-content/uploads/2014/09/priprema-mladog-sira.jpg'}
]
const toHTML = fruit => `
    <div class="col">
        <div class="card">
            <img class="card-img-top" style="width: 300px; height: 300px;" src="${fruit.img}" alt="${fruit.title}">
            <div class="card-body">
            <h5 class="card-title">${fruit.title}</h5>
            <a href="#" class="btn btn-primary" data-btn="price" data-id="${fruit.id}">Посмотреть цену</a>
            <a href="#" class="btn btn-danger" data-btn = "remove" data-id="${fruit.id}">Удалить</a>
            </div>
        </div>
    </div>
`
function render(){
    const html =fruits.map(toHTML).join('')
    document.querySelector('#fruits').innerHTML = html
}

render()
const priceModal = $.modal({
    title: 'Цена на Товар',
    closebel: true,
    width: '300px',
    height: '300px',
    footerButtons: [
        {text: 'Закрыть', type: 'primary', handler(){
            priceModal.close()
        }},
    ]
})

/*const confirmModal = $.modal({
    title: 'Вы уверены',
    closebel: true,
    width: '400px',
    footerButtons: [
        {text: 'Отменить', type: 'secondary', handler(){
            confirmModal.close()
        }},
        {text: 'Удалить', type: 'danger', handler(){
            confirmModal.close()
        }},
    ]
})*/

document.addEventListener('click', event => {
    event.preventDefault()
    const btnType = event.target.dataset.btn
    const id = +event.target.dataset.id
    const fruit = fruits.find(f => f.id === id)

    if(btnType == 'price'){
        priceModal.setContent(`
            <p>Цена на ${fruit.title}: <strong>${fruit.price}</strong>руб</p>
        `)
        priceModal.open()
    } else if (btnType === 'remove'){
        $.confirm({
            title: 'Вы уверены?',
            content: `<p>Вы удаляете Сыр : <strong>${fruit.title}</strong></p>`
        }).then(()=>{
            fruits = fruits.filter(f => f.id !== id)
            render()
        }).catch(()=>
            console.log('Cancel')
        )
    }
})