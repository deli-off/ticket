var backagainDolar = 500;
var hotelDolar = 250;
var muzeyEuro = 120;
var oneDolar = 10966.96;
var oneEuro = 11181.36;
var elText = document.querySelector(".js-header");
var totalMoney = +prompt("Sayohat uchun pullingizi yozing, so`mda!")

var totalExpenses = (backagainDolar + hotelDolar) * oneDolar + muzeyEuro * oneEuro;

console.log(totalExpenses)

if (totalExpenses <= totalMoney) {
    elText.textContent = `Oq yo'l, Jonibek (sizda yana ${(totalMoney - totalExpenses).toFixed(2)}so'm bor)`
} else {
    elText.textContent = `Jonibek, Shahzoddan so’ra, balki berar! U ham bermasa bollardan so’ra! Ularam bermasa uyda telefonda kino ko’r. (sizga ${(totalExpenses - totalMoney).toFixed(2)}so'm yetmayapti)`
}




// var son = +prompt("Sonni yozing")
// elText = document.querySelector(".js-header")

// if (son % 2 === 0) {
//     elText.textContent = `${son} - Juft son`
// } else {
//     elText.textContent = `${son} - Toq son`
// }




