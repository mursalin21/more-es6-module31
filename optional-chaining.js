//declare variable based on the name of an object property

const myObject = {
    x: 2,
    y: 5,
    z: 600,
    a: 25,
    b: 68
};
const {
    x,
    b
} = myObject;

console.log(x, b);

//how to bypass error of undefined element in objects
console.log('myObject.p', myObject?.p?.q);

//destructuring arrays

const [p, q] = [45, 37, 91, 86];
console.log(p, q);


const [best, faltu] = ['momotaj', 'poroshi', 'tausif'];
console.log(best, faltu);


const { } = {
    sky: 'blue',
    soil: 'mati',
    color: 'red',
    money: '500'
}