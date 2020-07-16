const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('tutorial', (num1, num2) => {
    console.log(num1 + num2);
});

eventEmitter.emit('tutorial', 1, 3);

class Person extends EventEmitter {
    constructor(name) {
        super();
        this._name = name;
    }

    get name() {
        return this._name;
    }
}


let ibra = new Person('Ibraheem');
ibra.on('name', () => {
    console.log('my name is ' + ibra.name);
})

ibra.emit('name');