// - Є змінна х, якій ви надаєте довільне числове значення.
// Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3

let x = +prompt('number')

if (x !== 0){
    console.log('Вірно')
}else {
    console.log('Невірно')
}

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = +prompt('time(0 - 59)')

if (time > 0 && time <=15){
    console.log('Перша частина')
} else if (time > 15 && time <=30){
    console.log('Друга частина')
} else if (time > 30 && time <=45){
    console.log('Третя частина')
} else if (time > 45 && time <=59){
    console.log('Четверта частина')
} else {
    console.log('Час введено невірно')
}

// - У змінній day дано якесь число від 1 до 31.
// Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = +prompt('day(1 - 31)')

if (day > 0 && day <=11){
    console.log('Перша декада')
} else if (day > 11 && day <=21){
    console.log('Друга декада')
} else if (day > 21 && day <=31){
    console.log('Третя декада')
} else {
    console.log('День введено невірно')
}

// - Скласти розклад на тиждень за домопоги switch.
// Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).

let numberDay = +prompt('Номер дня(1 - 7)')
if (numberDay > 0 && numberDay <= 7){
    switch (numberDay){
        case  1:
            console.log('Понеділок')
            break
        case  2:
            console.log('Вівторок')
            break
        case  3:
            console.log('Середа')
            break
        case  4:
            console.log('Четвер')
            break
        case  5:
            console.log('Пятниця')
            break
        case  6:
            console.log('Субота')
            break
        case  7:
            console.log('Неділя')
    }
} else {
    console.log('Невірно вказаний номер дня')
}



// - Користувач вводить або має два числа.
//     Потрібно знайти та вивести максимальне число з тих двох .
//     Також потрібно врахувати коли введені рівні числа.

let num1 = +prompt('num 1')
let num2 = +prompt('num 2')

if (num1 > num2){
    console.log(num1)
} else if (num2 > num1){
    console.log(num2)
} else {
    console.log('Числа рівні')
}

// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподыбне, тобто кастується до false)

let x_2 = prompt() || "default"
console.log(x_2)
