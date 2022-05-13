const users = [
   {
      name: "Harry Felton",
      phone: "(09) 897 33 33",
      email: "felton@gmail.com",
      animals: ["cat"],
      cars: ["bmw"],
      hasChildren: false,
      hasEducation: true

   },
   {
      name: "May Sender",
      phone: "(09) 117 33 33",
      email: "sender22@gmail.com",
      hasChildren: true,
      hasEducation: true
   },
   {
      name: "Henry Ford",
      phone: "(09) 999 93 23",
      email: "ford0@gmail.com",
      cars: ["bmw", "audi"],
      hasChildren: true,
      hasEducation: false
   }
]

//task1 - Создать строку из имен пользователей через запятую

const stringOfName = users.map(user => user.name).join(", ")
console.log(stringOfName)

//task2 - Посчитать общее количество машин у пользователей

const arrData = users.map(user => user.cars)
const ArrayOfCars = [].concat.apply([], arrData)
const checkArrayOfCars = ArrayOfCars.filter(cars => cars != null).length
console.log(`Amount of cars: ${checkArrayOfCars}`)

//task3 - Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие образования

function isHasEducation(arr) {
   const arrDataUsers = arr.filter(user => user.hasEducation = true)
   return arrDataUsers
}
console.log(isHasEducation(users))

//task4 - Создать функцию, которая бы принимала массив пользователей и отфильтровывала пользователей на наличие животных

function isHasAnimals(arr) {
   const arrDataUsers = arr.filter(user => user.animals != null)
   return arrDataUsers
}
console.log(isHasAnimals(users))

//task5 - Создать функцию, которая бы принимала массив пользователей и отдавала бы строку с названиями марок автомобилей через запятую

function backUsersCars(arr) {
   const usersCars = arr.map(user => user.cars).filter(user => user != null).join()
   return usersCars
}
console.log(backUsersCars(users))