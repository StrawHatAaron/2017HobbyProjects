//A string literal is giving in double quotes ("")
//string concatination
let school = "Sierra College"
let state = "California"
let city = "Rocklin"
let Street = "Rocklin Road"
let buildingNumber = 10000

//Concatination
let address = school + " " + state + " " + city
//let streetAddress = buildingNUmber + Street <-- Cant compile

//String interpolation
let interpolatedAddresss = "\(school), \(state), \(city)"
let interpolatedStreesAddress = "\(school) \(buildingNumber)"

let multiplier = 3
let message = "\(multiplier) times 2.5 is \(Double(multiplier) * 2.5)"
// message is "3 times 2.5 is 7.5"


// "Voulez-vous un café?" using LATIN SMALL LETTER E WITH ACUTE
let eAcuteQuestion = "Voulez-vous un caf\u{E9}?"

// "Voulez-vous un café?" using LATIN SMALL LETTER E and COMBINING ACUTE ACCENT
let combinedEAcuteQuestion = "Voulez-vous un caf\u{65}\u{301}?"

if eAcuteQuestion == combinedEAcuteQuestion {
    print("These two strings are considered equal")
}
// Prints "These two strings are considered equal"


/*
-----------
INTEGERS
-----------
*/

let favoriteProgrammingLanguage = "swift"
let year = 2014 //year swift was created!!!

/*
 -----------
 FLOATING POINT NUMBERS
 -----------
 */
var version = 3.1

//FUN FACT
//float 6 decimal digits
//float 15 decimal digits

/*
 -----------
 BOOLEAN
 -----------
0 OR 1
 */

let isAwesome = true

/*
 -----------
 Type Safety
 -----------
 */

var someString = " "

var mod = 10 % 3













