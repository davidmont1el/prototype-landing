
import React from 'react';
import {
  HelpCircle,
  Lightbulb,
  RefreshCw,
  AlertTriangle,
  Shirt,
  Monitor,
  Headphones,
  TrendingUp,
  BookOpen,
  CheckCircle2,
  Dumbbell,
  ArrowRight
} from 'lucide-react';

export default function PosterBrief() {
  return (
    <section id="poster-brief" className="py-24 bg-[#08080a] border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.012)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.012)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-[20%] left-[15%] w-[420px] h-[420px] rounded-full bg-brand-red/5 filter blur-[140px]" />
      <div className="absolute bottom-[10%] right-[15%] w-[420px] h-[420px] rounded-full bg-brand-red/5 filter blur-[140px]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        <div className="text-center space-y-4">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-red uppercase block">
            Final Project Summary
          </span>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            IronPath at a glance
          </h2>

          <p className="text-sm text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            A concise summary of the problem, solution, key functionality, and design process behind our smart mirror
            fitness coaching system.
          </p>
        </div>

        {/* Main poster-style summary grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Problem */}
          <div className="lg:col-span-4 bg-zinc-950/60 border border-white/5 p-6 rounded-2xl flex flex-col justify-between space-y-8 hover:border-brand-red/20 transition-colors backdrop-blur-sm">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-brand-red/10 border border-brand-red/20 rounded-xl text-brand-red">
                  <HelpCircle className="w-5 h-5" />
                </div>

                <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  01. Problem
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                  Solo lifters often cannot tell when their form is becoming unsafe.
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  Weightlifting depends on body cues that are hard to learn through instructions alone. During heavy or
                  fatiguing sets, users may not notice when their knees cave inward, their torso leans forward, or their
                  posture changes.
                </p>
              </div>

              <div className="p-4 bg-zinc-900/40 border border-white/5 rounded-xl space-y-3">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-brand-red" />
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">
                    Need
                  </span>
                </div>

                <p className="text-[11px] text-zinc-300 leading-relaxed">
                  In 2024, approximately 4.4 million people visited emergency departments for injuries involving sports
                  and recreational equipment. IronPath focuses on helping strength-training users recognize and correct
                  risky form patterns sooner.
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-[10px] text-zinc-500 font-mono">
              USER NEED: REAL-TIME, ACTIONABLE FORM FEEDBACK
            </div>
          </div>

          {/* Solution */}
          <div className="lg:col-span-4 bg-zinc-950/60 border border-white/5 p-6 rounded-2xl flex flex-col justify-between space-y-8 hover:border-brand-red/20 transition-colors backdrop-blur-sm">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-brand-red/10 border border-brand-red/20 rounded-xl text-brand-red">
                  <Lightbulb className="w-5 h-5" />
                </div>

                <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  02. Solution
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                  A smart mirror system that turns movement into clear correction.
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  IronPath combines a sensor clothing, smart mirror, and wireless earbuds. The clothing collects movement
                  data, the mirror explains what to fix, and the earbuds provide safety-only alerts during heavy lifts.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <div className="p-2 bg-zinc-900/30 border border-white/5 rounded-lg text-center space-y-1">
                  <Shirt className="w-4 h-4 text-brand-red mx-auto" />
                  <span className="text-[9px] font-mono text-zinc-400 block font-bold">CLOTHING</span>
                  <p className="text-[8.5px] text-zinc-500 leading-tight">Senses movement</p>
                </div>

                <div className="p-2 bg-zinc-900/30 border border-white/5 rounded-lg text-center space-y-1">
                  <Monitor className="w-4 h-4 text-brand-red mx-auto" />
                  <span className="text-[9px] font-mono text-zinc-400 block font-bold">MIRROR</span>
                  <p className="text-[8.5px] text-zinc-500 leading-tight">Explains feedback</p>
                </div>

                <div className="p-2 bg-zinc-900/30 border border-white/5 rounded-lg text-center space-y-1">
                  <Headphones className="w-4 h-4 text-brand-red mx-auto" />
                  <span className="text-[9px] font-mono text-zinc-400 block font-bold">EARBUDS</span>
                  <p className="text-[8.5px] text-zinc-500 leading-tight">Safety alerts</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-[10px] text-zinc-500 font-mono">
              VALUE: SAFER LIFTING WITHOUT ADDING ANOTHER SCREEN
            </div>
          </div>

          {/* Process */}
          <div className="lg:col-span-4 bg-zinc-950/60 border border-white/5 p-6 rounded-2xl flex flex-col justify-between space-y-8 hover:border-brand-red/20 transition-colors backdrop-blur-sm">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-brand-red/10 border border-brand-red/20 rounded-xl text-brand-red">
                  <RefreshCw className="w-5 h-5" />
                </div>

                <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  03. Iteration
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                  Usability testing pushed us to simplify the system.
                </h3>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  Early versions included more devices and more data. Testing showed that users needed clearer component
                  roles, simpler progress tracking, and more direct workout guidance.
                </p>
              </div>

              <div className="space-y-3 text-[11px]">
                <div className="flex items-start gap-2.5">
                  <BookOpen className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Added a tutorial to explain the clothing, mirror, and earbuds.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Monitor className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Removed the smartwatch and made the mirror the main interface.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <Dumbbell className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Added an in-workout help screen for quick form reminders.</span>
                </div>

                <div className="flex items-start gap-2.5">
                  <TrendingUp className="w-4 h-4 text-brand-red shrink-0 mt-0.5" />
                  <span className="text-zinc-300">Replaced confusing progress percentages with concrete metrics.</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 text-[10px] text-zinc-500 font-mono">
              RESULT: CLEARER TASK FLOWS AND LESS DEVICE OVERLOAD
            </div>
          </div>
        </div>

        {/* Key functionality section */}
        <div className="bg-zinc-950/60 border border-white/5 rounded-2xl p-6 sm:p-8">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-8">
            <div>
              <span className="text-xs font-mono font-bold tracking-widest text-brand-red uppercase block mb-2">
                Key Functionality
              </span>

              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight">
                The final design supports two primary tasks.
              </h3>
            </div>

            <p className="text-sm text-zinc-400 max-w-xl leading-relaxed">
              These tasks represent the core repeated experience of using IronPath: correcting form in the moment and
              tracking improvement over time.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="p-6 bg-[#0e0e11] border border-white/5 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-red/10 border border-brand-red/20 rounded-xl text-brand-red">
                  <AlertTriangle className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="text-base font-bold text-white">Task 1: Fix form</h4>
                  <p className="text-[10px] text-zinc-500 font-mono uppercase">During a live workout</p>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                When the system detects unsafe form, the earbuds alert the user and the mirror explains the issue with
                clear correction cues like “push your knees out,” “sit back,” “chest up,” or “reduce 5 lbs.”
              </p>

              <div className="flex flex-wrap gap-2">
                {['Start workout', 'Detect risky form', 'Show correction', 'Resume / practice / end'].map((step) => (
                  <span
                    key={step}
                    className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-[9px] text-zinc-400 font-mono uppercase"
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-6 bg-[#0e0e11] border border-white/5 rounded-xl">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-brand-red/10 border border-brand-red/20 rounded-xl text-brand-red">
                  <TrendingUp className="w-5 h-5" />
                </div>

                <div>
                  <h4 className="text-base font-bold text-white">Task 2: Track progress</h4>
                  <p className="text-[10px] text-zinc-500 font-mono uppercase">Across workouts over time</p>
                </div>
              </div>

              <p className="text-xs text-zinc-400 leading-relaxed mb-5">
                Users review progress using concrete metrics: weight lifted, reps completed, average form score, and
                form warnings. This makes improvement easier to understand than an abstract consistency percentage.
              </p>

              <div className="flex flex-wrap gap-2">
                {['Open progress', 'Choose exercise', 'Review metrics', 'Set next goal'].map((step) => (
                  <span
                    key={step}
                    className="px-2.5 py-1 bg-white/5 border border-white/5 rounded-full text-[9px] text-zinc-400 font-mono uppercase"
                  >
                    {step}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Closing summary */}
        <div className="text-center max-w-3xl mx-auto space-y-5">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full">
            <CheckCircle2 className="w-3.5 h-3.5 text-brand-red" />
            <span className="text-[10px] font-mono font-bold text-brand-red tracking-widest uppercase">
              Final Takeaway
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white">
            IronPath helps lifters build safer habits, not just complete more reps.
          </h3>

          <p className="text-sm text-zinc-400 leading-relaxed">
            By combining real-time form feedback with safety alerts and long-term progress tracking, IronPath supports
            users both during a workout and after the workout is over.
          </p>

          <div className="flex justify-center">
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-500 uppercase">
              <span>Research</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-red" />
              <span>Prototype</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-red" />
              <span>Testing</span>
              <ArrowRight className="w-3.5 h-3.5 text-brand-red" />
              <span>Final Mockup</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}