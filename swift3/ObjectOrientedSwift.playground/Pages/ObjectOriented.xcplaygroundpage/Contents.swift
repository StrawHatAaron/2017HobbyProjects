//: Playground - noun: a place where people can play

import UIKit

let x1 = 0
let y1 = 0

let coordinate1: (x: Int, y: Int) = (0,0)
coordinate1.x


///instance method
struct Point {
    let x: Int
    let y: Int
    
    init(x: Int, y: Int) {
        //self is like this. in java for a constructor
        self.x = x
        self.y = y
    }
    
    //returns the number in range from the current one
    func points(inRange range: Int = 1 ) -> [Point]{
        //var results: [Point] = []
        //right above is same thing
        var results = [Point]()
        
        let lowerBoundOfXRange = x - range
        let upperBoundOfXRange = x + range
        
        let lowerBoundOfYRange = y - range
        let upperBoundOfYRange = y + range
        
        for xCoordinate in lowerBoundOfXRange...upperBoundOfXRange{
            for yCoordinate in lowerBoundOfYRange...upperBoundOfYRange{
                let coordinatePoint = Point(x: xCoordinate, y: yCoordinate)
                results.append(coordinatePoint)
            }
        }
        
        return results
    }
}

//instance of the struct
let coordinatePoint = Point(x: 0, y: 0)
coordinatePoint.x
coordinatePoint.points()

class Enemy {
    var life: Int = 5
    let position : Point
    
    init(x: Int, y: Int){
        self.position = Point(x: x, y: y)
    }
    
    func decreaseLife(by factor: Int){
        life -= factor
    }
    
}

//the body of SuperEnemy is now Enemy if the class
//is just this
//SuperEnemy is the subclass of Enemy
class SuperEnemy: Enemy{
    
    let isSuper: Bool = true
    
        override init(x: Int, y: Int) {
            super.init(x: x, y: y)
            self.life = 25
        }
    }



class Tower{
    let position: Point
    var range: Int = 1
    var strength: Int = 1
    
    init(x: Int, y: Int) {
        self.position = Point(x: x, y: y)
    }
    
    func fire(at enemy: Enemy){
        if isInRange(of: enemy){
            enemy.decreaseLife(by: strength)
            print("Got you")
        }
        else{
            print("I'll get you next time! out of range")
        }
    }
    
    func isInRange(of enemy: Enemy) -> Bool{
        let availablePosition = position.points(inRange: range)
        
        for point in availablePosition{
            if point.x==enemy.position.x && point.y==enemy.position.y{
                return true
            }
        }
        return false
    }

}

class LaserTower: Tower{
    override init(x: Int, y: Int) {
        super.init(x: x, y: y)
        self.range = 100
        self.strength = 100
    }
    override func fire(at enemy: Enemy) {
        while enemy.life >= 0 {
            enemy.decreaseLife(by: strength)
        }
        print("Target has been eliminated")
    }
}

let tower = Tower(x:0, y:0)
let enemy = Enemy(x:1, y:1)
let superEnemy = SuperEnemy(x:1, y:1)
superEnemy.life-1
let laserTower = LaserTower(x:2, y:2)
laserTower.fire(at: enemy)
tower.fire(at: enemy)

/*playing with ... (range)
let numbers = [1,2,3,4,5,6]
for numbers in 1...5 {
    print("hey")
}
*/
