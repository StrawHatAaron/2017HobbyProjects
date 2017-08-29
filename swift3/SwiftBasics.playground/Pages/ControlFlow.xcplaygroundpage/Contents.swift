var todo: [String] = ["Finish all of the swift courses", "Buy Groceries", "Respond to emails", "Pick up dry cleaning", "order books online", "mow the lawn"]

//FOR IN LOOP
//uses count method (For In loop) <-- contains abstraction
for amount in todo {
    print(amount)
}

/*
 ranges
 Sytax:  a...b --> 1...5
                   1..<5 --> 1 through 4
 */
for number in 1...10 {
           //string interpolation
    print("\(number) times 5 is equal to \(number * 5)")
}

//WHILE LOOP
var x = 0

while x <= 20 {
    print(x)
    x+=1
}

var index = 0

while index < todo.count {
    print(todo[index])
    index += 1
}

//REPEAT WHILE LOOP
var counter = 1
repeat {
    print("I'm inside the repeat loop!")
    counter += 1
} while counter < 1


//celcius
var temperature = 1
if temperature < 12{
    print("you should wear a heavy jacket and a hat")
}else if temperature < 18 {
    print("You will want a sweater going outside")
}
else {
    print("It feels great outside a t-shirt will do")
}

//LOGICAL OPERATORS
//&& --> and
if temperature > 7 && temperature < 12 {
    print("might wnat to wear gloves with that jacket")
}

//|| -->or
var isRaining = true
var isSnowing = false
if isRaining || isSnowing {
    print("get out the snow shoes")
}
//! --> not
if !isRaining && !isSnowing{
    print("yay the sun is out")
}

if (isSnowing || isRaining) && temperature < 2 {
    print("put some gloves on!")
}

//SWITCH STATEMENT
var value = ["taco bell", "burger king", "mcdonalds", "chipotle", "jack in the box", "piada", "bagaan"]

for values in value {
    switch values{
    case "taco bell", "chipotle": print("mexican food")
    case "burger king", "mcdonalds", "jack in the box": print("american food")
    case "piada":   print("italian food")
    case "bagaan" : print("vegan food")
    default: print("the customer want none of the available deals")
    }
}

import GameKit

let randomTemperature = GKRandomSource.sharedRandom().nextInt(upperBound: 150)
switch randomTemperature{
case 0 ..< 32: print("the water is freezing")
case 32...45 : print("its quite cold youll need a javcket")
case 45..<70 : print("it is a good temperature")
default : print("its pretty hot out")
}


//fizz buzz use the modulest and the remainder operator

// d 6 fizz 
// d 5 buzz
// both fizzbuzz

func fizzBuzz(n: Int) -> String {
    // Enter your code between the two comment markers
    if (n % 3 == 0) && (n % 5 == 0) {
        return "FizzBuzz"
    } else if (n % 3 == 0) {
        return "Fizz"
    } else if (n % 5 == 0) {
        return "Buzz"
    } else {
        return "\(n)"
    }
}

for i in 1...100{
    if(i % 3 == 0) && (i % 5 == 0){
        print("FizzBuzz")
    }else if i % 3 == 0{
        print("Fizz")
    }else if i % 5 == 0{
        print("buzz")
    }else{
        print("\(i)")
    }
}














