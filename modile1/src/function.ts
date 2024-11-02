// Simple function

function addNumber(num1 :number , num2:number) :number {
    return num1 + num2 ;
} 

//Arrow Function

const evenNumber = (num1 :number, num2 :number) :number =>num1 + num2


//object ----> function --> method
const poorUser = {
    name : "Hasib",
    balance : 0,
    addBalance(balance: number) : string {
        return `My new balance is : ${this.balance + this.balance}`
    }
} 