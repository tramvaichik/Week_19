class Worker {
    constructor(name, surname, rate, days) {

        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }

    getSalary() {
        let result = this.rate * this.days;
        return result;
    }

}

let worker = new Worker("Булочка", "Изюмова", 15, 28)

console.log(worker.name);
console.log(worker.surname);
console.log(worker.rate);
console.log(worker.days);
console.log(worker.getSalary());