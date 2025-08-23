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