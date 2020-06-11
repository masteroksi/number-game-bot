'use strict';
// lesson06

const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


const randomNumber = Math.floor(Math.random() * 100) + 1;
let trys = 0;

function run() {

    const userNumber = prompt('Загадывание случайного числа от 1 до 100');

    if (userNumber === null) {
        return;
    }
    if (!isNumber(+userNumber)) {
        alert('Введи число!');
        return run();
    }
    trys++;
    if (+userNumber > randomNumber) {
        alert('Загаданное число меньше');
        return run();
    }
    if (+userNumber < randomNumber) {
        alert('Загаданное число больше');
        return run();
    }
    if (+userNumber === randomNumber) {
        alert('Вы угадали с попытки: ' + trys);
    }
}

run();
