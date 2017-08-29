int sensor = A1;
int splus = A0;
int sneg = A2;

int led1a = 3;
int led1c = 4;



void setup() 
{
  // put your setup code here, to run once:
pinMode(sensor,INPUT);
pinMode(splus,OUTPUT);
pinMode(sneg,OUTPUT);
digitalWrite(splus,HIGH);
digitalWrite(sneg,LOW);
Serial.begin(115200);
pinMode(led1a,OUTPUT);
pinMode(led1c,OUTPUT);
digitalWrite(led1c,LOW);

}
void loop() 
{
 int light = 0;
 light = analogRead(sensor);
 Serial.println(light);
 Serial.print("sensor data");

 if (light > 500)
 {
  // action a
  digitalWrite(led1a,HIGH);
 }
 else
 {
   // action b
   digitalWrite(led1a,LOW);
 }
 delay(500);
 
}
