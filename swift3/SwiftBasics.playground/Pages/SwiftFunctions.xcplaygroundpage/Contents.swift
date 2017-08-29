//Area calculation for room

let secondLength = 14
let secondWidth = 8

let secondArea = secondLength * secondWidth

func area(length: Int, width: Int) -> Int{
    let areaOfRoom = length * width
    print(areaOfRoom)
    return areaOfRoom
}

let areaOfFirstRoom  = area(length:56, width: 20)
let areaOfSecondRoom = area(length: 200, width: 10)
let areaOfThirdRoom  = area(length: 10, width: 20)
let areaOfFourthRoom = area(length: 4, width: 5)

func voidFunction(){ //void could be () or void ---> they all have their place
    print("This function should not return anything!")
}

//always include prepositions like below
func move(toX: Int){
    
}

func remove(HavingValue: Double){
    
}
//          external    local  ---------> names to make code easier to read
func remove(havingValue value: String){
    print(value)
}

remove(havingValue: "A")


//Defualt Values                                                                            given tan defualt color

func carpetCostHaving(length: Int, width: Int, havingArea area: Int, carpetColor color: String = "tan") -> Int {
    //Grey Carpet - $1/sq ft
    //Tan carpet  - $2/sq ft
    //blue carpet - $4/sq ft
    let area = area(length: length width: width)
    var price = 0
    switch color{
        case "grey": price = area * 1
        case "tan" : price = area * 2
        case "blue": price = area * 4
        default: price = 0
    }
    return price
}

let costRoom = carpetCostHaving(length: 25, width: 5, havingArea: areaOfSecondRoom, carpetColor:"tan")










































