export{};
let score:number =80;
let grade:string;
console.log ("Success Case: score:85 |grade:A");

if(score < 0 || score > 100){
}else{
    if(score >= 80){
        grade = 'A';
}else if(score >=70){
        grade = 'B';
}else if(score >=60){
        grade = 'C';
}else if(score >=50){
        grade = 'D';
}else{
        grade = 'F';
}
console.log("Error Case: Error: The score must be between 0 and 100.");
}