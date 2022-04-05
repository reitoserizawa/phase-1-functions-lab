// Code your solution in this file!

// HQ is in 42nd street
// Each block in Manhattan is 264 feet long.

const locationHQ = 42
const feet = 264

// num is which block the rider is located
function distanceFromHqInBlocks(num) {

    if (num < 42) {
        return locationHQ - num}
        else if (num > 42) {
        return num - locationHQ
        }
}
// num case of 43 / 20 ... cannot be minus so conditions as >< 42

function distanceFromHqInFeet(num) { 
    return distanceFromHqInBlocks(num) * feet
}

// simply return by mutiplying feet

function distanceTravelledInFeet (num, num2) {
    if (num2 > num) {
        return (num2 - num) * feet
    } else {
    return (num-num2)*feet}
}

// start, destination
// num2 is the ending block (destination)

function calculatesFarePrice(num, num2){
    let n3 = distanceTravelledInFeet(num, num2)
    if (n3 <= 400) {
        return 0
    } else if (400 < n3 && n3 < 2000) {
        return (n3-400) * 0.02
    } else if (2000 < n3 && n3 < 2500) {
        return 25
    } else if (2500 < n3) {
        return 'cannot travel that far'
    }
}

// The first four hundred feet are free. 
// For a distance between 400 and 2000 feet, the price is 2 cents per foot (not including 400, which are free!).
// Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet. 
// Finally, Scuber does not allow any rides over 2500 feet
//  — the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
