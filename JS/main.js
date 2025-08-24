// let name;
// let city;
// name = "Ivan";
// console.log(name, city);

// 2
// let name = "Ivan";
// console.log(`Привіт ${1}`);
// console.log(`Привіт ${"name"}`);
// console.log(`Привіт ${name}`);

//3 Видобути число із змінних
// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";
// let first = Number(a);
// let second = parseInt(b);
// let third = parseFloat(c);
// console.log(typeof(first), typeof(second), typeof(third));

// 4 0.2 + 0.1 = 0.3
// let a = 0.2;
// let b = 0.1;
// let c = 10;
// console.log( (a * c + b * c) / 10);

// 5 Максимум чисел 20, 10, 50, 40
// console.log(Math.max(20, 10, 50, 40));

// 6 поверніть рандомне число від 2 до 4;
// Щоб задавати певний діапозон маємо формулу random ()* (max - min) + min
// let a = Math.random()
// console.log(a);
// console.log(a*(4-2));
// console.log(a*(4-2)+2);
// console.log(Math.floor(a*(4-2)+2));

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length);

//***8**
//вивести в консоль message великими літерами
// const message = "Welcome to Bahamas!";
// console.log(message.toUpperCase());

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль
// let item = {};
// item.name ="Artem";
// item.age =25;
// item.city ="Lviv";
// console.log(item);
// delete item.city;
// item["like flowers"]= true;
// console.log(item);

//***10**
// За допомогою циклу “for…in” вивести в консоль ключі і значення об*єкта
// let item = {};
// item.name ="Artem";
// item.age = 25;
// item.city ="Lviv";
// console.log(item);
// delete item.city;
// item["like flowers"]= true;
// console.log(item);
// for (let key in item){
//     console.log(key, item[key]);
// }          



// HM2
// 1
// Якщо змінна більше нуля - виведіть true, менше - false
// // Перевірте це на варіантах 1, 0, -3.
// let a = prompt("Введіть число")
// a > 0 ? console.log(true) : console.log(false);

// 2
// Якщо змінна ="test" - виведіть true,
// Перевірте це на варіантах 'test',"qwerty", true
// let a = prompt("Введіть текст");
// a === "test" ? console.log(true) : console.log(false);

// 3
// Якщо змінна більше 10 - відніміть 5,
// менше - додайте 5, результат виведіть в консоль
// Перевірте це на варіантах 1, 10, 13.
// let a = prompt('Введіть число');
// let num = Number(a);
// if (num > 10){
//     console.log(num - 5);
// } else if (num < 10){
//     console.log(num+5);
// } else {
//     console.log("Число або рівне 10, або це не число");
// }

// 4
// /Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу
// let num = prompt("Введіть число місяця та отримаєте місяць");
// let month = Number(num);
// switch (month){
//     case 1: alert('Січень');
//     break;
//     case 2: alert('Лютий');
//     break;
//     case 3: alert('Березень');
//     break;
//     case 4: alert('Квітень');
//     break;
//     case 5: alert('Травень');
//     break;
//     case 6: alert('Червень');
//     break;
//     case 7: alert('Липень');
//     break;
//     case 8: alert('Серпень');
//     break;
//     case 9: alert('Вересень');
//     break;
//     case 10: alert('Жовтень');
//     break;
//     case 11: alert('Листопад');
//     break;
//     case 12: alert('Грудень');
//     break;
//     default: alert("Це не число місяця!")
// }

// 5
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел
// let a = prompt("Введіть будь-яке тризначне число");
// let digit1 = Number(a[0]);
// let digit2 = Number(a[1]);
// let digit3 = Number(a[2]);
// let sum = digit1 + digit2 + digit3;
// alert(`Сума ваших чисел = ${sum}`);


