class Person {
    constructor(first, age) {
        this.first = first;
        this.age = age;
    }
}

class PersonNationality extends Person {
    constructor(first, age) {
        super(first, age);
        this.nationality = "PT";
    }
}

class PersonAge extends PersonNationality {
    constructor(first, age) {
        super(first,age);
        this.evaluateAge = this.eval() 
    }

    eval() {
        if (this.age <= 12) {
            return "criança";
        } else if (this.age <= 21) {
            return "adolescente";
        } else {
            return "idoso";
        }
    }
}

var person1 = new PersonAge("Miguel", 20);
var person2 = new PersonAge("Pedro", 30);

console.log(person1);
console.log(person2);