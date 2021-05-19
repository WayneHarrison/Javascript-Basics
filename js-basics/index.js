let person = {
    name: 'Wayne',
    age: 24
};

console.log(person.name);

let selectedColours = ['red', 'blue'];
console.log(selectedColours[0])

function greet(name, lastname) {
    console.log('Hello from a function, ' + name + " " + lastname);
}
greet(person.name, "Harrison");
greet("John", "Doe")

// for (let i = 1; i <= 5; i++){
//     if (i % 2 !== 0) console.log(i)
// }

let i = 0;

while (i <= 5){
    if (i % 2 !== 0) console.log(i);
    i++;
}

let t = 0;

do {
    if (t % 2 !== 0) console.log(t);
    t++;
} while (t <=5);

for (let i in person){
    console.log(i, person[i]);
}

const colours = ['red','green','blue']

for(let colour of colours)
console.log(colour)

let p = 0;
while (p <= 10){

    if(p % 2 === 0){
        p++;
        continue;
    }

    console.log(p);
    p++;
}

console.log(max(3,3))
function max(a,b){
    
    return (a > b) ? a : b;
    
}

function isLandscape(width, height){
    return (width > height) ? "Landscape": "Portrait";
}

console.log(isLandscape(3840,2160))

function fizzBuzz(input){
    if(typeof input !== 'number'){
        console.log(NaN)
    }
    else if(input % 15 === 0){
        console.log("FizzBuzz");
    }
    else if(input % 5 === 0){
        console.log("Buzz");
    }
    else if(input % 3 === 0){
        console.log("Fizz")
    }
    else{ 
        console.log(input)
    }
}
fizzBuzz(false);

function checkSpeed(speed){
    const speedLimit = 70;
    const speedPerPoint = 5;

    if(speed < speedLimit){
        console.log("OK")
    }
    else{
        const points = Math.floor((speed-speedLimit)/speedPerPoint);
        console.log((points>=12)? 'Licence Suspended': "Points: "+points)
    }

    // if(speed >= speedLimit){
    //     const points = Math.floor((speed-speedLimit)/speedPerPoint);
    //     console.log((points>=12)? 'Licence Suspended': 'Points: ' + points)
        
    // }
    // else
    // console.log("OK")
    
    
}
checkSpeed(95);

function showNumbers(limit){
    let i = 0;
    // while(i  <= limit){
    //     console.log(i, (i % 2 == 0) ? "Even": "Odd")
    //     i++;
    // }

    for(let i = 0; i <= limit; i++){
        console.log(i, (i % 2 == 0) ? "Even": "Odd");
    }
}
showNumbers(10);

const array = [0, null, undefined, '',2,3];
console.log(countTruthy(array));

function countTruthy(array){
    let count = 0;
    for(let value of array){
        if(value)
            count++;
    }
    return count;
}

const movie = {
    title: 'a',
    releaseYear: 2018,
    rating: 2,
    director: 'b'
};
showProperties(movie)

function showProperties(obj){
    for(let key in obj){
        if (typeof obj[key] === 'string')
            console.log(key, obj[key]);
    }
}

function sum(limit) {
    let total = 0;

         for (let num=0; num<=limit; num++)
         if (num % 3 == 0 || num % 5 === 0 )
              total += num;

    return total;
}
console.log(sum(10));

const marks = [80,80,50]

console.log(calculateGrade(marks));

function calculateGrade(marks){
    const average = calculateAverage(marks);

    if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    return 'A';
}
function calculateAverage(array){
    let total = 0;

    for(let value of array)
        total += array;
    
   return total / array.length;
}

showStars(5);
 
function showStars(rows) {
    let message = '';
    for (let row = 0; row < rows; ++row){
       message += '*';
       console.log(message);
    }
}
showPrimes(20)
function showPrimes(limit){

    for(let num = 2; num<=limit; num++)
        if(getFactor(num)) console.log(num);  
        
}
function getFactor(num){

    for (let factor = 2; factor < num; factor ++)
        if (num % factor === 0)
            return false;

    return true;
}

let address = { street: "Street", city: "City", zipCode: "00-000" };

function showAddress(address){
    for(let key in address) 
    {
        console.log(key, address[key]);
    }
}

showAddress(address);
//Factory Function
function createAddress(street, city, zipCode){
    address = {
        street,
        city,
        zipCode
    };
    console.log(address)
}
//Constructor Function
function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;

    this.write = function() {
        console.log(Address);
    }
}

createAddress('Street', 'City', '00-0000');
const address2 = new Address('Street', 'City', '00-0000');
const address3 = new Address('Street', 'City', '00-0000');
console.log(address2);

function areEqual(address2, address3){
    return JSON.stringify(address2) === JSON.stringify(address3)    
}

function areSame(address2, address3){
    return address2 === address3
}
console.log(areEqual(address2,address3));
console.log(areSame(address2, address3));

let blogPost = {
    title: "Title",
    body: "Body",
    author: "Author",
    views: 52,
    comments: [
    { author: "Julius", body: "Body" },
    { author: "Jack", body: "Body2" }],
    isLive: true
};

console.log(blogPost);
let post = new BlogPost('a','b', 'c');
console.log(post);
function BlogPost(title, body, author) {
    this.title = title;
    this.body=body;
    this.author=author;
    this.views=0;
    this.comments=[];
    this.isLive=false;
}
//PriceRange Objects
let priceRange = [
    {
        label: "$", tooltip:"Inexpensive", minPerPerson: 0, maxPerPerson:10
    },
    {
        label: "$$", tooltip:"Moderate", minPerPerson: 11, maxPerPerson:20
    },
    {
        label: "$$$", tooltip:"Expensive", minPerPerson: 21, maxPerPerson:50
    }
]
//Arrays
const numbers = [3,4];
//add to end of array
numbers.push(5,6);
//Add to start of array
numbers.unshift(1,2)
//Middle of array
numbers.splice(2, 0 , 'a','b')
console.log(numbers);

//Finding elements in array (Primitive types)
//Tells you index, if doesn't exist it's -1.
const primitiveTypes = [1,2,3,1,4];
console.log (primitiveTypes.indexOf(1));
console.log(primitiveTypes.lastIndexOf(1));
//Check if item exists in array
console.log(primitiveTypes.indexOf(1) !== -1);
console.log(primitiveTypes.includes(1));

//Finding elements in array (Reference types)

const courses = [
    {id:1, name: 'a'},
    {id:2, name: 'b'},
];

let found = courses.find(function(course){
    return course.name === 'a'
});
//Same as above but shorter.
let foundv2 = courses.find(course => course.name === 'a');
console.log(found);
console.log(foundv2);

//Removing elements 
//From end
const last = primitiveTypes.pop();
console.log(primitiveTypes);
//Beginning
const first = primitiveTypes.shift();
console.log(primitiveTypes);
//Middle
const middle = primitiveTypes.splice(2,1);
console.log(primitiveTypes);
//Emptying an array
//Method one, only works if there is one reference.
let toBeEmptied = [1,2,3,4];
let anotherArray = toBeEmptied;
//Solution 1
//toBeEmptied = [];
//Solution 2
//toBeEmptied.length=0;
//Solution 3
//toBeEmptied.splice(0, toBeEmptied.length);
//Solution 4
while (toBeEmptied.length > 0)
    toBeEmptied.pop();
        
console.log(toBeEmptied);
console.log(anotherArray);
//Combining arrays
const firstArray = [1,2,3];
const secondArray = [4,5,6];

const combinedArray = firstArray.concat(secondArray);

console.log(combinedArray);

//SLice an array into two
//Can provide two indexes for start and end, one index to take all from start, no indexes to take all elements.
//Primitive types will take the elements, reference types will take the reference.
const slicedArray = combinedArray.slice(2,4)
console.log(slicedArray);

//Spread operator
const spreadArray = [...firstArray, ...secondArray];
console.log(spreadArray);

//Iterating an array
for (let item of spreadArray)
    console.log(item);
//Foreach method
spreadArray.forEach(item => console.log(item));

//Joining arrays

const joinedArray = spreadArray.join(',');
console.log(joinedArray);

const message = "Hello my name is";
const splitArray = message.split(' ');
console.log(splitArray);
const unSplitArray = splitArray.join('-');
console.log(unSplitArray);

//Sorting arrays
const unsortedArray = [5,4,2,7];
unsortedArray.sort();
console.log(unsortedArray);
unsortedArray.reverse();
console.log(unsortedArray);

const unsortedObjectArray = [
    {id: 1, name:'b'},
    {id: 2, name:'a'}
]
unsortedObjectArray.sort(function(a,b){
    const nameA = a.name.toUpperCase();
    const nameB = b.name.toUpperCase();
    if(nameA < nameB) return -1;
    if(nameA > nameB) return 1;
    return 0;
});
console.log(unsortedObjectArray);

//Testing the elements of an array.

const testArray = [1,2,3,-1];
//All must be positive
const allPositive = testArray.every(function(value){
    return value >= 0; //False
});
//Some must be positive. CAn be first or 100th.
const somePositive = testArray.some(function(value){
    return value >= 0 //True
});
//Filtering an array.
const unFilteredArray = [1, -1, 2, 3]
const filteredArray =  unFilteredArray.filter(n => n >= 0);

console.log(filteredArray);

//Mapping an array
const item = filteredArray.map(n => '<li>' + n + '</li>');
const returnObj = filteredArray.map(n => ({value: n}) );

//Chaining methods.
const chainedArray = unFilteredArray
                    .filter(n => n >= 0)
                    .map(n => ({value: n}));
const html = '<ul>' + item.join('') + '</ul>';
console.log(html)
console.log(returnObj);
console.log(chainedArray);

//Reducing an array.

const reducedNum = unFilteredArray.reduce(
    (accumulator, currentValue) =>   accumulator + currentValue
);

console.log(reducedNum);

const returnedArray = arrayFromRange(1,4);
console.log(returnedArray);
function arrayFromRange(min,max){
    i = min;
    let fullArray = [];
    while (i <= max){
        fullArray.push(i);
        i++
    }
    return fullArray;
}

const exerciseNums = [1,2,3,4];

function includes(array, searchElement){
    for(let element of array){
        if(element === searchElement){
            return true;
        }              
    }
    return false;
}
console.log(includes(exerciseNums, 3));

function except(array, excluded){
    const output = [];
    for(let element of array){
        if (!excluded.includes(element)){
            output.push(element);
        }
    }
    return output;
}

console.log(except(exerciseNums, [1,2]));

const output = move(exerciseNums, 1 ,0);
console.log(output);

function move(array, index, offset){
    const position = index+offset;
    if (position >= array.length || position < 0){
        console.error('Invalid offset')
        return;
    }
    const output = [...array];
    const element = output.splice(index, 1)[0];
    output.splice(position, 0, element);
    return output;
}

const countOccurence = countOccurences(exerciseNums, 1);

console.log(countOccurence);

function countOccurences(array, searchElement){
    if(!Array.isArray(array))
        throw new Error("Invalid array");
    // let count = 0;
    // for ( let element of array){
    //     if (element === searchElement)
    //     count ++
    // }
    // return count;

    return array.reduce((accumulator, current) => {
        const occurence = (current === searchElement) ? 1 : 0
        return accumulator + occurence;
    },0)
}

const max2 = getMax(exerciseNums);

console.log(max2);

function getMax(array){
    console.log(array.length);
    if (array.length === 0) 
        return undefined;
    // let max = array[0];
    // for(let i = 1; i < array.length; i++ ) {
    //     if(array[i]>max){
    //         max = array[i];
    //     }
    // }
    // return max;   

    return array.reduce((a,b) => (a>b) ? a:b);

}

const movies = [
    {title: 'a', year: 2018, rating: 4.5},
    {title: 'b', year: 2018, rating: 4.7},
    {title: 'c', year: 2018, rating: 3},
    {title: 'd', year: 2017, rating: 4.5}
];

const titles = movies
.filter(m => m.year === 2018 && m.rating>=4)
.sort((a,b) => a.rating - b.rating)
.reverse()
.map(m=> m.title);

console.log(titles);

console.log(sum([1,2,3,4]))

function sum(...items){
    if(items.length === 1 && Array.isArray(items[0]))
        items = [...items[0]];

    return items.reduce((a,b) => a+b);
}

const circle = {
    radius: 1,
    get area() {
        return Math.PI * this.radius * this.radius;
    }
};
console.log(circle.area);

try {
    const errorNumbers = [1,2,3,4];
    const errorCount = countOccurences(errorNumbers, 1);
    console.log(errorCount);
}
catch (e){
    console.log(e.message);
}