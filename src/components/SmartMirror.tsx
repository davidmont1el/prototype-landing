
import React, { useState } from 'react';
import {
  Monitor,
  Play,
  BookOpen,
  AlertTriangle,
  TrendingUp,
  ChevronRight,
  Dumbbell,
  CheckCircle2
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import digitalHome from '../assets/images/digitalhomescreen.png';
import digitalHowItWorks from '../assets/images/digitalhowitworks.png';
import digitalSquatTutorial from '../assets/images/digitalsquattutorial.png';
import digitalFormAlert from '../assets/images/newdigitalformalert.png';
import digitalProgressList from '../assets/images/digitalprogresslistscreen.png';
import digitalProgressDetail from '../assets/images/digitalprogressdetailscreen.png';

type DemoView =
  | 'home'
  | 'how-it-works'
  | 'squat-tutorial'
  | 'form-alert'
  | 'progress-list'
  | 'progress-detail';

const DEMO_SCREENS: {
  id: DemoView;
  title: string;
  subtitle: string;
  task: string;
  image: string;
  alt: string;
  icon: React.ElementType;
  description: string;
}[] = [
  {
    id: 'home',
    title: 'Home Screen',
    subtitle: 'Main smart mirror interface',
    task: 'System entry point',
    image: digitalHome,
    alt: 'IronPath smart mirror home screen',
    icon: Monitor,
    description:
      'The home screen makes the smart mirror the main interaction point. Users can start a workout, view progress, check history, or open the tutorial from one central place.'
  },
  {
    id: 'how-it-works',
    title: 'How It Works',
    subtitle: 'System onboarding',
    task: 'Setup and understanding',
    image: digitalHowItWorks,
    alt: 'IronPath How It Works screen',
    icon: BookOpen,
    description:
      'This screen explains the three system components: the sensor clothing tracks movement, the smart mirror shows feedback and controls, and the earbuds provide safety-only alerts.'
  },
  {
    id: 'squat-tutorial',
    title: 'Squat Tutorial',
    subtitle: 'In-workout help',
    task: 'Task 1: Fix form',
    image: digitalSquatTutorial,
    alt: 'IronPath squat tutorial screen',
    icon: Dumbbell,
    description:
      'The tutorial gives quick form reminders before or during a workout, including feet shoulder-width apart, core braced, chest up, and knees tracking over toes.'
  },
  {
    id: 'form-alert',
    title: 'Form Alert',
    subtitle: 'Real-time correction',
    task: 'Task 1: Fix form',
    image: digitalFormAlert,
    alt: 'IronPath form alert screen',
    icon: AlertTriangle,
    description:
      'When form becomes risky, the mirror gives direct corrections such as “Chest up,” “Sit back,” and “Reduce 5 lbs.” The earbuds also provide a simple safety alert so the user does not need to stare at the mirror.'
  },
  {
    id: 'progress-list',
    title: 'Progress List',
    subtitle: 'Choose an exercise',
    task: 'Task 2: Track progress',
    image: digitalProgressList,
    alt: 'IronPath progress list screen',
    icon: TrendingUp,
    description:
      'The progress list lets users choose which exercise they want to review. This supports long-term tracking without crowding every metric onto the home screen.'
  },
  {
    id: 'progress-detail',
    title: 'Progress Detail',
    subtitle: 'Concrete workout metrics',
    task: 'Task 2: Track progress',
    image: digitalProgressDetail,
    alt: 'IronPath progress detail screen',
    icon: TrendingUp,
    description:
      'The final progress screen uses concrete metrics instead of unclear percentages: weight lifted, reps per week, average form score, and form warnings over time.'
  }
];

const TASK_FLOWS = [
  {
    title: 'Task 1: Adjust form during a workout',
    description:
      'A user starts a workout, checks form guidance if needed, receives a form alert during a set, and responds by practicing, resuming, or ending the workout.',
    steps: [
      'Start from the home screen',
      'Review squat tutorial or begin workout',
      'Receive a form alert when movement becomes risky',
      'Follow clear correction cues such as chest up, sit back, or reduce 5 lbs'
    ],
    screens: ['home', 'squat-tutorial', 'form-alert'] as DemoView[]
  },
  {
    title: 'Task 2: Track progress over time',
    description:
      'A user opens progress, selects an exercise, and reviews clear long-term metrics that show whether their training is improving.',
    steps: [
      'Open Progress from the home screen',
      'Choose an exercise from the progress list',
      'Review weight, reps, form score, and warnings',
      'Use the data to understand improvement over time'
    ],
    screens: ['home', 'progress-list', 'progress-detail'] as DemoView[]
  }
];

export default function SmartMirror() {
  const [activeView, setActiveView] = useState<DemoView>('home');

  const activeScreen = DEMO_SCREENS.find((screen) => screen.id === activeView) ?? DEMO_SCREENS[0];

  return (
    <section className="py-24 bg-[#050506] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(220,38,38,0.08),transparent_45%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full">
            <Monitor className="w-3.5 h-3.5 text-brand-red" />
            <span className="text-[10px] font-mono font-bold text-brand-red tracking-widest uppercase">
              Final Digital Mockup
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            Smart Mirror Interface
          </h2>

          <p className="text-sm text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            The final mockup shows IronPath’s two primary tasks: helping users fix form during a workout and helping
            them track progress over time.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-4 space-y-6">
            <div className="p-5 bg-[#0e0e11] border border-white/5 rounded-2xl">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <Play className="w-4 h-4 text-brand-red" />
                Screen Walkthrough
              </h3>

              <div className="space-y-2">
                {DEMO_SCREENS.map((screen) => {
                  const Icon = screen.icon;
                  const isActive = activeView === screen.id;

                  return (
                    <button
                      key={screen.id}
                      onClick={() => setActiveView(screen.id)}
                      className={`w-full text-left p-3.5 rounded-xl border transition-all cursor-pointer ${
                        isActive
                          ? 'bg-brand-red/10 border-brand-red/40 text-white'
                          : 'bg-zinc-950/40 border-white/5 text-zinc-400 hover:text-white hover:border-zinc-700'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-9 h-9 rounded-lg flex items-center justify-center ${
                              isActive ? 'bg-brand-red text-white' : 'bg-white/5 text-zinc-500'
                            }`}
                          >
                            <Icon className="w-4 h-4" />
                          </div>

                          <div>
                            <p className="text-xs font-bold">{screen.title}</p>
                            <p className="text-[10px] text-zinc-500 font-mono">{screen.task}</p>
                          </div>
                        </div>

                        <ChevronRight
                          className={`w-4 h-4 transition-transform ${
                            isActive ? 'translate-x-1 text-brand-red' : 'text-zinc-600'
                          }`}
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="p-5 bg-[#0e0e11] border border-white/5 rounded-2xl">
              <h3 className="text-sm font-bold text-white mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-brand-red" />
                Primary Task Flows
              </h3>

              <div className="space-y-5">
                {TASK_FLOWS.map((flow) => (
                  <div key={flow.title} className="space-y-3">
                    <div>
                      <h4 className="text-xs font-bold text-white">{flow.title}</h4>
                      <p className="text-[11px] text-zinc-500 leading-relaxed mt-1">{flow.description}</p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {flow.screens.map((screenId) => {
                        const screen = DEMO_SCREENS.find((item) => item.id === screenId);
                        if (!screen) return null;

                        return (
                          <button
                            key={screenId}
                            onClick={() => setActiveView(screenId)}
                            className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-brand-red/15 border border-white/5 hover:border-brand-red/30 text-[9px] text-zinc-400 hover:text-white font-mono uppercase transition-all cursor-pointer"
                          >
                            {screen.title}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8 items-center">
              <div className="xl:col-span-6 flex justify-center">
                <div className="relative">
                  <div className="absolute -inset-6 bg-brand-red/20 blur-[80px] rounded-full" />

                  <div className="relative bg-[#0b0b0d] border border-white/10 rounded-[2rem] p-3 shadow-2xl">
                    <AnimatePresence mode="wait">
                      <motion.img
                        key={activeScreen.id}
                        src={activeScreen.image}
                        alt={activeScreen.alt}
                        initial={{ opacity: 0, y: 10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.25 }}
                        className="w-full max-w-[330px] max-h-[720px] object-contain rounded-[1.5rem] border border-white/5"
                      />
                    </AnimatePresence>
                  </div>
                </div>
              </div>

              <div className="xl:col-span-6 space-y-6">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`${activeScreen.id}-text`}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-5"
                  >
                    <div>
                      <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest">
                        {activeScreen.task}
                      </span>

                      <h3 className="text-2xl sm:text-3xl font-black text-white mt-2">
                        {activeScreen.title}
                      </h3>

                      <p className="text-sm text-zinc-500 mt-1">{activeScreen.subtitle}</p>
                    </div>

                    <p className="text-sm text-zinc-400 leading-relaxed">
                      {activeScreen.description}
                    </p>

                    {activeScreen.id === 'form-alert' && (
                      <div className="p-5 bg-brand-red/5 border border-brand-red/20 rounded-xl space-y-3">
                        <h4 className="text-xs font-bold text-white flex items-center gap-2">
                          <AlertTriangle className="w-4 h-4 text-brand-red" />
                          Final alert behavior
                        </h4>

                        <p className="text-xs text-zinc-400 leading-relaxed">
                          The final form alert should offer the user clear next actions: Resume Workout, Practice Rep,
                          and End Workout. This avoids duplicating “back” and “resume” actions.
                        </p>
                      </div>
                    )}

                    {activeScreen.id === 'progress-detail' && (
                      <div className="p-5 bg-brand-red/5 border border-brand-red/20 rounded-xl space-y-3">
                        <h4 className="text-xs font-bold text-white flex items-center gap-2">
                          <TrendingUp className="w-4 h-4 text-brand-red" />
                          Usability revision
                        </h4>

                        <p className="text-xs text-zinc-400 leading-relaxed">
                          We replaced abstract consistency percentages with concrete metrics because participants wanted
                          to understand the actual numbers behind their improvement.
                        </p>
                      </div>
                    )}
                  </motion.div>
                </AnimatePresence>

                <div className="p-5 bg-[#0e0e11] border border-white/5 rounded-2xl">
                  <h4 className="text-xs font-bold text-white mb-3">Walkthrough steps</h4>

                  <div className="space-y-3">
                    {(activeScreen.id === 'progress-list' || activeScreen.id === 'progress-detail'
                      ? TASK_FLOWS[1].steps
                      : TASK_FLOWS[0].steps
                    ).map((step, index) => (
                      <div key={step} className="flex gap-3">
                        <div className="w-5 h-5 rounded-full bg-brand-red/10 border border-brand-red/30 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-[9px] text-brand-red font-mono font-bold">{index + 1}</span>
                        </div>
                        <p className="text-xs text-zinc-400 leading-relaxed">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setActiveView('home')}
                    className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 text-xs font-bold text-white transition-all cursor-pointer"
                  >
                    Reset to Home
                  </button>

                  <button
                    onClick={() =>
                      setActiveView(activeScreen.id === 'progress-detail' ? 'home' : 'progress-detail')
                    }
                    className="p-3 rounded-xl bg-brand-red hover:bg-red-700 text-xs font-bold text-white transition-all cursor-pointer"
                  >
                    View Progress
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 bg-white/[0.03] border border-white/5 rounded-xl">
            <BookOpen className="w-5 h-5 text-brand-red mb-3" />
            <h4 className="text-sm font-bold text-white">Onboarding added</h4>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
              Users needed a clearer explanation of the clothing, mirror, and earbuds, so the tutorial became a core part
              of the final mockup.
            </p>
          </div>

          <div className="p-5 bg-white/[0.03] border border-white/5 rounded-xl">
            <AlertTriangle className="w-5 h-5 text-brand-red mb-3" />
            <h4 className="text-sm font-bold text-white">Safety alerts clarified</h4>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
              Earbuds are not a full interface. They provide simple alerts when the user should stop, reset, or reduce
              weight.
            </p>
          </div>

          <div className="p-5 bg-white/[0.03] border border-white/5 rounded-xl">
            <TrendingUp className="w-5 h-5 text-brand-red mb-3" />
            <h4 className="text-sm font-bold text-white">Progress simplified</h4>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
              The progress view now uses concrete metrics that users can understand quickly: weight, reps, form score,
              and warnings.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}