const iceCream = [{
    name: 'Blueberry',
    price: 1.25,
    quantity: 0
},
{
    name: 'Strawberry',
    price: 1,
    quantity: 0
},
{
    name: 'Chocolate',
    price: 1.25,
    quantity: 0
},
{
    name: 'Pistachio',
    price: 1.25,
    quantity: 0
},
{
    name: 'Gum',
    price: 1,
    quantity: 0
},
{
    name: 'Banana & Mint',
    price: 1.25,
    quantity: 0
}]

const toppings = [{
    name: 'Sprinkles',
    quantity: 0,
    price: .25
},
{
    name: 'Chocolate Chips',
    price: .25,
    quantity: 0
},
{
    name: 'Gummy worms',
    price: .5,
    quantity: 0
}]

const vessels = [{
    name: 'Cone',
    quantity: 0,
    price: .25
},
{
    name: 'Cups',
    price: .25,
    quantity: 0
},
{
    name: 'Hands',
    price: .5,
    quantity: 0
}]


function addToOrderByName(icecreamName) {
    for (let i = 0; i < iceCream.length; i++) {
        console.log(iceCream[i])
        if (icecreamName == iceCream[i].name) {
            iceCream[i].quantity += 1
            // console.log('➕☕', iceCream[i]);
        }
    }
    drawOrder()
}