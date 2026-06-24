export{};
let salary = 15000;
console.log("เงินเดือน =", salary, "บาท");
let yearlyIncome = salary * 12;
console.log("รายได้ต่อปี =", yearlyIncome, "บาท");

let taxRate: number;

if (yearlyIncome < 100000) {
    taxRate = 0;
} else if (yearlyIncome < 200000) {
    taxRate = 5;
} else if (yearlyIncome < 500000) {
    taxRate = 7;
} else if (yearlyIncome < 1000000) {
    taxRate = 10;
} else {
    taxRate = 15;
}
console.log("อัตราภาษี =", taxRate + "%");
let tax = yearlyIncome * (taxRate / 100);
console.log("ภาษีที่ต้องเสีย =", tax, "บาท");