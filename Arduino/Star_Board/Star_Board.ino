//Cygnus
int switchPin = 13;
int ledPin = 7;
boolean lastButton = LOW;
boolean ledOn = false;
boolean currentButton = LOW;

boolean debounce(boolean last){
  
    boolean current = digitalRead(switchPin);
    if (last != current){
      delay(5);
      current = digitalRead(switchPin);
    }
    return current;
  }
void setup(){
  pinMode(switchPin, INPUT);
  pinMode(ledPin, OUTPUT);

  
}
void loop(){
currentButton = debounce(lastButton);
  if (lastButton == LOW && currentButton == HIGH){
    ledOn = !ledOn;
  
  }
 
    lastButton = currentButton;
  
  digitalWrite(ledPin, ledOn);

}


