let salary=prompt("Enter basic salary: ")
let benefits=prompt("Enter benefits: ")
 function tax(band){
    if(salary<=24000){
        let first=(10/100)*24000
    }
    else if (salary<=32333){
        let second=(25/100)*32333
        let payee=second+first
    }
    else{
        let third=(30/100)*32333
        let payee=third+second+first
    }
    tax(taxable)
 }


