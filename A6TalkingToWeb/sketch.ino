// Arduino code
const int JOYSTICK_PIN = A0;

void setup() {
  Serial.begin(9600);
  pinMode(JOYSTICK_PIN, INPUT);
}

void loop() {
  int joystickValue = analogRead(JOYSTICK_PIN);
  Serial.println(joystickValue);
  delay(50);
}
