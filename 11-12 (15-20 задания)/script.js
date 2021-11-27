//Задание 15
function Card(from, to){
    this.from=from;
    this.to=to;
    this.show=function(){
        return `${this.from},${this.to}`;
    }
}
let c1=new Card("Москва", " Екатеринбург");
console.log(c1.show()); 

//Задание 16
class Human{
    constructor(name, age, height){
    this.name=name,
    this.age=age,
    this.height=height
    }
    getInfo() {
    return `${this.name},${this.age},${this.height}`;
    }
    get firstname() {
        return `${this.name}`;
        }
}    
let humans = [
    new Human("Коля", 23, 180),
    new Human("Даша", 19, 170),
    new Human("Ваня", 18, 192),
    new Human("Петя", 45, 178),
    new Human("Вася", 34, 197),
    new Human("Джони", 40, 168),
    new Human("Катя", 37, 160),
    new Human("Петя", 29, 200),
    new Human("Соня", 21, 172),
    new Human("Женя", 25, 175)
    ];
for (let human of humans)
    console.log(human.getInfo());

//Задание 17
function sortByName(mas) {
    return mas.sort(function comparator(a, b){ 
        return (a.name > b.name) ? 1 : -1});
}

function sortByHeight(mas) {
    return mas.sort(function comparator(a, b){
        return(a.height < b.height) ? 1 : -1});
}
console.log(sortByHeight(humans));

//Задание 18
var dt1=new Date(2045, 0, 1, 00, 00); 
console.log(dt1);

//Задание 19
var dt2=parseInt(+new Date()/1000);
console.log(dt2);

//Задание 20
function getDays (year, month) { 
    if (month==1 || month==3 || month==5 || month==7 || month==8 || month==10 || month==12) {
         return "31";
    } else if (month==4 || month==6 || month==9 || month==11) {
            return "30";
    } else {
        if (year%4==0) {
            return "29";
        } else {
            return "28";
        }
    }   
}
console.log(getDays(2000, 2))
// → 29
console.log(getDays(2011, 2))
// → 28
console.log(getDays(2020, 5))
// → 31