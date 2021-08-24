const numbers = [5, 13, 7, 41, 30, 5, 2, 19];

//using filter
const bigNumbers = numbers.filter(number => number > 20);
console.log(bigNumbers);

const smallNumbers = numbers.filter(number => number < 10);
console.log(smallNumbers);

const products = [
    {
        name: 'water bottle',
        price: 50,
        color: 'yellow'
    },
    {
        name: 'mobile phone',
        price: 15000,
        color: 'black'
    },
    {
        name: 'smart watch',
        price: 3000,
        color: 'white'
    },
    {
        name: 'sticky note',
        price: 30,
        color: 'pink'
    },
    {
        name: 'water glass',
        price: 3,
        color: 'white'
    }
];

//filter on objects, filter returns an array

const expensive = products.filter(product => product.price > 100);
console.log(expensive);

const blacks = products.filter(product => product.color == 'black');
console.log(blacks);
console.log('');


//using find to find an item in a object or array, 
//find returns an object/element, not an array, 
//if there are multiple answers, the find function will only return the first one.
const whiteItem = products.find(product => product.color == 'white');
console.log(whiteItem);