
import React, { useState } from 'react';
import {
  Users,
  HelpCircle,
  Lightbulb,
  Play,
  Layers,
  FileText,
  CheckCircle2,
  AlertTriangle,
  ChevronRight,
  BookOpen,
  Monitor,
  Shirt,
  Headphones,
  ClipboardCheck,
  RefreshCw,
  TrendingUp
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

import paperOverview from '../assets/images/paper-prototype-overview.png';
import paperHowItWorks from '../assets/images/paperhowitworks.png';
import paperFormAlert from '../assets/images/paper-form-alert.png';
import paperProgressBefore from '../assets/images/paperprogresstrackingbeforerevision.png';
import paperRevisedProgress from '../assets/images/paperrevisedprogress.png';

import digitalHome from '../assets/images/digitalhomescreen.png';
import digitalHowItWorks from '../assets/images/digitalhowitworks.png';
import digitalSquatTutorial from '../assets/images/digitalsquattutorial.png';
import digitalFormAlert from '../assets/images/newdigitalformalert.png';
import digitalProgressList from '../assets/images/digitalprogresslistscreen.png';
import digitalProgressDetail from '../assets/images/digitalprogressdetailscreen.png';

const TEAM_MEMBERS = [
  {
    name: 'Aryan Verma',
    role: 'Research & Problem Framing',
    bio: 'Helped synthesize user needs, define the problem, and connect the design to solo strength-training pain points.'
  },
  {
    name: 'David Montiel',
    role: 'Interaction Flow Design',
    bio: 'Designed core task flows for form correction, progress tracking, and smart mirror navigation.'
  },
  {
    name: 'Jaewon Lee',
    role: 'Prototype & Evaluation',
    bio: 'Supported paper prototyping, usability testing, critical incident logging, and revision planning.'
  },
  {
    name: 'Jonathan Lee',
    role: 'Visual Systems & Web Presentation',
    bio: 'Worked on branding, visual hierarchy, poster design, digital mockup presentation, and final website communication.'
  }
];

const VIDEO_CHAPTERS = [
  {
    time: '0:00 - 0:34',
    title: 'The Problem',
    subtitle: 'Why solo lifting creates uncertainty',
    caption:
      'The video begins by showing why weightlifters can struggle to judge their own form while training alone, especially when fatigue changes movement near the end of a set.',
    startSeconds: 0
  },
  {
    time: '0:35 - 1:12',
    title: 'The System',
    subtitle: 'Sensor clothing, smart mirror, and earbuds',
    caption:
      'This chapter introduces the three-part IronPath system: a sensor clothing that collects movement data, a smart mirror that explains feedback, and earbuds that provide safety-only alerts.',
    startSeconds: 35
  },
  {
    time: '1:13 - 1:50',
    title: 'Fixing Form',
    subtitle: 'Real-time correction during a lift',
    caption:
      'The video demonstrates how IronPath identifies risky form patterns and gives clear corrections such as pushing knees out, keeping the chest up, or stopping after the current rep.',
    startSeconds: 73
  },
  {
    time: '1:51 - 2:20',
    title: 'Progress Over Time',
    subtitle: 'Tracking improvement with concrete metrics',
    caption:
      'The final chapter shows how IronPath helps users review progress through weight lifted, reps completed, form score, and form warnings instead of unclear percentages.',
    startSeconds: 111
  }
];

type TabId = 'problem' | 'solution' | 'video' | 'process' | 'team';

function ProcessImageCard({
  image,
  alt,
  title,
  caption,
  contain = false
}: {
  image: string;
  alt: string;
  title: string;
  caption: string;
  contain?: boolean;
}) {
  return (
    <div className="bg-[#0e0e11] border border-white/5 rounded-xl overflow-hidden hover:border-brand-red/20 transition-all">
      <div className="bg-zinc-950/50 p-3 flex items-center justify-center">
        <img
          src={image}
          alt={alt}
          className={`w-full rounded-lg border border-white/5 ${
            contain
              ? 'max-h-[320px] object-contain bg-zinc-950/40'
              : 'h-[260px] object-cover'
          }`}
        />
      </div>

      <div className="p-4">
        <h5 className="text-sm font-bold text-white">{title}</h5>
        <p className="text-xs text-zinc-400 leading-relaxed mt-2">{caption}</p>
      </div>
    </div>
  );
}

export default function ResearchJournal() {
  const [activeTab, setActiveTab] = useState<TabId>('problem');
  const [activeChapter, setActiveChapter] = useState<number>(0);

  return (
    <section id="design-archive" className="py-24 bg-[#08080a] border-t border-b border-white/5 relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[1000px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[25%] left-[10%] w-[350px] h-[350px] rounded-full bg-brand-red/4 filter blur-[120px] animate-pulse" />
        <div className="absolute top-[60%] right-[10%] w-[420px] h-[420px] rounded-full bg-zinc-800/10 filter blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full">
            <Layers className="w-3.5 h-3.5 text-brand-red" />
            <span className="text-[10px] font-mono font-bold text-brand-red tracking-widest uppercase">
              Project Process
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            IronPath Design Journal
          </h2>

          <p className="text-sm text-zinc-400 max-w-3xl mx-auto font-sans leading-relaxed">
            A look at how IronPath evolved from early user research and paper prototypes into a smart mirror fitness
            system focused on real-time form correction, safety alerts, and progress tracking.
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 p-1.5 bg-[#0e0e11] border border-white/5 max-w-4xl mx-auto rounded-xl">
          {[
            { id: 'problem', label: '1. Problem', icon: HelpCircle },
            { id: 'solution', label: '2. Solution & Value', icon: Lightbulb },
            { id: 'video', label: '3. Concept Video', icon: Play },
            { id: 'process', label: '4. Process & Iteration', icon: FileText },
            { id: 'team', label: 'Meet the Team', icon: Users }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as TabId)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-mono font-bold tracking-tight transition-all cursor-pointer ${
                  isActive
                    ? 'bg-brand-red text-white font-black shadow-md shadow-brand-red/15'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-900/50'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          {activeTab === 'problem' && (
            <motion.div
              key="problem-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
            >
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest bg-brand-red/10 px-2.5 py-1 rounded-full border border-brand-red/25 inline-block">
                    Problem Statement
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                    Lifters need help recognizing unsafe form while training alone.
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                    Weightlifting is not just about knowing what a movement should look like. Safe lifting also depends
                    on body cues that are difficult to learn alone, such as whether knees are tracking correctly,
                    whether the torso is leaning, and whether fatigue is changing posture.
                  </p>

                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                    Our research and testing showed that users wanted guidance in the moment, but they did not want a
                    complicated system with too many feedback devices. This led us to make the smart mirror the main
                    interface, supported by sensor clothing and safety-only earbuds.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/5 bg-zinc-900/10 space-y-3.5 font-sans">
                  <div className="flex items-center gap-2">
                    <AlertTriangle className="w-4 h-4 text-brand-red" />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">
                      Why it matters
                    </span>
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed">
                    In 2024, approximately 4.4 million people visited emergency departments for injuries involving
                    sports and recreational equipment. IronPath focuses on one part of that larger problem: helping
                    people strength train with more confidence and safer form.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                <div className="p-6 border border-white/5 bg-[#0e0e11] rounded-lg flex flex-col justify-between hover:border-zinc-800 transition-all col-span-1 sm:col-span-2">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono text-brand-red font-bold uppercase tracking-widest">
                        User Research Insight
                      </span>
                      <span className="text-[9.5px] font-mono text-zinc-500">Solo strength training</span>
                    </div>

                    <h4 className="text-base font-bold text-white">Mirrors help, but they are not enough.</h4>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      A normal mirror can show a reflection, but it does not tell users what is wrong or what to do
                      next. During heavy sets, constantly checking the mirror can also distract from the movement itself.
                    </p>
                  </div>
                </div>

                <div className="p-6 border border-[#ef4444]/10 bg-zinc-950/40 rounded-lg flex flex-col justify-between hover:border-zinc-800 transition-all">
                  <div className="space-y-4">
                    <span className="text-[9px] font-mono text-brand-red font-bold uppercase tracking-widest block">
                      Finding 1
                    </span>

                    <p className="text-xs text-zinc-200 italic leading-relaxed">
                      Users often know the general idea of good form, but still struggle to tell whether their own body
                      is doing it correctly during a rep.
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/5 text-[9.5px] text-zinc-500 font-mono">
                    Research synthesis
                  </div>
                </div>

                <div className="p-6 border border-[#ef4444]/10 bg-zinc-950/40 rounded-lg flex flex-col justify-between hover:border-zinc-800 transition-all">
                  <div className="space-y-4">
                    <span className="text-[9px] font-mono text-brand-red font-bold uppercase tracking-widest block">
                      Finding 2
                    </span>

                    <p className="text-xs text-zinc-200 italic leading-relaxed">
                      Form tends to break down when users are tired, especially near the final reps of a set when
                      attention and control are harder to maintain.
                    </p>
                  </div>

                  <div className="mt-6 pt-3 border-t border-white/5 text-[9.5px] text-zinc-500 font-mono">
                    User testing and critique
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'solution' && (
            <motion.div
              key="solution-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest bg-brand-red/10 px-2.5 py-1 rounded-full border border-brand-red/25 inline-block">
                    Solution Statement
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    IronPath reduces the guesswork of solo strength training.
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed font-sans font-medium">
                    The sensor clothing tracks movement and posture, the smart mirror shows what to fix, and the earbuds
                    give quick safety alerts when the user should stop after the current rep. Together, the system
                    supports real-time form correction and long-term progress tracking.
                  </p>
                </div>

                <div className="lg:col-span-5 p-5 border border-brand-red/15 bg-brand-red/5 rounded-lg text-left text-xs text-zinc-300 font-sans leading-relaxed space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-1.5 font-mono text-[10px] text-brand-red">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    Value Proposition
                  </h4>

                  <p>
                    IronPath helps users learn what good form should feel like, not just what it should look like. It
                    gives clear feedback in the moment and helps users see whether they are improving across workouts.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
                <div className="p-6 border border-white/5 bg-[#0e0e11] rounded-lg hover:border-brand-red/20 transition-all text-left space-y-4">
                  <div className="w-12 h-12 bg-brand-red/10 border border-brand-red/20 rounded-xl flex items-center justify-center">
                    <Shirt className="w-6 h-6 text-brand-red" />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-zinc-500 block uppercase">Component 1</span>
                    <h4 className="text-lg font-bold text-white tracking-tight">Sensor Clothing</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Collects movement and posture data while the user lifts. It is the sensing layer, not another screen.
                    </p>
                  </div>
                </div>

                <div className="p-6 border border-white/5 bg-[#0e0e11] rounded-lg hover:border-brand-red/20 transition-all text-left space-y-4">
                  <div className="w-12 h-12 bg-brand-red/10 border border-brand-red/20 rounded-xl flex items-center justify-center">
                    <Monitor className="w-6 h-6 text-brand-red" />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-zinc-500 block uppercase">Component 2</span>
                    <h4 className="text-lg font-bold text-white tracking-tight">Smart Mirror</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Acts as the main interface for onboarding, form feedback, progress tracking, and post-set explanations.
                    </p>
                  </div>
                </div>

                <div className="p-6 border border-white/5 bg-[#0e0e11] rounded-lg hover:border-brand-red/20 transition-all text-left space-y-4">
                  <div className="w-12 h-12 bg-brand-red/10 border border-brand-red/20 rounded-xl flex items-center justify-center">
                    <Headphones className="w-6 h-6 text-brand-red" />
                  </div>

                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-zinc-500 block uppercase">Component 3</span>
                    <h4 className="text-lg font-bold text-white tracking-tight">Safety Earbuds</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Provide simple safety-only alerts during heavy lifts so the user does not need to stare at the mirror.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'video' && (
            <motion.div
              key="video-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
            >
              <div className="lg:col-span-5 text-left space-y-6 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest bg-brand-red/10 px-2.5 py-1 rounded-full border border-brand-red/25 inline-block mb-2">
                    Concept Video
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                    IronPath concept video
                  </h3>

                  <p className="text-xs text-zinc-400 mt-2 font-sans leading-relaxed">
                    This is our concept video from Assignment 2g. It explains the user need, introduces the IronPath
                    system, and shows how the sensor clothing, smart mirror, and safety earbuds work together.
                  </p>
                </div>

                <div className="space-y-2">
                  {VIDEO_CHAPTERS.map((chap, idx) => {
                    const isSelected = activeChapter === idx;

                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveChapter(idx)}
                        className={`w-full text-left p-3.5 border rounded-lg transition-all flex items-center justify-between cursor-pointer ${
                          isSelected
                            ? 'border-brand-red bg-brand-red/5 text-white shadow-md'
                            : 'border-white/5 bg-[#0e0e11]/60 text-zinc-400 hover:border-zinc-800'
                        }`}
                      >
                        <div className="font-sans">
                          <span className="text-[9px] font-mono text-brand-red tracking-wider block uppercase">
                            {chap.time}
                          </span>
                          <span className="text-xs font-bold block mt-0.5">{chap.title}</span>
                          <span className="text-[10px] text-zinc-500 font-mono block">{chap.subtitle}</span>
                        </div>

                        <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-brand-red' : 'text-zinc-600'}`} />
                      </button>
                    );
                  })}
                </div>

                <div className="p-3 bg-[#0e0e11] rounded-lg border border-white/5">
                  <p className="text-[10.5px] text-zinc-500 font-mono italic text-center">
                    Select a chapter to restart the embedded video at that point.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7 flex flex-col justify-between">
                <div className="p-4 bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden group flex-grow flex flex-col justify-between">
                  <div className="absolute top-0 left-0 w-36 h-36 bg-gradient-to-br from-brand-red/15 to-transparent blur-xl" />

                  <div className="mb-4 flex flex-col sm:flex-row items-center justify-between gap-3 border-b border-white/5 pb-3 z-10 relative">
                    <div className="text-left">
                      <span className="text-[10px] font-mono font-bold tracking-wider text-zinc-400 uppercase block">
                        Embedded Concept Video
                      </span>
                      <span className="text-[9px] font-mono text-zinc-500">
                        Assignment 2g • IronPath concept walkthrough
                      </span>
                    </div>

                    <div className="bg-brand-red/10 border border-brand-red/20 px-3 py-1.5 rounded-lg text-[9px] text-brand-red font-mono font-bold uppercase">
                      Chapter {activeChapter + 1}
                    </div>
                  </div>

                  <div className="flex-grow flex flex-col items-center justify-center py-4 z-10 relative">
                    <div className="mx-auto w-full max-w-[270px] sm:max-w-[290px] aspect-[9/18.3] bg-[#0c0c0f] p-3 rounded-[2.5rem] shadow-2xl border border-zinc-800 relative ring-4 ring-zinc-900/40">
                      <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-20 h-4 bg-zinc-950 rounded-full z-30 flex items-center justify-center border border-zinc-900">
                        <div className="w-8 h-1 bg-zinc-800 rounded-full" />
                      </div>

                      <div className="absolute top-5 inset-x-8 px-2 flex justify-between items-center text-[7px] font-mono text-zinc-500 z-30 pointer-events-none">
                        <span>LTE</span>
                        <span>7:43 PM</span>
                        <span>100% 🔋</span>
                      </div>

                      <div className="w-full h-full bg-[#050508] relative rounded-[2rem] overflow-hidden border border-white/5 shadow-inner">
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/2 to-transparent rotate-12 z-20" />

                        <iframe
                          key={VIDEO_CHAPTERS[activeChapter].startSeconds}
                          src={`https://www.youtube.com/embed/8dMbElo1GTA?start=${VIDEO_CHAPTERS[activeChapter].startSeconds}&autoplay=1&mute=1&rel=0&modestbranding=1&controls=1&showinfo=0`}
                          title="IronPath Concept Video"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          className="w-full h-full rounded-[2rem]"
                        />
                      </div>
                    </div>

                    <div className="mt-4 bg-zinc-900/60 border border-white/5 py-1.5 px-3 rounded-lg font-mono text-[9.5px] text-brand-red flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-ping" />
                      <span>{VIDEO_CHAPTERS[activeChapter].time}</span>
                    </div>
                  </div>

                  <div className="mt-4 p-4 bg-zinc-900/40 border border-white/5 rounded-xl">
                    <h4 className="text-sm font-bold text-white">{VIDEO_CHAPTERS[activeChapter].title}</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-1">
                      {VIDEO_CHAPTERS[activeChapter].caption}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'process' && (
            <motion.div
              key="process-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-12"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-5 text-left space-y-4">
                  <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest bg-brand-red/10 px-2.5 py-1 rounded-full border border-brand-red/25 inline-block">
                    Process & Iteration
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Testing pushed us toward a clearer, simpler system.
                  </h3>

                  <p className="text-sm text-zinc-400 leading-relaxed">
                    Our early versions included more devices and more metrics, but usability testing showed that this
                    could overwhelm users. We revised the system to make the smart mirror the central interface, make
                    earbud feedback safety-only, and make progress tracking easier to understand.
                  </p>

                  <div className="p-4 rounded-xl bg-zinc-900/30 border border-white/5">
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      The most important revision was changing from “show everything” to “show the right information at
                      the right time.” During a lift, users need one clear correction. After a workout, they can review
                      deeper progress data.
                    </p>
                  </div>
                </div>

                <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-[#0e0e11] border border-white/5 rounded-xl">
                    <BookOpen className="w-5 h-5 text-brand-red mb-3" />
                    <h4 className="text-sm font-bold text-white mb-2">Added a tutorial</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Users were confused about how the clothing, mirror, and earbuds worked together, so we added a
                      “How It Works” tutorial.
                    </p>
                  </div>

                  <div className="p-5 bg-[#0e0e11] border border-white/5 rounded-xl">
                    <RefreshCw className="w-5 h-5 text-brand-red mb-3" />
                    <h4 className="text-sm font-bold text-white mb-2">Removed the smartwatch</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Users felt there were too many feedback devices, so we moved smartwatch functions into the mirror.
                    </p>
                  </div>

                  <div className="p-5 bg-[#0e0e11] border border-white/5 rounded-xl">
                    <ClipboardCheck className="w-5 h-5 text-brand-red mb-3" />
                    <h4 className="text-sm font-bold text-white mb-2">Added workout help</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Users wanted a quick way to check correct form, so we added an in-workout help/tutorial option.
                    </p>
                  </div>

                  <div className="p-5 bg-[#0e0e11] border border-white/5 rounded-xl">
                    <TrendingUp className="w-5 h-5 text-brand-red mb-3" />
                    <h4 className="text-sm font-bold text-white mb-2">Simplified progress</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Users were confused by consistency percentages, so we redesigned progress around weight, reps,
                      form score, and warnings.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-zinc-950/60 border border-white/5 rounded-2xl">
                <div className="flex items-center gap-2 mb-5">
                  <FileText className="w-5 h-5 text-brand-red" />
                  <h4 className="text-lg font-bold text-white">Paper prototype evidence</h4>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center mb-8">
                  <div className="lg:col-span-5 flex justify-center">
                    <img
                      src={paperOverview}
                      alt="Final paper prototype overview"
                      className="w-full max-w-sm max-h-[300px] rounded-xl border border-white/5 object-contain shadow-lg bg-zinc-950/40"
                    />
                  </div>

                  <div className="lg:col-span-7 space-y-4">
                    <h5 className="text-base font-bold text-white">Final paper prototype overview</h5>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      This revised paper prototype shows the smart mirror as the main interaction point after we
                      simplified the system. The mirror handles workout setup, form feedback, progress tracking,
                      and tutorial access.
                    </p>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      This version reflects our major usability-testing changes: removing the smartwatch, adding a
                      clearer tutorial, and keeping the sensor clothing and earbuds as supporting components rather than
                      separate interfaces.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5">
                  <ProcessImageCard
                    image={paperHowItWorks}
                    alt="Paper prototype How It Works screen"
                    title="System tutorial"
                    caption="We added this tutorial because participants needed a clearer explanation of how the clothing, mirror, and earbuds worked together."
                    contain
                  />

                  <ProcessImageCard
                    image={paperFormAlert}
                    alt="Paper prototype form alert screen"
                    title="Form correction test"
                    caption="This screen helped us test whether users understood what went wrong during a lift and how they should respond."
                    contain
                  />

                  <ProcessImageCard
                    image={paperProgressBefore}
                    alt="Paper progress screen before revision"
                    title="Progress before revision"
                    caption="Participants found the earlier consistency percentage difficult to interpret because it did not clearly connect to reps or workout performance."
                    contain
                  />

                  <ProcessImageCard
                    image={paperRevisedProgress}
                    alt="Revised paper progress screen"
                    title="Revised progress screen"
                    caption="We condensed progress into concrete metrics so users could review weight, reps, form score, and warnings in one place."
                    contain
                  />
                </div>
              </div>

              <div className="p-6 bg-zinc-950/60 border border-white/5 rounded-2xl">
                <div className="flex items-center gap-2 mb-5">
                  <CheckCircle2 className="w-5 h-5 text-brand-red" />
                  <h4 className="text-lg font-bold text-white">From paper to digital</h4>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed mb-6 max-w-3xl">
                  The final digital mockup keeps the same core task flow but improves visual hierarchy, contrast,
                  button clarity, and the organization of progress data.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5">
                  <ProcessImageCard
                    image={digitalHome}
                    alt="Digital smart mirror home screen"
                    title="Home screen"
                    caption="The smart mirror became the main interaction point for starting workouts, viewing progress, opening history, and accessing tutorials."
                    contain
                  />

                  <ProcessImageCard
                    image={digitalHowItWorks}
                    alt="Digital How It Works screen"
                    title="How It Works"
                    caption="The onboarding screen explains the three components: sensor clothing, smart mirror, and safety earbuds."
                    contain
                  />

                  <ProcessImageCard
                    image={digitalSquatTutorial}
                    alt="Digital squat tutorial screen"
                    title="Squat tutorial"
                    caption="The workout help screen gives users quick form cues such as core braced, chest up, and knees tracking over toes."
                    contain
                  />

                  <ProcessImageCard
                    image={digitalFormAlert}
                    alt="Digital form alert screen"
                    title="Form alert"
                    caption="The alert screen gives specific corrections, such as chest up, sit back, and reduce 5 lbs, instead of a vague warning."
                    contain
                  />

                  <ProcessImageCard
                    image={digitalProgressList}
                    alt="Digital progress list screen"
                    title="Progress list"
                    caption="Users can select an exercise to review long-term improvement across weight, reps, and form."
                    contain
                  />

                  <ProcessImageCard
                    image={digitalProgressDetail}
                    alt="Digital progress detail screen"
                    title="Progress detail"
                    caption="The final progress detail screen uses concrete metrics: weight, reps per week, average form score, and form warnings."
                    contain
                  />
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === 'team' && (
            <motion.div
              key="team-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-10"
            >
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest bg-brand-red/10 px-2.5 py-1 rounded-full border border-brand-red/25 inline-block">
                  Team
                </span>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  Built through shared research, design, prototyping, and testing
                </h3>

                <p className="text-sm text-zinc-400 leading-relaxed">
                  Each team member contributed across the project, but these roles describe the main areas of ownership
                  for presenting the final design.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
                {TEAM_MEMBERS.map((member) => (
                  <div key={member.name} className="p-6 bg-[#0e0e11] border border-white/5 rounded-xl text-left hover:border-brand-red/20 transition-all">
                    <div className="w-12 h-12 rounded-full bg-brand-red/10 border border-brand-red/20 flex items-center justify-center mb-4">
                      <Users className="w-5 h-5 text-brand-red" />
                    </div>

                    <h4 className="text-base font-bold text-white">{member.name}</h4>
                    <p className="text-[10px] font-mono text-brand-red uppercase tracking-wider mt-1">
                      {member.role}
                    </p>
                    <p className="text-xs text-zinc-400 leading-relaxed mt-4">
                      {member.bio}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}