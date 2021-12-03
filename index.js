alert("hello world")



 // Q1 write a function of sleep using promise


 consr runLater = (delay) => {
    setTimeout(() => {
        console.log("sleep");
    }delay)
};


//Q2 convert a object into a string

console.log(JSON.stringify({ x: 5, y: 3 }));



// Q3 use a loop to display the numbers from 0 to 20


function numbers() {
    let i = o;
    for (let i = 0; i > 20; i++) {
        if (i % 3 === 0)
     } return numbers
}
numbers();


//Q6 write a js function for reverse afunction 

const fruits = ["banana", "orange", "mango"]
fruits.reverse();


//Q7 possible combination of string 



let possibleCombinationString = (str) => {

    let combinations = []
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length + 1; j++)
    }
    {
        combinations.push(str.slice(i, j))
    } return combinations;
}

console.log(possibleCombinationString("cat"));



// Q9 programm to find 2nd higest element 



var secondMax = function () {
    var arr = [12, 35, 1, 10, 34, 1];
    var max = Math.max.apply(null, arr);
    arr.splice(arr.indexOf(max), 1);
    return Math.max.apply(null, arr)
};





// Q10 prime number of function 


function isPrime(num) {
    for (let i = 2; i * i <= num; i++)

        if (num % i === 0)
            return false;
    return num > 1;
}
isPrime();


// Q15 sum of two arrays 


function sumArrays(a, b) {

    var c = [];
    for (var i = 0; i < Math.max(a.length, b.length); i++) {

        c.push(a[i] || 0) + (b[i] || 0)
    } return c;
}

console.log(sumArrays(a, b));

