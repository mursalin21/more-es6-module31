const fish = {
    id: 58,
    name: 'King Hilsha',
    price: 9000,
    phone: '01784050711',
    address: 'Chandpur',
    dress: 'silver'
}

// const phone = fish.phone;
// const price = fish.price;
// const dress = fish.dress;
// const id = fish.id;

//shortcut to variables, similar to the upper code
const {
    phone,
    price,
    dress,
    id
} = fish;

console.log(phone, price);
console.log(phone, dress);
console.log(phone);
console.log(phone, price);
console.log(phone);
console.log(phone, id);
console.log(phone);

const company = {
    name: 'GrameenPhone',
    ceo: {
        id: 1,
        name: 'ajmol',
        food: 'fuchka'
    },
    web: {
        work: 'website development',
        employee: 22,
        framework: 'react.js',
        tech: {
            first: 'html',
            second: 'css',
            third: 'js'
        }
    }
}

//const work = company.web.work;
//const framework = company.web.framework;

//another way of doing this

const {
    work,
    framework
} = company.web;

const {
    food
} = company.ceo;

const {
    second,
    third
} = company.web.tech;

console.log(work, ',', framework, ',', food);