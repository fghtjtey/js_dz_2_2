// 1)

let companyStarbucks = {
    name:'Starbucks Corporation',
    foundingYears:'1971',
    directions:'Coffee shop',
    products:['Coffee beverages', 'smoothies', 'tea', 'baked', 'goods', 'sandwiches'],
    address:{
        street:'2401 Utah Avenue South Seattle, Washington 98134',
        building:'SODO Center SBC',
        },
    revenue:'US$32.25 billion (2022)',
    subsidiaries:['Starbucks Coffee', 'Ethos', 'Water', 'Hear Music', 'Teavana', 'Torrefazione Italia']
}
console.log(companyStarbucks)

// 2)

// // перебираем числа от 0 до 100
// for (let i = 0; i <= 100; i++) {
//     // иначе, если число делится только на три
//     if (i % 3 === 0) {
//         console.log('Fizz');
//     }
//
//     // если число делится только на 5
//     else if (i % 5 === 0) {
//         console.log('Buzz');
//     }
//     // если делится одновременно на 3 и 5
//     else if ((i % 3 === 0) && (i % 5 === 0)) {
//         console.log('FizzBuzz');
//     }
//
//     // иначе, если всё предыдущее не подходит, то выводим само число
//     else
//         console.log(i);
// }

// 3)

// var a = prompt('Введите месяц')
// switch (a) {
//     case 'Январь':
//         console.log('Зима')
//         break
//     case 'Февраль':
//         console.log('Зима')
//         break
//     case 'Март':
//         console.log('Весна')
//         break
//     case 'Апрель':
//         console.log('Весна')
//         break
//     case 'Май':
//         console.log('Весна')
//         break
//     case 'Июнь':
//         console.log('Лето')
//         break
//     case 'Июль':
//         console.log('Лето')
//         break
//     case 'Август':
//         console.log('Лето')
//         break
//     case 'Сентябрь':
//         console.log('Осень')
//         break
//     case 'Октябрь':
//         console.log('Осень')
//         break
//     case 'Ноябрь':
//         console.log('Осень')
//         break
//     case 'Декабрь':
//         console.log('Зима')
//         break
// }
//
// // 4)
//
// const array = [[[[[[[[[[[2]]]]]]]]]]]
// // //индекс
// console.log(array[0][0][0][0][0][0][0][0][0][0][0])