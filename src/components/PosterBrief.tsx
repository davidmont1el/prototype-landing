import React from 'react';
import { 
  HelpCircle, 
  Lightbulb, 
  Compass, 
  AlertTriangle,
  RefreshCw,
  TrendingDown,
  Activity,
  Award,
  BookOpen
} from 'lucide-react';
import { motion } from 'motion/react';

export default function PosterBrief() {
  return (
    <section id="poster-brief" className="py-24 bg-[#08080a] border-t border-white/5 relative overflow-hidden">
      {/* Background Ambience Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[800px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[20%] left-[15%] w-[400px] h-[400px] rounded-full bg-brand-red/5 filter blur-[130px]" />
        <div className="absolute top-[60%] right-[15%] w-[400px] h-[400px] rounded-full bg-brand-red/5 filter blur-[130px] animate-pulse" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Poster Header */}
        <div className="text-center space-y-3">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-red uppercase block">
            CSE 440 ACADEMIC EXHIBITION
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Academic Poster Brief & Core Thesis
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Our research, problem synthesis, and design iteration path condensed into a single high-fidelity, peer-reviewed overview.
          </p>
        </div>

        {/* Poster Grid Board */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch font-sans">
          
          {/* COLUMN 1: INTEGRAL PROBLEM STATEMENT (Cols 1-4) */}
          <div className="lg:col-span-4 bg-zinc-950/60 border border-white/5 p-6 rounded-2xl flex flex-col justify-between space-y-8 hover:border-zinc-800 transition-colors backdrop-blur-sm">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-brand-red/10 border border-brand-red/20 rounded-xl text-brand-red">
                  <HelpCircle className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  01. PROBLEM STATEMENT
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                  Traditional weightlifting mirrors force a compromise between posture and feedback.
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  During high-load exercises (like heavy barbell squats), athletes are blind to their own spinal flexion and joint alignment. Traditional mirrors are passive and can only be viewed at fixed frontal positions, which forces lifters to turn their necks—introducing torque into a loaded spine and causing cervical/lumbar joint strain.
                </p>
              </div>

              {/* Research Insights Banner */}
              <div className="p-4 bg-zinc-900/40 border border-white/5 rounded-xl space-y-3">
                <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest block font-bold">UW IMA SURVEY FINDINGS</span>
                <ul className="space-y-2 text-[11px] text-zinc-300">
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-red font-bold select-none">•</span>
                    <span><strong>100% of Monitored Lifters</strong> failed to self-correct form flaws using standard glass mirrors.</span>
                  </li>
                  <li className="flex items-start gap-1.5">
                    <span className="text-brand-red font-bold select-none">•</span>
                    <span><strong>Postural Degradation under fatigue</strong> is silent and compound, occurring when mental focus is completely spent.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex gap-3 text-[10px] text-zinc-500 font-mono">
              <span>N = 15 FIELD RESEARCH SESSIONS</span>
              <span>•</span>
              <span className="text-brand-red font-bold">COGNITIVE LIMIT</span>
            </div>
          </div>

          {/* COLUMN 2: THE SYNERGISTIC SOLUTION (Cols 5-8) */}
          <div className="lg:col-span-4 bg-zinc-950/60 border border-white/5 p-6 rounded-2xl flex flex-col justify-between space-y-8 hover:border-zinc-800 transition-colors backdrop-blur-sm">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-brand-red/10 border border-brand-red/20 rounded-xl text-brand-red">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  02. SOLUTION HYPOTHESIS
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                  Unify skeletal analytics with immediate, eyes-free auditory cues.
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  IronPath introduces a closed-loop cyber-physical environment. An AI Smart Mirror processes joint tracking vectors on sagittal planes, while bioconductive silver yarns in the compression shirt monitor rib thoracic expansion. Together, they handshake over low-latency Bluetooth to feed spatial warnings directly into the lifter's earbuds—enabling pure physical form feel, eyes-free.
                </p>
              </div>

              {/* Digital Feedback Loop Component List */}
              <div className="grid grid-cols-3 gap-2.5 pt-2">
                <div className="p-2 bg-zinc-900/30 border border-white/5 rounded-lg text-center space-y-1">
                  <Compass className="w-3.5 h-3.5 text-brand-red mx-auto" />
                  <span className="text-[9px] font-mono text-zinc-400 block font-bold">MIRROR</span>
                  <p className="text-[8.5px] text-zinc-500 leading-none">Skeletal HUD Overlay</p>
                </div>
                <div className="p-2 bg-zinc-900/30 border border-white/5 rounded-lg text-center space-y-1">
                  <Activity className="w-3.5 h-3.5 text-brand-red mx-auto" />
                  <span className="text-[9px] font-mono text-zinc-400 block font-bold">SHIRT</span>
                  <p className="text-[8.5px] text-zinc-500 leading-none">Biomorphic silver yarn</p>
                </div>
                <div className="p-2 bg-zinc-900/30 border border-white/5 rounded-lg text-center space-y-1">
                  <Award className="w-3.5 h-3.5 text-brand-red mx-auto" />
                  <span className="text-[9px] font-mono text-zinc-400 block font-bold">EARBUDS</span>
                  <p className="text-[8.5px] text-zinc-500 leading-none">Sub-ms Voice Warnings</p>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>CLOSED-LOOP CYCLE</span>
              <span className="text-brand-red font-bold">COMPLETED HYPOTHESIS</span>
            </div>
          </div>

          {/* COLUMN 3: PEEK INTO THE PROCESS & LEARNINGS (Cols 9-12) */}
          <div className="lg:col-span-4 bg-zinc-950/60 border border-white/5 p-6 rounded-2xl flex flex-col justify-between space-y-8 hover:border-zinc-800 transition-colors backdrop-blur-sm">
            <div className="space-y-5">
              <div className="flex items-center gap-2">
                <div className="p-2 bg-brand-red/10 border border-brand-red/20 rounded-xl text-brand-red">
                  <RefreshCw className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono font-bold tracking-wider text-zinc-400 uppercase">
                  03. PEEK INTO THE PROCESS (PIVOTS)
                </span>
              </div>

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white tracking-tight leading-snug">
                  Our rigorous, user-tested wireframe evolution.
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  We iterated from hand-drawn blueprint concepts to complete digital mockups. Direct observational testing led to critical design pivots that shifted IronPath from a passive display into an active auditory assistant:
                </p>
              </div>

              {/* Redesign pivots list */}
              <div className="space-y-3 text-[11px]">
                <div className="flex items-start gap-2.5">
                  <span className="text-[9px] font-mono font-bold text-brand-red bg-brand-red/10 px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5">PIVOT 1</span>
                  <div>
                    <h4 className="font-bold text-zinc-200">Visual Cues Disrupted Neck Posture</h4>
                    <p className="text-zinc-400 text-[10.5px]">
                      Staring at glass mirrors to read warnings was physically dangerous under heavy loads. We shifted primary corrective feedback to instant verbal coaching whispers inside earbuds.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <span className="text-[9px] font-mono font-bold text-brand-red bg-brand-red/10 px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5">PIVOT 2</span>
                  <div>
                    <h4 className="font-bold text-zinc-200">Technical Angles Did Not Click</h4>
                    <p className="text-zinc-400 text-[10.5px]">
                      Displaying angular logs like "Thoracic Flexion: 42°" was completely unreadable during fatigue. We pivoted to simple, direct verbal cues like <em>"Chest Up"</em> and <em>"Sit Back"</em>.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/5 flex justify-between text-[10px] text-zinc-500 font-mono">
              <span>PAPER TO DIGITAL</span>
              <span className="text-brand-red font-bold">2 CRITICAL ITERATIONS</span>
            </div>
          </div>

        </div>

        {/* Poster Footnote Academic Accreditation Banner */}
        <div className="mt-8 p-4 bg-zinc-950/80 border border-white/5 rounded-2xl flex flex-col md:flex-row items-center justify-between text-xs font-mono text-zinc-400 gap-4">
          <div className="flex items-center gap-3">
            <BookOpen className="w-4 h-4 text-brand-red" />
            <span className="text-[10.5px]">
              Exhibited at the <strong>University of Washington Dept. of Computer Science & Engineering</strong> (Coursework CSE 440).
            </span>
          </div>
          <div className="flex gap-4 text-[10.5px] items-center text-zinc-500">
            <span>SPRING 2026 EXHIBITION</span>
            <span>•</span>
            <span className="text-brand-red font-semibold">TEAM IRONPATH ACADEMY</span>
          </div>
        </div>

      </div>
    </section>
  );
}
