#include <ESP8266WiFi.h>
#include <WiFiClient.h>
#include <ESP8266WebServer.h>

//SSID and Password of your wifi router
const char* ssid = "2WIRE286";
const char* password = "4489444775";

void setup() {
  // put your setup code here, to run once:
  Serial.begin(9600);
  WiFi.hostname("MyESP8266");
  WiFi.begin(ssid, password);     //Connect to your WiFi router
  Serial.println("connected");
}

void loop() {
  // put your main code here, to run repeatedly:
    
}
