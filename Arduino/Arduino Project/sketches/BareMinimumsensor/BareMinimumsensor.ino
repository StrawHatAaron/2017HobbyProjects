int sensor = A1;
int splus = A0;
int sneg = A2;



void setup() 
{
  // put your setup code here, to run once:
pinMode(sensor,INPUT);
pinMode(splus,OUTPUT);
pinMode(sneg,OUTPUT);
digitalWrite(splus,HIGH);
digitalWrite(sneg,LOW);
Serial.begin(115200);

}
void loop() 
{
 int light = 0;
 light = analogRead(sensor);
 Serial.println(light);
 Serial.print("sensor data");
 delay(500);
 

  
}
