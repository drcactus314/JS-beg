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

// HM 3
// -- 1 --
// У вас є масив об’єктів fruts, і в кожному з них є name
// Напишіть код, який перетворює їх в масив імен.
// const fruts = [
//   { id: 0, name: "Apple" },
//   { id: 1, name: "Tomat" },
//   { id: 2, name: "Cherry" },
//   { id: 3, name: "Orange" },
// ];
// let newArr = fruts.map(item => item.name);
// console.log(newArr);

// -- 2 --
//Виведіть парні числа від 2 до 10, використовуючи цикл for.
// for (let i = 2; i <= 10; i += 2) {
//   console.log(i);
// }

// -- 3 --
//Замініть цикл "for" на "while"
// for (let i = 0; i < 5; i++) {
// console.lpg( `цифра ${i}!` );
// }
// let i = 1;
// while (i <= 5) {
// console.log( `цифра ${i}!` );
// i+=1;
// }

// -- 4 --
//Напишіть цикл, який пропонує prompt ввести число більше за 100.
//Якщо відвідувач введе менше число – попросити ввести ще раз, і так далі.
//Цикл повинен запитувати число доти, доки відвідувач не введе число,
// більше за 100, або не скасує ввід/введе порожній рядок.

// let number = +prompt("Введіть число більше за 100");
// while (number <= 100){
//     alert("Будь ласка, введіть ще раз");
//     number = +prompt("Введіть число більше за 100");
// };

// -- 5 --
// Вирахуйте середній вік
// const girls = [
// { age: 23, name: "Оля" },
// { age: 29, name: "Аня" },
// { age: 10, name: "Юля" },
// { age: 20, name: "Катя" },
// ];
// let age = girls.map(item =>item.age);
// console.log(age);
// let sum = age.reduce((avarage, item) => avarage + item) / age.length;
// console.log(sum);

// HM 4
// ---1---
// Перепишіть функцію, використовуючи '?' або '||'
// function checkAge(age) {
// if (age > 18) {
// return true;
// } else {
// return confirm('Батьки дозволили?');
// }
// }
// function checkAge(age) {
// return age > 18 ? true : confirm('Батьки дозволили?');
// }
// checkAge(12);

// ---2---
// Напишіть функцію min(a, b), яка повертає менше з двох чисел a та b.
// let min = (a, b) =>{
//     return console.log(Math.min(a, b));
// }
// min(30, 49);

// ---3---
// Перепишіть з використанням стрілкових функцій
// Замініть Функціональні Вирази на стрілкові функції у коді нижче:
// function ask(question, yes, no) {
//   if (confirm(question)) yes();
//   else no();
// }
// ask(
//   "Ви згодні?",
//   function () {
//     alert("Ви погодились.");
//   },
//   function () {
//     alert("Ви скасували виконання.");
//   }
// );

// let ask = (question, yes, no) => {
//   if (confirm(question)) yes();
//   else no();
// };

// ask(
//   "Ви згодні?",
//   () => {
//     alert("Ви погодились.");
//   },
//   () => {
//     alert("Ви скасували виконання.");
//   }
// );

// HM5
// ---1---
// написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind
// const pupil = {
//     name: "Ім'я",
//     faculty: "Факультет",
//     avgMark: "Середній бал",
//     aLess: "Пропущено занять",
//     getInfo: function(){
//         console.log(`Студент/-ка ${this.name} вчиться на спеціальності ${this.faculty} та має середній бал ${this.avgMark}. Зокрема пропустив/-ла ${this.aLess} уроків`);
//     }
// }

// const Andrii = {
//     name: "Andrii",
//     faculty: "International Relations",
//     avgMark: "8,7",
//     aLess: "35"
// };
// const Ruslana = {
//       name: "Ruslana",
//     faculty: "International Relations",
//     avgMark: "10,7",
//     aLess: "15"
// };
// const Artem = {
//       name: "Artem",
//     faculty: "International Relations",
//     avgMark: "11,7",
//     aLess: "75"
// };
//  pupil.getInfo.call(Andrii);
//  pupil.getInfo.bind(Ruslana)();
//  pupil.getInfo.apply(Artem);

// // ---2---
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const term = {
//     getTerminology(){
//         console.log(`${this.term}`);
//     }
// };

// const htmlTerm = {
//     term: "Html - це скелет сайту"
// }
// const cssTerm = {
//     term: "Css - це каскадні стилі до елементів в документі."
// }

// // const getHtml = document.querySelector("#html").addEventListener("click", );
// const getCss = document.querySelector("#css").addEventListener("click", term.getTerminology.bind(cssTerm));
// const getHtml = document.querySelector("#html").addEventListener("click", term.getTerminology.bind(htmlTerm));

// --- 3 ---
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4
// const getFruits = function(name, pricePerKilo, quantity){
// return `${name} буде коштувати `+ pricePerKilo * quantity + ` грн`;
// return {
//     name: name,
//     amount: pricePerKilo * quantity
// }
// };
// getFruits("banana", 30, 4.5);
// console.log(
// getFruits("banana", 30, 4.5));

// створити початковий клас Abonent, де зберігатимуться ім*я і номер
// створити set який прийматиме телефон і номер
// створити get який виводитиме данні про абонента
// створити три різних юзери
// вивести данні
//
// class Abonent {
//   constructor(options) {
//     this.name = options.name,
//     this.number = options.number;
//   }

//   set name (newName){
//      this.newName = `Ваш ім'я ${newName}`;
//   }
//   set number (newNumber){
//      this.newNumber = `Ваш номер телефону ${newNumber}`;
//   }
//   get name(){
//     return `${this.newName} та ${this.newNumber}`
//   }
// }
// const abon = new Abonent({
//   name: "Andrii",
//   number: "380"
// });

// const abon2 = new Abonent({
//   name: "Mariia",
//   number: "380437934"
// });

// const abon3 = new Abonent({
//   name: "Artem",
//   number: "0945637293"
// });
// console.log(abon,abon2,abon3);

// HM6
// --- Calculator---
// Створіть функцію-конструктор Calculator, який створює об’єкти з трьома методами:
// read() запитує два значення за допомогою prompt і запам’ятовує їх у властивостях об’єкта
// sum() повертає суму цих властивостей
// mul() повертає результат множення даних властивостей

// function Calculator() {
//   this.read = function () {
//     this.a = +prompt("Введіть 1 число", 0);
//     this.b = +prompt("Введіть 2 число", 0);
//   };
//   this.sum = function () {
//     return this.a + this.b;
//   };
//   this.mult = function () {
//     return this.a * this.b;
//   };
// }
// let user1 = new Calculator ();
// user1.read();
// console.log(user1.sum(), user1.mult());

//
// HM7
// Напишіть код, щоб вибрати елемент з атрибутом data-widget-name з документа
// та прочитати його значення.
// <!DOCTYPE html>
// <html>
// <body>
// <div data-widget-name="menu">Виберіть жанр</div>
// <script> const atElem = document.querySelector('#it');
    // console.log(atElem.getAttribute('data-widget-name'));</script>
// </body>
// </html>


// //HM 8
// -----1----
// Напишіть такий JavaScript, щоб після натискання на кнопку button, елемент
// <div id="text"> зникав.

// const elem = document.querySelector("#text");
// const hideBtn = document.querySelector("#btn");
// function hideText(){
//     elem.style.display = "none";
// }
// hideBtn.addEventListener("click", hideText)

// -----2----
// Напишіть такий код, щоб після натискання на кнопку, вона зникала.
// const btn = document.querySelector("#btn");
// function hideBtn(){
//     btn.classList.add("hide");
// }
// btn.addEventListener("click", hideBtn);

// -----3----
// Створіть дерево, яке показує/приховує дочірні вузли при кліці
// const parent = document.querySelector(".parent");
// const child = document.querySelector(".child");
// parent.addEventListener("click", ()=>{
//     let children = document.querySelectorAll(".child");
//     children.forEach(child => {
//         child.classList.toggle("hide");
//     });
// });
