function outer(){
    let hello = 1
    return function inner(){
        return hello++
    }
}

let result = outer() 
console.log(result());
console.log(result());
console.log(result());

