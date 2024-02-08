function checkName(name){
    if(typeof name !== 'string'){
        return "invalid";
    }
    const givenLastLetter = 'A,e,i,o,u,y,w'
    const lastLetterNeed = givenLastLetter.toLowerCase();
    const nameLowerCase = name.toLowerCase();
    const lastLetter = nameLowerCase[nameLowerCase.length-1];
    const last = lastLetterNeed.split(',');
    for(let item of last){
        if(item === lastLetter){
            return 'Good Name'
        }
    }
    return 'Bad Name';    
}


///Checking Part (OnlyMe)
const name = "Salman";
const name2 = "RAFEE";
const name3 = "Jhankar";
const name4 = 199;
const name5 = ["Rashed"];
console.log(1., checkName(name));
console.log(2., checkName(name2));
console.log(3., checkName(name3));
console.log(4., checkName(name4));
console.log(5., checkName(name5));