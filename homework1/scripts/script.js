//BASE PART
const tShirt = 15.678;
const dress = 123.965;
const shoes = 90.2345;
// максимальне/мінімальне число
const maxPrice = Math.max(tShirt, dress, shoes);
console.log("Max price is:", maxPrice);
const minPrice = Math.min(tShirt, dress, shoes);
console.log("Min price is:", minPrice);
// вартість всіх товарів (сума)
const sum = tShirt + dress + shoes;
console.log("Sum is:", sum);
// ціла частина вартості кожного товару, округлена до меншого
const tShirtFloor = Math.floor(tShirt);
console.log("T-Shirt price rounded to the 'floor':", tShirtFloor);
const dressFloor = Math.floor(dress);
console.log("Dress price rounded to the 'floor':", Math.floor(dressFloor));
const shoesFloor = Math.floor(shoes);
console.log("Shoes price rounded to the 'floor':", Math.floor(shoesFloor));
// сума всіх товарів округлена до сотень
function roundCeil100(num) {
  return Math.round(num / 100) * 100;
}
console.log("Sum rounded to hundreds is:", roundCeil100(sum));
// чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
if (Math.floor(sum) % 2 == 0) {
    console.log(true);
} else { 
    console.log(false);
}
// сума решти із 500 грн
const rest = 500 - sum;
console.log("Rest out of 500 UAH:", rest);
// середнє значення цін, округлене до другого знаку після коми
const average = sum / 3;
console.log("Arithmetic mean is:", +average.toFixed(2));
// випадкова знижка
function discount(min, max) {
  return Math.random() * (max - min) + min;
}
// сума до оплати зі знижкою округлена до 2 знаків після коми
var discount = discount(1, 99);
console.log("Discount:", discount, "percents");
const sumWithTheDiscount = sum * (100 - discount) / 100;
console.log("Sum to pay with the discount is:", +sumWithTheDiscount.toFixed(2));
// собівартість
const cost = sum / 2;
console.log("Cost is:", cost);
// сума знижки (те що клієнт не платив)
const discountSum = sum * discount / 100;
console.log("Discount sum (sum the client didn't pay) in UAH is:", +discountSum.toFixed(2));
// чистий прибуток
const netIncome = cost - discountSum; 
console.log("Net Income is:", netIncome);



//ADVANCED PART
// максимальне/мінімальне число
console.log(`Max price is: ${maxPrice}`);
console.log(`Max price is: ${minPrice}`);
// вартість всіх товарів (сума)
console.log(`Sum is: ${sum}`);
// ціла частина вартості кожного товару, округлена до меншого
console.log(`T-Shirt price rounded to the 'floor': ${tShirtFloor}`);
console.log(`Dress price rounded to the 'floor': ${dressFloor}`);
console.log(`Shoes price rounded to the 'floor': ${shoesFloor}`);
// сума всіх товарів округлена до сотень
console.log(`Sum rounded to hundreds is: ${roundCeil100(sum)}`);
// чи є сума всіх товарів (округлена в меншу сторону) парним чи непарним числом?
if (Math.floor(sum) % 2 == 0) {
    console.log(`true`);
} else { 
    console.log(`false`);
}
// сума решти із 500 грн
console.log(`Rest out of 500 UAH: ${rest}`);
// середнє значення цін, округлене до другого знаку після коми
console.log(`Arithmetic mean is: ${average.toFixed(2)}`);
// випадкова знижка
console.log(`Discount: ${discount} percents`);
// сума до оплати зі знижкою округлена до 2 знаків після коми
console.log(`Sum to pay with the discount is: ${sumWithTheDiscount.toFixed(2)}`);
// собівартість
console.log(`Cost is: ${cost}`);
// сума знижки (те що клієнт не платив)
console.log(`Discount sum (sum the client didn't pay) in UAH is: ${discountSum.toFixed(2)}`);
// чистий прибуток
console.log(`Net Income is ${netIncome}`);