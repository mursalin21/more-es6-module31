class Support {
    name;
    designation = 'Support Web Dev';
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    startSession() {
        console.log(this.name, "Start a support session");
    }
}

const amir = new Support('Amir Khan', 'BD');
const salman = new Support('Salman Khan', 'Dubai');
const srk = new Support('Shahrukh Khan', 'America');
const akshay = new Support('Akshay Kumar', 'China');

console.log(amir, salman, srk, akshay);

amir.startSession();
salman.startSession();