/**
 * RoboSeekho - Hackster.io Vibe Project & Blog Showcase
 * Fully data-driven from external JSON (data/blogs.json)
 */

(function () {
  'use strict';

  const BLOGS_DATA_URL = 'data/blogs.json';

  // Fallback data in case of file:// CORS restrictions
  const FALLBACK_BLOGS = [
    {
      id: "robotic-arm-vision",
      title: "Building a 6-DOF Robotic Arm with Computer Vision Sorting",
      summary: "An intelligent robotic arm powered by Arduino and an OpenCV-driven Python camera feed that detects, sorts, and stacks colored components in real-time.",
      category: "Robotics",
      difficulty: "Intermediate",
      image: "images/blogs/robotic_arm_vision.jpg",
      date: "Oct 28, 2026",
      readTime: "6 min read",
      author: { name: "Aarav Sharma", role: "Robotics Mentor, RoboSeekho", avatar: "AS" },
      tags: ["Arduino Mega", "OpenCV", "Python", "Servo MG996R", "Inverse Kinematics"],
      stats: { respects: 142, views: 3280, comments: 29 },
      details: {
        story: "Industrial automation increasingly depends on smart sorting mechanisms where robotic manipulators perceive their environment before executing tasks. In this project designed for our high school AI & Robotics curriculum, students construct a 6-degree-of-freedom robotic manipulator armed with an overhead webcam. The Python script processes live frames using color thresholding and contour detection, sending Cartesian coordinates via serial communication to the Arduino microcontroller to calculate inverse kinematics on the fly.",
        hardware: [
          { item: "Arduino Mega 2560 R3", qty: "1", purpose: "Inverse kinematics & PWM servo control" },
          { item: "MG996R High Torque Metal Servos", qty: "6", purpose: "Joint actuation" },
          { item: "Aluminium 6-DOF Arm Bracket Frame", qty: "1", purpose: "Structural chassis" },
          { item: "PCA9685 16-Channel 12-bit PWM Driver", qty: "1", purpose: "Dedicated servo power distribution" },
          { item: "5V 10A DC Regulated Power Supply", qty: "1", purpose: "High-current servo rail" },
          { item: "1080p USB Machine Vision Camera", qty: "1", purpose: "Object tracking & localization" }
        ],
        software: [
          { name: "Arduino IDE 2.x", type: "Microcontroller firmware" },
          { name: "Python 3.11 with OpenCV & PySerial", type: "Vision processing stack" },
          { name: "RoboSeekho AI Connect", type: "Block-to-text algorithm visualization" }
        ],
        steps: [
          "Assemble the aluminium 6-DOF chassis ensuring servo horns are properly calibrated at 90° neutral position.",
          "Wire the PCA9685 PWM shield to the Arduino Mega via I2C (SDA -> Pin 20, SCL -> Pin 21) with common ground.",
          "Mount the USB camera directly above the workspace at a fixed 45cm focal distance.",
          "Calibrate camera distortion matrix and configure HSV color thresholds in OpenCV.",
          "Execute the Python controller script to stream target coordinates to the Arduino."
        ],
        codeSnippet: "// Calculate servo angles from coordinates\nvoid moveToTarget(float x, float y, float z) {\n  float baseAngle = atan2(y, x) * 180.0 / PI;\n  pwm.setPWM(BASE_SERVO, 0, mapAngleToPulse(baseAngle));\n  // Forward kinematics & shoulder trajectory\n  delay(150);\n}"
      }
    },
    {
      id: "autonomous-ai-rover",
      title: "Autonomous Obstacle Avoidance AI Rover with LiDAR & SLAM",
      summary: "Build an intelligent terrain rover that creates 2D floor plans using a 360° LiDAR sensor and navigates unknown rooms autonomously.",
      category: "AI & Vision",
      difficulty: "Advanced",
      image: "images/blogs/autonomous_ai_rover.jpg",
      date: "Oct 24, 2026",
      readTime: "8 min read",
      author: { name: "Priya Nair", role: "AI Curriculum Specialist", avatar: "PN" },
      tags: ["ESP32-S3", "RPLiDAR A1", "ROS 2", "SLAM", "Motor Drivers"],
      stats: { respects: 215, views: 4890, comments: 41 },
      details: {
        story: "Simultaneous Localization and Mapping (SLAM) is the cornerstone of autonomous self-driving cars, warehouse AGVs, and interplanetary rovers. This project teaches students how to break down complex sensor fusion into tangible building blocks. By integrating an ESP32 microcontroller with a 360° 2D laser scanner, students visualize real-time point clouds on a local web dashboard and program reactive collision-avoidance algorithms.",
        hardware: [
          { item: "ESP32-S3 Dual Core Dev Module", qty: "1", purpose: "Sensor streaming & Wi-Fi telemetry" },
          { item: "RPLiDAR A1M8 360° Laser Range Scanner", qty: "1", purpose: "12m radius distance mapping" },
          { item: "L298N Dual H-Bridge Motor Controller", qty: "1", purpose: "DC geared motor driving" },
          { item: "12V TT Geared DC Motors with Optical Encoders", qty: "4", purpose: "Odometry tracking" },
          { item: "3S 11.1V 2200mAh LiPo Battery Pack", qty: "1", purpose: "Portable high-density power" }
        ],
        software: [
          { name: "ROS 2 Humble / Cartographer SLAM", type: "Mapping framework" },
          { name: "ESP-IDF / Arduino Framework", type: "Microcontroller firmware" },
          { name: "Foxglove Studio", type: "Point-cloud telemetry visualizer" }
        ],
        steps: [
          "Fabricate the 4WD acrylic/aluminium chassis with suspension dampeners for smooth sensor rotation.",
          "Connect RPLiDAR TX/RX to ESP32 Hardware Serial2 pins at 115200 baud.",
          "Implement wheel encoder pulse interrupts to calculate dead-reckoning trajectory.",
          "Stream polar coordinate vectors via WebSocket to the host computer.",
          "Run Hector SLAM / Cartographer node to render live 2D obstacle heatmaps."
        ],
        codeSnippet: "// Read RPLiDAR scan packet\nvoid processLiDARData() {\n  if (lidar.isOpen()) {\n    rplidar_response_measurement_node_hq_t nodes[8192];\n    size_t count = sizeof(nodes)/sizeof(nodes[0]);\n    lidar.getScanData(nodes, count);\n    filterObstacles(nodes, count);\n  }\n}"
      }
    },
    {
      id: "iot-smart-agriculture",
      title: "Smart IoT Environmental & Greenhouse Station with OLED Telemetry",
      summary: "A solar-assisted environmental telemetry node that tracks soil moisture, ambient humidity, temperature, and sun exposure with live cloud logging.",
      category: "IoT & Embedded",
      difficulty: "Beginner",
      image: "images/blogs/iot_smart_station.jpg",
      date: "Oct 19, 2026",
      readTime: "5 min read",
      author: { name: "Devendra Verma", role: "IoT Lab Architect", avatar: "DV" },
      tags: ["ESP32", "DHT22", "Capacitive Soil Sensor", "MQTT", "Solar Panel"],
      stats: { respects: 98, views: 2110, comments: 18 },
      details: {
        story: "Global agriculture faces intense climate challenges. In this Atal Tinkering Lab staple project, young innovators construct an automated plant health monitoring device. Utilizing capacitive corrosion-resistant soil sensors, a precision DHT22 sensor, and an I2C OLED display, the station triggers automatic peristaltic drip irrigation whenever soil moisture falls below threshold levels.",
        hardware: [
          { item: "ESP32 NodeMCU Wi-Fi / BLE Board", qty: "1", purpose: "Main controller & MQTT gateway" },
          { item: "Capacitive Soil Moisture Sensor v1.2", qty: "1", purpose: "Corrosion-proof analog moisture read" },
          { item: "DHT22 Digital Temperature & Humidity Sensor", qty: "1", purpose: "Ambient climate monitoring" },
          { item: "0.96 inch I2C OLED Display (128x64)", qty: "1", purpose: "Local realtime status visualization" },
          { item: "5V Relay Module & Submersible Micro Pump", qty: "1", purpose: "Automated drip irrigation" },
          { item: "6V 2W Solar Cell + TP4056 Charger", qty: "1", purpose: "Sustainable energy harvesting" }
        ],
        software: [
          { name: "Adafruit SSD1306 & GFX Libraries", type: "OLED rendering" },
          { name: "PubSubClient MQTT", type: "Cloud telemetry data pipe" },
          { name: "ThingsBoard / Adafruit IO Dashboard", type: "Web analytics visualization" }
        ],
        steps: [
          "Calibrate capacitive sensor in dry air (raw 3400) and full water submersion (raw 1300).",
          "Wire OLED display to ESP32 Pin 21 (SDA) and Pin 22 (SCL).",
          "Configure Wi-Fi credentials and publish sensor readings to MQTT topic every 30 seconds.",
          "Add hysteresis logic to relay control to prevent erratic pump cycling.",
          "Hook up solar panel with diode protection to charge the 18650 lithium battery."
        ],
        codeSnippet: "// Soil moisture trigger logic\nint rawSoil = analogRead(SOIL_PIN);\nfloat moisturePct = map(rawSoil, AIR_VAL, WATER_VAL, 0, 100);\nif (moisturePct < 35.0) {\n  digitalWrite(RELAY_PUMP, HIGH); // Water the plant\n  displayWaterAlert();\n}"
      }
    },
    {
      id: "vr-physics-simulation",
      title: "Interactive VR Physics & Mechanical Engineering Lab with Meta Quest",
      summary: "How we deploy immersive 3D virtual reality simulations that let students disassemble complex jet engines and planetary gear sets in zero-risk environments.",
      category: "AR / VR",
      difficulty: "Intermediate",
      image: "images/blogs/vr_stem_lab.jpg",
      date: "Oct 15, 2026",
      readTime: "7 min read",
      author: { name: "Dr. Rohit Saxena", role: "Head of Immersive Learning", avatar: "RS" },
      tags: ["Meta Quest 3", "Unity 3D", "WebXR", "Physics Engine", "3D CAD"],
      stats: { respects: 177, views: 3720, comments: 23 },
      details: {
        story: "Traditional textbook diagrams fail to convey how torque transfers through planetary gearboxes or how magnetic flux induces eddy currents. Through standalone Meta Quest VR headsets deployed in our AR/VR labs, students step inside complex machinery, pause time, alter gravity parameters, and manipulate microscopic atoms with their bare hands.",
        hardware: [
          { item: "Meta Quest 3 Standalone Headsets", qty: "10", purpose: "Spatial 6-DoF tracking & color passthrough" },
          { item: "UV-C Sanitizing Multi-Dock Charging Cart", qty: "1", purpose: "Fleet power & classroom hygiene" },
          { item: "Dedicated Wi-Fi 6 Dedicated Access Point", qty: "1", purpose: "Multi-user synchronized session casting" }
        ],
        software: [
          { name: "Unity 2024 LTS + OpenXR Plugin", type: "Interactive simulation engine" },
          { name: "RoboSeekho VR Suite v3.2", type: "Curriculum modules for Physics & Mechanics" },
          { name: "SideQuest / MDM Fleet Manager", type: "Kiosk mode lab deployment" }
        ],
        steps: [
          "Set up Guardian boundaries and enable Kiosk mode for seamless student onboarding.",
          "Import SolidWorks CAD models into Unity with optimized decimation algorithms.",
          "Apply PhysX continuous collision detection and realistic inertia tensor calculations.",
          "Incorporate spatial audio cues for gear mesh friction and pneumatic pressure drops.",
          "Implement educator dashboard for real-time progress assessment and synchronized multi-headset triggers."
        ],
        codeSnippet: "// Unity OpenXR interaction event\npublic void OnGearGrab(SelectEnterEventArgs args) {\n  HapticFeedback.SendImpulse(args.interactorObject, 0.4f, 0.1f);\n  CalculateTorqueTransfer();\n}"
      }
    },
    {
      id: "diy-carbon-quadcopter",
      title: "Custom Carbon-Fiber Quadcopter Drone with Optical Flow Stabilization",
      summary: "Design and assemble an indoor-safe quadcopter flight platform with brushless ESCs, Betaflight firmware, and downward optical flow hovering.",
      category: "Drones",
      difficulty: "Advanced",
      image: "images/blogs/drone_autopilot_build.jpg",
      date: "Oct 10, 2026",
      readTime: "9 min read",
      author: { name: "Karan Malhotra", role: "Avionics & Drone Instructor", avatar: "KM" },
      tags: ["Betaflight", "F405 Flight Controller", "Brushless Motors", "Optical Flow", "LiPo 4S"],
      stats: { respects: 194, views: 4120, comments: 35 },
      details: {
        story: "Drone technology is transforming surveying, disaster management, and precision agriculture. In our senior STEM tinkering labs, students delve into PID tuning, aerodynamic thrust ratios, and flight dynamics. This hands-on build walks students through soldering high-frequency power distribution boards, configuring brushless motor timing, and setting up optical flow sensors for GPS-denied indoor hovering.",
        hardware: [
          { item: "Carbon Fiber 210mm True-X Frame", qty: "1", purpose: "Rigid vibration-resistant airframe" },
          { item: "SpeedyBee F405 V4 Flight Controller", qty: "1", purpose: "Core IMU, barometer & MCU" },
          { item: "55A 4-in-1 BLHeli_S ESC Stack", qty: "1", purpose: "Motor electronic speed regulation" },
          { item: "2207 2450KV Brushless Motors", qty: "4", purpose: "High-efficiency propulsion" },
          { item: "PMW3901 Optical Flow & VL53L1X LiDAR Combo", qty: "1", purpose: "Precision GPS-denied altitude & position hold" },
          { item: "4S 1500mAh 100C High Discharge LiPo", qty: "1", purpose: "Flight battery pack" }
        ],
        software: [
          { name: "Betaflight Configurator 10.10", type: "Flight controller tuning & port mapping" },
          { name: "BLHeliSuite32", type: "Bidirectional DShot & RPM filter setup" },
          { name: "EdgeTX Radio Firmware", type: "2.4GHz ELRS RC protocol configuration" }
        ],
        steps: [
          "Solder XT60 power lead and low-ESR 35V 1000uF capacitor to absorb motor voltage spikes.",
          "Mount brushless motors, ensuring diagonal pairs spin clockwise and counter-clockwise respectively.",
          "Connect optical flow sensor to UART6 with telemetry enabled in Betaflight ports.",
          "Calibrate accelerometer and configure failsafe disarm triggers.",
          "Tune Roll, Pitch, and Yaw PID loops for razor-sharp indoor hover stability."
        ],
        codeSnippet: "# Betaflight CLI optical flow configuration\nset optflow_hardware = PMW3901\nset rangefinder_hardware = VL53L1X\nset hover_assist_mode = ENABLED\nsave"
      }
    },
    {
      id: "bionic-hand-prosthetic",
      title: "3D-Printed Bionic Prosthetic Hand with Flex Sensor Teleoperation",
      summary: "A wearable sensory glove that mirrors human finger motion to articulate a 3D-printed tendon-driven bionic hand using micro servos.",
      category: "Prosthetics",
      difficulty: "Intermediate",
      image: "images/blogs/bionic_hand_project.jpg",
      date: "Oct 05, 2026",
      readTime: "6 min read",
      author: { name: "Sneha Kulkarni", role: "Biomedical & CAD Specialist", avatar: "SK" },
      tags: ["Arduino Uno", "Flex Sensors", "3D Printing PETG", "Micro Servos", "Bio-Mechanics"],
      stats: { respects: 230, views: 5340, comments: 47 },
      details: {
        story: "Empowering students to solve real-world accessibility challenges brings purpose to STEM education. In this project, high school students use CAD modelling in Onshape to print ergonomic phalanges in tough PETG filament, thread flexible braided fishing line as anatomical tendons, and attach 2.2-inch conductive flex sensors to a fabric glove. Every flex of the user's hand is instantly mirrored by the bionic replica.",
        hardware: [
          { item: "Arduino Uno R3 / Nano", qty: "2", purpose: "Transmitter glove & receiver hand controllers" },
          { item: "2.2 inch Conductive Flex Sensors", qty: "5", purpose: "Finger joint curvature sensing" },
          { item: "SG90 / MG90S Metal Gear Micro Servos", qty: "5", purpose: "Individual tendon pulling actuators" },
          { item: "NRF24L01+ 2.4GHz Wireless Transceiver", qty: "2", purpose: "Low-latency telemetry link" },
          { item: "3D-Printed Anatomical Hand & Forearm (PETG)", qty: "1", purpose: "Lightweight prosthetic chassis" },
          { item: "50lb Braided Kevlar/Spectra Tendon Line", qty: "1", purpose: "Non-stretch tendon pull transmission" }
        ],
        software: [
          { name: "Arduino IDE & RF24 Library", type: "Wireless communication pipeline" },
          { name: "Onshape & PrusaSlicer", type: "Parametric CAD & 3D print generation" },
          { name: "Processing.org", type: "Real-time hand skeleton visualization" }
        ],
        steps: [
          "Slice and 3D print finger phalanges with 0.15mm layer height and 40% infill for joint durability.",
          "Assemble fingers using elastic shock cords for passive extension and Kevlar lines for active flexion.",
          "Sew flex sensors onto the control glove along knuckles with heat-shrink reinforcement.",
          "Map analog voltage dividers (10k ohm reference resistor) from flex sensors to servo angles (0°-180°).",
          "Calibrate resting hand offset values in EEPROM memory."
        ],
        codeSnippet: "// Map glove sensor voltage to servo angles\nfor(int i = 0; i < 5; i++) {\n  int raw = analogRead(flexPins[i]);\n  int angle = map(raw, flatResistance[i], bentResistance[i], 0, 180);\n  angle = constrain(angle, 0, 180);\n  servos[i].write(angle);\n}"
      }
    }
  ];

  let blogsState = {
    allBlogs: [],
    activeCategory: 'all',
    searchQuery: '',
    sortBy: 'respects',
    userRespects: JSON.parse(localStorage.getItem('roboseekho_user_respects') || '{}')
  };

  // SVGs for Hackster cards
  const ICONS = {
    heart: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
    eye: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
    comment: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>',
    arrowRight: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>',
    share: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/><line x1="8.59" y1="13.51" x2="15.42" y2="17.49"/><line x1="15.41" y1="6.51" x2="8.59" y2="10.49"/></svg>',
    copy: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>',
    check: '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>',
    close: '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>'
  };

  function showToast(message) {
    let toast = document.getElementById('hacksterToast');
    if (!toast) {
      toast = document.createElement('div');
      toast.id = 'hacksterToast';
      toast.className = 'hackster-toast';
      document.body.appendChild(toast);
    }
    toast.innerHTML = `${ICONS.check} <span>${message}</span>`;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2800);
  }

  function getDifficultyClass(diff) {
    if (!diff) return 'intermediate';
    const d = diff.toLowerCase();
    if (d.includes('beg')) return 'beginner';
    if (d.includes('adv')) return 'advanced';
    return 'intermediate';
  }

  function applyFiltersAndRender() {
    let list = [...blogsState.allBlogs];

    // 2. Search query filter
    const q = blogsState.searchQuery.trim().toLowerCase();
    if (q) {
      list = list.filter(b => {
        return (
          b.title.toLowerCase().includes(q) ||
          b.summary.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q) ||
          b.difficulty.toLowerCase().includes(q) ||
          (b.tags && b.tags.some(t => t.toLowerCase().includes(q)))
        );
      });
    }

    // 3. Sorting
    if (blogsState.sortBy === 'title') {
      list.sort((a, b) => a.title.localeCompare(b.title));
    } else {
      // Default: newest builds
      list.sort((a, b) => blogsState.allBlogs.indexOf(b) - blogsState.allBlogs.indexOf(a));
    }

    renderGrid(list);
  }

  function renderGrid(blogs) {
    const grid = document.getElementById('hacksterGrid');
    if (!grid) return;

    if (blogs.length === 0) {
      grid.innerHTML = `
        <div class="blogs-empty-state">
          <h3>No matching projects found</h3>
          <p>Try searching for different keywords like "Arduino", "LiDAR", "ESP32", or select another category.</p>
        </div>
      `;
      return;
    }

    grid.innerHTML = blogs.map(blog => {
      const diffClass = getDifficultyClass(blog.difficulty);
      const tagsHtml = (blog.tags || []).slice(0, 4).map(t => `<span class="hackster-tag">${t}</span>`).join('');
      const detailUrl = `blog-detail.html?id=${encodeURIComponent(blog.id)}`;

      return `
        <article class="hackster-card" data-id="${blog.id}" onclick="if(!event.target.closest('a')) window.location.href='${detailUrl}'" style="cursor:pointer;">
          <a href="${detailUrl}" class="hackster-card-media" aria-label="${blog.title}">
            <img src="${blog.image}" alt="${blog.title}" loading="lazy" onerror="this.src='logo.png'">
            <div class="hackster-media-overlay"></div>
            <div class="hackster-badge-group">
              <span class="hackster-badge hackster-badge-cat">${blog.category}</span>
              <span class="hackster-badge hackster-badge-diff ${diffClass}">${blog.difficulty}</span>
            </div>
          </a>

          <div class="hackster-card-body">
            <h3 class="hackster-card-title">
              <a href="${detailUrl}">${blog.title}</a>
            </h3>
            <p class="hackster-card-summary">${blog.summary}</p>
            
            <div class="hackster-tags">
              ${tagsHtml}
            </div>

            <div class="hackster-card-footer">
              <span class="hackster-card-time">${blog.readTime || ''}</span>
              <a href="${detailUrl}" class="hackster-read-link">
                Read Project ${ICONS.arrowRight}
              </a>
            </div>
          </div>
        </article>
      `;
    }).join('');
  }

  // Toggle Respect (Heart/Like) with localStorage persistence
  window.toggleRespect = function (event, blogId) {
    if (event) event.stopPropagation();

    const isRespected = Boolean(blogsState.userRespects[blogId]);
    if (isRespected) {
      delete blogsState.userRespects[blogId];
    } else {
      blogsState.userRespects[blogId] = true;
    }

    localStorage.setItem('roboseekho_user_respects', JSON.stringify(blogsState.userRespects));

    // Update in-place card
    const card = document.querySelector(`.hackster-card[data-id="${blogId}"]`);
    if (card) {
      const blog = blogsState.allBlogs.find(b => b.id === blogId);
      if (blog) {
        const btn = card.querySelector('.hackster-respect-btn');
        const countSpan = btn.querySelector('.respect-count');
        const hasNow = Boolean(blogsState.userRespects[blogId]);
        btn.classList.toggle('respected', hasNow);
        countSpan.textContent = (blog.stats.respects || 0) + (hasNow ? 1 : 0);
      }
    }

    // Update in-place modal if open
    const modalBtn = document.getElementById('modalRespectBtn');
    if (modalBtn && modalBtn.dataset.blogId === blogId) {
      const blog = blogsState.allBlogs.find(b => b.id === blogId);
      const hasNow = Boolean(blogsState.userRespects[blogId]);
      modalBtn.classList.toggle('respected', hasNow);
      modalBtn.querySelector('.respect-count').textContent = (blog.stats.respects || 0) + (hasNow ? 1 : 0);
      modalBtn.querySelector('.respect-label').textContent = hasNow ? 'Respected' : 'Give Respect';
    }

    if (!isRespected) {
      showToast('Respect recorded! Thanks for supporting makers.');
    }
  };

  // Open Full Project (Redirects to dedicated article page)
  window.openProjectModal = function (blogId) {
    if (blogId) {
      window.location.href = `blog-detail.html?id=${encodeURIComponent(blogId)}`;
    }
  };

  window.shareProject = function (id, title) {
    const shareUrl = `${window.location.origin}${window.location.pathname}#project-${id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(shareUrl).then(() => {
        showToast('Project link copied to clipboard!');
      });
    } else {
      showToast('Project URL: ' + shareUrl);
    }
  };

  window.copyProjectCode = function (btn) {
    const codeBlock = btn.closest('.hackster-code-box').querySelector('code');
    if (codeBlock && navigator.clipboard) {
      navigator.clipboard.writeText(codeBlock.textContent).then(() => {
        btn.innerHTML = `${ICONS.check} <span>Copied!</span>`;
        showToast('Code copied to clipboard!');
        setTimeout(() => {
          btn.innerHTML = `${ICONS.copy} <span>Copy Code</span>`;
        }, 2200);
      });
    }
  };

  function escapeHtml(str) {
    return str
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function setupControls() {
    // Search input
    const searchInput = document.getElementById('blogsSearch');
    const searchClear = document.getElementById('blogsSearchClear');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        blogsState.searchQuery = e.target.value;
        if (searchClear) searchClear.style.display = e.target.value ? 'block' : 'none';
        applyFiltersAndRender();
      });
    }

    if (searchClear && searchInput) {
      searchClear.addEventListener('click', () => {
        searchInput.value = '';
        blogsState.searchQuery = '';
        searchClear.style.display = 'none';
        applyFiltersAndRender();
      });
    }

    // Sort selector
    const sortSelect = document.getElementById('blogsSort');
    if (sortSelect) {
      sortSelect.addEventListener('change', (e) => {
        blogsState.sortBy = e.target.value;
        applyFiltersAndRender();
      });
    }

    // Check URL params or hash for direct deep-linking
    const urlParams = new URLSearchParams(window.location.search);
    const targetQueryId = urlParams.get('id');
    const hash = window.location.hash;
    const targetHashId = hash && hash.startsWith('#project-') ? hash.replace('#project-', '') : null;
    const targetId = targetQueryId || targetHashId;

    if (targetId) {
      window.location.replace(`blog-detail.html?id=${encodeURIComponent(targetId)}`);
    }
  }

  // Initialize
  function init() {
    // First setup controls
    setupControls();

    // Fetch external data from data/blogs.json
    fetch(BLOGS_DATA_URL)
      .then(res => {
        if (!res.ok) throw new Error(`HTTP error! status: ${res.status}`);
        return res.json();
      })
      .then(data => {
        blogsState.allBlogs = Array.isArray(data) ? data : FALLBACK_BLOGS;
        applyFiltersAndRender();
      })
      .catch(err => {
        console.warn('Could not fetch data/blogs.json, using fallback blogs dataset.', err);
        blogsState.allBlogs = FALLBACK_BLOGS;
        applyFiltersAndRender();
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
