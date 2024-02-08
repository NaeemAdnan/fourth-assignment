function calculateMoney(ticketSale) {
    if(typeof ticketSale !== 'number' || ticketSale < 0){
        return 'Invalid Number'
    }
    const ticketPrice = 120;
    const totalTicketPrice = ticketPrice * ticketSale;
    const darwan = 500;
    const staff = 8;
    const staffLaunch = 50;
    const totalStaffLaunch = staff * staffLaunch;
    const totalExpence = darwan + totalStaffLaunch;
    const result = totalTicketPrice - totalExpence;
    return result;
}


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


function deleteInvalids(array) {
    if(!Array.isArray(array)){
        return "Invalid Array!"
    }
    let arrayNumber = [];
    for(let item of array){
        if(typeof item === 'number' && !isNaN(item)){
            arrayNumber.push(item)
        }
    }
    return arrayNumber;
}


function password(obj) {
    if(typeof obj !== 'object' || Array.isArray(obj)){
        return 'Invalid'
    }
    const name = obj.name;
    const birthYear = obj.birthYear;
    const hereSiteName = obj.siteName;
    const siteName = hereSiteName.charAt(0).toUpperCase()+hereSiteName.slice(1);
    return `${siteName}#${name}@${birthYear}`
}


function monthlySavings(ary, livingCost) {
    if(!Array.isArray(ary) || typeof livingCost !=="number"){
        return "invalid input"
    }
    let netIncome = [];    
    for(const eachIncome of ary){
        if(eachIncome>=3000){
            afterTax = (eachIncome - (eachIncome * 20 /100));
            netIncome.push(afterTax);
        }
        else if(eachIncome<3000){
            netIncome.push(eachIncome);
        }
    }
    let totalIncome = 0;
    for(const eachNetIncome of netIncome){
        totalIncome = totalIncome+eachNetIncome;
    }
    
    const savings = totalIncome - livingCost;
    if(savings>=0){
        return savings;
    }
    else if(savings<0){
        return "earn more"
    }
}