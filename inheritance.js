class TeamMember {
    name;
    address = 'BD';
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
}


class Support extends TeamMember {
    designation = 'Support Web Dev';
    groupSupportTime;
    constructor(name, address, time) {
        super(name, address);
        this.groupSupportTime = time;
    }
    startSession() {
        console.log(this.name, "Start a support session");
    }
}

class StudentCare extends TeamMember {
    designation = 'Care Web Dev';

    buildRoutine(student) {
        console.log(this.name, "Build a routine for", student)
    }
}


class NeptuneDev extends TeamMember {
    codeEditor;
    designation = 'Neptune Web Dev';

    constructor(name, address, editor) {
        super(name, address);
        this.codeEditor = editor;
    }

    releaseApp(version) {
        console.log(this.name, "release app version", version)
    }
}


const amir = new Support('Amir Khan', 'BD', 11);
const salman = new Support('Salman Khan', 'Dubai', 4);
const srk = new Support('Shahrukh Khan', 'America', 9);
const akshay = new Support('Akshay Kumar', 'China', 7);


const alia = new StudentCare('Alia Bhatt', 'Canada');
const preety = new NeptuneDev('Preety Zinta', 'England', 'Visual Studio Code');


console.log(amir);
console.log(alia);
console.log(preety);
preety.releaseApp('1.45.7');