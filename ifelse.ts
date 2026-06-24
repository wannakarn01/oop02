export{};
let status: string = "S";
let age: number = 25;
console.log("Status: %s, Age: %d",status,age);
if (status === "S" && age<20){
    console.log("สถานะ: โสดและยังไม่บรรลุนิติภภาาวะ");
}else if(status === "S" && age>=20){
    console.log("สถานะ: โสด และบรรลุนิติภาวะเเล้ว");
}else if(status === "M"){
    console.log("สถานะ: สมรส");
}else{
    console.log("สถานะ: อื่นๆ")
}