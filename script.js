'use strict';

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;

    }

    #surname = 'Shtefanesa';

    get surname () {
        return this.#surname;
    }

    set surname (surname) {
        if (typeof surname === 'string' && surname.length > 10) {
            this.#surname = surname;
        } else {
            alert = 'Недопустимое значение!';
        }
    }
    
    say = () => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст пользователя :${this._age}`);

    }

    get age () {
        return this._age;
    }

    set age (age) {
        if (typeof age === 'number' && age > 0 && age < 110){
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

const ivan = new User ('Ivan', 27);
console.log(ivan.surname);
console.log(ivan.surname = 'Pivovar');
console.log(ivan.surname);

ivan.say();
