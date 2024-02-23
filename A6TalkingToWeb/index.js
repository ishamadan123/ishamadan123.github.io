const BAUD_RATE = 9600;
let port, connectBtn;

function setup() {
  setupSerial();
  createCanvas(windowWidth, windowHeight);
  textFont("system-ui", 50);
  textStyle(BOLD);
  textAlign(CENTER, CENTER);
}

function draw() {
  const portIsOpen = checkPort();
  if (!portIsOpen) return;

  let str = port.readUntil("\n");
  if (str.length == 0) return;

  const joystickValue = Number(str.trim());

  background("lightgray");

  // Map joystick value to background color
  const bgColor = map(joystickValue, 0, 1023, 0, 255);
  fill(bgColor);
  text("Move the joystick!", windowWidth / 2, windowHeight / 2);
}

function setupSerial() {
  port = createSerial();

  let usedPorts = usedSerialPorts();
  if (usedPorts.length > 0) {
    port.open(usedPorts[0], BAUD_RATE);
  }

  connectBtn = createButton("Connect to Arduino");
  connectBtn.position(5, 5);
  connectBtn.mouseClicked(onConnectButtonClicked);
}

function checkPort() {
  if (!port.opened()) {
    connectBtn.html("Connect to Arduino");
    return false;
  } else {
    connectBtn.html("Disconnect");
    return true;
  }
}

function onConnectButtonClicked() {
  if (!port.opened()) {
    port.open(BAUD_RATE);
  } else {
    port.close();
  }
}
