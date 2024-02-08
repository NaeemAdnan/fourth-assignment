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


///Checking Part (OnlyMe)
const array = [1 , null, undefined, 18, -19, NaN, "12", [1, 2], { ob: "lala" }];
const array2 = ["1" , {num:2} , NaN ] ;
const array3 = [ 1 , 2 , -3 ] ;
const array4 = {num: [ 1 , 2 , 3 ]};
const array5 =  [ NaN, 1,12,0 ,-1 , undefined ];
console.log(1., deleteInvalids(array))
console.log(2., deleteInvalids(array2))
console.log(3., deleteInvalids(array3))
console.log(4., deleteInvalids(array4))
console.log(500., deleteInvalids(array5))