const person = {
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const student = Object.create(person);
student.name = "Raghuram";
student.greet();