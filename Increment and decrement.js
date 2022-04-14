let myPoints = 3
// create two functions, add3points() and removePoint(), and have them
function add3points() {
    myPoints += myPoints
}
// add/remove points to/from the myPoints variable
function removePoint() {
    myPoints -= 1
}
add3points()
add3points()
removePoint()
removePoint()
// Call the functions to that the line below logs out 10 
console.log(myPoints)