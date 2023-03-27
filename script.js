//new Date - поазывает локальный время, тоеасть время компютера

let timeNow2 = new Date(0)
console.log(timeNow2);//Thu Jan 01 1970 06:00:00 GMT+0600 (Tajikistan Time)

let timeNow = new Date()
console.log(timeNow);//Mon Mar 27 2023 16:34:39 GMT+0500 (Tajikistan Time)

let date = new Date('2001-09-08')
console.log(date);//Sat Sep 08 2001 05:00:00 GMT+0500 (Tajikistan Time)1

let date1 = new Date(2024, 3, 02, 15, 30, 40, 0)
console.log(date1);//Tue Apr 02 2024 15:30:40 GMT+0500 (Tajikistan Time)

let date2 = new Date(2024, 3, 02, 15)
console.log(date2);//Tue Apr 02 2024 15:00:00 GMT+0500 (Tajikistan Time)

//Date.now() Показывает время с 1970.01.01 06:00:00 в миллимекундах
let dateNow = Date.now()
console.log(dateNow);//1679918368969 Показывает время с 1970.01.01 06:00:00 в миллимекундах

let getYear = new Date()
console.log(getYear.getFullYear());//2023 Показывает год

let getMonth = new Date()
let months = ['January', 'Febryary', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
let month = getMonth.getMonth()
console.log(months[month]);//March Показывает месяц

let getDay = new Date()
console.log(getDay.getDate());//27 Показывает день от 1 до 31

let getHours = new Date()
console.log(getHours.getHours());//17 Показывает часы 0т 0 до 23

let getMinut = new Date()
console.log(getMinut.getMinutes());//22 Показывает минут 0т 0 до 59


// setDate()-устанавливает день месяца даты

let day = new Date()
console.log(day);//Mon Mar 27 2023 16:37:08 GMT+0500 (Tajikistan Time)

let setDay = day.setDate(09)//1678362064810 - устанавливаем день но показывает в миллисекунах
console.log(setDay);

let dayStr = new Date(setDay)
console.log(day);//Thu Mar 09 2023 16:46:05 GMT+0500 (Tajikistan Time)


let monthDate = new Date()
monthDate.setMonth(7)
console.log(monthDate);//Sun Aug 27 2023 17:00:55 GMT+0500 (Tajikistan Time)
console.log(monthDate.setMonth(8));//1695816098043

let setYear = new Date()
let setYear2 = setYear.setFullYear(setYear.getFullYear(), setYear.getMonth() - 6)
console.log(setYear2);





//home task
function getTimefunc(time1, time2) {
    let getTime1 = time1.getTime()
    let getTime2 = time2.getTime()
    let res = getTime1-getTime2
    return res/(24*60*60*1000)
}
console.log(getTimefunc(new Date('2023-03-27'), new Date('2021-03-28')));