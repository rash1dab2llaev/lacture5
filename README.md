# object
Объекты же используются для хранения коллекций различных значений и более сложных сущностей. В JavaScript объекты используются очень часто, это одна из основ языка. Поэтому мы должны понять их, прежде чем углубляться куда-либо ещё.
Объект может быть создан с помощью фигурных скобок {…} с необязательным списком свойств. Свойство – это пара «ключ: значение», где ключ – это строка (также называемая «именем свойства»), а значение может быть чем угодно.
Мы можем представить объект в виде ящика с подписанными папками. Каждый элемент данных хранится в своей папке, на которой написан ключ. По ключу папку легко найти, удалить или добавить в неё что-либо.


# Example
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue"
};



# Получение доступ к объекту

# 1: objectName.propertyName
# 2: objectName["propertyName"]


# this
const person = {
  firstName: "John",
  lastName : "Doe",
  id       : 5566,
  fullName : function() {
    return this.firstName + " " + this.lastName;
  }
};


В приведенном выше примере this относится к объекту person.
т.е. this.firstName означает свойство firstName этого.
т.е. this.firstName означает свойство firstName человека.

# Что это?
В JavaScript ключевое слово this относится к объекту.
Какой объект зависит от того, как он вызывается (используется или вызывается).
Ключевое слово this относится к разным объектам в зависимости от того, как оно используется:
В объектном методе это относится к объекту. Само по себе это относится к глобальному объекту. В функции это относится к глобальному объекту. В функции в строгом режиме это не определено. В событии это относится к элементу, который получил событие. Такие методы, как call(), apply() и bind(), могут ссылаться на любой объект.


# Object.entries()
Object.entries() метод возвращает массив собственных перечисляемых свойств указанного объекта в формате [key, value], в том же порядке, что и в цикле for...in (разница в том, что for-in перечисляет свойства из цепочки прототипов). Порядок элементов в массиве который возвращается Object.entries() не зависит от того как объект объявлен. Если существует необходимость в определённом порядке, то массив должен быть отсортирован до вызова метода, например Object.entries(obj).sort((a, b) => a[0] - b[0]);.

Объект, чьи перечислимые свойства будут возвращены в виде массива [key, value].
var obj = { foo: "bar", baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// массив как объект
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// массив как объект c random сортировкой ключей
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(an_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo is property which isn't enumerable
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = "bar";
console.log(Object.entries(my_obj)); // [ ['foo', 'bar'] ]

// non-object argument will be coerced to an object
console.log(Object.entries("foo")); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]


# Object.keys()

Метод Object.keys() возвращает массив из собственных перечисляемых свойств переданного объекта, в том же порядке, в котором они бы обходились циклом for...in (разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов).

# Синтаксис
Object.keys(obj)
Метод Object.keys возвращает массив строковых элементов, соответствующих именам перечисляемых свойств, найденных непосредственно в самом объекте. Порядок свойств такой же, как и при ручном перечислении свойств в объекте через цикл.

var arr = ['a', 'b', 'c'];
console.log(Object.keys(arr)); // консоль: ['0', '1', '2']

// Массивоподобный объект
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); // консоль: ['0', '1', '2']

// Массивоподобный объект со случайным порядком ключей
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.keys(an_obj)); // консоль: ['2', '7', '100']

// Свойство getFoo является не перечисляемым свойством
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 1;

console.log(Object.keys(my_obj)); // консоль: ['foo']



# Object.values()
Метод Object.values() возвращает массив значений перечисляемых свойств объекта в том же порядке что и цикл for...in. Разница между циклом и методом в том, что цикл перечисляет свойства и из цепочки прототипов.

const object1 = {
  a: 'somestring',
  b: 42,
  c: false
};

console.log(Object.values(object1));
// Expected output: Array ["somestring", 42, false]


# DATE

# new Date - поазывает локальный время, тоеасть время компютера

let timeNow2 = new Date(0)
console.log(timeNow2);//Thu Jan 01 1970 06:00:00 GMT+0600 (Tajikistan Time)

let timeNow = new Date()
console.log(timeNow);//Mon Mar 27 2023 16:34:39 GMT+0500 (Tajikistan Time)

let date = new Date('2001-09-08')
console.log(date);//Sat Sep 08 2001 05:00:00 GMT+0500 (Tajikistan Time)


let date1 = new Date(2024, 3, 02, 15, 30, 40, 0)
console.log(date1);//Tue Apr 02 2024 15:30:40 GMT+0500 (Tajikistan Time)

let date2 = new Date(2024, 3, 02, 15)
console.log(date2);//Tue Apr 02 2024 15:00:00 GMT+0500 (Tajikistan Time)

# Date.now() Показывает время с 1970.01.01 06:00:00 в миллимекундах
let dateNow = Date.now()
console.log(dateNow);//1679918368969 Показывает время с 1970.01.01 06:00:00 в миллимекундах

# getFullYear()

let getYear = new Date()
console.log(getYear.getFullYear());//2023 Показывает год

# getMonth
let getMonth = new Date()
let months = ['January', 'Febryary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let month = getMonth.getMonth()
console.log(months[month]);//March Показывает месяц

# getDate

let getDay = new Date()
console.log(getDay.getDate());//27 Показывает день от 1 до 31

# getHours()

let getHours = new Date()
console.log(getHours.getHours());//17 Показывает часы 0т 0 до 23

# getMinutes()
let getMinut = new Date()
console.log(getMinut.getMinutes());//22 Показывает минут 0т 0 до 59


# setDate()-устанавливает день месяца даты

let day = new Date()
console.log(day);//Mon Mar 27 2023 16:37:08 GMT+0500 (Tajikistan Time)

let setDay = day.setDate(09)//1678362064810 - устанавливаем день но показывает в миллисекунах
console.log(setDay);

let dayStr = new Date(setDay)
console.log(day);//Thu Mar 09 2023 16:46:05 GMT+0500 (Tajikistan Time)

# setMonth
let monthDate = new Date()
monthDate.setMonth(7)
console.log(monthDate);//Sun Aug 27 2023 17:00:55 GMT+0500 (Tajikistan Time)
console.log(monthDate.setMonth(8));//1695816098043

# setFullYear
let setYear = new Date()
let setYear2 = setYear.setFullYear(setYear.getFullYear(), setYear.getMonth() - 6)
console.log(setYear2);