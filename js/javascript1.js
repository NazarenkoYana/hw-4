class Human {
    constructor(name, age) {
        this.firstName = name;
        this.humanAge = age;
    }

    talk() {
        document.write('Hello! My name is ' + this.firstName + " мне " + this.humanAge + "<br>"); // метод экземпляра
    }
}

let humans = [
    new Human("Rocky", 23),
    new Human("David", 66),
];

humans.sort(function (a, b) {
    if (a.humanAge > b.humanAge) {
        return 1;
    } else {
        return -1;
    }
})

console.log(humans);