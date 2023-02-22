
const sum = (a, b) => {
    a + b
}

sum(1, 2)


class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    getName() {
        return this.name
    }
    setName(name) {
        return this.name = name
    }

    
 }


 const person = new Person('John', 20)
