const fs = require('fs');
const readline = require("readline-sync");

console.log("enter ADMIN to add question|| enter USer to start quiz ");
let data = readline.question();
if(data == "USER")
{
    console.log("enter your name =  ");
    let name = readline.question();
    console.log("your name has been recorder|| your game will start after you press enter || right question will add 5 and wrong will deduct 2");
    let ch = readline.question();
    if(ch == "\n"){
    let rawdata = fs.readFileSync('question.json');
    let student = JSON.parse(rawdata);
    for(var i = 0; i < student. length ; i++){
   // console. log(student[i])
    var que = student[i]
    for(var key in que) {
    console.log(key + " : ");
    for(var j = 0; j < que[key]. length ; j++){
        if(j < que[key]. length-1)
        {
            console.log((j+1)+"  "+que[key][j]);
        }
        
      }
     }
 }
}
}
else if(data == "ADMIN")
{
    console.log("enter READ to get the user|| enter Write to add the question ");
    let choice = readline.question();
}


    
//console.log(student);


/*fs.readFile('question.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
});
console.log('This is after the read call');
const fs = require('fs');
let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
let data = JSON.stringify(student, null, 2);

fs.writeFile('question.json', data, (err) => {
    if (err) throw err;
    console.log('Data written to file');
});

console.log('This is after the write call');*/