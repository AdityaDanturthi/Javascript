//document.getElementById("count-el").innerText = 5
// let firstBatch = 5;
// let secondBatch = 7;
// let count = firstBatch + secondBatch;
// console.log(count)

// let myAge = 25;
// let humanDogRatio = 7;
// let myDogAge = myAge * humanDogRatio;
// console.log(myDogAge)

// let bonusPoints = 50;
// bonusPoints = bonusPoints - 25;
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints)

// Process
// initialize count to 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the html to reflect the new count

let count = 0;
function increment() {
    count = count + 1;
    document.getElementById("count-el").innerText =count
}

