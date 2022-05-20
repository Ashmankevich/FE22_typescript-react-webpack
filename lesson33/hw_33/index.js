const subjects = {
   mathematics: {
      students: 200,
      teachers: 6
   },
   biology: {
      students: 120,
      teachers: 6
   },
   geography: {
      students: 60,
      teachers: 2
   },
   chemistry: {
      students: 100,
      teachers: 3
   }
}

//1. Создать строку из названий предметов написаных через запятую

let arrTask1 = Object.keys(subjects)
let allSubjects = arrTask1.toString()
console.log(allSubjects)

//2. Посчитать общее количество студентов и учителей на всех предметах

let arrTask2 = Object.values(subjects)

let initialValue = 0;
let sum = arrTask2.reduce(function (accumulator, currentValue) {
   return accumulator + currentValue.students + currentValue.teachers;
}, initialValue)

console.log("all teachers & students:", sum)

//3. Получить среднее количество студентов на всех предметах

let arrTask3 = Object.values(subjects)

let StartValue = 0;
let summarize = arrTask3.reduce(function (accumulator, currentValue) {
   return accumulator + currentValue.students / arrTask3.length;
}, StartValue)

console.log("on average students:", summarize)

//4. Создать массив из объектов предметов

let arrTask4 = Object.values(subjects)
console.log(arrTask4)

//5. Получить массив из предметов и отсортировать по количеству преподавателей на факультете от большего к меньшему

let arrTask5 = Object.values(subjects)

arrTask5.sort(function (a, b) {
   if (a.teachers < b.teachers) {
      return 1
   }
   if (a.teachers > b.teachers) {
      return -1
   }

   return 0
})

console.log("sorting by the number of teachers from a large to a smaller number:", arrTask5)

//5.1 improve solution, in process
const arr = Object.entries(subjects).map(([key, v]) => ({ ...v, key }));
const initial = Object.fromEntries(arr.map(({ key, ...v }) => [key, v]));

let arrForSort = []
for (let key in initial) {
   arrForSort.push([key, initial[key]])
}

arrForSort.sort(function (a, b) {
   if (a.teachers < b.teachers) {
      return 1
   }
   if (a.teachers > b.teachers) {
      return -1
   }

   return 0
})
console.log(arrForSort)