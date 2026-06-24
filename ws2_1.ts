export{};
let price: string ="P";
let age:number=100;
console.log("Price: %s, Age: %d",price,age);
if (price ==="P"&& age<12){
    console.log("Price is $5");
}else if(price === "P"&& age>=12 && age<=60){
    console.log("Price is $10");
}else{
    console.log("Price is $7");
}