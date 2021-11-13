//задание 1
let s="#"
for (let i=1; i<=7; i++){
    console.log(s.repeat(i))
}

//задание 2
for (let i=1; i<=100; i++){
    if (i%3==0 && i%5==0){
        console.log('FizzBuzz');
        continue;
    }
    if (i%3!=0 && i%5==0){
        console.log('Buzz');
        continue;
    }
    if (i%5!=0 && i%3==0){
        console.log('Fizz');
        continue;
    }
    console.log(i)
}

//задание 3
let a="# "
let b=" #"
for (let i=1; i<=4; i++){
    console.log(a.repeat(4));
    console.log(b.repeat(4));   
}


//задание 4
function min_number(number1, number2){
    if (number1 < number2){
        console.log(`${number1} - min`);
    } else if (number2 < number1){
        console.log(`${number2} - min`);    
    }else{
        console.log(`${number1} = ${number2}`);
    }
}
min_number(2, 3);
min_number(1, 1);



//задание 5
function countBs(str){
    let count = 0;
    for (let i=0; i<str.length; i++){
        if (str[i]=='B'){
            count++;
        }
    }
    console.log(`количество символов "B": ${count}`)   
}
countBs('My favourite book by Charlotte Bronte is the novel that brought her fame, «Jane Eyre».');

function countChar(str, s){
    let count = 0;
    for (let i=0; i<str.length; i++){
        if (str[i]==s){
            count+=1;
        }
    }
    console.log(`количество символов "${s}": ${count}`)   
}
countChar('My favourite book by Charlotte Bronte is the novel that brought her fame, «Jane Eyre».', 't');

//задание 6
function sum(massiv){
    let a=0;
    for (let i=0; i<massiv.length-1; i++){
        a+=massiv[i];
    }
    return a
}
function range(first, last, step=1){
    let mas = [];
    if (step>0){
        for (let i=first; i<last+1; i+=step){
            mas.push(i); 
        }
    } else {
        for (let i=first; i>last-1; i+=step){
            mas.push(i); 
        }
    }
    return mas
}
console.log(range(1,10,2));
console.log(range(5,2,-1));
console.log(`Сумма: ${sum(range(10,20))}`);


//задание 7
function reverseArray(massiv1){
    let mass = [];
    for (let i=massiv1.length-1; i>=0; i--){
        mass.push(massiv1[i]);
    }
    return mass
}

function reverseArrayInPlace(massiv2) {
    for (let i=0; i<Math.floor(massiv2.length/2); i++) {
      s = massiv2[i];
      massiv2[i] = massiv2[massiv2.length-1-i];
      massiv2[massiv2.length-1-i] = s;
    }
    return massiv2
  }
let c = [9,8,7,6,5,4,3,2,1]
console.log(reverseArray(c));
console.log(reverseArrayInPlace(c));