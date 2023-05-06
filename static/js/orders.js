let products = [
    {id:"a", sale: true, name: 'New Zealand', price:`1250`},
    {id:"b", sale: true, name: 'Califonia White', price:`1700`},
    {id:"c", sale: true, name: 'Flemish Giant', price:`3000`},
    
]

// will contain the selected items and quantities
let currentOrder = [];

/*************
 CREATE MENU ON LOAD
 ************ */

makeMenu();

function makeMenu(){
    for (let item of products){
        const orderItem = document.createElement('li')
        orderItem.classList.add('wrapper')
        orderItem.id = `${item.id}`
        document.querySelector('#itemList').appendChild(orderItem)
    
        const itemName = document.createElement('span')
        itemName.textContent = item.name;
        document.querySelector(`#${item.id}`).appendChild(itemName)
    
        const priceSelect = document.createElement('section')
        priceSelect.classList.add('wrapper')
        document.querySelector(`#${item.id}`).appendChild(priceSelect)
    
        const unitPrice = document.createElement('span')
        unitPrice.id = `${item.id}Price`;
        // fix formatting presentation at some point
        unitPrice.textContent = item.price;
        document.querySelector(`#${item.id} section`).appendChild(unitPrice)
    
        if (item.sale === true){
            // create select
            const select = document.createElement('select')
            select.id = `${item.id}Count`
            select.setAttribute('name', 'order count')
            document.querySelector(`#${item.id} section`).appendChild(select)
            
            const defaultO = document.createElement('option')
            defaultO.setAttribute('selected', true)
            defaultO.textContent = "--"
            document.querySelector(`#${item.id} section select`).appendChild(defaultO)
    
            for (let i=1; i <= 10; i++){
                const option = document.createElement('option')
                option.value = `${i}`;
                option.textContent = `${i}`;
                document.querySelector(`#${item.id} section select`).appendChild(option)
            }
        }else if (item.sale === false){
            // cafe only specification
            const cafeOnly = document.createElement('span')
            cafeOnly.style.fontSize = 'smaller'
            cafeOnly.textContent = 'Cafe only'
            document.querySelector(`#${item.id} section`).appendChild(cafeOnly)
        }
    }

}


/**********
 CALCULATIONS
 * ********* */

const sumUp = document.querySelector('#sumUp')
sumUp.addEventListener('click', calcTotal) 
//could rewrite to call calc upon 'change' for each select dropdown as a running tally, but that seems less efficient than the setup currently enabled by the naming schema
function calcTotal(){
    document.querySelector('#summary ul').replaceChildren()
    let total = 0;
    const arr = ['a','b','c']
    for (const letter of arr){
        total+= calcSubTotal(letter)
    }
    // for display purposes
    if (!String(total).includes(".")){
        total = String(total)
    } else if (String(total).split('.')[1].length >=2){
        total = Number.parseFloat(total).toFixed(2)
    } else if (String(total).split('.')[1].length === 1){
        total = String(total) + "0"
    } 

    const subtotal = document.createElement('li')
    document.querySelector('#summary ul').appendChild(subtotal)
    const subLabel = document.createElement('span')
    subLabel.textContent = 'Subtotal:';
    document.querySelector('#summary ul li:last-child').appendChild(subLabel)
    const showTotal = document.createElement('span')
    document.querySelector('#summary ul li:last-child').appendChild(showTotal)
    
    document.querySelector('#summary ul li:last-child span:last-child').textContent = `${total}`
    if (total > 0){
        document.querySelector('#checkout').classList.remove('disabled')
    }
}

// where itemLetter = lowercase letter as string for select parents. 
function calcSubTotal(itemLetter){
    let count;
    if (document.querySelector(`#${itemLetter}Count`)){
        count = document.querySelector(`#${itemLetter}Count`).value
    }
    let price = document.querySelector(`#${itemLetter}Price`).textContent
    let subtotal = 0;
    let subtotalShown;
    if (count && count !=="--"){
        subtotal = count * price // fix the calculation here
    }
    // for display purposes
    if (!String(subtotal).includes(".")){
        subtotalShown =""+ String(subtotal)
    } else if (String(subtotal).split('.')[1].length >= 2){
        subtotalShown = Number.parseFloat(subtotal).toFixed(2)
    } else if (String(subtotal).split('.')[1].length === 1){
        subtotalShown = ""+ String(subtotal)
    } 

    //element creation for summary    
    if (count && count !== '--'){
        const chosen = document.createElement('li');
        chosen.classList.add('wrapper');
        document.querySelector('#summary ul').appendChild(chosen);
        
        const chosenSum = document.createElement('span')
        const itemName = document.querySelector(`#${itemLetter} span:first-of-type`).textContent

        chosenSum.textContent = `${itemName} x ${count}`
        document.querySelector('#summary ul li:last-child').appendChild(chosenSum)

        const chosenSubtotal = document.createElement('span')
        chosenSubtotal.textContent = `Ksh. ${subtotalShown}` // add "Ksh." here
        document.querySelector('#summary ul li:last-child').appendChild(chosenSubtotal)

        // place into new object and add to array for passing onwards
        const ordered = {id: itemLetter, count: count, subtotal: subtotal}
        currentOrder.push(ordered)
    }
    return subtotal;
}
