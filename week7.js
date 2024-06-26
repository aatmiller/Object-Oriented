//Question 1//
console.log("1 Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.");
let ages = [3, 9, 23, 64, 2, 8, 28, 93];//Declares the array "ages"
console.log(ages);

//Question 1.a
console.log("1.a Programmatically subtract the value of the first element in the array from the value in the last element of the array.");
console.log(ages[ages.length - 1] - ages[0]);//Since arrays start at index 0, the last element will always have an index of one less than the length of the array.

//Question 1.b
console.log("1.b Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).");
ages.push(9);//Adds the element to the end of the array
console.log(ages[ages.length - 1] - ages[0]);//Same as line 8

//Question 1.c
console.log("1.c Use a loop to iterate through the array and calculate the average age.");
let ageSum = 0;//Needed to hold the value that accumulates in the loop
for (let i=0;i<ages.length;i++){
    ageSum+=ages[i];//accumulates the values of each element across iterations
}
console.log(ageSum/ages.length);//Last part of calculating average requires me to divide by the number of elements

//Question 2
console.log("2 Create an array called names that contains the following values: 'Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'");
let names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];//An array of strings this time instead of numbers
console.log(names);

//Question 2.a
console.log("2.a Use a loop to iterate through the array and calculate the average number of letters per name.");
let nameLength = 0;//same as line 17
for (let i=0; i<names.length; i++){
    nameLength+=names[i].length;//accumulates total length of elements
}
console.log(nameLength/names.length)//same as line 21

//Question 2.b
console.log("2.b Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.");
let namesList = "";//empty string to hold the concatenated elements as they accumulate
for (let i=0; i<names.length; i++){
    if(i!==(names.length-1)){
        namesList += names[i] + " ";//concatenates an element and a space
    } else {
        namesList += names[i];//no space on the last element
    }
}
console.log(namesList);

//Question 3
console.log("3 How do you access the last element of any array?");
console.log("arrayName[arrayName.length-1]");//Yup that's the syntax

//Question 4
console.log("4 How do you access the first element of any array?");
console.log("arrayName[0]");//Whoopie syntax

//Question 5
console.log("5 Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.");
let nameLengths = [];//empty array to push values to across the loop iterations
for (let i=0; i<names.length; i++){
    nameLengths.push(names[i].length);//sends the length of the identified string into the array
}
console.log(nameLengths);

//Question 6
console.log("6 Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array.");
let nameLengthsSum = 0;
for (let i=0; i<nameLengths.length; i++){
    nameLengthsSum += nameLengths[i];//accumulates the sum
}
console.log(nameLengthsSum);

//Question 7
console.log("7 Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in 'Hello' and 3, I would expect the function to return 'HelloHelloHello').");
function repeater (word, n){
    let result = "";//empty string to send the concatenated values to
    for (let i=0;i<n;i++){
        result += word;//concatenates the strings n times. I like this loop a lot, particularly using n as the number of iterations
    }
    return result;
}
console.log(repeater("Hello",3));//Should say "Hello" 3 times with no spaces

//Question 8
console.log("8 Write a function that takes two parameters, firstName and lastName, and returns a full name. The full name should be the first and the last name separated by a space.");
function fullNameMaker (firstName, lastName){
    return (firstName + " " + lastName);//It concatenates a space and the names together
}
console.log(fullNameMaker("Aaron", "Miller"));//Hey that's my name!

//Question 9
console.log("9 Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.");
let qNineArraySmall = [9, 7, 11, 8, 10];//to serve as an example under 100
let qNineArrayBig = [50, 60];//to serve as an example over 100
function biggerThanHundred (arrayOfNumbers){
    let arraySum = 0;
    for (let i=0; i<arrayOfNumbers.length; i++){
        arraySum += arrayOfNumbers[i];//accumulates the elements together
    }
    if(arraySum>100){//checks if the sum is more than 100
        return true;
    }
    return false;
}
console.log(biggerThanHundred(qNineArraySmall));
console.log(biggerThanHundred(qNineArrayBig));

//Question 10
console.log("10 Write a function that takes an array of numbers and returns the average of all the elements in the array.");
function averageOfArray (arrayOfNumbers){
    let arraySum = 0
    for (let i=0; i<arrayOfNumbers.length; i++){
        arraySum += arrayOfNumbers[i];//accumulates elements into sum
    }
    return arraySum/arrayOfNumbers.length;//average calc
}
console.log(averageOfArray(qNineArraySmall));//used an array from the previous question

//Question 11
console.log("11 Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.");
function isFirstArrayAvgBigger (firstArray, secondArray){
    let firstArrayAvg = 0;
    let secondArrayAvg = 0;
    for (let i=0; i<firstArray.length; i++){
        firstArrayAvg += firstArray[i];
    }
    firstArrayAvg = firstArrayAvg/firstArray.length;//repeats calc from previous question for the first array
    for (let i=0; i<secondArray.length; i++){
        secondArrayAvg += secondArray[i];
    }
    secondArrayAvg = secondArrayAvg/secondArray.length//same but for the second
    if(firstArrayAvg>secondArrayAvg){//compares size of array sums
        return true;
    }
    return false;
}
let arrayBla = [9, 3, 90, 34, 71, 21, 33, 6];
let arrayBlard = [87, 55, 20, 11, 27, 74, 44];//example arrays
console.log(isFirstArrayAvgBigger(arrayBla, arrayBlard));
console.log(isFirstArrayAvgBigger(arrayBlard, arrayBla));

//Question 12
console.log("12 Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.");
function willBuyDrink (isHotOutside, moneyInPocket){
    if (isHotOutside&&(moneyInPocket>10.50)){//boolean manipulation! Using boolean functions is a fav of mine
        return true;
    }
    return false;
}
let isHot = true;
let moneyAvailable = 100;//example inputs
console.log(willBuyDrink(isHot, moneyAvailable));

//Question 13
console.log("13 Create a function of your own that solves a problem. In comments, write what the function does and why you created it.");
function willMulligan(landsInHand, cardsInHand){
    if ((landsInHand>4 || landsInHand<2) && cardsInHand>4){//lotsa boolean manipulation
        return true;
    }
    return false;
}
let fourLands = 4;
let sixLands = 6;//multiple test variables to show it works
let sixCardsInHand = 6;
console.log(willMulligan(fourLands, sixCardsInHand));
console.log(willMulligan(sixLands, sixCardsInHand));
//In the trading card game Magic: The Gathering,
//a common method of determining whether you should
//draw a new hand (mulligan) is by counting the number of lands in your hand
//and the number of remaining cards. This function uses boolean manipulation
//to provide an answer to whether or not you should mulligan.