const num = +prompt("Введите число");
let number = true;

if(num < 2){
    number = false; 
}

for (let i = 2; i < num; i++) {
    let result = num % i;
    if(result == 0)  {
        number = false; 
        break;
    } 
}


console.log(number);