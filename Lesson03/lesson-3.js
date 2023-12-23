// Задаем значения переменным
const titleProject = "Оценка стоимости";
const screensValue = "шаблонные, с уникальным дизайном, с анимациями";
const screenPrice = 1000; // Цена реализации одной страницы
const percentage = 10; // Процент отката подрядчику
const fullPrice = 5000; // Желаемая сумма за проект
const responsive = true; // Булевое значение (true/false)

// Вычисляем общую стоимость проекта
let totalScreens = screensValue.split(',').length;
let totalCost = totalScreens * screenPrice;

// Учитываем процент отката подрядчику
let contractorFee = (percentage / 100) * totalCost;

// Полная стоимость проекта с учетом отката подрядчику
let finalCost = totalCost + contractorFee;

// Добавляем бонус за responsive (если true)
if (responsive) {
    finalCost += 500;
}

// Проверяем, достаточно ли полная стоимость для желаемой суммы за проект
let canAfford = finalCost <= fullPrice;

// Выводим результаты
console.log("Название проекта:", titleProject);
console.log("Типы экранов:", screensValue);
console.log("Цена реализации одного экрана:", screenPrice);
console.log("Процент отката подрядчику:", percentage);
console.log("Желаемая сумма за проект:", fullPrice);
console.log("Responsive:", responsive);
console.log("-------------------------------------------");
console.log("Общее количество экранов:", totalScreens);
console.log("Общая стоимость проекта:", totalCost);
console.log("Откат подрядчику:", contractorFee);
console.log("Полная стоимость проекта:", finalCost);
console.log("Бонус за Responsive:", responsive ? 500 : 0);
console.log("-------------------------------------------");
console.log("Проект " + (canAfford ? "подходит" : "не подходит") + " по бюджету.");