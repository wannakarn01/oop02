export{};
let student: [string,number,string][]= [["Mark", 50,"D"],["Jenny",87,"D"],["Jim",75,"B"]];
console.log(student);
student.push(["Luck",58,"D"]);

for (const [std,Mark,grade] of student){
    console.log("Student %s Mark %d Grade %s ",std,Mark,grade);
}