// базовый класс
class Human {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    talk() {
        document.write("Hello My Name is " + this.name + " " + this.age + "<br />");
    }
}

// производный класс (дочерний класс)
class Student extends Human {
    talk() {
        super.talk();
        document.write("I'm currently studying at the university <hr />");
    }
}

class Worker extends Human {
    constructor(name, age, money) {
        super(name, age);
        this.money = money;
    }

    info() {
        document.write(this.name + " money: " + this.money + "<br />");
    }
}

class Manager extends Human {
    talk() {
        super.talk();
        document.write("I'm manager <hr />");
    }
}


let Rocky = new Human("Rocky", 23);
console.log(Rocky);
Rocky.talk();
let David = new Student("David", 66);
David.talk();
console.log(David);
let Alex = new Manager("Alex", 16);
console.log(Alex);
Alex.talk();
let Tom = new Worker(`Alex`, 30);
Tom.talk();
Tom.info();



// let humans = [
//     new Human("Rocky", 23),
//     new Human("David", 66),
//     new Human("Alex", 16),
// ];
//
// humans.Rocky.talk();