//Collections and Control Flow

//Arrays

let const = "hello"
var todo: [String] = [ "Finish Collections Course", "Go Christmas Shopping", "Reply to Emails", const, "mow the lawn", "deciding between swift and python"]

var numbers: [Int] = [1,2,3,500]

//reading from arrays 

let firstTask = todo[0]//subscripting (when you take the name of the arry tou want to work with and to take the index value you want to retrive
firstTask
let thirdTask = todo [2]

todo[4]

//modify Existing value in array 
//mutating an array
todo[4] = "get hair cut"
todo[0] = "start learning python in tree house"

//Inesert using indexes
todo
todo.insert("read one piece manga", at: 6)
//insert first learned swift method 
//every item after the postition as there index value increased by one

//removing items from array
todo.remove(at: 2)
todo
//remove like insert involves updating the entire array

todo.count
todo[0]
todo[5]

//todo[6] index out of range: does not exist
//poking at memory that is unoccupied therefor the prgram will crash
var why = "fuck you for taking away logging swift"











