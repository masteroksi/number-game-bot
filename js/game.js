'use strict';
// lesson06

const isNumber = (n) => {
    return !isNaN(parseFloat(n)) && isFinite(n);
};


function init() {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    let trys = 0;
    let trysLeft = 10;

    function run() {

        const userNumber = prompt('Загадывание случайного числа от 1 до 100');

        if (userNumber === null) { // cancel
            alert('Прощальное сообщение =)');
            return;
        }
        if (!isNumber(+userNumber)) { // not a number
            alert('Введи число!');
            return run();
        }
        trys++;
        if (trysLeft <= 1) {
            const newGame = confirm('Попытки закончились, хотите сыграть еще?');
            if (newGame) {
                return init();
            }
            return;
        }
        if (+userNumber > randomNumber) {
            alert('Загаданное число меньше, и осталось попыток ' + --trysLeft);
            return run();
        }
        if (+userNumber < randomNumber) {
            alert('Загаданное число больше, и осталось попыток ' + --trysLeft);
            return run();
        }
        if (+userNumber === randomNumber) {
            const newGame = confirm(`Поздравляю, Вы угадали c ${trys} попытки!!! Хотели бы сыграть еще?`);
            if (newGame) {
                init();
            }
        }
    }

    run();
}

init();
