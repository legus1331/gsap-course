let screenPrise = 10000
let percentage = 10

let titleProject = prompt('Название проекта')
console.log(titleProject);

let screensValue = prompt('шаблонные, с уникальным дизайном, с анимациями')
console.log(screensValue)

let responsive = prompt('Нужен ли респонзив на сайте?')
console.log(responsive)

let service = prompt('Какой дополнительный тип услуги нужен?')
console.log(service)

let servicePrice = +prompt('Сколько это будет стоить?')
console.log(servicePrice)

let serviceSecond = prompt('Какой дополнительный тип услуги нужен?')
console.log(serviceSecond)

let servicePriceSecond = +prompt('Сколько это будет стоить?')
console.log(servicePriceSecond)

let fullPrise = servicePrice + servicePriceSecond
console.log(fullPrise)