function myIsNaN(value) {
    return value !== value;
}

console.log(myIsNaN(NaN));          
console.log(myIsNaN(40));            
console.log(myIsNaN("Vitaliy Balackiy"));     
console.log(myIsNaN(undefined));