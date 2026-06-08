
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowDown, Dumbbell, ShieldCheck, TrendingUp } from 'lucide-react';

import IronPathLogo from './components/IronPathLogo';
import ResearchJournal from './components/ResearchJournal';
import SmartMirror from './components/SmartMirror';
import SmartShirt from './components/SmartShirt';
import PosterBrief from './components/PosterBrief';

export default function App() {
  const scrollToDesignJournal = () => {
    document.getElementById('design-archive')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  const scrollToDemo = () => {
    document.getElementById('smart-mirror-demo')?.scrollIntoView({
      behavior: 'smooth'
    });
  };

  return (
    <main className="min-h-screen bg-[#050506] text-white overflow-x-hidden">
      {/* HERO SECTION */}
      <section
        id="top"
        className="relative min-h-screen flex items-center border-b border-white/5 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.16),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.06),transparent_30%)]" />

        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(220,38,38,0.14),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_32%)]" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 w-full">
          <nav className="absolute top-8 left-4 right-4 sm:left-6 sm:right-6 lg:left-8 lg:right-8 flex items-center justify-between">
            <IronPathLogo />

            <div className="hidden md:flex items-center gap-8 text-[10px] font-mono uppercase tracking-[0.22em] text-zinc-500">
              <button
                onClick={scrollToDesignJournal}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Design Journal
              </button>
              <button
                onClick={scrollToDemo}
                className="hover:text-white transition-colors cursor-pointer"
              >
                Final Demo
              </button>
            </div>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-20">
            <div className="lg:col-span-7 space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-red/10 border border-brand-red/25">
                <Dumbbell className="w-3.5 h-3.5 text-brand-red" />
                <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest">
                  Smart mirror + sensor clothing + safety earbuds
                </span>
              </div>

              <div className="space-y-5">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black tracking-tight leading-[0.95]">
                  Train with feedback
                  <span className="block text-brand-red">before form breaks.</span>
                </h1>

                <p className="text-base sm:text-lg text-zinc-400 leading-relaxed max-w-2xl">
                  IronPath is a smart strength-training system that helps solo lifters correct form in real time,
                  receive safety alerts during heavy sets, and track progress over time.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <ShieldCheck className="w-5 h-5 text-brand-red mb-3" />
                  <h3 className="text-sm font-bold text-white">Safer lifting</h3>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                    Earbuds provide simple safety alerts when form becomes risky.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <Dumbbell className="w-5 h-5 text-brand-red mb-3" />
                  <h3 className="text-sm font-bold text-white">Form correction</h3>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                    The mirror shows clear cues like chest up, sit back, and reduce weight.
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-white/[0.03] border border-white/5">
                  <TrendingUp className="w-5 h-5 text-brand-red mb-3" />
                  <h3 className="text-sm font-bold text-white">Progress tracking</h3>
                  <p className="text-xs text-zinc-500 mt-1 leading-relaxed">
                    Users review weight, reps, form score, and warnings over time.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={scrollToDesignJournal}
                  className="px-6 py-3 rounded-lg bg-brand-red hover:bg-red-700 text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  View Design Journal
                </button>

                <button
                  onClick={scrollToDemo}
                  className="px-6 py-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-bold uppercase tracking-widest transition-colors cursor-pointer"
                >
                  View Final Mockup
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="relative mx-auto max-w-sm">
                <div className="absolute -inset-6 bg-brand-red/20 blur-[80px] rounded-full" />

                <div className="relative bg-[#0c0c0f] border border-white/10 rounded-[2rem] p-6 shadow-2xl">
                  <div className="aspect-[9/14] rounded-[1.5rem] bg-gradient-to-b from-zinc-900 to-black border border-white/10 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-center text-[10px] font-mono text-zinc-500">
                      <span>IRONPATH</span>
                      <span>7:43 PM</span>
                    </div>

                    <div className="text-center space-y-4">
                      <div className="w-24 h-24 mx-auto rounded-full border border-brand-red/40 flex items-center justify-center bg-brand-red/10">
                        <Dumbbell className="w-10 h-10 text-brand-red" />
                      </div>

                      <div>
                        <h2 className="text-2xl font-black text-white">SMART MIRROR</h2>
                        <p className="text-xs text-zinc-500 mt-2">
                          Main interface for workouts, form feedback, and progress.
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      <div className="h-12 rounded-lg bg-brand-red flex items-center justify-center text-xs font-black uppercase tracking-widest">
                        Start Workout
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div className="h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold uppercase">
                          Progress
                        </div>
                        <div className="h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-[10px] font-bold uppercase">
                          Tutorial
                        </div>
                      </div>

                      <div className="flex justify-center gap-6 text-[10px] font-mono text-zinc-400 pt-2">
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-500" />
                          Clothing
                        </span>
                        <span className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-green-500" />
                          Earbuds
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <button
            onClick={scrollToDesignJournal}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-white transition-colors cursor-pointer"
            aria-label="Scroll to design journal"
          >
            <ArrowDown className="w-6 h-6 animate-bounce" />
          </button>
        </div>
      </section>

      {/* MAIN PROJECT STORY */}
      <ResearchJournal />

      {/* FINAL MOCKUP / DEMO VIDEO */}
<section id="demo-video" className="py-24 bg-[#050506] border-t border-white/5">
  <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="text-center space-y-4 mb-10">
      <span className="text-xs font-mono font-bold tracking-widest text-brand-red uppercase block">
        Demo Video
      </span>

      <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
        Watch the final mockup walkthrough
      </h2>

      <p className="text-sm text-zinc-400 max-w-2xl mx-auto leading-relaxed">
        This demo shows how a user would move through IronPath’s smart mirror interface, including form correction,
        safety alerts, and progress tracking.
      </p>
    </div>

    <div className="aspect-video rounded-2xl overflow-hidden border border-white/10 bg-zinc-950 shadow-2xl">
      <iframe
        src="https://www.youtube.com/embed/dvlXvm7MHjU"
        title="IronPath Demo Video"
        className="w-full h-full"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  </div>
</section>

      {/* FINAL MOCKUP / POLISHED DEMO */}
      <section id="smart-mirror-demo">
        <SmartMirror />
      </section>

      {/* COMPONENT DETAIL */}
      <SmartShirt />

      {/* FINAL SUMMARY / POSTER BRIEF */}
      <PosterBrief />
    </main>
  );
}