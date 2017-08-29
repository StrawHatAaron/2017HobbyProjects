
/*Arduino for Beginners, Hacker Lab.
      This exersize demonstrates ; LED on/off selection, PWM (fadding), 
RGB LED selection and color change (PWM), Light Sensor (analog input), pin functions.*/

//Definitions
int ledAnodes[] = {3,5,6,9,10,11}; //LED anodes defined as an array
int pinCountA = 6;                 //number of pins

int ledCathodes[] = {4,7,8,12};    // LED cathodes defined as an array
int pinCountC = 4;                 // the number of pins (i.e. the length of the array)

int colorchng = 1;
int chasedur = 20;
int chaserate = 3;
int timer = 20;

//Setup
void setup() {
  // the array elements are numbered from 0 to (pinCount - 1).
  // use a for loop to initialize each pin as an output: 
  for (int thisPin = 0; thisPin < pinCountA; thisPin++)  {
    pinMode(ledAnodes[thisPin], OUTPUT);
    digitalWrite(ledAnodes[thisPin], LOW);   
  }
    for (int thisLed = 0; thisLed < pinCountC; thisLed++)  {
    pinMode(ledCathodes[thisLed], OUTPUT);    
    digitalWrite(ledCathodes[thisLed], HIGH);
  }
}  
//Operation

void loop() {
  // loop from the lowest pin to the highest:
  for (int thisPin = 0; thisPin < pinCountA; thisPin++) { 
    // turn the pin on:
    digitalWrite(ledAnodes[thisPin], HIGH);   
    delay(timer);
    for (int thisLed = 0; thisLed < pinCountC; thisLed++) {
      digitalWrite(ledCathodes[thisLed], LOW);
      delay(150);
      digitalWrite (ledCathodes[thisLed], HIGH);
    }
    // turn the pin off:
    digitalWrite(ledAnodes[thisPin], LOW);    

  }

  // loop color:
  for (int colorPin = pinCountC - 1; colorPin >= 0; colorPin--) { 
    // turn the pin on:
    digitalWrite(ledCathodes[colorPin], LOW);
    delay(colorchng);
  int dur = 0;
while(dur <chasedur) { 
  for (int thisPin = pinCountA - 1; thisPin >= 0; thisPin--) { 
    // turn the pin on:
    digitalWrite(ledAnodes[thisPin], HIGH);
    delay(chaserate);
    // turn the pin off:
    digitalWrite(ledAnodes[thisPin], LOW);
  }
  dur++;}
  // turn the color off:
    digitalWrite(ledCathodes[colorPin], HIGH);
  
  
  }
  }
