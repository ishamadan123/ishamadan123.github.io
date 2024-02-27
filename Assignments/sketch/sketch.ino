const int BUTTON_PIN = 2;
const int RED_PIN = 9;
const int GREEN_PIN = 10;

void setup()
{
  Serial.begin(9600);
  pinMode(BUTTON_PIN, INPUT);
  pinMode(RED_PIN, OUTPUT);
  pinMode(GREEN_PIN, OUTPUT);
}

void loop()
{
  int buttonState = digitalRead(BUTTON_PIN);
  
  // Control RGB LED based on button state
  if (buttonState == HIGH) {
    // Button is pressed
    digitalWrite(RED_PIN, LOW); // Turn on red LED
    digitalWrite(GREEN_PIN, HIGH); // Turn off green LED
  } else {
    // Button is not pressed
    digitalWrite(RED_PIN, HIGH); // Turn off red LED
    digitalWrite(GREEN_PIN, LOW); // Turn on green LED
  }
  
  Serial.println(buttonState);
  delay(50);
}
