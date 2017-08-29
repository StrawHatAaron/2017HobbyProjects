/*
 DICTIONARIES : takes keys and value pair (value pair can be any object
 Commonly known also as hashes or associated arrays
 
 flight tracking app
 
 Airport Code (key)      Airport Name (Value)
 CMH                     Columbus
 SAC                     Sacremento
 LGA                     La Gaurdia
 LHR                     Heathrow
 CDG                     Charles de Gaulle
 */

var airportCodes  = ["CMH" : "Columbus",
    "SAC" : "Sacremento",
    "LGA" : "La Guardia",
    "LHR" :"Heathrow",
    "CDG" : "Charles de Caulle"]
//Dictionary ^
//holding down option and click on a object will notify
//the user the types the object is holding

let curentWeather = ["Tempature": 26.2]

//Reading from a dictionary

airportCodes["LGA"]
airportCodes["CMH"]

//Inserting Key Value Pairs
airportCodes["SYD"] = "Sydney Airport"
airportCodes["LGA"] = "La Guardia International Airport"
airportCodes["LGA"]
airportCodes.updateValue("Dublin Airport",
                         forKey: "DUB")
airportCodes

// Removing Key Value Pairs
airportCodes["DXB"] = nil//nil means nothing in swift
airportCodes.removeValue(forKey: "CDG")
airportCodes

//Dealing with non-existent data
//optinal is a type that can contain one of two values
let newYorkAirport = airportCodes["LGA"]
let orlandoAirport = airportCodes["MCO"]





