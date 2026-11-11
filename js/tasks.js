console.log('Скрипт подключён'); 

const fullName = 'андреева яна';
const group = 'ис-1-25';
let pagesCount = 5;
const isStudent = true;

console.log('имя: ' + fullName);
console.log(`группа: ${group}, страниц на сайте: ${pagesCount}`);

pagesCount = pagesCount + 1;

console.log(`после доработки страниц: ${pagesCount}`);
console.log('студент:', isStudent);

//задача 2
console.log(typeof 42);
console.log(typeof 'текст');
console.log(typeof true);
let notSet;
console.log(typeof notSet);
console.log('5' + 5);
console.log('5' - 2);
console.log(5 + 5);
console.log(Number('12') + 3);
console.log(Number('abc'));

//задача 3
const width = 12;
const height = 7;
console.log('площадь:', width * height);
console.log('периметр:', 2 * (width + height));

const mark1 = 5;
const mark2 = 4;
const mark3 = 5;
const mark4 = 4;
const mark5 = 5;
const average = (mark1 + mark2 + mark3 + mark4 + mark5) / 5;
console.log('средний балл:', average.toFixed(2));

const totalMinutes = 195;
const hours = Math.floor(totalMinutes / 60);
const minutes = totalMinutes % 60;
console.log(`${totalMinutes} минут = ${hours} ч ${minutes} мин`);

// задача 4
const city = '  чебоксары ';
console.log(city.length);
console.log(city.trim());
console.log(city.trim().toUpperCase());

const text = 'практика по веб-разработке';
console.log(text.slice(0, 8));
console.log(text.includes('веб'));

const greeting = `привет, ${fullName}! добро пожаловать на сайт.`;
console.log(greeting);
