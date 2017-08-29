//
//  Optionals.swift
//
//
//  Created by Aaron Miller on 6/10/17.
//
//
//nil represents nothingness --- the nothingness of a new value
import Foundation
struct Person{
    let firstName: String
    let middleName: String?
    let lastName: String
    
}

let me = Person(firstName:"Aaron", middleName: nil, lastName:"Miller")

var someValue: Int
let airportCodes = ["CDG": "Charles De Gaulle"]
let newYorkAirport = airportCodes["JFK"]

//print(airportCodes["JFK"])
if let newYorkAirport = airportCodes["JFK"]{
    //temp const
    print(newYorkAirport)
} else{
    print("oops that ariport doesn't exist")
}

let weatherDictionary: [String : [String : String]] = [
    "currently": ["tempature": "22.3"],
    "daily": ["tempature": "22.3"],
    "weekly": ["tempature": "22.3"]
]

if let dailyWeather = weatherDictionary["daily"] {
    if let highTemp = dailyWeather["tempature"]{
        print(highTemp)
    }
}

if let dailyWeather = weatherDictionary["daily"], let highTempature = dailyWeather["temperature"]{
        print(highTempature)
}

let movieDictionary = ["Spectre": ["cast": ["Daniel Craig", "Christoph Waltz", "Léa Seydoux", "Ralph Fiennes", "Monica Bellucci", "Naomie Harris"]]]

var leadActor: String = ""

// Enter code below
if let movie = movieDictionary["Spectre"]{
    if let cast = movie["cast"]{
        print(cast[0])
    }
}

struct Friend {
    let name: String
    let age: String
    let address: String
}


func new(friendDictionary: [String : String ]) -> Friend? {
    if let name = friendDictionary["name"], let age = friendDictionary["age"]{
        let address = friendDictionary["address"]
        return Friend(name: name, age: age, address: address!)
    }
    else{
        return nil
    }
}

//let aaron = Friend(name: "Aaron J Miller", age: "21", address: "2063 Camp Whitney")
//print(new(aaron))


struct Book {
    let title: String
    let author: String
    let price: String?
    let pubDate: String?
    
    init?(dict: [String: String]){
        guard let title = dict["title"], author = dict["author"] else {
            return nil
        }
    self.title = title
    self.author = author
    self.price = dict["price"]
    self.pubDate = dict["pubDate"]
    }
}


