import { Exercise, SensorHotspot, Testimonial } from './types';

export const EXERCISES: Exercise[] = [
  {
    id: 'squat',
    name: 'Barbell Back Squat',
    category: 'Lower Body',
    jointTarget: 'Hip & Knee Flexion',
    idealAngleRange: '80° - 90° (At Max Depth)',
    activeSensors: ['Spine Alignment', 'Breathing Rhythm Indicator', 'Foot arches'],
    instructions: [
      'Set back barbell across upper traps with a tight grip.',
      'Inhale deep to brace core, then send hips down and back.',
      'Maintain an upright spine, driving knees outward over toes.',
      'Lower until thighs are parallel or below, then drive up.'
    ],
    deviations: {
      lowLabel: 'Valgus (Knee Cave)',
      highLabel: 'Thoracic Flexion (Spine Rounding)',
      lowFeedback: 'Knees are caving inward. Drive your knees outward along your toe alignment to protect your ACL.',
      highFeedback: 'Spine rounding detected. Pin your shoulder blades back and brace your abdominal wall.',
      perfectFeedback: 'Exceptional form. Your spine angle matches your shin angle perfectly. Drive through the heels.'
    },
    getDefaultRig: (completion: number, deviation: number) => {
      // 0 = Stand, 100 = Bottom of squat
      const t = completion / 100;
      
      // Stand positions translated by t
      const dropY = t * 42; // Drop amount
      const hipBackX = t * 14; // Hips shifting back
      const kneeForwardX = t * 6; // Knees shifting forward-out dynamic
      
      // Symmetrical spine alignment base x
      const baseX = 100;
      
      // Perfect joints stand coordinates
      let headY = 35 + dropY * 0.75;
      let neckY = 55 + dropY * 0.8;
      let spineY = 95 + dropY * 0.85;
      
      let headX = baseX;
      let neckX = baseX;
      let spineX = baseX;
      
      // If deviation > 0 (rounding back), the head and neck pull forward and down excessively, curving spine
      if (deviation > 0) {
        const factor = (deviation / 50);
        headX += factor * 14 * t;
        neckX += factor * 10 * t;
        spineX -= factor * 4 * t;
      }
      
      // Hips drop and go backward
      let leftHipX = 85 - hipBackX * 0.5;
      let rightHipX = 115 + hipBackX * 0.5;
      let hipY = 135 + dropY;
      
      // Knees move slightly outward or cave inward
      let kneeY = 175 + dropY * 0.35;
      let leftKneeX = 80 - kneeForwardX;
      let rightKneeX = 120 + kneeForwardX;
      
      // Deviation < 0 represents Knee Cave (valgus)
      if (deviation < 0) {
        // shift left kneex right and right kneex left
        const caveAmount = (Math.abs(deviation) / 50) * 16 * t;
        leftKneeX += caveAmount;
        rightKneeX -= caveAmount;
      }
      
      // Ankles stay flat firmly on floor
      const leftAnkleX = 80;
      const leftAnkleY = 220;
      const rightAnkleX = 120;
      const rightAnkleY = 220;
      
      // Arms (holding bar)
      const leftShoulderX = 82;
      const leftShoulderY = 65 + dropY * 0.8;
      const rightShoulderX = 118;
      const rightShoulderY = 65 + dropY * 0.8;
      
      const leftElbowX = 72;
      const leftElbowY = 90 + dropY * 0.8;
      const rightElbowX = 128;
      const rightElbowY = 90 + dropY * 0.8;
      
      const leftWristX = 75;
      const leftWristY = 70 + dropY * 0.8;
      const rightWristX = 125;
      const rightWristY = 70 + dropY * 0.8;
      
      return {
        head: { x: headX, y: headY },
        neck: { x: neckX, y: neckY },
        leftShoulder: { x: leftShoulderX, y: leftShoulderY },
        rightShoulder: { x: rightShoulderX, y: rightShoulderY },
        leftElbow: { x: leftElbowX, y: leftElbowY },
        rightElbow: { x: rightElbowX, y: rightElbowY },
        leftWrist: { x: leftWristX, y: leftWristY },
        rightWrist: { x: rightWristX, y: rightWristY },
        spine: { x: spineX, y: spineY },
        leftHip: { x: leftHipX, y: hipY },
        rightHip: { x: rightHipX, y: hipY },
        leftKnee: { x: leftKneeX, y: kneeY },
        rightKnee: { x: rightKneeX, y: kneeY },
        leftAnkle: { x: leftAnkleX, y: leftAnkleY },
        rightAnkle: { x: rightAnkleX, y: rightAnkleY }
      };
    }
  },
  {
    id: 'curl',
    name: 'Dumbbell Bicep Curl',
    category: 'Upper Body',
    jointTarget: 'Elbow Flexion',
    idealAngleRange: '35° (Max Flexion) - 170° (Full Hang)',
    activeSensors: ['Shoulder Lock Stability Sensor', 'Bicep Contraction Node', 'Core Engagement Grid'],
    instructions: [
      'Stand upright, hold dumbbells by your sides, palms facing forward.',
      'Squeeze core and lock elbow tips adjacent to ribs.',
      'Curl the weights upward while keeping elbows static.',
      'Exhale on concentric lift, then slowly decelerate back down.'
    ],
    deviations: {
      lowLabel: 'Elbow Flare / Shoulder Sway',
      highLabel: 'Hip Momentum Assist',
      lowFeedback: 'Your elbows are flaring outward. Tuck them securely adjacent to your waist for pure bicep recruitment.',
      highFeedback: 'You are using lower back momentum. Lock your hips and engage glutes to keep the lift strict.',
      perfectFeedback: 'Flawless elbow tracking and locked torso. Absolute isolation. Keep resisting on the eccentric phase.'
    },
    getDefaultRig: (completion: number, deviation: number) => {
      // 0 = Arm extended, 100 = Curled
      const t = completion / 100;
      
      // Fixed torso base
      let headX = 100;
      let spineX = 100;
      let hipX = 100;
      
      // If deviation > 0 (swing momentum), hips slide back and spine tilts back to assist lift
      if (deviation > 0) {
        const factor = (deviation / 50) * t;
        hipX -= factor * 8;
        spineX += factor * 5;
        headX += factor * 3;
      }
      
      let leftShoulderX = 80;
      let rightShoulderX = 120;
      let leftShoulderY = 65;
      let rightShoulderY = 65;
      
      let leftElbowX = 76;
      let rightElbowX = 124;
      const elbowY = 110;
      
      // If deviation < 0 (Elbow flare), move elbows outward
      if (deviation < 0) {
        const flare = (Math.abs(deviation) / 50) * 12;
        leftElbowX -= flare;
        rightElbowX += flare;
      }
      
      // Wrist coordinates rotate in a circular path starting at Y=150, ending at Y=75
      // Perfect path is circular around Elbow (76, 110)
      // Radius ~ 40px
      // 0% -> Angle = Math.PI / 2 (down)
      // 100% -> Angle = -Math.PI / 2.3 (up, pointing slightly back)
      const startAngle = Math.PI / 2;
      const endAngle = -Math.PI / 2.4;
      const currentAngle = startAngle - t * (startAngle - endAngle);
      
      const leftWristX = leftElbowX + 40 * Math.cos(currentAngle);
      const leftWristY = elbowY + 40 * Math.sin(currentAngle);
      const rightWristX = rightElbowX - 40 * Math.cos(currentAngle);
      const rightWristY = elbowY + 40 * Math.sin(currentAngle);
      
      return {
        head: { x: headX, y: 35 },
        neck: { x: 100, y: 55 },
        leftShoulder: { x: leftShoulderX, y: leftShoulderY },
        rightShoulder: { x: rightShoulderX, y: rightShoulderY },
        leftElbow: { x: leftElbowX, y: elbowY },
        rightElbow: { x: rightElbowX, y: elbowY },
        leftWrist: { x: leftWristX, y: leftWristY },
        rightWrist: { x: rightWristX, y: rightWristY },
        spine: { x: spineX, y: 95 },
        leftHip: { x: hipX - 15, y: 135 },
        rightHip: { x: hipX + 15, y: 135 },
        leftKnee: { x: 85, y: 175 },
        rightKnee: { x: 115, y: 175 },
        leftAnkle: { x: 85, y: 220 },
        rightAnkle: { x: 115, y: 220 }
      };
    }
  },
  {
    id: 'press',
    name: 'Overhead Shoulder Press',
    category: 'Upper Body',
    jointTarget: 'Shoulder Abduction',
    idealAngleRange: '60° (Bottom) - 180° (Lockout)',
    activeSensors: ['Spine Alignment', 'Neck Strain Detector', 'Sholder Level Grid'],
    instructions: [
      'Clean dumbbells to heights of shoulders, knuckles facing forward.',
      'Squeeze thighs and glutes to build a bulletproof platform.',
      'Squeeze shoulder blades and drive dumbbells vertical.',
      'Lockout overhead with arms parallel, then lower with tempo.'
    ],
    deviations: {
      lowLabel: 'Incomplete Lockout / Flared Knees',
      highLabel: 'Lumbar Lordosis (Hyperextension)',
      lowFeedback: 'Knees bent or soft lockouts spotted. Drive overhead through back strength & straighten arms completely.',
      highFeedback: 'Inordinate lower back extension. Keep your core tight, ribs tucked down, and glutes active.',
      perfectFeedback: 'Beautiful lockout sequence. Arms directly in line with ears. Strong, stable base holding weight.'
    },
    getDefaultRig: (completion: number, deviation: number) => {
      // 0 = Shoulders setup, 100 = Push overhead
      const t = completion / 100;
      
      let headX = 100;
      let spineX = 100;
      let hipX = 100;
      
      // If deviation > 0 (lumbar arch), spine and hip shove forward while head leans slightly back
      if (deviation > 0) {
        const factor = (deviation / 50) * t;
        spineX += factor * 10;
        hipX += factor * 8;
        headX -= factor * 2;
      }
      
      const leftShoulderX = 80;
      const rightShoulderX = 120;
      const shoulderY = 70;
      
      // Let's model wrists going from (80, 80) / (120, 80) fully up to (85, 20) / (115, 20)
      // When complete lock, elbows straighten out
      // 0% -> Elbows: (70, 95)    Wrists: (78, 80)
      // 100% -> Elbows: (83, 40)   Wrists: (85, 20)
      let leftElbowX = 72 + t * 11;
      let leftElbowY = 95 - t * 55;
      
      let rightElbowX = 128 - t * 11;
      let rightElbowY = 95 - t * 55;
      
      let leftWristX = 76 + t * 9;
      let leftWristY = 80 - t * 62;
      
      let rightWristX = 124 - t * 9;
      let rightWristY = 80 - t * 62;
      
      // If deviation < 0 (Incomplete lockout / arm bent)
      if (deviation < 0) {
        const bended = (Math.abs(deviation) / 50) * 15 * t;
        leftWristY += bended;
        rightWristY += bended;
        leftElbowY += bended * 0.5;
        rightElbowY += bended * 0.5;
      }
      
      return {
        head: { x: headX, y: 35 },
        neck: { x: 100, y: 55 },
        leftShoulder: { x: leftShoulderX, y: shoulderY },
        rightShoulder: { x: rightShoulderX, y: shoulderY },
        leftElbow: { x: leftElbowX, y: leftElbowY },
        rightElbow: { x: rightElbowX, y: rightElbowY },
        leftWrist: { x: leftWristX, y: leftWristY },
        rightWrist: { x: rightWristX, y: rightWristY },
        spine: { x: spineX, y: 95 },
        leftHip: { x: hipX - 15, y: 135 },
        rightHip: { x: hipX + 15, y: 135 },
        leftKnee: { x: 85, y: 175 },
        rightKnee: { x: 115, y: 175 },
        leftAnkle: { x: 85, y: 220 },
        rightAnkle: { x: 115, y: 220 }
      };
    }
  }
];

export const SENSOR_HOTSPOTS: SensorHotspot[] = [
  {
    id: 'chest-ecg',
    title: 'Aura Bio-Conduction Fibers',
    subtitle: 'Integrated ECG Mesh',
    x: 50,
    y: 28,
    metrics: ['VO2 Max Estimation', 'ECG Wave (Heart Rate)', 'Autonomic Index (HRV)'],
    description: 'Knitted directly into the chest fibers, active metallic yarns record clinical-grade electrocardiogram streams, bypassing the noise typical of optical wrist-sensors.',
    techSpec: 'Silver-Plated Nylon Micro-Weave Core | 300Hz Capture Frequency',
    signalFreq: '300 Hz'
  },
  {
    id: 'back-imu',
    title: 'Spinal Alignment Microgrid',
    subtitle: 'Multi-Axis Inertial Node',
    x: 50,
    y: 48,
    metrics: ['Spine Extension Angle', 'Torso Rotation Rate', 'Lateral Pitch Deviation'],
    description: 'A dedicated multi-axial orientation micro-node nestled over the thoracic spine tracks flexion and twists, updating your form frame in perfect lockstep with the smart mirror.',
    techSpec: '9-DOF Ultra-Low Draw Sensor | 0.05° Static Pitch/Roll Resolution',
    signalFreq: '120 Hz'
  },
  {
    id: 'lats-respiration',
    title: 'Lats Volumetric Stretch Sensor',
    subtitle: 'Respiratory Volumetric Elastic Band',
    x: 35,
    y: 45,
    metrics: ['Respiratory Rate', 'Intra-Abdominal Brace Consistency', 'Tidal Wave Depth'],
    description: 'Measures continuous chest and lat expansion via stretch-conductive fibers. Coaches you on optimal Valsalva bracing right before heavy loads.',
    techSpec: 'Highly elastic silicone-embedded resistive ribbon | 50Hz Volumetric Scan',
    signalFreq: '50 Hz'
  },
  {
    id: 'nape-pod',
    title: 'Aura Core Hub',
    subtitle: 'Zero-Latency Bluetooth Nodule',
    x: 50,
    y: 12,
    metrics: ['BT Long-Range 5.3', '100HR Liquid-Lithium Cell', 'IP69K Immersion Waterproof'],
    description: 'The ultra-compact central hub sitting in a custom nape receptacle. Coordinates multi-sensor data synchronization & broadcasts directly to the mirror cabinet using ultra-low latency.',
    techSpec: 'ARM Cortex-M4 Controller | 2.4GHz Ultra-Low-Latency LE Protocol | Waterproof Magnet Dock',
    signalFreq: 'Bluetooth LE'
  }
];

export const RECENT_TESTIMONIALS: Testimonial[] = [
  {
    id: 't-1',
    author: 'Elena Rostova',
    role: 'Olympic Weightlifting Competitor',
    rating: 5,
    comment: 'The precision is terrifying. For a long time, my left shin was tracking inward during cleans, and no trainer caught it. Aura flagged the 4° knee drift on rep two, and I broke my squat record in 4 weeks.',
    avatarUrl: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?auto=format&fit=crop&q=80&w=150&h=150'
  },
  {
    id: 't-2',
    author: 'Dr. Marcus Vance',
    role: 'Physical Therapy Lead / Sports Scientist',
    rating: 5,
    comment: 'Wearable systems are usually hindered by wrist placement or bad calculations. Coupling the high-fidelity biomechanical data from the Aura Smart Shirt with the visual feedback of the Mirror solves the feedback loop.',
    avatarUrl: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=150&h=150'
  }
];

export const FAQS = [
  {
    question: "Do I have to look directly in the Mirror for stats to register?",
    answer: "No. While the mirror provides breathtaking visual real-time feedback and skeleton overlay, your Aura Smart Shirt contains internal memory. It records and synchronizes all biometric data and form vectors to your smartphone or mirror dashboard locally."
  },
  {
    question: "How do I wash the Aura Smart Bio-Mesh Shirt?",
    answer: "Remove the magnetic Aura Core Hub from the nape of the neck. The shirt itself can go directly into typical washing machines and warm tumble driers — our silver ECG fibers and IMUs are integrated at a molecular yarn level."
  },
  {
    question: "Does this require a subscription fees or hidden costs?",
    answer: "Aura operates with a hardware-inclusive dashboard. Every purchase comes with lifetime access to standard real-time biometric mirroring and personal stat dashboards. Optional Pro Live Coaching is available but never required for core features."
  }
];
