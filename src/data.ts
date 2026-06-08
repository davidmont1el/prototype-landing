
export const SENSOR_HOTSPOTS = [
  {
    id: 'upper-body-signal',
    x: 50,
    y: 28,
    title: 'Upper body signal area',
    subtitle: 'Chest and shoulder engagement',
    signalFreq: 'Muscle signal',
    description:
      'Embedded electrodes help the system detect upper-body muscle activity, such as whether the chest and shoulders are engaging during pressing movements.',
    metrics: ['Muscle engagement', 'Chest activation', 'Upper-body control']
  },
  {
    id: 'back-alignment',
    x: 50,
    y: 48,
    title: 'Back alignment area',
    subtitle: 'Spine and torso angle',
    signalFreq: 'Posture cue',
    description:
      'Motion sensing helps the mirror notice when the user is leaning too far forward, losing a stable back position, or changing posture as fatigue builds.',
    metrics: ['Back angle', 'Forward lean', 'Posture change']
  },
  {
    id: 'side-body-signal',
    x: 36,
    y: 55,
    title: 'Side body signal area',
    subtitle: 'Balance and muscle control',
    signalFreq: 'Muscle + balance cue',
    description:
      'This area helps compare left and right movement while also checking whether the user is staying controlled through the lift.',
    metrics: ['Left-right balance', 'Body shift', 'Muscle control']
  },
  {
    id: 'core-leg-signal',
    x: 43,
    y: 63,
    title: 'Core and leg signal area',
    subtitle: 'Stability and target muscle use',
    signalFreq: 'Muscle signal',
    description:
      'Embedded sensors help estimate whether the user is bracing and engaging the intended muscles instead of compensating with unsafe movement patterns.',
    metrics: ['Core stability', 'Target muscle use', 'Rep control']
  }
];

export const EXERCISES = [
  {
    id: 'squat',
    name: 'Squat',
    category: 'Lower Body',
    targetReps: 12,
    currentSet: 2,
    totalSets: 3,
    currentWeight: 190,
    repsPerWeek: 32,
    averageFormScore: 92,
    formWarnings: 4,
    formCues: [
      'Feet shoulder-width apart',
      'Toes slightly outward',
      'Core braced',
      'Chest up',
      'Knees track over toes',
      'Drive through your heels'
    ],
    commonCorrections: [
      {
        issue: 'Knees caving inward',
        correction: 'Push your knees out'
      },
      {
        issue: 'Forward lean',
        correction: 'Chest up'
      },
      {
        issue: 'Knees moving too far forward',
        correction: 'Sit back'
      },
      {
        issue: 'Repeated form breakdown',
        correction: 'Reduce 5 lbs'
      }
    ],
    progressData: [
      { week: 'W1', weight: 170 },
      { week: 'W2', weight: 180 },
      { week: 'W3', weight: 180 },
      { week: 'W4', weight: 190 }
    ]
  },
  {
    id: 'bench-press',
    name: 'Bench Press',
    category: 'Upper Body',
    targetReps: 10,
    currentSet: 1,
    totalSets: 3,
    currentWeight: 140,
    repsPerWeek: 28,
    averageFormScore: 89,
    formWarnings: 4,
    formCues: [
      'Feet planted',
      'Shoulder blades set',
      'Wrists stacked',
      'Lower with control',
      'Press evenly'
    ],
    commonCorrections: [
      {
        issue: 'Uneven press',
        correction: 'Press both arms evenly'
      },
      {
        issue: 'Wrists bending back',
        correction: 'Stack wrists over elbows'
      },
      {
        issue: 'Bar drifting forward',
        correction: 'Keep bar path controlled'
      }
    ],
    progressData: [
      { week: 'W1', weight: 120 },
      { week: 'W2', weight: 130 },
      { week: 'W3', weight: 130 },
      { week: 'W4', weight: 140 }
    ]
  },
  {
    id: 'deadlift',
    name: 'Deadlift',
    category: 'Lower Body',
    targetReps: 8,
    currentSet: 2,
    totalSets: 3,
    currentWeight: 225,
    repsPerWeek: 22,
    averageFormScore: 86,
    formWarnings: 5,
    formCues: [
      'Bar close to shins',
      'Chest up',
      'Back flat',
      'Push the floor away',
      'Lock out with control'
    ],
    commonCorrections: [
      {
        issue: 'Back rounding',
        correction: 'Brace and flatten back'
      },
      {
        issue: 'Bar drifting away',
        correction: 'Keep bar close'
      },
      {
        issue: 'Hips rising too early',
        correction: 'Push through your legs'
      }
    ],
    progressData: [
      { week: 'W1', weight: 210 },
      { week: 'W2', weight: 220 },
      { week: 'W3', weight: 220 },
      { week: 'W4', weight: 225 }
    ]
  },
  {
    id: 'overhead-press',
    name: 'Overhead Press',
    category: 'Upper Body',
    targetReps: 10,
    currentSet: 1,
    totalSets: 3,
    currentWeight: 80,
    repsPerWeek: 32,
    averageFormScore: 88,
    formWarnings: 3,
    formCues: [
      'Core braced',
      'Glutes tight',
      'Press straight up',
      'Head moves through',
      'Control the lockout'
    ],
    commonCorrections: [
      {
        issue: 'Back arching',
        correction: 'Brace your core'
      },
      {
        issue: 'Bar path drifting',
        correction: 'Press straight up'
      },
      {
        issue: 'Loose lockout',
        correction: 'Finish under control'
      }
    ],
    progressData: [
      { week: 'W1', weight: 60 },
      { week: 'W2', weight: 70 },
      { week: 'W3', weight: 70 },
      { week: 'W4', weight: 80 }
    ]
  }
];

export const DESIGN_REVISIONS = [
  {
    title: 'Added a system tutorial',
    issue:
      'Participants were confused about how the clothing, smart mirror, and earbuds worked together.',
    revision:
      'We added a “How It Works” tutorial that explains each component before the user starts a workout.',
    impact:
      'This made the system easier to understand and helped users see the smart mirror as the central interface.'
  },
  {
    title: 'Removed the smartwatch',
    issue:
      'The early system had too many devices, which made the experience feel more complicated than necessary.',
    revision:
      'We removed the smartwatch and moved its main functions into the smart mirror.',
    impact:
      'This simplified the system and reduced the number of places users had to look during a workout.'
  },
  {
    title: 'Added an in-workout help button',
    issue:
      'A participant wanted to check whether their squat position was correct but could not find a quick way to review form guidance.',
    revision:
      'We added a tutorial/help option during workouts so users can review correct form cues when needed.',
    impact:
      'This gives newer users extra support without forcing experienced users through a tutorial every time.'
  },
  {
    title: 'Condensed progress tracking',
    issue:
      'Participants were confused by the consistency percentage and did not understand how it related to reps or workout performance.',
    revision:
      'We redesigned progress around concrete metrics: weight, reps, form score, and form warnings.',
    impact:
      'This made progress easier to interpret and connected the screen more clearly to the user’s actual workouts.'
  },
  {
    title: 'Clarified earbuds as safety-only alerts',
    issue:
      'Users needed to understand that earbuds were not another full interface.',
    revision:
      'We clarified that earbuds only provide simple alerts when the user should stop, reset, or reduce weight.',
    impact:
      'This supports safer lifting without requiring the user to stare at the mirror during heavy reps.'
  }
];

export const FAQ_ITEMS = [
  {
    question: 'Do I have to stare at the mirror while lifting?',
    answer:
      'No. The mirror is useful for setup, tutorials, and explanations, but the earbuds provide simple safety alerts during heavy lifts so the user does not have to keep looking at the screen.'
  },
  {
    question: 'What does the sensor clothing do?',
    answer:
      'The clothing tracks movement and posture while the user lifts. It sends that information to the smart mirror, where it becomes clear feedback like “chest up,” “sit back,” or “reduce 5 lbs.”'
  },
  {
    question: 'Why did the final design remove the smartwatch?',
    answer:
      'Usability testing showed that having too many devices made the system feel confusing. We removed the smartwatch and made the smart mirror the main place for controls, tutorials, and progress.'
  },
  {
    question: 'What do the earbuds do?',
    answer:
      'The earbuds provide safety-only alerts. For example, they can warn the user to stop after the current rep and reset if form becomes risky.'
  },
  {
    question: 'How did usability testing change the progress screen?',
    answer:
      'Participants were confused by abstract consistency percentages, so we redesigned progress around concrete metrics: weight lifted, reps completed, average form score, and form warnings.'
  },
  {
    question: 'Who is IronPath for?',
    answer:
      'IronPath is designed for people who strength train alone or without constant coaching, especially users who want help improving form and tracking progress over time.'
  }
];

export const MOCKUP_TASKS = [
  {
    id: 'fix-form',
    title: 'Task 1: Fix form during a workout',
    summary:
      'The user starts a workout, receives feedback when form becomes risky, and chooses whether to resume, practice a rep, or end the workout.',
    steps: [
      'Start workout from the smart mirror home screen',
      'Review tutorial or begin the exercise',
      'Receive a safety alert when form breaks down',
      'Follow correction cues such as chest up, sit back, or reduce 5 lbs',
      'Resume workout, practice a rep, or end the workout'
    ]
  },
  {
    id: 'track-progress',
    title: 'Task 2: Track progress over time',
    summary:
      'The user opens progress, selects an exercise, and reviews improvement through concrete workout metrics.',
    steps: [
      'Open Progress from the smart mirror home screen',
      'Choose an exercise from the progress list',
      'Review weight, reps per week, average form score, and form warnings',
      'Use progress trends to understand improvement over time'
    ]
  }
];

export const PRODUCT_SUMMARY = {
  name: 'IronPath',
  tagline: 'Your path. Your strength.',
  shortDescription:
    'IronPath is a smart strength-training system that helps solo lifters correct form in real time, receive safety alerts during heavy sets, and track progress over time.',
  problem:
    'Solo lifters often cannot tell when their form is becoming unsafe, especially during heavy or fatiguing sets.',
  solution:
    'IronPath combines a sensor clothing, smart mirror, and safety earbuds. The clothing tracks movement and muscle signals, the mirror explains what to fix, and the earbuds give quick alerts when the user should stop or reset.',
  primaryUsers:
    'People who strength train alone, newer lifters learning form, and experienced lifters who want clearer feedback during heavy sets.'
};

export const SITE_NAV_ITEMS = [
  {
    label: 'Design Journal',
    href: '#design-archive'
  },
  {
    label: 'Final Demo',
    href: '#smart-mirror-demo'
  },
  {
    label: 'Poster Brief',
    href: '#poster-brief'
  }
];