//Array length
const fruits = ["Banana", "Orange", "Apple", "Mango"];
let size = fruits.length;
console.log(size)

//Array toString()
let string = fruits.toString();
console.log(string)

//Array at()
let place = fruits.at(2);
console.log(place)
let place1 = fruits[2];
console.log(place1)

//Array join()
let joined = fruits.join(" * ");
console.log(joined)

//Array pop()
let pop = fruits.pop();
console.log(pop)

//Array push()
fruits.push("Kiwi");
console.log(fruits)

//Array shift()
fruits.shift();
console.log(fruits)

//Array unshift()
fruits.unshift("Lemon");
console.log(fruits)

//Changing Elements
fruits[1] = "Grape";
console.log(fruits)

//Delete
delete fruits[2];
console.log(fruits)



//Merging Arrays
//Array concat()
const myGirls = ["Cecilie", "Lone"];
const myBoys = ["Emil", "Tobias", "Linus"];
const myChildren = myGirls.concat(myBoys);
console.log(myChildren)

//copyWithin()
const fruitss = ["Banana", "Orange", "Apple", "Mango"];
fruitss.copyWithin(2, 0);
console.log(fruitss)

//Array flat()
const myArr = [[1,2],[3,4],[5,6]];
const newArr = myArr.flat();
console.log(newArr)

//Array splice() to add new items to array
fruitss.splice(2, 2, "Lemon", "Kiwi");
console.log(fruitss)

//Array slice()
const fruits1 = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
const citrus = fruits1.slice(1);
const cit = fruits.slice(1, 3);
console.log(citrus)
console.log(cit)

//toString
const strings = fruits.toString();
console.log(strings)

//ARRAY SEARCH
//Array indexOf()
const newFruits = ["Apple", "Orange", "grape", "Mango"];
let position = newFruits.indexOf("Apple") + 1;
console.log(position)
//Array lastIndexOf()
let position1 = fruits.lastIndexOf("Apple") + 3;
console.log(position1)

//Array includes()
console.log(newFruits.includes("Mango"));

//Array find()
const numbers = [4, 9, 16, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first)


//Array findIndex()
const numbers1 = [4, 9, 16, 25, 29];
let first1 = numbers1.findIndex(myFunction);

function myFunction(value, index, array) {
  return value > 18;
}
console.log(first1)

//Array findLast()
const temp = [27, 28, 30, 40, 42, 35, 30];
let high = temp.findLast(x => x > 40);
console.log(high)

//Array findLastIndex()
const temp1 = [27, 28, 30, 40, 42, 35, 30];
let pos = temp1.findLastIndex(x => x > 40);
console.log(pos)
