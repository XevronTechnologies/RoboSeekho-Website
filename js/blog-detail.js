/**
 * RoboSeekho - Dedicated Hackster.io 1:1 Project Detail Page Engine
 * Loads dynamic project data from data/blogs.json based on URL parameter (?id=...)
 */

(function () {
  'use strict';

  const DATA_URL = 'data/blogs.json';
  const FALLBACK_BLOGS = [
  {
    "id": "automatic-door-arduino",
    "title": "Automatic Door Opener using Ultrasonic Sensor & Arduino",
    "instagramCaption": "Automatic Door Arduino based Project.#futuretech #trending",
    "summary": "Build an automated contactless door opening system powered by an Arduino Uno, HC-SR04 ultrasonic distance sensor, and an SG90 servo motor.",
    "category": "Robotics",
    "difficulty": "Beginner",
    "image": "images/blogs/automatic_door_arduino.svg",
    "date": "Oct 30, 2026",
    "readTime": "5 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "Maker Mentor, RoboSeekho",
      "avatar": "RS"
    },
    "tags": [
      "Arduino Uno",
      "HC-SR04",
      "SG90 Servo",
      "Ultrasonic",
      "Automation"
    ],
    "stats": {
      "respects": 184,
      "views": 4120,
      "comments": 32
    },
    "details": {
      "story": "Contactless entry systems are now everywhere from hospital wards to supermarket sliding gates. In this beginner-friendly ATL tinkering project, makers use an HC-SR04 ultrasonic sensor to calculate the distance of approaching individuals. When someone steps within 30cm, the Arduino signals an SG90 micro-servo to smoothly swing the door open to 90 degrees, wait for 4 seconds, and gently close back to 0 degrees.",
      "hardware": [
        {
          "item": "Arduino Uno R3",
          "qty": "1",
          "purpose": "Distance processing and PWM servo control"
        },
        {
          "item": "HC-SR04 Ultrasonic Distance Sensor",
          "qty": "1",
          "purpose": "Person proximity detection (2cm-400cm)"
        },
        {
          "item": "TowerPro SG90 9g Micro Servo Motor",
          "qty": "1",
          "purpose": "Door mechanical hinge actuation"
        },
        {
          "item": "5V 2A DC Power Adapter",
          "qty": "1",
          "purpose": "Stable microcontroller & servo power rail"
        },
        {
          "item": "Mini Door Hinge & Foam-board Model",
          "qty": "1",
          "purpose": "Architectural demonstration frame"
        }
      ],
      "software": [
        {
          "name": "Arduino IDE 2.x",
          "type": "Microcontroller firmware"
        },
        {
          "name": "Servo.h Built-in Library",
          "type": "PWM angle positioning"
        },
        {
          "name": "RoboSeekho Block Code Studio",
          "type": "Visual programming guide"
        }
      ],
      "steps": [
        "Mount the HC-SR04 sensor on the door lintel pointing outward at torso height.",
        "Connect Trig pin to Arduino Digital 9, and Echo pin to Arduino Digital 10.",
        "Wire the SG90 servo control signal line to Digital Pin 6, VCC to 5V, and GND to common Ground.",
        "Attach the servo horn to the door pivot hinge using a flexible link arm.",
        "Upload the sketch, open the Serial Monitor, and test proximity distance thresholds."
      ],
      "codeSnippet": "#include <Servo.h>\n\nconst int TRIG_PIN = 9;\nconst int ECHO_PIN = 10;\nconst int SERVO_PIN = 6;\nconst int DISTANCE_THRESHOLD = 30; // cm\n\nServo doorServo;\n\nvoid setup() {\n  pinMode(TRIG_PIN, OUTPUT);\n  pinMode(ECHO_PIN, INPUT);\n  doorServo.attach(SERVO_PIN);\n  doorServo.write(0); // Door closed\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  digitalWrite(TRIG_PIN, LOW);\n  delayMicroseconds(2);\n  digitalWrite(TRIG_PIN, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(TRIG_PIN, LOW);\n\n  long duration = pulseIn(ECHO_PIN, HIGH);\n  int distance = duration * 0.034 / 2;\n\n  if (distance > 0 && distance < DISTANCE_THRESHOLD) {\n    Serial.println(\"Person detected! Opening door...\");\n    doorServo.write(90);\n    delay(4000); // Keep open for 4 seconds\n    doorServo.write(0);  // Close door\n    delay(1000);\n  }\n  delay(100);\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "Automated touchless entrances reduce the spread of surface bacteria while providing convenient accessibility for schools, retail stores, and smart homes. RoboSeekho designed this project to introduce students to ultrasonic time-of-flight echolocation and servo mechanical linkages."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "The HC-SR04 emits an 8-cycle ultrasonic burst at 40 kHz. It measures the microseconds until the reflected wave bounces back to the receiver. Using the formula (distance = duration * speed_of_sound / 2), the Arduino calculates physical distance. When an approaching object crosses the 30 cm limit, the servo rotates 90 degrees."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "Because servos can draw current spikes that reset the Arduino, we connect the servo 5V rail to an external supply with common ground tied back to the Uno. The HC-SR04 pins connect directly to digital pins 9 and 10."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "Calibration involves testing detection angles and setting a 4-second hold delay to allow pedestrians to safely cross before the door hinge gently returns to its closed state."
        }
      ],
      "handTools": [
        {
          "name": "Hot Melt Glue Gun",
          "purpose": "Frame mounting and hinge anchoring"
        },
        {
          "name": "Precision Wire Stripper",
          "purpose": "Jumper harness preparation"
        }
      ],
      "customParts": {
        "title": "Door Hinge & Ultrasonic Sensor Faceplate CAD",
        "filename": "automatic_door_mount.stl",
        "type": "3D CAD / STL",
        "size": "1.8 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "HC-SR04 Sensor & SG90 Servo Wiring Schematic",
        "filename": "automatic_door_schematic.png",
        "description": "Wiring diagram connecting Arduino Uno to HC-SR04 and SG90 servo motor."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "Automation",
        "icon": "robotics"
      },
      {
        "name": "Sensors",
        "icon": "sensors"
      }
    ]
  },
  {
    "id": "automated-sliding-door",
    "title": "How Automated Sliding Doors Work: PIR Motion & Motor Drive",
    "instagramCaption": "You know how automated door works ? Learn with roboseekho",
    "summary": "A deep dive into commercial automated sliding doors with a working prototype using a PIR motion sensor, L293D motor driver, and a rack-and-pinion slider mechanism.",
    "category": "Smart Infrastructure",
    "difficulty": "Beginner",
    "image": "images/blogs/automated_sliding_door.svg",
    "date": "Oct 28, 2026",
    "readTime": "6 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "Robotics Mentor, RoboSeekho",
      "avatar": "RS"
    },
    "tags": [
      "PIR Sensor",
      "Arduino Uno",
      "L293D",
      "DC Motor",
      "Smart Access"
    ],
    "stats": {
      "respects": 210,
      "views": 4890,
      "comments": 44
    },
    "details": {
      "story": "Ever wonder how sliding supermarket doors know you are approaching from 10 feet away without touching any buttons? This build breaks down the commercial technology using a pyroelectric passive infrared (PIR) motion sensor, an L293D dual H-bridge motor driver, and a miniature rack-and-pinion horizontal track.",
      "hardware": [
        {
          "item": "Arduino Uno R3",
          "qty": "1",
          "purpose": "Motion signal evaluation & motor timing"
        },
        {
          "item": "HC-SR501 PIR Motion Sensor",
          "qty": "1",
          "purpose": "Wide-angle infrared human heat detection"
        },
        {
          "item": "L293D Motor Driver IC / Shield",
          "qty": "1",
          "purpose": "Bidirectional geared motor control"
        },
        {
          "item": "12V Geared DC Motor (100 RPM)",
          "qty": "1",
          "purpose": "Sliding door carriage locomotion"
        },
        {
          "item": "Micro Limit Switches",
          "qty": "2",
          "purpose": "Physical open/close endstop safety stops"
        },
        {
          "item": "Acrylic Sliding Track & Pinion Gear",
          "qty": "1",
          "purpose": "Linear motion conversion"
        }
      ],
      "software": [
        {
          "name": "Arduino IDE",
          "type": "Microcontroller firmware"
        },
        {
          "name": "RoboSeekho Mechanical Library",
          "type": "Kinematics guides"
        }
      ],
      "steps": [
        "Adjust sensitivity and trigger delay pots on the HC-SR501 PIR sensor module.",
        "Mount the PIR sensor above the center of the doorway with a 120-degree cone of vision.",
        "Wire motor driver inputs to Arduino Digital Pins 4 and 5; enable pin to Pin 3 for PWM speed.",
        "Install limit switches at the fully opened and fully closed extremities of the rail.",
        "Program the Arduino to reverse motor direction on human detection and automatically re-close."
      ],
      "codeSnippet": "const int PIR_PIN = 2;\nconst int MOTOR_IN1 = 4;\nconst int MOTOR_IN2 = 5;\nconst int LIMIT_OPEN = 7;\nconst int LIMIT_CLOSE = 8;\n\nvoid setup() {\n  pinMode(PIR_PIN, INPUT);\n  pinMode(MOTOR_IN1, OUTPUT);\n  pinMode(MOTOR_IN2, OUTPUT);\n  pinMode(LIMIT_OPEN, INPUT_PULLUP);\n  pinMode(LIMIT_CLOSE, INPUT_PULLUP);\n}\n\nvoid openDoor() {\n  while(digitalRead(LIMIT_OPEN) == HIGH) {\n    digitalWrite(MOTOR_IN1, HIGH);\n    digitalWrite(MOTOR_IN2, LOW);\n  }\n  stopMotor();\n}\n\nvoid closeDoor() {\n  while(digitalRead(LIMIT_CLOSE) == HIGH) {\n    digitalWrite(MOTOR_IN1, LOW);\n    digitalWrite(MOTOR_IN2, HIGH);\n  }\n  stopMotor();\n}\n\nvoid stopMotor() {\n  digitalWrite(MOTOR_IN1, LOW);\n  digitalWrite(MOTOR_IN2, LOW);\n}\n\nvoid loop() {\n  if (digitalRead(PIR_PIN) == HIGH) {\n    openDoor();\n    delay(5000); // Dwell time\n    closeDoor();\n  }\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "PIR sensors detect variations in infrared thermal radiation emitted by human bodies. By converting rotational motor torque into linear sliding motion using a gear rack, students replicate the exact mechanism installed in international airports and shopping malls."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "The Fresnel lens focuses ambient thermal radiation onto dual pyroelectric elements. When a warm body moves, an internal differential signal triggers a 3.3V high logic pulse. The Arduino commands the L293D driver to spin the DC motor until the carriage strikes the open limit switch."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "The 12V DC motor runs off a dedicated power source. Limit switches use internal pull-up resistors on the Arduino inputs to register active-low ground contacts when triggered."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "Safety timeouts are programmed into software to prevent motor burnout if a mechanical obstruction stops the carriage before reaching the limit switches."
        }
      ],
      "handTools": [
        {
          "name": "Precision Screwdriver Set",
          "purpose": "Rack and pinion rail fastening"
        },
        {
          "name": "Soldering Iron",
          "purpose": "Motor terminal lead attachments"
        }
      ],
      "customParts": {
        "title": "Linear Sliding Rail & Motor Mount Brackets",
        "filename": "sliding_door_rail.stl",
        "type": "3D CAD / STL",
        "size": "3.1 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "PIR Sensor, L293D Driver & Limit Switch Schematic",
        "filename": "sliding_door_schematic.png",
        "description": "Wiring connecting Arduino Uno to L293D H-Bridge, DC motor, and HC-SR501."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "Sensors",
        "icon": "sensors"
      },
      {
        "name": "Automation",
        "icon": "robotics"
      }
    ]
  },
  {
    "id": "light-hating-servo",
    "title": "Light-Averse 'Useless' Servo: Hates the Light Box",
    "instagramCaption": "ARDUINO [Useless] Servo - HATES the LIGHT! #gadgets #robotics #shorts",
    "summary": "A hilarious and entertaining maker build where an Arduino-controlled servo aggressively reacts and pulls itself away or switches off whenever light shines on its LDR photoresistor.",
    "category": "Sensors & Electronics",
    "difficulty": "Beginner",
    "image": "images/blogs/light_hating_servo.svg",
    "date": "Oct 26, 2026",
    "readTime": "4 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "Maker Mentor, RoboSeekho",
      "avatar": "RS"
    },
    "tags": [
      "Arduino Nano",
      "LDR Sensor",
      "SG90 Servo",
      "Useless Machine",
      "Fun Tech"
    ],
    "stats": {
      "respects": 298,
      "views": 6740,
      "comments": 61
    },
    "details": {
      "story": "Meet the grumpiest robot on Instagram! In this viral RoboSeekho project, students build a light-averse robot servo that despises photons. Whenever you shine a flashlight or open the box lid, an LDR photoresistor triggers an angry servo arm that leaps out, smacks the lid shut or turns off the flashlight, and sulks back into the darkness.",
      "hardware": [
        {
          "item": "Arduino Nano R3",
          "qty": "1",
          "purpose": "Compact microcontroller logic"
        },
        {
          "item": "LDR Photoresistor (5528)",
          "qty": "1",
          "purpose": "Ambient light intensity sensor"
        },
        {
          "item": "10k Ohm Metal Film Resistor",
          "qty": "1",
          "purpose": "Voltage divider reference"
        },
        {
          "item": "TowerPro SG90 9g Micro Servo",
          "qty": "1",
          "purpose": "Hatch opening & lid slapping actuator"
        },
        {
          "item": "3D-Printed Box Enclosure with Hinged Hatch",
          "qty": "1",
          "purpose": "Chassis and mechanical dark box"
        },
        {
          "item": "9V Battery with DC Snap Connector",
          "qty": "1",
          "purpose": "Self-contained portable power"
        }
      ],
      "software": [
        {
          "name": "Arduino IDE 2.x",
          "type": "Microcontroller firmware"
        },
        {
          "name": "Servo.h Library",
          "type": "Angle and speed control"
        }
      ],
      "steps": [
        "Form a voltage divider by wiring one leg of the LDR to 5V and the other to Arduino Pin A0 and a 10k resistor to GND.",
        "Install the SG90 servo inside the enclosure, positioning the horn directly beneath the hatch lever.",
        "Mount the LDR right beside the hatch opening so sunlight or flashlights hit it immediately.",
        "Program randomized angry movements with varied reaction speeds to give the machine personality.",
        "Snap in the 9V battery and challenge your friends to shine a light on it!"
      ],
      "codeSnippet": "#include <Servo.h>\n\nconst int LDR_PIN = A0;\nconst int SERVO_PIN = 9;\nconst int LIGHT_THRESHOLD = 600;\n\nServo angryServo;\n\nvoid setup() {\n  angryServo.attach(SERVO_PIN);\n  angryServo.write(10); // Hidden in darkness\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int lightVal = analogRead(LDR_PIN);\n  \n  if (lightVal > LIGHT_THRESHOLD) {\n    // Aggressive lid slam!\n    delay(100);\n    angryServo.write(120); // Slaps hatch open/shut\n    delay(300);\n    angryServo.write(10);  // Retreat back\n    delay(1500);\n  }\n  delay(50);\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "The classic useless machine is a timeless hacker archetype. By substituting manual toggle switches with an analog optical LDR sensor, this project teaches photoresistor physics through playful, comedic robotics."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "Cadmium sulfide photoresistors decrease in electrical resistance when exposed to photons. In a voltage divider circuit, this causes the analog voltage on pin A0 to climb. When it crosses the calibrated threshold, the Arduino executes a sudden servo pulse."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "The entire assembly fits snugly into a pocket-sized 3D-printed enclosure powered by a compact 9V battery stepped down to 5V via the Nano's onboard regulator."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "Students can customize multiple behavioral states: hesitant peeking, rapid angry slams, or playing dead when repeatedly provoked."
        }
      ],
      "handTools": [
        {
          "name": "3D Printer",
          "purpose": "Mini useless box shell printing"
        },
        {
          "name": "Small Phillips Screwdriver",
          "purpose": "Servo horn screw fastening"
        }
      ],
      "customParts": {
        "title": "Light-Hating Useless Box & Angry Arm CAD",
        "filename": "light_hating_box.stl",
        "type": "3D CAD / STL",
        "size": "2.4 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "LDR Voltage Divider & SG90 Servo Schematic",
        "filename": "light_hating_servo_schematic.png",
        "description": "Circuit schematic for Arduino Nano, 10k resistor, LDR, and SG90 servo."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "Sensors",
        "icon": "sensors"
      },
      {
        "name": "Fun Projects",
        "icon": "robotics"
      }
    ]
  },
  {
    "id": "arduino-emo-robot",
    "title": "Arduino Emo Robot: Crafting a Desktop Robot with Real-Time Expressions",
    "instagramCaption": "Arduino Emo Robot. Grafting a Robot that shows Emotion. #roboseekho",
    "summary": "Design a desktop companion robot equipped with an SSD1306 OLED animated face, touch-capacitive sensors, and servo head tilts expressing happiness, anger, curiosity, and sleepiness.",
    "category": "Robotics",
    "difficulty": "Intermediate",
    "image": "images/blogs/arduino_emo_robot.svg",
    "date": "Oct 24, 2026",
    "readTime": "7 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "AI & Robotics Mentor",
      "avatar": "RS"
    },
    "tags": [
      "Arduino Nano",
      "OLED SSD1306",
      "Touch Sensor",
      "EMO Robot",
      "Robotics"
    ],
    "stats": {
      "respects": 340,
      "views": 7820,
      "comments": 85
    },
    "details": {
      "story": "Social robotics combines human-computer interaction with expressive mechanical design. Inspired by desktop companion robots like EMO, this project guides students through programming expressive bitmap eyes on an I2C OLED display, responding to head-pats with capacitive touch sensors, and tilting the head with twin micro-servos.",
      "hardware": [
        {
          "item": "Arduino Nano R3",
          "qty": "1",
          "purpose": "Animation loop & gesture controller"
        },
        {
          "item": "0.96 inch I2C OLED Display (SSD1306 128x64)",
          "qty": "1",
          "purpose": "Expressive dynamic facial display"
        },
        {
          "item": "TTP223 Capacitive Touch Sensor Module",
          "qty": "1",
          "purpose": "Petting & touch interaction detection"
        },
        {
          "item": "SG90 Micro Servos",
          "qty": "2",
          "purpose": "Head pan & tilt emotion articulation"
        },
        {
          "item": "Passive Piezo Buzzer",
          "qty": "1",
          "purpose": "8-bit emotional chirps and sound effects"
        },
        {
          "item": "Custom 3D-Printed EMO Head Shell",
          "qty": "1",
          "purpose": "Enclosure and dual-axis gimbal"
        }
      ],
      "software": [
        {
          "name": "Adafruit GFX & SSD1306 Libraries",
          "type": "OLED graphic rendering"
        },
        {
          "name": "LCD Image Converter",
          "type": "Bitmap eye animation conversion"
        }
      ],
      "steps": [
        "Wire the SSD1306 OLED via I2C to Arduino pins A4 (SDA) and A5 (SCL).",
        "Attach the TTP223 touch pad beneath the top skull plate of the 3D-printed head.",
        "Build a 2-DOF pan-and-tilt servo gimbal for the neck mechanism.",
        "Render smooth eye blink, squint, and heart animations using vector draw functions in the Adafruit GFX library.",
        "Integrate piezo pitch chirps that trigger dynamically when the robot is patted or shaken."
      ],
      "codeSnippet": "#include <Wire.h>\n#include <Adafruit_GFX.h>\n#include <Adafruit_SSD1306.h>\n#include <Servo.h>\n\n#define SCREEN_WIDTH 128\n#define SCREEN_HEIGHT 64\nAdafruit_SSD1306 display(SCREEN_WIDTH, SCREEN_HEIGHT, &Wire, -1);\n\nServo neckTilt;\nconst int TOUCH_PIN = 2;\n\nvoid drawHappyEyes() {\n  display.clearDisplay();\n  // Happy curved eyebrows\n  display.fillCircle(40, 32, 16, SSD1306_WHITE);\n  display.fillCircle(40, 36, 16, SSD1306_BLACK);\n  display.fillCircle(88, 32, 16, SSD1306_WHITE);\n  display.fillCircle(88, 36, 16, SSD1306_BLACK);\n  display.display();\n}\n\nvoid setup() {\n  display.begin(SSD1306_SWITCHCAPVCC, 0x3C);\n  neckTilt.attach(9);\n  pinMode(TOUCH_PIN, INPUT);\n  drawHappyEyes();\n}\n\nvoid loop() {\n  if (digitalRead(TOUCH_PIN) == HIGH) {\n    neckTilt.write(110); // Head tilt up with joy\n    drawHappyEyes();\n    tone(8, 1200, 150);\n    delay(1000);\n    neckTilt.write(90);\n  }\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "Machines become companionable when they exhibit empathy and personality. This RoboSeekho curriculum project demonstrates how simple geometric shapes and head gestures evoke genuine emotional connection."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "The OLED draws two geometric eye shapes that dynamically stretch, blink, and reshape into curved crescents (happiness), slanted polygons (anger), or wide circles (surprise). Capacitive touch sensing through plastic lets the user pet the robot without exposed buttons."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "All electronics are housed inside the head casing. The neck uses two SG90 servos linked orthogonally to generate expressive head rolls and tilts."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "We programmed an idle state machine: when left undisturbed, Emo looks around curiously, occasionally blinks, and eventually nods off to sleep with animated snoring Zzzs."
        }
      ],
      "handTools": [
        {
          "name": "3D Printer (PLA)",
          "purpose": "Curved robot head shell printing"
        },
        {
          "name": "Hot Glue Gun",
          "purpose": "Touch pad mounting to internal plastic"
        }
      ],
      "customParts": {
        "title": "EMO Companion Robot Head & Pan-Tilt Neck STL",
        "filename": "emo_robot_head.stl",
        "type": "3D CAD / STL",
        "size": "6.2 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "I2C OLED, Touch Sensor & Dual Servo Schematics",
        "filename": "arduino_emo_schematic.png",
        "description": "Wiring diagram for Arduino Nano, SSD1306 OLED, TTP223, and neck servos."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "Robotics",
        "icon": "robotics"
      },
      {
        "name": "OLED Displays",
        "icon": "sensors"
      }
    ]
  },
  {
    "id": "arduino-led-patterns",
    "title": "Interactive Multi-Pattern LED Sequencer & PWM Chaser",
    "instagramCaption": "Arduino based project using LED. #roboseekho #robotics #futuretech",
    "summary": "Master digital outputs, arrays, shift registers, and pulse-width modulation by engineering an interactive 8-LED sequence controller with multiple dynamic lighting animations.",
    "category": "Sensors & Electronics",
    "difficulty": "Beginner",
    "image": "images/blogs/arduino_led_patterns.svg",
    "date": "Oct 22, 2026",
    "readTime": "4 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "Electronics Mentor",
      "avatar": "RS"
    },
    "tags": [
      "Arduino Uno",
      "74HC595",
      "LED Array",
      "PWM",
      "Electronics"
    ],
    "stats": {
      "respects": 165,
      "views": 3950,
      "comments": 28
    },
    "details": {
      "story": "Every great electronics journey starts with blinking an LED. In this fundamental RoboSeekho lab project, students advance from single-pin blinking to orchestrating a circular 8-LED array with five distinct lighting patterns: knight-rider scanner, pulsating breathing wave, binary ripple counter, marquee chaser, and potentiometer speed modulation.",
      "hardware": [
        {
          "item": "Arduino Uno R3",
          "qty": "1",
          "purpose": "Digital timing & PWM wave synthesis"
        },
        {
          "item": "5mm High-Brightness Diffused LEDs",
          "qty": "8",
          "purpose": "Visual illumination sequence"
        },
        {
          "item": "220 Ohm Current Limiting Resistors",
          "qty": "8",
          "purpose": "LED burnout prevention"
        },
        {
          "item": "Tactile Push Button",
          "qty": "1",
          "purpose": "Pattern cycle toggle switch"
        },
        {
          "item": "10k Linear Potentiometer",
          "qty": "1",
          "purpose": "Speed and tempo adjustment"
        },
        {
          "item": "Solderless Breadboard & Wires",
          "qty": "1",
          "purpose": "Prototyping circuit foundation"
        }
      ],
      "software": [
        {
          "name": "Arduino IDE 2.x",
          "type": "Microcontroller firmware"
        }
      ],
      "steps": [
        "Insert 8 LEDs into the breadboard with cathode legs connected to the blue ground rail via 220 ohm resistors.",
        "Wire the anode legs of each LED to Arduino digital pins 3 through 10.",
        "Connect the pushbutton with internal pullup to digital pin 2 for interrupt pattern switching.",
        "Connect the potentiometer center wiper to analog pin A0 to dynamically regulate animation speed.",
        "Run the program and cycle through all five dynamic visual illumination modes."
      ],
      "codeSnippet": "const int ledPins[] = {3, 4, 5, 6, 7, 8, 9, 10};\nconst int NUM_LEDS = 8;\nint currentPattern = 0;\n\nvoid setup() {\n  for(int i = 0; i < NUM_LEDS; i++) {\n    pinMode(ledPins[i], OUTPUT);\n  }\n  pinMode(2, INPUT_PULLUP);\n}\n\nvoid knightRider() {\n  int speed = map(analogRead(A0), 0, 1023, 20, 200);\n  for(int i = 0; i < NUM_LEDS; i++) {\n    digitalWrite(ledPins[i], HIGH);\n    delay(speed);\n    digitalWrite(ledPins[i], LOW);\n  }\n  for(int i = NUM_LEDS - 2; i > 0; i--) {\n    digitalWrite(ledPins[i], HIGH);\n    delay(speed);\n    digitalWrite(ledPins[i], LOW);\n  }\n}\n\nvoid loop() {\n  knightRider();\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "Controlling multiple outputs simultaneously is essential for automotive indicators, audio level visualizers, and robotic status monitors. This project establishes core programming practices: loops, arrays, and pin mapping."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "The Arduino iterates through an integer array storing output pins. By modulating pulse-width modulation (PWM) duty cycles on supported pins, smooth fading and breathing brightness transitions are produced."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "Each LED requires a dedicated 220 ohm resistor to prevent excessive current draw from the ATmega328P microcontroller ports."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "Interrupt debounce algorithms ensure clean, bounce-free transitions whenever the maker clicks the tactile pattern switch."
        }
      ],
      "handTools": [
        {
          "name": "Digital Multimeter",
          "purpose": "Testing LED forward voltage drop"
        }
      ],
      "customParts": {
        "title": "Circular LED Ring Bezel & Stand",
        "filename": "led_sequencer_bezel.stl",
        "type": "3D CAD / STL",
        "size": "1.2 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "8-Channel LED Array & Potentiometer Wiring Diagram",
        "filename": "led_sequencer_schematic.png",
        "description": "Wiring schematic connecting Arduino Uno to 8 LEDs with current-limiting resistors."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "Sensors",
        "icon": "sensors"
      },
      {
        "name": "Electronics",
        "icon": "robotics"
      }
    ]
  },
  {
    "id": "obstacle-avoiding-robot-car",
    "title": "Autonomous Obstacle-Avoiding Robot Car with Ultrasonic Eyes",
    "instagramCaption": "Ardiuno Based Project #roboseekho #robotics #viralreels #futuretech",
    "summary": "A 2WD autonomous mobile rover that navigates indoor obstacle courses by scanning 180\u00b0 around itself with an ultrasonic sensor mounted on a panning servo.",
    "category": "Robotics",
    "difficulty": "Intermediate",
    "image": "images/blogs/obstacle_avoiding_car.svg",
    "date": "Oct 20, 2026",
    "readTime": "8 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "Robotics Mentor",
      "avatar": "RS"
    },
    "tags": [
      "Arduino Uno",
      "HC-SR04",
      "L298N",
      "2WD Chassis",
      "Autonomous"
    ],
    "stats": {
      "respects": 389,
      "views": 8940,
      "comments": 92
    },
    "details": {
      "story": "Autonomous navigation is one of the most exciting milestones in robotics. In this flagship RoboSeekho build, students assemble a two-wheeled robotic vehicle powered by geared DC motors and an L298N dual H-bridge. When an obstacle is detected ahead within 25cm, the rover halts, pans its ultrasonic head left and right, compares available clearance, and steers toward the clearer pathway.",
      "hardware": [
        {
          "item": "Arduino Uno R3",
          "qty": "1",
          "purpose": "Navigation decision algorithms & motor PWM"
        },
        {
          "item": "L298N Dual H-Bridge Motor Driver",
          "qty": "1",
          "purpose": "High-current DC motor speed & direction"
        },
        {
          "item": "HC-SR04 Ultrasonic Distance Sensor",
          "qty": "1",
          "purpose": "Obstacle echolocation radar"
        },
        {
          "item": "SG90 Micro Servo Motor",
          "qty": "1",
          "purpose": "180\u00b0 sensor turret panning"
        },
        {
          "item": "2WD Smart Robot Car Chassis with TT Motors",
          "qty": "1",
          "purpose": "Mobile platform base & wheels"
        },
        {
          "item": "2x 18650 Li-ion Battery Pack (7.4V)",
          "qty": "1",
          "purpose": "High-capacity mobile motor power"
        }
      ],
      "software": [
        {
          "name": "Arduino IDE 2.x",
          "type": "Microcontroller firmware"
        },
        {
          "name": "Servo.h Library",
          "type": "Turret positioning"
        }
      ],
      "steps": [
        "Assemble the acrylic 2WD robot chassis, mounting TT geared motors and the front castor wheel.",
        "Wire the motor terminals to the L298N OUT1-OUT4 screw terminals.",
        "Connect L298N IN1-IN4 to Arduino digital pins 5, 6, 9, and 10.",
        "Mount the SG90 servo at the front bumper and attach the HC-SR04 sensor bracket to its horn.",
        "Flash the obstacle avoidance firmware and calibrate motor speed differentials for balanced turning."
      ],
      "codeSnippet": "#include <Servo.h>\n\nconst int TRIG = A1;\nconst int ECHO = A2;\nServo panServo;\n\n// Motor driver pins\nconst int IN1 = 5, IN2 = 6, IN3 = 9, IN4 = 10;\n\nint getDistance() {\n  digitalWrite(TRIG, LOW);\n  delayMicroseconds(2);\n  digitalWrite(TRIG, HIGH);\n  delayMicroseconds(10);\n  digitalWrite(TRIG, LOW);\n  return pulseIn(ECHO, HIGH) * 0.034 / 2;\n}\n\nvoid forward() {\n  digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);\n  digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW);\n}\n\nvoid stopMotors() {\n  digitalWrite(IN1, LOW); digitalWrite(IN2, LOW);\n  digitalWrite(IN3, LOW); digitalWrite(IN4, LOW);\n}\n\nvoid loop() {\n  int dist = getDistance();\n  if (dist < 25 && dist > 0) {\n    stopMotors();\n    delay(200);\n    // Pan and scan for clearance\n    panServo.write(45);  delay(400); int rightDist = getDistance();\n    panServo.write(135); delay(400); int leftDist = getDistance();\n    panServo.write(90);\n    \n    if (rightDist > leftDist) {\n      // Turn Right\n      digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);\n      digitalWrite(IN3, LOW);  digitalWrite(IN4, HIGH);\n    } else {\n      // Turn Left\n      digitalWrite(IN1, LOW);  digitalWrite(IN2, HIGH);\n      digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW);\n    }\n    delay(500);\n  } else {\n    forward();\n  }\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "Self-driving cars and automated guided vehicles (AGVs) rely on obstacle sensing to prevent collisions. Building a desktop prototype teaches students the basics of sensor fusion and reactive decision loops."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "While cruising forward, the ultrasonic sensor scans constantly. If a wall or obstacle comes within 25 cm, the rover halts. The servo sweeps right and left to identify the path of greatest clearance, and the differential drive executes an on-the-spot pivot turn."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "A two-cell 18650 Li-ion battery supplies 7.4V directly to the L298N driver, utilizing its onboard 5V regulator to cleanly power the Arduino Uno and servo without brownouts."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "Testing in classroom mazes teaches students to fine-tune turning delays based on wheel friction and carpet resistance."
        }
      ],
      "handTools": [
        {
          "name": "Crosshead Screwdriver",
          "purpose": "Chassis and motor bracket assembly"
        },
        {
          "name": "Battery Voltage Tester",
          "purpose": "18650 cell charge level inspection"
        }
      ],
      "customParts": {
        "title": "Ultrasonic Turret Pan Mount Bracket",
        "filename": "ultrasonic_turret_bracket.stl",
        "type": "3D CAD / STL",
        "size": "1.5 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "Arduino Uno, L298N & HC-SR04 Motor Driver Schematics",
        "filename": "obstacle_avoiding_schematic.png",
        "description": "Wiring diagram connecting Arduino Uno to L298N H-bridge, TT motors, and servo turret."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "Robotics",
        "icon": "robotics"
      },
      {
        "name": "Sensors",
        "icon": "sensors"
      }
    ]
  },
  {
    "id": "seven-segment-counter",
    "title": "Digital Counter & Stopwatch with 7-Segment Display",
    "instagramCaption": "Seven Segment Display arduino based Project #roboseekho #trending",
    "summary": "Learn multiplexing, binary-coded decimal (BCD), and display driver fundamentals by creating an interactive 0\u20139 digital counter with start, pause, and reset controls.",
    "category": "Embedded Systems",
    "difficulty": "Beginner",
    "image": "images/blogs/seven_segment_display.svg",
    "date": "Oct 18, 2026",
    "readTime": "5 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "Embedded Systems Mentor",
      "avatar": "RS"
    },
    "tags": [
      "Arduino Uno",
      "7-Segment Display",
      "BCD Decoder",
      "Digital Counter",
      "Logic"
    ],
    "stats": {
      "respects": 142,
      "views": 3310,
      "comments": 22
    },
    "details": {
      "story": "Seven-segment displays have been the gold standard for digital clocks, microwave timers, and scoreboard readouts for half a century. In this project, makers learn how individual LED segments labeled A through G form numbers, and build an interactive counter controlled by tactile buttons.",
      "hardware": [
        {
          "item": "Arduino Uno R3",
          "qty": "1",
          "purpose": "Digit decoding and counter timing"
        },
        {
          "item": "Common Cathode 1-Digit 7-Segment Display",
          "qty": "1",
          "purpose": "Visual numerical readout"
        },
        {
          "item": "220 Ohm Current Limiting Resistors",
          "qty": "7",
          "purpose": "Segment protection resistors"
        },
        {
          "item": "Tactile Push Buttons",
          "qty": "2",
          "purpose": "Count up & reset trigger inputs"
        },
        {
          "item": "Half-size Breadboard & Jumpers",
          "qty": "1",
          "purpose": "Wiring and breadboard assembly"
        }
      ],
      "software": [
        {
          "name": "Arduino IDE 2.x",
          "type": "Microcontroller firmware"
        }
      ],
      "steps": [
        "Identify pinouts for segments A through G and the common cathode pin using a multimeter diode test.",
        "Wire segments A to G to Arduino digital pins 2 through 8 via 220 ohm resistors.",
        "Tie the common cathode pins 3 and 8 to the Arduino GND rail.",
        "Wire two pushbuttons to digital pins 9 and 10 with internal pullups for increment and reset.",
        "Program a 2D byte array encoding the segment patterns for digits 0 to 9."
      ],
      "codeSnippet": "// Segment pins: A, B, C, D, E, F, G\nconst int segPins[] = {2, 3, 4, 5, 6, 7, 8};\n\nconst byte digits[10][7] = {\n  {1,1,1,1,1,1,0}, // 0\n  {0,1,1,0,0,0,0}, // 1\n  {1,1,0,1,1,0,1}, // 2\n  {1,1,1,1,0,0,1}, // 3\n  {0,1,1,0,0,1,1}, // 4\n  {1,0,1,1,0,1,1}, // 5\n  {1,0,1,1,1,1,1}, // 6\n  {1,1,1,0,0,0,0}, // 7\n  {1,1,1,1,1,1,1}, // 8\n  {1,1,1,1,0,1,1}  // 9\n};\n\nvoid displayDigit(int num) {\n  for (int i = 0; i < 7; i++) {\n    digitalWrite(segPins[i], digits[num][i]);\n  }\n}\n\nvoid setup() {\n  for (int i = 0; i < 7; i++) pinMode(segPins[i], OUTPUT);\n}\n\nvoid loop() {\n  for (int i = 0; i <= 9; i++) {\n    displayDigit(i);\n    delay(1000);\n  }\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "Before pixel graphic screens, seven-segment LED displays revolutionized digital electronics. Understanding truth tables and segment mapping forms a cornerstone of digital electronics education."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "By activating specific combinations of the 7 segments (A-G), any numeral from 0 to 9 can be displayed clearly. A two-dimensional byte array simplifies mapping numerical values to high/low pin states."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "Placing 220 ohm resistors on each anode prevents uneven segment brightness and protects the microcontroller from cumulative current draw."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "Students can expand the sketch into a countdown bomb-timer game or an automated scorekeeper for tabletop sports."
        }
      ],
      "handTools": [
        {
          "name": "Digital Multimeter",
          "purpose": "Segment pinout identification & diode test"
        }
      ],
      "customParts": {
        "title": "Desktop Counter Display Stand CAD",
        "filename": "seven_segment_stand.stl",
        "type": "3D CAD / STL",
        "size": "1.1 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "7-Segment Common Cathode Arduino Wiring Schematics",
        "filename": "seven_segment_schematic.png",
        "description": "Wiring diagram connecting Arduino Uno to a 1-digit 7-segment display."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "Sensors",
        "icon": "sensors"
      },
      {
        "name": "Embedded",
        "icon": "electronics"
      }
    ]
  },
  {
    "id": "wireless-fan-esp32",
    "title": "Smart Wireless Fan Speed Control & Automation with ESP32",
    "instagramCaption": "Wireless FAN control with ESP32 #robotics #makeinindiaIN #innovation",
    "summary": "Create a smartphone-controlled cooling fan system using ESP32 Wi-Fi / Bluetooth BLE, delivering step-less PWM speed control and temperature-triggered auto-cooling.",
    "category": "IoT & Embedded",
    "difficulty": "Intermediate",
    "image": "images/blogs/wireless_fan_esp32.svg",
    "date": "Oct 16, 2026",
    "readTime": "6 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "IoT & Hardware Specialist",
      "avatar": "RS"
    },
    "tags": [
      "ESP32",
      "PWM Speed Control",
      "IoT",
      "Bluetooth BLE",
      "Smart Home"
    ],
    "stats": {
      "respects": 275,
      "views": 5910,
      "comments": 53
    },
    "details": {
      "story": "Smart home climate management requires silent, continuous, and efficient air circulation. In this IoT project, students harness the dual-core ESP32 microcontroller to regulate a 12V brushless DC cooling fan wirelessly from an Android app, while a DHT11 sensor automatically accelerates the fan when room temperature rises above 30\u00b0C.",
      "hardware": [
        {
          "item": "ESP32 NodeMCU Dev Module",
          "qty": "1",
          "purpose": "Dual-core processor with Wi-Fi & Bluetooth"
        },
        {
          "item": "IRLZ44N Logic-Level N-Channel MOSFET",
          "qty": "1",
          "purpose": "High-frequency PWM power switching"
        },
        {
          "item": "12V Brushless DC Fan (120mm)",
          "qty": "1",
          "purpose": "High-airflow cooling unit"
        },
        {
          "item": "DHT11 Digital Climate Sensor",
          "qty": "1",
          "purpose": "Temperature and humidity monitoring"
        },
        {
          "item": "1N4007 Flyback Protection Diode",
          "qty": "1",
          "purpose": "Inductive motor spike protection"
        },
        {
          "item": "12V 2A DC Power Supply",
          "qty": "1",
          "purpose": "Fan motor power rail"
        }
      ],
      "software": [
        {
          "name": "ESP32 Arduino Core",
          "type": "Microcontroller firmware"
        },
        {
          "name": "Blynk IoT / BLE Terminal",
          "type": "Smartphone wireless dashboard"
        }
      ],
      "steps": [
        "Connect the MOSFET Gate to ESP32 GPIO 18 through a 220 ohm resistor with a 10k pulldown to ground.",
        "Wire the MOSFET Drain to the fan negative wire, placing a 1N4007 flyback diode across the fan terminals.",
        "Connect the DHT11 data pin to ESP32 GPIO 4 with a 4.7k pullup resistor.",
        "Configure ESP32 LEDC hardware PWM channels for 25 kHz inaudible motor switching.",
        "Deploy the smartphone Bluetooth dashboard to adjust fan speeds from 0% to 100% effortlessly."
      ],
      "codeSnippet": "#include \"BluetoothSerial.h\"\nBluetoothSerial SerialBT;\n\nconst int FAN_PWM_PIN = 18;\nconst int PWM_CHANNEL = 0;\nconst int PWM_FREQ = 25000; // 25kHz ultrasonic PWM (no motor hum)\nconst int PWM_RESOLUTION = 8;\n\nvoid setup() {\n  ledcSetup(PWM_CHANNEL, PWM_FREQ, PWM_RESOLUTION);\n  ledcAttachPin(FAN_PWM_PIN, PWM_CHANNEL);\n  SerialBT.begin(\"RoboSeekho_SmartFan\");\n}\n\nvoid loop() {\n  if (SerialBT.available()) {\n    int speedPercent = SerialBT.parseInt();\n    int duty = map(speedPercent, 0, 100, 0, 255);\n    ledcWrite(PWM_CHANNEL, constrain(duty, 0, 255));\n  }\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "Energy conservation in smart buildings relies on precision speed regulation rather than noisy binary on/off switching. The ESP32's onboard wireless hardware provides an ideal testbed for connected appliances."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "Using the ESP32's LEDC hardware peripheral at 25 kHz, the MOSFET switches DC power so rapidly that human ears cannot hear any inductive coil whine. Wireless commands received over Bluetooth immediately alter the PWM duty cycle."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "The IRLZ44N logic-level MOSFET fully saturates at 3.3V gate drive voltages. The 1N4007 flyback diode snubs reverse electromagnetic pulses produced by the inductive motor coils when switched off."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "Students can implement autonomous hysteresis: the fan remains off below 26\u00b0C, runs at 40% speed between 26-30\u00b0C, and kicks to maximum speed above 30\u00b0C."
        }
      ],
      "handTools": [
        {
          "name": "Soldering Iron",
          "purpose": "MOSFET power lead wiring"
        },
        {
          "name": "Digital Thermometer",
          "purpose": "DHT11 sensor temperature validation"
        }
      ],
      "customParts": {
        "title": "120mm Desk Fan Grill & ESP32 Base Mount",
        "filename": "smart_fan_enclosure.stl",
        "type": "3D CAD / STL",
        "size": "4.8 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "ESP32 MOSFET PWM & DHT11 Circuit Schematics",
        "filename": "esp32_fan_schematic.png",
        "description": "Wiring diagram connecting ESP32 to IRLZ44N MOSFET, 12V fan, and DHT11."
      }
    },
    "channels": [
      {
        "name": "ESP32",
        "icon": "esp32"
      },
      {
        "name": "IoT",
        "icon": "sensors"
      },
      {
        "name": "Smart Home",
        "icon": "robotics"
      }
    ]
  },
  {
    "id": "smart-parking-system",
    "title": "Automated Multi-Slot Smart Parking System with LCD & Gate",
    "instagramCaption": "Automatic Parking system using Arduino | | #futuretech #trending",
    "summary": "A miniature intelligent parking garage that tracks slot occupancy with infrared sensors, opens the entry gate barrier for vehicles, and displays available spaces in real-time.",
    "category": "Smart Infrastructure",
    "difficulty": "Intermediate",
    "image": "images/blogs/smart_parking_system.svg",
    "date": "Oct 14, 2026",
    "readTime": "7 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "Smart City Solutions Mentor",
      "avatar": "RS"
    },
    "tags": [
      "Arduino Uno",
      "I2C LCD",
      "IR Sensor",
      "Servo Barrier",
      "Smart Parking"
    ],
    "stats": {
      "respects": 312,
      "views": 6890,
      "comments": 68
    },
    "details": {
      "story": "Urban traffic congestion is heavily exacerbated by vehicles circling city blocks searching for parking spots. In this smart city engineering project, students build an automated multi-slot parking lot model. Infrared obstacle sensors detect car occupancy in each bay, an entry servo gate opens automatically when spots are available, and a 16x2 I2C LCD displays live vacancies.",
      "hardware": [
        {
          "item": "Arduino Uno R3",
          "qty": "1",
          "purpose": "System coordination & slot bookkeeping"
        },
        {
          "item": "TCRT5000 / Proximity IR Sensors",
          "qty": "4",
          "purpose": "Slot 1-3 occupancy & gate vehicle arrival"
        },
        {
          "item": "16x2 Character LCD with I2C Backpack",
          "qty": "1",
          "purpose": "Real-time slot availability display"
        },
        {
          "item": "TowerPro SG90 9g Micro Servo",
          "qty": "1",
          "purpose": "Automated boom barrier gate"
        },
        {
          "item": "Dual Red/Green LEDs",
          "qty": "3",
          "purpose": "Individual parking bay status indicators"
        },
        {
          "item": "Foamboard Parking Lot Model",
          "qty": "1",
          "purpose": "Miniature garage layout and road markings"
        }
      ],
      "software": [
        {
          "name": "Arduino IDE 2.x",
          "type": "Microcontroller firmware"
        },
        {
          "name": "LiquidCrystal_I2C Library",
          "type": "LCD display interface"
        }
      ],
      "steps": [
        "Mount IR sensors at the back of each parking stall and at the entrance driveway.",
        "Wire all three slot sensors to Arduino digital pins 4, 5, and 6; wire entry sensor to pin 7.",
        "Connect the 16x2 LCD display to pins A4 (SDA) and A5 (SCL).",
        "Attach the boom barrier arm to the SG90 servo motor horn and mount it at the gate.",
        "Upload the code, place toy cars into slots, and observe the barrier automatically lock when full."
      ],
      "codeSnippet": "#include <Wire.h>\n#include <LiquidCrystal_I2C.h>\n#include <Servo.h>\n\nLiquidCrystal_I2C lcd(0x27, 16, 2);\nServo gateServo;\n\nconst int SLOT_PINS[] = {4, 5, 6};\nconst int ENTRY_IR = 7;\n\nvoid setup() {\n  lcd.init(); lcd.backlight();\n  gateServo.attach(9);\n  gateServo.write(0); // Barrier down\n  for(int i=0; i<3; i++) pinMode(SLOT_PINS[i], INPUT);\n  pinMode(ENTRY_IR, INPUT);\n}\n\nvoid loop() {\n  int available = 0;\n  for(int i=0; i<3; i++) {\n    if(digitalRead(SLOT_PINS[i]) == HIGH) available++; // HIGH = empty slot\n  }\n  \n  lcd.setCursor(0, 0);\n  lcd.print(\"Available: \"); lcd.print(available); lcd.print(\"/3  \");\n  \n  if(digitalRead(ENTRY_IR) == LOW) { // Car at gate\n    if(available > 0) {\n      lcd.setCursor(0, 1); lcd.print(\"Welcome! Enter \");\n      gateServo.write(90); delay(3000);\n      gateServo.write(0);\n    } else {\n      lcd.setCursor(0, 1); lcd.print(\"Parking FULL!  \");\n      delay(2000);\n    }\n  }\n  delay(200);\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "Smart infrastructure transforms crowded cities into responsive, low-emission ecosystems. This project models modern parking garages that prevent overcrowding and guide drivers directly to vacant spaces."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "Each stall uses an infrared reflectance sensor. When a vehicle pulls into the bay, the IR beam bounces off the bumper, signaling an occupied state. The Arduino decrements available capacity and displays 'FULL' if all bays are occupied, locking the entry barrier."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "Using an I2C communication backpack on the LCD reduces required microcontroller pins from 16 to just 2 (SDA and SCL)."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "Students can extend the project with an RFID card scanner for automated resident parking access and billing."
        }
      ],
      "handTools": [
        {
          "name": "Precision Hobby Knife",
          "purpose": "Cutting foam-board roadway lanes"
        },
        {
          "name": "Glue Gun",
          "purpose": "Anchoring gate pillars and sensors"
        }
      ],
      "customParts": {
        "title": "Smart Parking Boom Barrier & Gate Post CAD",
        "filename": "smart_parking_gate.stl",
        "type": "3D CAD / STL",
        "size": "2.2 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "Arduino Smart Parking LCD & Sensor Schematics",
        "filename": "smart_parking_schematic.png",
        "description": "Wiring diagram connecting Arduino Uno to 4x IR sensors, I2C LCD, and SG90 servo."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "Smart City",
        "icon": "robotics"
      },
      {
        "name": "Sensors",
        "icon": "sensors"
      }
    ]
  },
  {
    "id": "automatic-rain-clothes-protector",
    "title": "Rain-Sensing Automatic Clothesline Retractor & Cover",
    "instagramCaption": "Automatic cloth is Protector By Rain.#futuretech #trending",
    "summary": "An automated domestic helper system that detects rainfall droplets instantly and mechanically pulls outdoor drying clothes under a sheltered awning using a geared motor.",
    "category": "Sensors & Electronics",
    "difficulty": "Beginner",
    "image": "images/blogs/automatic_clothes_protector.svg",
    "date": "Oct 12, 2026",
    "readTime": "5 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "Home Automation Specialist",
      "avatar": "RS"
    },
    "tags": [
      "Rain Sensor",
      "Arduino Uno",
      "L298N",
      "Home Automation",
      "Make In India"
    ],
    "stats": {
      "respects": 248,
      "views": 5210,
      "comments": 47
    },
    "details": {
      "story": "Every monsoon season, sudden cloudbursts soak outdoor laundry before homeowners can run to the balcony. This clever domestic automation build uses a rain-drop sensor board coupled with an Arduino and a motorized pulley line. When the very first raindrop bridges the conductive tracks, the motor activates to draw the clothes safely beneath the roof awning.",
      "hardware": [
        {
          "item": "Arduino Uno R3 / Nano",
          "qty": "1",
          "purpose": "Precipitation analysis and motor logic"
        },
        {
          "item": "FC-37 Rain Drop Sensor & LM393 Comparator",
          "qty": "1",
          "purpose": "Conductive water droplet detection"
        },
        {
          "item": "12V Geared DC Motor (60 RPM)",
          "qty": "1",
          "purpose": "Clothesline pulley drive"
        },
        {
          "item": "L298N Motor Driver Module",
          "qty": "1",
          "purpose": "Bidirectional motor control"
        },
        {
          "item": "Limit Switches",
          "qty": "2",
          "purpose": "Safe shelter and sunny position endstops"
        },
        {
          "item": "Pulley Wheels & Braided Nylon Cord",
          "qty": "1",
          "purpose": "Linear clothesline traversal"
        }
      ],
      "software": [
        {
          "name": "Arduino IDE 2.x",
          "type": "Microcontroller firmware"
        }
      ],
      "steps": [
        "Mount the FC-37 rain sensor outdoors at a 15-degree angle to prevent standing water pooling.",
        "Connect the analog output (A0) and digital threshold output (D0) to Arduino pins A0 and 2.",
        "Mount the motor with a pulley wheel on one side of the line and an idler pulley on the other.",
        "Install limit switches at the open-sun end and the sheltered awning end.",
        "Calibrate the LM393 comparator trimpot so morning dew doesn't trigger a false rain alert."
      ],
      "codeSnippet": "const int RAIN_SENSOR = A0;\nconst int MOTOR_PWM = 3;\nconst int MOTOR_DIR1 = 4;\nconst int MOTOR_DIR2 = 5;\nconst int LIMIT_SHELTER = 6;\n\nvoid setup() {\n  pinMode(RAIN_SENSOR, INPUT);\n  pinMode(MOTOR_DIR1, OUTPUT);\n  pinMode(MOTOR_DIR2, OUTPUT);\n  pinMode(LIMIT_SHELTER, INPUT_PULLUP);\n}\n\nvoid pullToShelter() {\n  while(digitalRead(LIMIT_SHELTER) == HIGH) {\n    digitalWrite(MOTOR_DIR1, HIGH);\n    digitalWrite(MOTOR_DIR2, LOW);\n    analogWrite(MOTOR_PWM, 200);\n  }\n  digitalWrite(MOTOR_DIR1, LOW);\n  digitalWrite(MOTOR_DIR2, LOW);\n}\n\nvoid loop() {\n  int rainLevel = analogRead(RAIN_SENSOR);\n  if (rainLevel < 500) { // Droplet detected\n    pullToShelter();\n    delay(10000);\n  }\n  delay(500);\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "Simple, practical automations that save time and hassle are the core of grassroots engineering. This project teaches students how to solve relatable everyday household problems with microcontrollers."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "The FC-37 sensor features interleaved nickel tracks. Pure air has nearly infinite resistance, but rainwater conducts electricity, dropping the electrical resistance across the sensor tracks. The Arduino reads the analog voltage drop and fires the motor to reel in the laundry line."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "Limit switches prevent the motor from stalling against the wall or pulling off the tracks once fully retracted."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "Testing with a water spray bottle demonstrates immediate sub-second reaction speeds, pulling clothes inside long before heavy downpours begin."
        }
      ],
      "handTools": [
        {
          "name": "Hot Glue & Zip Ties",
          "purpose": "Pulley line fastening"
        },
        {
          "name": "Water Spray Bottle",
          "purpose": "Rain sensor sensitivity testing"
        }
      ],
      "customParts": {
        "title": "Motor Pulley Wheel & Line Tensioner CAD",
        "filename": "clothesline_pulley.stl",
        "type": "3D CAD / STL",
        "size": "1.9 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "Rain Sensor & L298N Clothesline Motor Schematic",
        "filename": "clothes_protector_schematic.png",
        "description": "Wiring diagram connecting Arduino Uno to FC-37 rain sensor and motor driver."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "Smart Home",
        "icon": "sensors"
      },
      {
        "name": "Automation",
        "icon": "robotics"
      }
    ]
  },
  {
    "id": "automatic-pet-feeder",
    "title": "Automated Portion-Controlled Pet Feeder with Arduino",
    "instagramCaption": "Automatic Pet Feeder using Arduino #arduinoproject #futuretech #trending",
    "summary": "Never let your pets go hungry! Build an automated food dispenser with an Archimedes screw auger, portion-control servo, DS3231 real-time clock, and low-food ultrasonic indicator.",
    "category": "Smart Infrastructure",
    "difficulty": "Intermediate",
    "image": "images/blogs/automatic_pet_feeder.svg",
    "date": "Oct 10, 2026",
    "readTime": "6 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "IoT & Pet Care Specialist",
      "avatar": "RS"
    },
    "tags": [
      "Arduino Uno",
      "DS3231 RTC",
      "MG996R Servo",
      "HC-SR04",
      "Pet Feeder"
    ],
    "stats": {
      "respects": 310,
      "views": 7120,
      "comments": 63
    },
    "details": {
      "story": "Busy pet parents need a dependable feeding schedule for their cats and dogs. In this popular RoboSeekho build, makers construct an automated kibble dispenser. A DS3231 high-precision real-time clock triggers portion dispensing at programmed meal times (e.g. 8:00 AM and 6:00 PM), while an ultrasonic sensor monitors kibble height inside the hopper and buzzes when food is running low.",
      "hardware": [
        {
          "item": "Arduino Uno R3",
          "qty": "1",
          "purpose": "Clock monitoring and dispenser timing"
        },
        {
          "item": "DS3231 I2C Real-Time Clock Module",
          "qty": "1",
          "purpose": "Battery-backed scheduling clock"
        },
        {
          "item": "MG996R High-Torque Metal Servo Motor",
          "qty": "1",
          "purpose": "Dispenser valve / auger drive"
        },
        {
          "item": "HC-SR04 Ultrasonic Distance Sensor",
          "qty": "1",
          "purpose": "Food hopper level monitoring"
        },
        {
          "item": "16x2 I2C Character LCD Display",
          "qty": "1",
          "purpose": "Next feeding countdown & time display"
        },
        {
          "item": "3D-Printed Food Hopper & Food Chute",
          "qty": "1",
          "purpose": "Food reservoir and food bowl"
        }
      ],
      "software": [
        {
          "name": "Arduino IDE 2.x",
          "type": "Microcontroller firmware"
        },
        {
          "name": "RTClib Library",
          "type": "DS3231 time synchronization"
        },
        {
          "name": "Servo.h Library",
          "type": "Continuous / angle servo control"
        }
      ],
      "steps": [
        "Insert a coin cell battery into the DS3231 RTC module to preserve time across power cycles.",
        "Connect the RTC and LCD to the shared Arduino I2C bus (SDA -> A4, SCL -> A5).",
        "Assemble the rotating paddle or auger inside the food hopper and attach the MG996R metal-gear servo.",
        "Mount the ultrasonic sensor in the top lid facing downwards toward the kibble.",
        "Program feeding times and test portion weight accuracy on a kitchen scale."
      ],
      "codeSnippet": "#include <Wire.h>\n#include \"RTClib.h\"\n#include <Servo.h>\n\nRTC_DS3231 rtc;\nServo dispenser;\nconst int SERVO_PIN = 9;\n\nvoid dispenseMeal() {\n  // Rotate paddle back and forth to drop measured portion\n  for(int i=0; i<3; i++) {\n    dispenser.write(120);\n    delay(800);\n    dispenser.write(0);\n    delay(800);\n  }\n}\n\nvoid setup() {\n  rtc.begin();\n  dispenser.attach(SERVO_PIN);\n  dispenser.write(0);\n}\n\nvoid loop() {\n  DateTime now = rtc.now();\n  // Feed at exactly 08:00:00 and 18:00:00\n  if((now.hour() == 8 || now.hour() == 18) && now.minute() == 0 && now.second() == 0) {\n    dispenseMeal();\n    delay(2000);\n  }\n  delay(900);\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "Automated feeders prevent pet obesity by delivering consistent, measured portions while offering peace of mind to owners working long hours. This project combines mechanical food handling with battery-backed scheduling."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "The DS3231 keeps precise time with temperature-compensated crystal oscillation. When the current timestamp matches the scheduled breakfast or dinner time, the metal-gear servo turns a circular paddle mechanism that sweeps exactly 50 grams of food down the funnel."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "Because kibble can occasionally lodge against the funnel walls, an MG996R metal-gear servo is chosen over nylon servos to deliver over 10 kg-cm of torque without stripping gears."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "Calibration on a digital kitchen scale allows makers to dial in the exact number of dispenser rotations needed per meal."
        }
      ],
      "handTools": [
        {
          "name": "Kitchen Digital Gram Scale",
          "purpose": "Portion weight calibration"
        },
        {
          "name": "3D Printer (Food-Safe PETG)",
          "purpose": "Hopper and auger fabrication"
        }
      ],
      "customParts": {
        "title": "Food Hopper & Rotating Dispenser Valve CAD",
        "filename": "pet_feeder_hopper.stl",
        "type": "3D CAD / STL",
        "size": "8.4 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "DS3231 RTC, MG996R Servo & LCD Schematics",
        "filename": "pet_feeder_schematic.png",
        "description": "Wiring diagram connecting Arduino Uno to DS3231 RTC, servo, and LCD."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "Smart Home",
        "icon": "sensors"
      },
      {
        "name": "Mechanical",
        "icon": "robotics"
      }
    ]
  },
  {
    "id": "automatic-toll-gate",
    "title": "Automated Highway Toll Plaza System with RFID & Boom Barrier",
    "instagramCaption": "Automatic Toll Gate Use Arduino Uno projects #arduinoprojects #arduino",
    "summary": "Replicate a modern fast-tag toll plaza using an RC522 RFID reader, Arduino Uno, SG90 servo boom barrier, buzzer feedback, and visual pass/stop traffic signals.",
    "category": "Smart Infrastructure",
    "difficulty": "Intermediate",
    "image": "images/blogs/automatic_toll_gate.svg",
    "date": "Oct 08, 2026",
    "readTime": "6 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "Smart Transport Mentor",
      "avatar": "RS"
    },
    "tags": [
      "Arduino Uno",
      "RC522 RFID",
      "Servo Motor",
      "FastTag",
      "Smart Toll"
    ],
    "stats": {
      "respects": 294,
      "views": 6430,
      "comments": 58
    },
    "details": {
      "story": "Electronic toll collection (FASTag) has transformed highway travel by eliminating cash queues and reducing idling emissions. In this realistic STEM lab simulation, students wire an MFRC522 radio-frequency reader to an Arduino Uno. When an authorized RFID tag passes the checkpoint, the toll is deducted, green traffic lights turn on, and a servo barrier lifts.",
      "hardware": [
        {
          "item": "Arduino Uno R3",
          "qty": "1",
          "purpose": "RFID credential authentication & barrier timing"
        },
        {
          "item": "RC522 13.56MHz RFID Reader with Keyfobs",
          "qty": "1",
          "purpose": "Wireless tag detection (SPI interface)"
        },
        {
          "item": "TowerPro SG90 9g Micro Servo",
          "qty": "1",
          "purpose": "Boom barrier lift arm"
        },
        {
          "item": "16x2 I2C LCD Display",
          "qty": "1",
          "purpose": "Toll amount & vehicle ID display"
        },
        {
          "item": "Red and Green 5mm LEDs",
          "qty": "2",
          "purpose": "Traffic signal lane lights"
        },
        {
          "item": "Piezo Buzzer",
          "qty": "1",
          "purpose": "Audio transaction confirmation beep"
        }
      ],
      "software": [
        {
          "name": "Arduino IDE 2.x",
          "type": "Microcontroller firmware"
        },
        {
          "name": "MFRC522 Library (Github: miguelbalboa)",
          "type": "RFID reader driver"
        }
      ],
      "steps": [
        "Connect RC522 pins (SDA, SCK, MOSI, MISO, RST) to Arduino digital pins 10, 13, 11, 12, and 9.",
        "Mount the RC522 scanner in the roadside toll booth pillar.",
        "Attach a red-and-white striped barrier arm to the SG90 servo motor.",
        "Record your RFID keyfob UID using the DumpInfo example sketch.",
        "Hardcode the authorized UID in firmware and test toll payment, barrier lifting, and automatic re-closing."
      ],
      "codeSnippet": "#include <SPI.h>\n#include <MFRC522.h>\n#include <Servo.h>\n\n#define SS_PIN 10\n#define RST_PIN 9\nMFRC522 rfid(SS_PIN, RST_PIN);\nServo barrierServo;\n\nString authorizedUID = \"83 5E 2A 1B\"; // Your card UID\n\nvoid setup() {\n  SPI.begin();\n  rfid.PCD_Init();\n  barrierServo.attach(6);\n  barrierServo.write(0); // Gate down\n}\n\nvoid loop() {\n  if (!rfid.PICC_IsNewCardPresent() || !rfid.PICC_ReadCardSerial()) return;\n  \n  String cardUID = \"\";\n  for (byte i = 0; i < rfid.uid.size; i++) {\n    cardUID += String(rfid.uid.uidByte[i] < 0x10 ? \" 0\" : \" \");\n    cardUID += String(rfid.uid.uidByte[i], HEX);\n  }\n  cardUID.toUpperCase();\n  cardUID = cardUID.substring(1);\n\n  if (cardUID == authorizedUID) {\n    tone(8, 2000, 200); // Beep\n    barrierServo.write(90); // Open gate\n    delay(4000);            // Allow vehicle to pass\n    barrierServo.write(0);  // Close gate\n  }\n  rfid.PICC_HaltA();\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "Automating toll collection prevents traffic jams and accelerates highway commerce. Recreating FASTag systems in the classroom demystifies how high-frequency electromagnetic induction transfers data wirelessly."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "The reader generates a 13.56 MHz electromagnetic field. When a passive RFID card enters the field, its internal microchip powers up via inductive coupling and transmits its unique 32-bit identity number back over the radio wave. The Arduino authenticates the UID and lifts the barrier."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "Because the RC522 operates natively at 3.3V, its power line must be connected strictly to the Arduino's 3.3V pin to prevent damaging the radio IC."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "Students can simulate prepaid wallet balances, displaying remaining money on the LCD and denying access when funds are depleted."
        }
      ],
      "handTools": [
        {
          "name": "Wire Stripper & Crimper",
          "purpose": "SPI harness connection"
        },
        {
          "name": "Hot Glue Gun",
          "purpose": "Toll booth pillar assembly"
        }
      ],
      "customParts": {
        "title": "Toll Plaza Booth & Striped Barrier CAD",
        "filename": "toll_plaza_booth.stl",
        "type": "3D CAD / STL",
        "size": "3.5 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "RC522 RFID SPI & Servo Toll Gate Schematic",
        "filename": "automatic_toll_schematic.png",
        "description": "Wiring diagram connecting Arduino Uno to RC522 reader via SPI and SG90 servo."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "RFID",
        "icon": "sensors"
      },
      {
        "name": "Automation",
        "icon": "robotics"
      }
    ]
  },
  {
    "id": "diy-smart-dustbin",
    "title": "DIY Smart Touchless Dustbin with Ultrasonic Sensor",
    "instagramCaption": "DIY Smart Dustbin using Ultrasonic Sensor and Arduino #robot",
    "summary": "A hygienic touch-free waste bin that detects approaching hands from 20cm away, smoothly opens the lid with an SG90 servo, holds for 3 seconds, and automatically closes.",
    "category": "Sanitation Tech",
    "difficulty": "Beginner",
    "image": "images/blogs/diy_smart_dustbin.svg",
    "date": "Oct 06, 2026",
    "readTime": "5 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "Makerspace Mentor",
      "avatar": "RS"
    },
    "tags": [
      "Arduino Nano",
      "HC-SR04",
      "SG90 Servo",
      "Smart Dustbin",
      "Clean India"
    ],
    "stats": {
      "respects": 420,
      "views": 9850,
      "comments": 110
    },
    "details": {
      "story": "Touching dirty garbage can lids spreads bacteria and pathogens in schools, kitchens, and clinics. This viral DIY project uses an Arduino Nano, an HC-SR04 ultrasonic sensor, and an SG90 micro-servo to convert any ordinary trash can into an automatic touchless smart bin that opens on command.",
      "hardware": [
        {
          "item": "Arduino Nano R3",
          "qty": "1",
          "purpose": "Compact microcontroller processing"
        },
        {
          "item": "HC-SR04 Ultrasonic Distance Sensor",
          "qty": "1",
          "purpose": "Non-contact hand gesture sensing"
        },
        {
          "item": "TowerPro SG90 9g Micro Servo",
          "qty": "1",
          "purpose": "Dustbin lid mechanical lift mechanism"
        },
        {
          "item": "9V Battery with Snap Connector",
          "qty": "1",
          "purpose": "Cordless internal power supply"
        },
        {
          "item": "Desktop Trash Can with Hinged Lid",
          "qty": "1",
          "purpose": "Waste container body"
        }
      ],
      "software": [
        {
          "name": "Arduino IDE 2.x",
          "type": "Microcontroller firmware"
        },
        {
          "name": "Servo.h Library",
          "type": "Smooth lid movement"
        }
      ],
      "steps": [
        "Drill two 16mm holes in the front of the bin lid and push the HC-SR04 ultrasonic transducers through.",
        "Mount the SG90 servo inside the lid rim, connecting its horn to the lid pivot hinge.",
        "Wire sensor Trig to Nano Pin 9, Echo to Pin 10, and Servo signal to Pin 6.",
        "Set detection threshold to 20cm so people walking past don't trigger false opens.",
        "Fasten the 9V battery inside the lid housing and test hands-free waste disposal."
      ],
      "codeSnippet": "#include <Servo.h>\n\nconst int TRIG = 9;\nconst int ECHO = 10;\nconst int SERVO = 6;\nServo lidServo;\n\nint getDistance() {\n  digitalWrite(TRIG, LOW); delayMicroseconds(2);\n  digitalWrite(TRIG, HIGH); delayMicroseconds(10);\n  digitalWrite(TRIG, LOW);\n  long duration = pulseIn(ECHO, HIGH);\n  return duration * 0.034 / 2;\n}\n\nvoid setup() {\n  pinMode(TRIG, OUTPUT);\n  pinMode(ECHO, INPUT);\n  lidServo.attach(SERVO);\n  lidServo.write(0); // Lid closed\n}\n\nvoid loop() {\n  int dist = getDistance();\n  if (dist > 0 && dist < 20) { // Hand within 20cm\n    lidServo.write(90);        // Open lid\n    delay(3000);               // Wait 3 seconds to toss trash\n    lidServo.write(0);         // Close lid\n    delay(1000);\n  }\n  delay(80);\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "Promoting personal hygiene and Swachh Bharat cleanliness through hands-on STEM is one of RoboSeekho's foundational missions. This simple build makes daily sanitation engaging and automated."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "The ultrasonic sensor sends high-frequency sound waves. When a hand hovers above the bin, sound waves bounce back in under 1 millisecond. The Arduino calculates proximity, sweeps the servo to 90 degrees, waits 3 seconds, and smoothly lowers the lid."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "All electronics mount directly onto the underside of the lid, keeping the bin interior clean for garbage bags."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "We programmed smoothing delays to prevent the lid from slamming shut abruptly, ensuring whisper-quiet kitchen operation."
        }
      ],
      "handTools": [
        {
          "name": "Step Drill Bit (16mm)",
          "purpose": "Transducer hole cutouts"
        },
        {
          "name": "Hot Glue Gun",
          "purpose": "Component fastening"
        }
      ],
      "customParts": {
        "title": "HC-SR04 Faceplate & Servo Lid Arm CAD",
        "filename": "smart_dustbin_mount.stl",
        "type": "3D CAD / STL",
        "size": "1.7 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "Smart Dustbin Nano & Ultrasonic Sensor Schematics",
        "filename": "smart_dustbin_schematic.png",
        "description": "Wiring diagram connecting Arduino Nano to HC-SR04 and SG90 servo."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "Sensors",
        "icon": "sensors"
      },
      {
        "name": "Sanitation",
        "icon": "robotics"
      }
    ]
  },
  {
    "id": "diy-ultrasonic-radar",
    "title": "DIY 180\u00b0 Ultrasonic Radar Station with Processing IDE Screen",
    "instagramCaption": "DIY Radar With Ultrasonic Sensor #instgram roboseekho #futuretech",
    "summary": "Construct an interactive sweeping sonar radar! An Arduino rotates an HC-SR04 sensor on an SG90 servo through 180\u00b0, streaming distance vectors via USB serial to a dynamic green-sweep GUI.",
    "category": "Robotics",
    "difficulty": "Intermediate",
    "image": "images/blogs/diy_ultrasonic_radar.svg",
    "date": "Oct 04, 2026",
    "readTime": "7 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "Radar & Sensor Specialist",
      "avatar": "RS"
    },
    "tags": [
      "Arduino Uno",
      "Processing IDE",
      "HC-SR04",
      "Radar System",
      "Sonar"
    ],
    "stats": {
      "respects": 372,
      "views": 8410,
      "comments": 74
    },
    "details": {
      "story": "Sonar and radar tracking systems protect airspace, submarines, and autonomous vehicles. In this fan-favorite RoboSeekho project, students construct a desktop radar station. The Arduino sweeps an HC-SR04 sensor back and forth across 180 degrees using an SG90 servo, sending angle and distance pairs over USB serial to Processing 4 to draw a military-style glowing green sweep radar display.",
      "hardware": [
        {
          "item": "Arduino Uno R3",
          "qty": "1",
          "purpose": "Sensor sweep motor drive & serial data transmission"
        },
        {
          "item": "HC-SR04 Ultrasonic Distance Sensor",
          "qty": "1",
          "purpose": "Echolocation pulse emission and echo timing"
        },
        {
          "item": "TowerPro SG90 9g Micro Servo Motor",
          "qty": "1",
          "purpose": "180-degree continuous angular scanning"
        },
        {
          "item": "USB Cable (Type A to B)",
          "qty": "1",
          "purpose": "High-speed serial data connection to computer"
        },
        {
          "item": "Acrylic / 3D-Printed Radar Turret Stand",
          "qty": "1",
          "purpose": "Rigid sensor mounting pedestal"
        }
      ],
      "software": [
        {
          "name": "Arduino IDE 2.x",
          "type": "Microcontroller firmware"
        },
        {
          "name": "Processing 4 IDE",
          "type": "Real-time glowing radar sweep GUI"
        }
      ],
      "steps": [
        "Attach the HC-SR04 ultrasonic sensor to the horn of the SG90 servo motor.",
        "Wire sensor Trig to Pin 9, Echo to Pin 10, and Servo signal to Pin 11.",
        "Mount the assembly onto the center of a stable radar turret baseplate.",
        "Upload the Arduino sketch to stream '<angle>,<distance>.' format strings over Serial at 9600 baud.",
        "Launch the Processing radar visualization sketch and watch objects appear as glowing red blips."
      ],
      "codeSnippet": "#include <Servo.h>\n\nconst int TRIG = 9;\nconst int ECHO = 10;\nServo radarServo;\n\nint getDistance() {\n  digitalWrite(TRIG, LOW); delayMicroseconds(2);\n  digitalWrite(TRIG, HIGH); delayMicroseconds(10);\n  digitalWrite(TRIG, LOW);\n  long duration = pulseIn(ECHO, HIGH);\n  return duration * 0.034 / 2;\n}\n\nvoid setup() {\n  pinMode(TRIG, OUTPUT);\n  pinMode(ECHO, INPUT);\n  radarServo.attach(11);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  // Sweep 15\u00b0 to 165\u00b0\n  for(int i=15; i<=165; i++) {\n    radarServo.write(i);\n    delay(30);\n    int dist = getDistance();\n    Serial.print(i); Serial.print(\",\"); Serial.print(dist); Serial.print(\".\");\n  }\n  for(int i=165; i>=15; i--) {\n    radarServo.write(i);\n    delay(30);\n    int dist = getDistance();\n    Serial.print(i); Serial.print(\",\"); Serial.print(dist); Serial.print(\".\");\n  }\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "Visualizing sensor data on a computer screen is an electrifying moment for young engineers. This project bridges embedded hardware and graphical software development."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "As the servo steps from 15 to 165 degrees, the Arduino sends coordinate pairs via serial UART. Processing reads this stream, converts polar coordinates (angle, distance) into Cartesian screen coordinates (x, y), and renders glowing green radar sweeps with persistent phosphor fading."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "Ensuring the servo wires have sufficient mechanical slack avoids binding during full 180-degree rotations."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "Place coffee cups or boxes within 40cm of the radar to see exact distance and angular location mapped in real time."
        }
      ],
      "handTools": [
        {
          "name": "Allen Key Set",
          "purpose": "Turret stand bracket fastening"
        }
      ],
      "customParts": {
        "title": "3D-Printed Radar Turret Pedestal & Sensor Horn",
        "filename": "radar_turret_pedestal.stl",
        "type": "3D CAD / STL",
        "size": "2.9 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "Ultrasonic Radar Servo & Serial Circuit Schematics",
        "filename": "diy_radar_schematic.png",
        "description": "Wiring diagram connecting Arduino Uno to HC-SR04 and SG90 servo motor."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "Processing",
        "icon": "electronics"
      },
      {
        "name": "Sensors",
        "icon": "sensors"
      },
      {
        "name": "Robotics",
        "icon": "robotics"
      }
    ]
  },
  {
    "id": "how-ir-sensor-works",
    "title": "How Infrared Proximity Sensors Work: Inside the LM393 & Photodiode",
    "instagramCaption": "How an IR sensor works? Learn with roboseekho",
    "summary": "Demystify infrared reflection, ambient optical noise filtering, and threshold tuning. Build and test an IR proximity sensor from scratch using an IR LED, photodiode, and LM393 op-amp.",
    "category": "Sensors & Electronics",
    "difficulty": "Beginner",
    "image": "images/blogs/how_ir_sensor_works.svg",
    "date": "Oct 02, 2026",
    "readTime": "5 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "Analog Electronics Mentor",
      "avatar": "RS"
    },
    "tags": [
      "IR Sensor",
      "LM393 Comparator",
      "Photodiode",
      "Electronics",
      "Proximity"
    ],
    "stats": {
      "respects": 280,
      "views": 6220,
      "comments": 49
    },
    "details": {
      "story": "Infrared proximity sensors are the unsung heroes behind line-following robots, touchless taps, and industrial assembly counters. In this educational deep-dive, RoboSeekho students dissect the anatomy of an IR sensor: how the 940nm infrared transmitter emitter works, how the receiver photodiode changes current under reflected light, and how the LM393 voltage comparator triggers a sharp digital signal.",
      "hardware": [
        {
          "item": "LM393 Dual Differential Comparator IC",
          "qty": "1",
          "purpose": "Analog threshold comparison & digital output"
        },
        {
          "item": "940nm IR Transmitter LED (Clear)",
          "qty": "1",
          "purpose": "Infrared light pulse emission"
        },
        {
          "item": "IR Receiver Photodiode (Black/Dark)",
          "qty": "1",
          "purpose": "Reflected infrared photon detection"
        },
        {
          "item": "10k Ohm Multi-turn Potentiometer",
          "qty": "1",
          "purpose": "Reference threshold tuning"
        },
        {
          "item": "Resistors (10k, 1k, 330 Ohm)",
          "qty": "4",
          "purpose": "Biasing and current limiting"
        },
        {
          "item": "Status Indicator LEDs (Red & Green)",
          "qty": "2",
          "purpose": "Power and detection state indicators"
        },
        {
          "item": "Solderless Breadboard & Jumpers",
          "qty": "1",
          "purpose": "Circuit experimentation bed"
        }
      ],
      "software": [
        {
          "name": "Arduino IDE 2.x",
          "type": "Signal verification firmware"
        }
      ],
      "steps": [
        "Insert the LM393 comparator into the center spine of the breadboard.",
        "Wire the 940nm IR emitter with a 330 ohm resistor between 5V and GND so it constantly emits invisible light.",
        "Connect the IR photodiode in reverse-bias mode in series with a 10k resistor to non-inverting pin 3.",
        "Connect the 10k potentiometer wiper to inverting pin 2 to establish your adjustable voltage threshold.",
        "Connect an indicator LED and Arduino pin to output pin 1 to observe instantaneous high/low transitions."
      ],
      "codeSnippet": "const int IR_DIGITAL_PIN = 2;\nconst int STATUS_LED = 13;\n\nvoid setup() {\n  pinMode(IR_DIGITAL_PIN, INPUT);\n  pinMode(STATUS_LED, OUTPUT);\n  Serial.begin(9600);\n}\n\nvoid loop() {\n  int obstacleDetected = (digitalRead(IR_DIGITAL_PIN) == LOW); // Active Low\n  \n  if (obstacleDetected) {\n    digitalWrite(STATUS_LED, HIGH);\n    Serial.println(\"Obstacle Detected by Infrared Reflection!\");\n  } else {\n    digitalWrite(STATUS_LED, LOW);\n  }\n  delay(50);\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "Infrared light is invisible to human eyes but completely visible to silicon photodiodes. Understanding how analog light curves transform into binary 1s and 0s builds foundational circuit intuition for every young maker."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "The IR LED shoots photons forward. When an obstacle approaches, light bounces off its surface back into the photodiode. This reverse leakage current creates a voltage rise across the 10k resistor. When this exceeds the potentiometer's reference voltage, the LM393 flips its open-collector output to LOW."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "Isolating the emitter and receiver with an opaque heat-shrink tube prevents direct optical cross-talk between the components."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "Students test detection against different materials\u2014demonstrating why matte black surfaces absorb IR while glossy white surfaces reflect strongly."
        }
      ],
      "handTools": [
        {
          "name": "Smartphone Camera",
          "purpose": "Viewing invisible 940nm IR emitter glow"
        },
        {
          "name": "Digital Multimeter",
          "purpose": "Probing comparator threshold voltages"
        }
      ],
      "customParts": {
        "title": "Optical Isolation Shroud for IR Emitter & Receiver",
        "filename": "ir_sensor_shroud.stl",
        "type": "3D CAD / STL",
        "size": "950 KB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "LM393 Infrared Proximity Circuit Schematic",
        "filename": "ir_sensor_working_schematic.png",
        "description": "Complete schematic of LM393 voltage comparator, photodiode, and IR LED."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "Sensors",
        "icon": "sensors"
      },
      {
        "name": "Electronics",
        "icon": "robotics"
      }
    ]
  },
  {
    "id": "line-follower-robot",
    "title": "Autonomous Line Follower Robot with Dual IR Track Sensors",
    "instagramCaption": "RoboSeekho Line Following Robot with Dual IR Sensors",
    "summary": "An essential rite of passage for every robotics engineer! Build an autonomous mobile robot that traces high-contrast black line pathways with dual IR reflection sensors and differential steering.",
    "category": "Robotics",
    "difficulty": "Beginner",
    "image": "images/blogs/line_follower_robot.svg",
    "date": "Sep 28, 2026",
    "readTime": "6 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "Competition Mentor",
      "avatar": "RS"
    },
    "tags": [
      "Arduino Uno",
      "Line Follower",
      "TCRT5000",
      "L298N",
      "Mobile Robot"
    ],
    "stats": {
      "respects": 365,
      "views": 8190,
      "comments": 78
    },
    "details": {
      "story": "Line-following robots are the bedrock of factory AGVs and competitive high school robotics leagues worldwide. In this core RoboSeekho project, students construct a differential-drive robot equipped with downward-facing TCRT5000 optical sensors to navigate track curves, 90-degree corners, and loops with high precision.",
      "hardware": [
        {
          "item": "Arduino Uno R3",
          "qty": "1",
          "purpose": "Navigation logic and differential steering"
        },
        {
          "item": "TCRT5000 Dual IR Tracking Sensors",
          "qty": "2",
          "purpose": "Floor reflectance black/white line sensing"
        },
        {
          "item": "L298N Dual H-Bridge Motor Driver",
          "qty": "1",
          "purpose": "DC motor driving & direction control"
        },
        {
          "item": "2WD Smart Robot Chassis with TT Motors",
          "qty": "1",
          "purpose": "Chassis body, wheels, and front caster"
        },
        {
          "item": "2x 18650 Li-ion Battery Holder (7.4V)",
          "qty": "1",
          "purpose": "Mobile high-drain power supply"
        }
      ],
      "software": [
        {
          "name": "Arduino IDE 2.x",
          "type": "Microcontroller firmware"
        }
      ],
      "steps": [
        "Mount the dual IR tracking sensors on the front underside of the chassis, spaced 2cm apart.",
        "Wire the Left IR sensor to Arduino Pin 2, and Right IR sensor to Pin 3.",
        "Connect L298N motor inputs to pins 5, 6 (Left Motor) and 9, 10 (Right Motor).",
        "Calibrate the sensor sensitivity potentiometers on white floor vs black electrical tape.",
        "Implement proportional steering corrections to ensure smooth track hugging without oscillating."
      ],
      "codeSnippet": "const int LEFT_IR = 2;\nconst int RIGHT_IR = 3;\nconst int IN1 = 5, IN2 = 6, IN3 = 9, IN4 = 10;\n\nvoid setup() {\n  pinMode(LEFT_IR, INPUT);\n  pinMode(RIGHT_IR, INPUT);\n  pinMode(IN1, OUTPUT); pinMode(IN2, OUTPUT);\n  pinMode(IN3, OUTPUT); pinMode(IN4, OUTPUT);\n}\n\nvoid loop() {\n  int left = digitalRead(LEFT_IR);\n  int right = digitalRead(RIGHT_IR);\n  \n  if (left == LOW && right == LOW) {\n    // Both on white - cruise forward\n    digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);\n    digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW);\n  } else if (left == HIGH && right == LOW) {\n    // Left hit black line - steer left\n    digitalWrite(IN1, LOW);  digitalWrite(IN2, HIGH);\n    digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW);\n  } else if (left == LOW && right == HIGH) {\n    // Right hit black line - steer right\n    digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);\n    digitalWrite(IN3, LOW);  digitalWrite(IN4, HIGH);\n  } else {\n    // Stop at cross line or finish marker\n    digitalWrite(IN1, LOW); digitalWrite(IN2, LOW);\n    digitalWrite(IN3, LOW); digitalWrite(IN4, LOW);\n  }\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "Automated guided vehicles in Amazon fulfillment centers navigate thousands of miles following optical and magnetic floor lines. This classic build provides an intuitive introduction to closed-loop feedback systems."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "White surfaces reflect infrared strongly (producing a LOW logic state), whereas matte black electrical tape absorbs infrared (producing a HIGH logic state). By reading both sensors, the Arduino applies differential steering to correct any drift off the line."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "Sensor height above the floor is critical: maintaining a steady 5mm ground clearance produces optimal signal-to-noise ratio."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "Advanced students can replace basic bang-bang switching with a PID (Proportional-Integral-Derivative) control loop for blazing competition speeds."
        }
      ],
      "handTools": [
        {
          "name": "Black Vinyl Electrical Tape (3/4 inch)",
          "purpose": "Creating test track courses"
        },
        {
          "name": "Precision Caliper",
          "purpose": "Measuring 5mm sensor ground height"
        }
      ],
      "customParts": {
        "title": "Adjustable Ground-Clearance IR Sensor Bracket CAD",
        "filename": "line_sensor_bracket.stl",
        "type": "3D CAD / STL",
        "size": "1.3 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "Line Follower IR Sensors & L298N Driver Schematic",
        "filename": "line_follower_schematic.png",
        "description": "Wiring diagram connecting Arduino Uno to dual TCRT5000 sensors and L298N driver."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "Robotics",
        "icon": "robotics"
      },
      {
        "name": "Sensors",
        "icon": "sensors"
      }
    ]
  },
  {
    "id": "rfid-access-control",
    "title": "RFID Smart Attendance & Electronic Solenoid Lock System",
    "instagramCaption": "RoboSeekho RFID Smart Door Access System using Arduino",
    "summary": "Engineer a commercial-grade keyless entry system with an RC522 RFID scanner, relay-driven 12V solenoid door strike lock, EEPROM credential validation, and admin registration mode.",
    "category": "Smart Infrastructure",
    "difficulty": "Intermediate",
    "image": "images/blogs/rfid_access_control.svg",
    "date": "Sep 24, 2026",
    "readTime": "7 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "Security Systems Mentor",
      "avatar": "RS"
    },
    "tags": [
      "Arduino Uno",
      "RC522",
      "RFID Lock",
      "Relay Control",
      "Security"
    ],
    "stats": {
      "respects": 315,
      "views": 7240,
      "comments": 65
    },
    "details": {
      "story": "Say goodbye to physical keys! In this applied engineering project, students build a complete access-control station for maker spaces and dorm rooms. Swiping an authorized RFID keyfob engages a 5V relay module that unlocks a heavy-duty 12V electromagnetic solenoid bolt for 5 seconds while logging timestamps.",
      "hardware": [
        {
          "item": "Arduino Uno R3",
          "qty": "1",
          "purpose": "Access control logic & EEPROM validation"
        },
        {
          "item": "MFRC522 13.56MHz RFID Reader",
          "qty": "1",
          "purpose": "MIFARE card and keyfob reader"
        },
        {
          "item": "1-Channel 5V Optocoupler Relay Module",
          "qty": "1",
          "purpose": "12V solenoid power isolation"
        },
        {
          "item": "12V DC Electronic Solenoid Door Strike",
          "qty": "1",
          "purpose": "Mechanical door deadbolt actuation"
        },
        {
          "item": "16x2 I2C LCD Character Display",
          "qty": "1",
          "purpose": "User greeting and status readout"
        },
        {
          "item": "12V 2A DC Power Adapter",
          "qty": "1",
          "purpose": "Solenoid power supply"
        },
        {
          "item": "Piezo Buzzer & 1N4007 Diode",
          "qty": "1",
          "purpose": "Audio feedback & inductive kickback snubbing"
        }
      ],
      "software": [
        {
          "name": "Arduino IDE 2.x",
          "type": "Microcontroller firmware"
        },
        {
          "name": "MFRC522 Library",
          "type": "RFID communication stack"
        }
      ],
      "steps": [
        "Wire the RC522 module to the Arduino SPI interface (Pins 10, 13, 11, 12, 9).",
        "Connect the 5V relay module input to Arduino digital pin 7.",
        "Wire the 12V solenoid lock to the relay's Normally Open (NO) and Common (COM) contacts.",
        "Place a 1N4007 diode reverse-biased across the solenoid leads to protect against inductive spikes.",
        "Store authorized tag IDs in Arduino non-volatile EEPROM memory."
      ],
      "codeSnippet": "#include <SPI.h>\n#include <MFRC522.h>\n#include <Wire.h>\n#include <LiquidCrystal_I2C.h>\n\n#define SS_PIN 10\n#define RST_PIN 9\n#define RELAY_PIN 7\n\nMFRC522 rfid(SS_PIN, RST_PIN);\nLiquidCrystal_I2C lcd(0x27, 16, 2);\n\nbyte masterCard[4] = {0x83, 0x5E, 0x2A, 0x1B};\n\nvoid setup() {\n  SPI.begin();\n  rfid.PCD_Init();\n  lcd.init(); lcd.backlight();\n  pinMode(RELAY_PIN, OUTPUT);\n  digitalWrite(RELAY_PIN, HIGH); // Relay off (Active Low)\n  lcd.print(\"Swipe RFID Card\");\n}\n\nvoid unlockDoor() {\n  lcd.clear(); lcd.print(\"Access Granted!\");\n  digitalWrite(RELAY_PIN, LOW); // Engage lock\n  delay(4000);                  // Hold open\n  digitalWrite(RELAY_PIN, HIGH); // Re-lock\n  lcd.clear(); lcd.print(\"Swipe RFID Card\");\n}\n\nvoid loop() {\n  if (!rfid.PICC_IsNewCardPresent() || !rfid.PICC_ReadCardSerial()) return;\n  \n  bool match = true;\n  for (byte i = 0; i < 4; i++) {\n    if (rfid.uid.uidByte[i] != masterCard[i]) match = false;\n  }\n  \n  if (match) unlockDoor();\n  else {\n    lcd.clear(); lcd.print(\"Access Denied!\");\n    delay(2000);\n    lcd.clear(); lcd.print(\"Swipe RFID Card\");\n  }\n  rfid.PICC_HaltA();\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "Electronic access control is ubiquitous in modern workplaces. This project teaches students the principles of credential verification, relays, and optical isolation."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "When a card taps the scanner, its 4-byte unique ID is checked against a database in EEPROM. If authorized, the optocoupled relay closes for 4 seconds, energizing the electromagnetic solenoid coil to pull the spring-loaded deadbolt free."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "Solenoid coils draw up to 1.5A when energizing; using an external 12V 2A power adapter prevents microcontroller resets."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "An admin 'Master Card' mode lets instructors tap a special card to enter enrollment mode, adding new student tags without editing code."
        }
      ],
      "handTools": [
        {
          "name": "Precision Wire Stripper",
          "purpose": "Solenoid power lead wiring"
        },
        {
          "name": "12V Test Light",
          "purpose": "Relay contact switching verification"
        }
      ],
      "customParts": {
        "title": "Wall-Mount RFID Access Scanner Enclosure CAD",
        "filename": "rfid_wall_enclosure.stl",
        "type": "3D CAD / STL",
        "size": "3.8 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "Arduino Uno, RC522 & Solenoid Relay Schematic",
        "filename": "rfid_solenoid_schematic.png",
        "description": "Wiring diagram connecting Arduino Uno to RC522 RFID reader and 12V solenoid lock."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "Security",
        "icon": "robotics"
      },
      {
        "name": "RFID",
        "icon": "sensors"
      }
    ]
  },
  {
    "id": "bluetooth-rc-car",
    "title": "Smartphone Bluetooth Controlled Robot Vehicle with HC-05",
    "instagramCaption": "RoboSeekho Bluetooth Controlled Car with HC-05 & Arduino",
    "summary": "Take remote control of your robot! Wire an HC-05 Bluetooth transceiver to an Arduino Uno and pilot a 4WD rover with joystick gestures and custom buttons from an Android smartphone app.",
    "category": "Robotics",
    "difficulty": "Beginner",
    "image": "images/blogs/bluetooth_rc_car.svg",
    "date": "Sep 20, 2026",
    "readTime": "6 min read",
    "author": {
      "name": "RoboSeekho Labs",
      "role": "Wireless Robotics Specialist",
      "avatar": "RS"
    },
    "tags": [
      "Arduino Uno",
      "HC-05 Bluetooth",
      "L298N",
      "Smartphone Control",
      "RC Car"
    ],
    "stats": {
      "respects": 410,
      "views": 9540,
      "comments": 95
    },
    "details": {
      "story": "Few projects are as thrilling as driving your own custom-built robotic rover across the floor using your mobile phone as a wireless gamepad. In this crowd-favorite RoboSeekho lab project, students wire an HC-05 serial Bluetooth module to an Arduino Uno, paired with an L298N motor driver powering four geared rubber wheels.",
      "hardware": [
        {
          "item": "Arduino Uno R3",
          "qty": "1",
          "purpose": "UART command interpretation & motor drive"
        },
        {
          "item": "HC-05 Bluetooth Serial Module (SPP)",
          "qty": "1",
          "purpose": "2.4GHz wireless telemetry link"
        },
        {
          "item": "L298N Dual H-Bridge Motor Driver",
          "qty": "1",
          "purpose": "4-motor speed and direction regulation"
        },
        {
          "item": "4WD Acrylic Rover Chassis with TT Motors",
          "qty": "1",
          "purpose": "Rigid chassis body with 4 rubber wheels"
        },
        {
          "item": "2x 18650 Li-ion 3.7V Battery Pack (7.4V)",
          "qty": "1",
          "purpose": "High-current portable power pack"
        },
        {
          "item": "Android Smartphone with Bluetooth Controller App",
          "qty": "1",
          "purpose": "Touchscreen joystick gamepad"
        }
      ],
      "software": [
        {
          "name": "Arduino IDE 2.x",
          "type": "Microcontroller firmware"
        },
        {
          "name": "Bluetooth RC Controller (Play Store)",
          "type": "Android gamepad interface"
        }
      ],
      "steps": [
        "Assemble the 4WD chassis, wiring left motors in parallel and right motors in parallel.",
        "Wire motor pairs to OUT1/OUT2 and OUT3/OUT4 on the L298N driver.",
        "Connect HC-05 TX to Arduino RX (Pin 0) and HC-05 RX to Arduino TX (Pin 1) via a voltage divider.",
        "Pair your phone to 'HC-05' using pairing PIN 1234 in Android Bluetooth settings.",
        "Open the app and steer forward ('F'), reverse ('B'), left ('L'), right ('R'), and stop ('S')."
      ],
      "codeSnippet": "const int IN1 = 5, IN2 = 6, IN3 = 9, IN4 = 10;\nchar command;\n\nvoid setup() {\n  pinMode(IN1, OUTPUT); pinMode(IN2, OUTPUT);\n  pinMode(IN3, OUTPUT); pinMode(IN4, OUTPUT);\n  Serial.begin(9600); // HC-05 default baud\n}\n\nvoid loop() {\n  if (Serial.available()) {\n    command = Serial.read();\n    \n    switch(command) {\n      case 'F': // Forward\n        digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);\n        digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW); break;\n      case 'B': // Back\n        digitalWrite(IN1, LOW);  digitalWrite(IN2, HIGH);\n        digitalWrite(IN3, LOW);  digitalWrite(IN4, HIGH); break;\n      case 'L': // Left\n        digitalWrite(IN1, LOW);  digitalWrite(IN2, HIGH);\n        digitalWrite(IN3, HIGH); digitalWrite(IN4, LOW);  break;\n      case 'R': // Right\n        digitalWrite(IN1, HIGH); digitalWrite(IN2, LOW);\n        digitalWrite(IN3, LOW);  digitalWrite(IN4, HIGH); break;\n      case 'S': // Stop\n        digitalWrite(IN1, LOW);  digitalWrite(IN2, LOW);\n        digitalWrite(IN3, LOW);  digitalWrite(IN4, LOW);  break;\n    }\n  }\n}",
      "storySections": [
        {
          "id": "the-idea",
          "title": "The Idea",
          "text": "Wireless command and control is a fundamental competency in robotics. Replacing bulky proprietary radio controllers with ubiquitous smartphone apps makes remote-controlled robotics accessible to all students."
        },
        {
          "id": "how-it-works",
          "title": "How It Works",
          "text": "The smartphone app sends single ASCII characters ('F', 'B', 'L', 'R', 'S') over the Bluetooth Serial Port Profile (SPP). The HC-05 module relays these packets over hardware UART to the Arduino, which immediately sets the appropriate H-bridge pin logic."
        },
        {
          "id": "assembling-electronics",
          "title": "Assembling the Electronics",
          "text": "The HC-05 RX pin expects 3.3V logic; inserting a simple 1k / 2k resistor voltage divider between Arduino TX and HC-05 RX protects the transceiver from 5V overvoltage."
        },
        {
          "id": "programming-testing",
          "title": "Programming and Testing",
          "text": "Unplug the RX/TX pins momentarily during Arduino sketch upload to prevent serial port conflict with the USB programmer."
        }
      ],
      "handTools": [
        {
          "name": "Crosshead Screwdriver",
          "purpose": "Motor chassis fastening"
        },
        {
          "name": "Wire Stripper",
          "purpose": "Parallel motor harness prep"
        }
      ],
      "customParts": {
        "title": "HC-05 Bluetooth Angled Mast & Battery Holder CAD",
        "filename": "bluetooth_rover_mounts.stl",
        "type": "3D CAD / STL",
        "size": "2.6 MB",
        "author": "RoboSeekho Labs"
      },
      "schematic": {
        "title": "HC-05 Bluetooth, Arduino Uno & L298N Schematics",
        "filename": "bluetooth_car_schematic.png",
        "description": "Wiring diagram connecting Arduino Uno to HC-05 Bluetooth and 4WD L298N driver."
      }
    },
    "channels": [
      {
        "name": "Arduino",
        "icon": "arduino"
      },
      {
        "name": "Bluetooth",
        "icon": "sensors"
      },
      {
        "name": "Robotics",
        "icon": "robotics"
      }
    ]
  }
];


  // SVG Icons
  const ICONS = {
    gauge: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2a10 10 0 0 0-7.07 17.07L12 12V6"/><circle cx="12" cy="12" r="2"/></svg>',
    doc: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>',
    clock: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    cart: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>',
    externalLink: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    chip: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"/><rect x="9" y="9" width="6" height="6"/><line x1="9" y1="1" x2="9" y2="4"/><line x1="15" y1="1" x2="15" y2="4"/><line x1="9" y1="20" x2="9" y2="23"/><line x1="15" y1="20" x2="15" y2="23"/><line x1="20" y1="9" x2="23" y2="9"/><line x1="20" y1="14" x2="23" y2="14"/><line x1="1" y1="9" x2="4" y2="9"/><line x1="1" y1="14" x2="4" y2="14"/></svg>',
    software: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    tool: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    copy: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>'
  };

  // Toast Notification
  function showToast(msg) {
    let toast = document.getElementById('hacksterToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'hacksterToast';
      toast.className = 'hackster-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg> <span>${msg}</span>`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2600);
  }

  function getDifficultyClass(diff) {
    if (!diff) return 'beginner';
    const d = diff.toLowerCase();
    if (d.includes('beg')) return 'beginner';
    if (d.includes('adv')) return 'advanced';
    return 'intermediate';
  }

  // Brand channel tile icons
  function getChannelIconSvg(name) {
    const n = (name || '').toLowerCase();
    if (n.includes('arduino')) {
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="8" cy="12" r="5"/><circle cx="16" cy="12" r="5"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="6" y1="12" x2="10" y2="12"/><line x1="14" y1="12" x2="18" y2="12"/></svg>`;
    }
    if (n.includes('python')) {
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C6.48 2 5 3.5 5 6v2h7v1H4C2 9 2 12 2 14c0 3 1.5 5 5 5h1v-2c0-2.5 1.5-4 4-4h5c2 0 3-1 3-3V6c0-2.5-1.5-4-8-4z"/><circle cx="8" cy="5" r="1" fill="currentColor"/></svg>`;
    }
    if (n.includes('esp')) {
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="3"/><path d="M7 8h10M7 12h10M7 16h6"/></svg>`;
    }
    if (n.includes('ros') || n.includes('robot')) {
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="7" width="14" height="12" rx="2"/><circle cx="9" cy="11" r="1.5"/><circle cx="15" cy="11" r="1.5"/><path d="M9 15h6M12 2v5M2 13h3M19 13h3"/></svg>`;
    }
    if (n.includes('3d') || n.includes('cad')) {
      return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2l8 4.5v9L12 20l-8-4.5v-9L12 2z"/><path d="M12 11l8-4.5M12 11v9M12 11L4 6.5"/></svg>`;
    }
    return `<svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="8"/><path d="M12 8v8M8 12h8"/></svg>`;
  }

  // Render Project Function
  function renderProject(project, allProjects) {
    if (!project) return;

    // Document & Breadcrumb Title
    document.title = `${project.title} — RoboSeekho Labs`;
    const breadcrumbTitle = document.getElementById('breadcrumbTitle');
    if (breadcrumbTitle) breadcrumbTitle.textContent = project.title;

    // Header Badges
    const diffClass = getDifficultyClass(project.difficulty);
    const badgesContainer = document.getElementById('articleBadges');
    if (badgesContainer) {
      badgesContainer.innerHTML = `
        <span class="hackster-meta-badge ${diffClass}">
          ${ICONS.gauge} ${project.difficulty || 'Intermediate'}
        </span>
        <span class="hackster-meta-badge">
          ${ICONS.doc} Full instructions provided
        </span>
        <span class="hackster-meta-badge">
          ${ICONS.clock} ${project.readTime || '6 min read'}
        </span>
      `;
    }

    // Title & Subtitle
    const titleEl = document.getElementById('articleTitle');
    const subtitleEl = document.getElementById('articleSubtitle');
    if (titleEl) titleEl.textContent = project.title;
    if (subtitleEl) subtitleEl.textContent = project.summary;

    // Hero Image
    const heroImg = document.getElementById('articleHeroImg');
    if (heroImg) {
      heroImg.src = project.image;
      heroImg.alt = project.title;
    }

    // Overview Text
    const overviewText = document.getElementById('articleOverviewText');
    if (overviewText) overviewText.textContent = project.summary;

    // 1. Hardware BOM List
    const hardwareList = document.getElementById('hardwareBomList');
    if (hardwareList && project.details?.hardware) {
      hardwareList.innerHTML = project.details.hardware.map(h => `
        <div class="hackster-bom-row">
          <div class="hackster-bom-thumb">
            ${ICONS.chip}
          </div>
          <div class="hackster-bom-info">
            <span class="bom-item-name">${h.item}</span>
            <span class="bom-item-purpose">${h.purpose || 'Component'}</span>
          </div>
          <div class="hackster-bom-qty">&times; ${h.qty || 1}</div>
          <button class="hackster-bom-action-btn" title="Component Specs" onclick="window.showToast('${h.item} added to lab kit BOM')">
            ${ICONS.cart}
          </button>
        </div>
      `).join('');
    }

    // 2. Software BOM List
    const softwareGroup = document.getElementById('softwareGroup');
    const softwareList = document.getElementById('softwareBomList');
    if (project.details?.software && project.details.software.length > 0) {
      if (softwareList) {
        softwareList.innerHTML = project.details.software.map(s => `
          <div class="hackster-bom-row">
            <div class="hackster-bom-thumb software-thumb">
              ${ICONS.software}
            </div>
            <div class="hackster-bom-info">
              <span class="bom-item-name">${s.name}</span>
              <span class="bom-item-purpose">${s.type || 'Software / Library'}</span>
            </div>
            <button class="hackster-bom-action-btn" title="Platform Information" onclick="window.showToast('Platform: ${s.name}')">
              ${ICONS.externalLink}
            </button>
          </div>
        `).join('');
      }
      if (softwareGroup) softwareGroup.style.display = 'block';
    } else {
      if (softwareGroup) softwareGroup.style.display = 'none';
    }

    // 3. Hand Tools List
    const toolsGroup = document.getElementById('toolsGroup');
    const toolsList = document.getElementById('toolsBomList');
    if (project.details?.handTools && project.details.handTools.length > 0) {
      if (toolsList) {
        toolsList.innerHTML = project.details.handTools.map(t => `
          <div class="hackster-bom-row">
            <div class="hackster-bom-thumb tool-thumb">
              ${ICONS.tool}
            </div>
            <div class="hackster-bom-info">
              <span class="bom-item-name">${t.name}</span>
              <span class="bom-item-purpose">${t.purpose || 'Tooling'}</span>
            </div>
          </div>
        `).join('');
      }
      if (toolsGroup) toolsGroup.style.display = 'block';
    } else {
      if (toolsGroup) toolsGroup.style.display = 'none';
    }

    // 4. Story Subsections
    const storyContainer = document.getElementById('storySubsectionsContainer');
    const storyTocSublist = document.getElementById('storyTocSublist');

    if (storyContainer) {
      const sections = project.details?.storySections || [
        { id: "the-idea", title: "The Idea", text: project.details?.story || project.summary },
        { id: "how-it-works", title: "How It Works", text: "Using sensory inputs and microcontroller algorithms, real-time control logic triggers the desired outputs without manual human intervention." },
        { id: "assembling-electronics", title: "Assembling the Electronics", text: "Wire all modules ensuring shared common grounds and regulated power rails before testing full current loads." },
        { id: "programming-testing", title: "Programming and Testing", text: "Flash the firmware sketch and verify sensor telemetry on the serial monitor before deploying." }
      ];

      storyContainer.innerHTML = sections.map(sec => `
        <div class="hackster-story-sub" id="${sec.id}">
          <h3 class="hackster-story-h3">${sec.title}</h3>
          <p class="hackster-article-text">${sec.text}</p>
        </div>
      `).join('');

      // Also append steps if available
      if (project.details?.steps && project.details.steps.length > 0) {
        storyContainer.innerHTML += `
          <div class="hackster-story-sub" id="build-steps">
            <h3 class="hackster-story-h3">Step-by-Step Build Instructions</h3>
            <div class="hackster-steps-list">
              ${project.details.steps.map((st, i) => `
                <div class="hackster-step-item">
                  <div class="hackster-step-num">${i + 1}</div>
                  <div class="hackster-step-text">${st}</div>
                </div>
              `).join('')}
            </div>
          </div>
        `;
      }

      // Update Left TOC Sublist
      if (storyTocSublist) {
        storyTocSublist.innerHTML = sections.map(sec => `
          <li><a href="#${sec.id}">${sec.title}</a></li>
        `).join('');
      }
    }

    // 5. Custom Parts and Enclosures
    const cadTitle = document.getElementById('cadTitle');
    const cadFilename = document.getElementById('cadFilename');
    const cadPreviewImg = document.getElementById('cadPreviewImg');
    const btnDownloadCad = document.getElementById('btnDownloadCad');

    if (project.details?.customParts) {
      if (cadTitle) cadTitle.textContent = project.details.customParts.title || '3D CAD Enclosure & Parts';
      if (cadFilename) cadFilename.textContent = `${project.details.customParts.filename} (${project.details.customParts.size || '3.5 MB'})`;
    }
    if (cadPreviewImg) {
      cadPreviewImg.src = project.image;
    }
    if (btnDownloadCad) {
      btnDownloadCad.onclick = () => {
        showToast(`Preparing CAD download: ${project.details?.customParts?.filename || 'part.stl'}`);
      };
    }

    // 6. Schematics
    const schematicTitle = document.getElementById('schematicTitle');
    const schematicFilename = document.getElementById('schematicFilename');
    const schematicPreviewBox = document.getElementById('schematicPreviewBox');
    const btnDownloadSchematic = document.getElementById('btnDownloadSchematic');

    if (project.details?.schematic) {
      if (schematicTitle) schematicTitle.textContent = project.details.schematic.title || 'Circuit Schematic';
      if (schematicFilename) schematicFilename.textContent = project.details.schematic.filename || 'schematic.png';
    }

    if (schematicPreviewBox) {
      schematicPreviewBox.innerHTML = `
        <div class="schematic-board-canvas">
          <div class="schematic-header-tag">SCHEMATIC DIAGRAM // ${project.category.toUpperCase()}</div>
          <svg class="schematic-svg" viewBox="0 0 600 240" fill="none" stroke="currentColor">
            <!-- Grid Background -->
            <pattern id="circuitGrid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
            </pattern>
            <rect width="600" height="240" fill="url(#circuitGrid)" />
            
            <!-- MCU Block -->
            <rect x="60" y="50" width="130" height="140" rx="6" fill="rgba(30,41,59,0.85)" stroke="#38bdf8" stroke-width="2"/>
            <text x="125" y="85" text-anchor="middle" fill="#38bdf8" font-size="12" font-weight="bold">MICROCONTROLLER</text>
            <text x="125" y="105" text-anchor="middle" fill="#94a3b8" font-size="10">${project.details?.hardware?.[0]?.item?.slice(0, 18) || 'Arduino / ESP32'}</text>
            
            <!-- Sensor Block -->
            <rect x="410" y="50" width="130" height="60" rx="6" fill="rgba(30,41,59,0.85)" stroke="#8b5cf6" stroke-width="2"/>
            <text x="475" y="80" text-anchor="middle" fill="#8b5cf6" font-size="11" font-weight="bold">SENSOR / VISION</text>
            <text x="475" y="98" text-anchor="middle" fill="#94a3b8" font-size="9">I2C / UART Bus</text>

            <!-- Actuator Block -->
            <rect x="410" y="130" width="130" height="60" rx="6" fill="rgba(30,41,59,0.85)" stroke="#10b981" stroke-width="2"/>
            <text x="475" y="160" text-anchor="middle" fill="#10b981" font-size="11" font-weight="bold">ACTUATOR / DRIVER</text>
            <text x="475" y="178" text-anchor="middle" fill="#94a3b8" font-size="9">PWM / Output Bus</text>

            <!-- Bus Wires -->
            <path d="M190 80 H410" stroke="#38bdf8" stroke-width="2" stroke-dasharray="4 2"/>
            <circle cx="300" cy="80" r="3" fill="#38bdf8"/>
            <text x="300" y="72" text-anchor="middle" fill="#38bdf8" font-size="9">SDA / TX (Data)</text>

            <path d="M190 100 H350 V150 H410" stroke="#8b5cf6" stroke-width="2"/>
            <circle cx="350" cy="150" r="3" fill="#8b5cf6"/>
            <text x="270" y="115" text-anchor="middle" fill="#8b5cf6" font-size="9">SCL / RX (Clock)</text>

            <path d="M190 160 H410" stroke="#10b981" stroke-width="2"/>
            <text x="300" y="175" text-anchor="middle" fill="#10b981" font-size="9">PWM Signal Rail</text>
          </svg>
        </div>
      `;
    }

    if (btnDownloadSchematic) {
      btnDownloadSchematic.onclick = () => {
        showToast(`Exporting circuit schematic: ${project.details?.schematic?.filename || 'schematic.png'}`);
      };
    }

    // 7. Code Box with Line Numbers
    const codeTitle = document.getElementById('codeTitle');
    const codeLang = document.getElementById('codeLang');
    const codeGutter = document.getElementById('codeGutter');
    const codeContent = document.getElementById('codeSnippetContent');
    const btnCopyCode = document.getElementById('btnCopyCode');
    const btnDownloadCode = document.getElementById('btnDownloadCode');

    const snippet = project.details?.codeSnippet || '// No code required for this module.';
    const lines = snippet.split('\n');

    if (codeTitle) codeTitle.textContent = `${project.category} Controller Code`;
    if (codeLang) codeLang.textContent = snippet.includes('#include') ? 'Arduino' : 'Python';
    if (codeContent) codeContent.textContent = snippet;

    if (codeGutter) {
      codeGutter.innerHTML = lines.map((_, idx) => `<span>${idx + 1}</span>`).join('');
    }

    if (btnCopyCode) {
      btnCopyCode.onclick = () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(snippet).then(() => {
            btnCopyCode.innerHTML = `${ICONS.check} <span>Copied!</span>`;
            showToast('Firmware source code copied to clipboard!');
            setTimeout(() => {
              btnCopyCode.innerHTML = `${ICONS.copy} <span>Copy</span>`;
            }, 2000);
          });
        }
      };
    }

    if (btnDownloadCode) {
      btnDownloadCode.onclick = () => {
        const ext = snippet.includes('#include') ? 'ino' : 'py';
        const blob = new Blob([snippet], { type: 'text/plain' });
        const a = document.createElement('a');
        a.href = URL.createObjectURL(blob);
        a.download = `${project.id}.${ext}`;
        a.click();
        showToast(`Downloaded ${project.id}.${ext}`);
      };
    }

    // 8. Channels & Tags in Right Sidebar
    const channelsGrid = document.getElementById('channelsGrid');
    const sidebarTags = document.getElementById('sidebarTags');

    if (channelsGrid) {
      const defaultChannels = [
        { name: "Arduino" },
        { name: "Python" },
        { name: "ESP32" },
        { name: "Robotics" },
        { name: "3D CAD" }
      ];
      const channels = project.channels || defaultChannels;
      channelsGrid.innerHTML = channels.map(c => `
        <div class="hackster-channel-tile" title="${c.name}">
          <div class="channel-icon">${getChannelIconSvg(c.name)}</div>
          <span class="channel-name">${c.name}</span>
        </div>
      `).join('');
    }

    if (sidebarTags && project.tags) {
      sidebarTags.innerHTML = project.tags.map(t => `
        <a href="blogs.html" class="hackster-tag-pill">${t}</a>
      `).join('');
    }

    // 9. Related Projects in Right Sidebar
    const relatedList = document.getElementById('sidebarRelatedList');
    if (relatedList && allProjects) {
      const otherProjects = allProjects.filter(p => p.id !== project.id).slice(0, 4);
      relatedList.innerHTML = otherProjects.map(p => `
        <a href="blog-detail.html?id=${encodeURIComponent(p.id)}" class="hackster-related-item">
          <div class="hackster-related-thumb">
            <img src="${p.image}" alt="${p.title}" loading="lazy" onerror="this.src='logo.png'">
          </div>
          <div class="hackster-related-info">
            <span class="hackster-related-title">${p.title}</span>
            <span class="hackster-related-meta">${p.category} &middot; ${p.readTime || '5 min'}</span>
          </div>
        </a>
      `).join('');
    }

    // 10. Left TOC 3-Icon Actions: Respect, Bookmark, Share
    setupTocActionButtons(project);

    // 11. Scrollspy for TOC
    setupScrollspy();
  }

  function setupTocActionButtons(project) {
    // Share Project Link
    const btnShare = document.getElementById('btnShareArticle');
    if (btnShare) {
      btnShare.onclick = () => {
        if (navigator.clipboard) {
          navigator.clipboard.writeText(window.location.href).then(() => {
            showToast('Project link copied to clipboard!');
          });
        } else {
          showToast('Project URL: ' + window.location.href);
        }
      };
    }
  }

  // Smooth Scrollspy for left TOC
  function setupScrollspy() {
    const tocItems = document.querySelectorAll('.hackster-toc-item > a, .hackster-toc-sublist a');
    const sectionIds = [
      'overview', 'things', 'story', 'the-idea', 'how-it-works',
      'assembling-electronics', 'programming-testing', 'custom-parts',
      'schematics', 'code', 'credits'
    ];
    const sections = sectionIds.map(id => document.getElementById(id)).filter(Boolean);

    window.addEventListener('scroll', () => {
      let currentId = '';
      const scrollPos = window.scrollY + 160;

      sections.forEach(sec => {
        if (sec.offsetTop <= scrollPos) {
          currentId = sec.id;
        }
      });

      if (currentId) {
        tocItems.forEach(a => {
          const href = a.getAttribute('href');
          const li = a.parentElement;
          if (href === `#${currentId}`) {
            li.classList.add('active');
          } else {
            li.classList.remove('active');
          }
        });
      }
    }, { passive: true });
  }

  // Expose toast globally
  window.showToast = showToast;

  // Initialize
  function init() {
    const urlParams = new URLSearchParams(window.location.search);
    const projectId = urlParams.get('id') || 'automatic-door-arduino';

    fetch(DATA_URL)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(blogs => {
        const list = Array.isArray(blogs) ? blogs : [];
        const target = list.find(b => b.id === projectId) || list[0];
        renderProject(target, list);
      })
      .catch(err => {
        console.warn('Could not load data/blogs.json, falling back to local dataset:', err);
        const list = FALLBACK_BLOGS;
        const target = list.find(b => b.id === projectId) || list[0];
        renderProject(target, list);
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
