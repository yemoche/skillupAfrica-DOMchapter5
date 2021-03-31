// some parts of javascript copied from tutorial class by Telmo Sampaio***/

let carts = document.querySelectorAll('.add-cart');

let products = [
    {
        name: 'Blue Suit',
        tag: 'bluetshirt',
        price: 20,
        inCart: 0

    }
    {
        name: 'Executive Fashion',
        tag: 'affluence',
        price: 15,
        inCart: 0

    }
]
    
for(indexCart=0; indexCart < carts.length; indexCart++) {
 
    carts[indexCart].addEventListener('click', ()=>{
    cartNumbers();
    })
}

function onLoadCartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    if(productNumbers) {
        document.querySelector('.cart span').textContent = productNumbers;
    }
}

function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers');

    productNumbers = parseInt(productNumbers);

    if(productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1);
        document.querySelector('.cart span').textContent = productNumbers + 1;
        } else {
            localStorage.setItem('.cartNumbers', 1);
            document.querySelector('.cart span').textContent = 1;

        }
    
}

onLoadCartNumbers();



