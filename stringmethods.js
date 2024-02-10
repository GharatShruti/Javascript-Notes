// Javascript strings are primitive and immutable: All string methods produces a new string without altering the original string.


//toString
let numb = 5;
let string = numb.toString();
console.log(string)


//length
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let length = text.length;
console.log(length)

// String charAt()
let text1 = "HELLO WORLD";
let char1 = text1.charAt(0);
console.log(char1)

// String charCodeAt()
let text2 = "HELLO WORLD";
let char2 = text2.charCodeAt(0);
console.log(char2)

// String at()
const name = "shruti";
let letter = name.at(2);
console.log(letter)

// Property Access [ ]
let text3 = "HELLO WORLD";
let char3 = text3[1];
console.log(char3)

// Extracting String Parts
// String slice()
// slice() extracts a part of a string and returns the extracted part in a new string.
// The method takes 2 parameters: start position, and end position (end not included).
let text4 = "Apple, Banana, Kiwi";
let part = text4.slice(7, 13);
console.log(part)

// String substring()
// substring() is similar to slice().
// The difference is that start and end values less than 0 are treated as 0 in substring().
// let str = "Apple, Banana, Kiwi";
// let part1 = str.substring(7, 13);
// console.log(part1)

// String toUpperCase()
let text5 = "Hello World!";
let text6 = text5.toUpperCase();
console.log(text6)

// String toLowerCase()
let text7 = "Hello World!";       
let text8 = text7.toLowerCase();
console.log(text8)

// String concat()
let text9 = "Hello";
let text10 = "World";
let text11= text9.concat(" ", text10);
console.log(text11)

// String trim()
let text12 = "      Hello World!      ";
let text13= text12.trim();
console.log(text13)

// String trimStart()
let text14 = "     Hello World!     ";
let text15= text14.trimStart();
console.log(text15)

// String trimEnd()
let text16 = "     Hello World!     ";
let text17 = text16.trimEnd();
console.log(text17)

// String padStart()
let text18 = "5";
let padded = text18.padStart(4,"x");
console.log(padded)

// String padEnd()
let text19 = "5";
let padded1 = text19.padEnd(4,"x");
console.log(padded1)

// String repeat()
let text20 = "Hello world!";
let result = text20.repeat(2);
console.log(result)

//String Content
let text21 = "Have a nice day!";
let newText = text21.replace("nice", "wonderful");
console.log(newText)

//String ReplaceAll()
let text22 = "I love cats and more cats"
text23 = text22.replaceAll("cats","Dogs");
console.log(text23)

//String split() used to convert string to an array
text24 = text22.split("|")
console.log(text24)