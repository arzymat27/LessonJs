let first = prompt('Пиши первое число')
const func = prompt(['+','-','*','/'])
let second = prompt('Пиши второе число')
let response ='Твой ответ  '
first= Number(first)
second= Number(second)
if (func==='+'){
    let summ =first+second
    alert(response+summ)
}else if (func==='-'){
    let summ =first-second
    alert(response+summ)
}else if (func==='*'){
    let summ =first*second
    alert(response+summ)
}else if (func==='/'){
        let summ =first/second
        alert(response+summ)
}
let age = 18
if (age > 18) {
    document.write('OK')
}
else if(age < 18){
    document.write('NO')
}
