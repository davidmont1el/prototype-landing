import React, { useState } from 'react';
import { 
  Users, 
  HelpCircle, 
  Lightbulb, 
  Play, 
  Pause, 
  Layers, 
  FileText, 
  CheckCircle2, 
  AlertTriangle, 
  Compass, 
  Volume2, 
  VolumeX, 
  Clock, 
  Heart,
  ChevronRight,
  TrendingDown,
  Dumbbell
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

// Define the Team Members based on CSE 440 Autumn/Spring 2026 Poster
const TEAM_MEMBERS = [
  {
    name: 'Aryan Verma',
    role: 'Lead System Architect',
    bio: 'Biomechanical systems integration & vector calculations.',
  },
  {
    name: 'David Montiel',
    role: 'Research & Validation Lead',
    bio: 'User research director at UW IMA. Designed form score thresholds.',
  },
  {
    name: 'Jaewon Lee',
    role: 'Product / UI Design Lead',
    bio: 'Created high-fidelity digital mockups and visual HUD alignment systems.',
  },
  {
    name: 'Jonathan Lee',
    role: 'Biosensory Lead',
    bio: 'Sensory haptic weave validation and ultra-low latency BLE protocols.',
  }
];

// Interactive chapters for the Concept Video Simulation
const VIDEO_CHAPTERS = [
  {
    time: '0:00 - 0:34',
    title: 'The Gym Blind Spot',
    subtitle: 'Observing User Behavior',
    caption: '“I stopped once I felt it was roughly in the right area.” Out of dozens of lifters monitored at the UW IMA gym, zero corrected their own form in standard glass mirrors. Blind spots lead to micro-injuries that compound under fatigue.',
    visualText: 'OBSERVATIONS: 3 OF 3 LIFTERS FAILED TO SELF-CORRECT',
    barHeights: [12, 18, 14, 25, 42, 60, 20, 10, 8]
  },
  {
    time: '0:35 - 1:12',
    title: 'The Bio-Mesh Handshake',
    subtitle: 'Sensing Beyond Cameras',
    caption: 'By weaving silver bioconductive threads straight into the Aeroweave fabric, IronPath detects the precise contraction of muscle fibers and thoracic orientation. The Smart Hub nape pod transmits these vectors directly to the Mirror.',
    visualText: 'CONNECTING COMPRESSION GARMENT... HANDSHAKE ESTABLISHED',
    barHeights: [45, 62, 50, 75, 90, 85, 60, 48, 55]
  },
  {
    time: '1:13 - 1:50',
    title: 'Precision Audio Alerts',
    subtitle: 'Translating Cues to Sensation',
    caption: 'Standard coaches yell generic advice. IronPath earbuds deliver specific corrective cues: “Forward lean detected. Pull chest up, sit back.” Earbuds beep instantly the micro-second a dangerous spine rounding or knee cave is registered.',
    visualText: 'ALERT CUE: "CHEST UP" • HAPTIC TRIGGER STAGE ONE',
    barHeights: [80, 20, 95, 30, 85, 25, 90, 42, 70]
  },
  {
    time: '1:51 - 2:20',
    title: 'Metrics & Progression',
    subtitle: 'Autonomous Session Logs',
    caption: 'No notebooks, no manuals. Your session metrics auto-push to the companion app. Progress is tracked not just by weight on the bar, but by your Form Quality index — averaging 92/100, letting you train with confidence.',
    visualText: 'VOLUME EXCEL: 190 LBS (+20 LBS GAIN IN 4 WEEKS)',
    barHeights: [15, 32, 28, 45, 52, 60, 68, 75, 85]
  }
];

export default function ResearchJournal() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [activeChapter, setActiveChapter] = useState<number>(0);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const [isMuted, setIsMuted] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'problem' | 'solution' | 'storyboard' | 'process' | 'team'>('problem');

  // Interactive audio buzz simulation
  const handlePlayToggle = () => {
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    setIsMuted(!isMuted);
  };

  return (
    <section id="design-archive" className="py-24 bg-[#08080a] border-t border-b border-white/5 relative">
      
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-7xl h-[1000px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[25%] left-[10%] w-[350px] h-[350px] rounded-full bg-brand-red/4 filter blur-[120px] animate-pulse" />
        <div className="absolute top-[60%] right-[10%] w-[420px] h-[420px] rounded-full bg-zinc-800/10 filter blur-[140px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Module Title */}
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full">
            <Layers className="w-3.5 h-3.5 text-brand-red" />
            <span className="text-[10px] font-mono font-bold text-brand-red tracking-widest uppercase">
              CSE 440 Academic Exhibition Page
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            IronPath Design Journal & Research
          </h2>
          <p className="text-sm text-zinc-400 max-w-3xl mx-auto font-sans leading-relaxed">
            Trace our rigorous engineering process from gym ethnography observations at the 
            <strong className="text-white font-medium"> UW Intramural Activities Hall (IMA)</strong>, through 
            low-fidelity design evaluations and wireframes, up to the high-fidelity interactive prototype.
          </p>
        </div>

        {/* Tab Selector - Beautiful Brutalist Segmented Control */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 p-1.5 bg-[#0e0e11] border border-white/5 max-w-3xl mx-auto rounded-xl">
          {[
            { id: 'problem', label: '1. Problem Statement', icon: HelpCircle },
            { id: 'solution', label: '2. Symmetrical Value', icon: Lightbulb },
            { id: 'storyboard', label: '3. Pitch Video Concept', icon: Play },
            { id: 'process', label: '4. Paper Iteration Process', icon: FileText },
            { id: 'team', label: 'Meet the Team', icon: Users },
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
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

        {/* Tab Context Contents Area */}
        <AnimatePresence mode="wait">
          
          {/* TAB 1: THE RESEARCHED PROBLEM STATEMENT */}
          {activeTab === 'problem' && (
            <motion.div
              key="problem-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch"
            >
              
              {/* Problem Statement Details */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 text-left">
                <div className="space-y-4">
                  <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest bg-brand-red/10 px-2.5 py-1 rounded-full border border-brand-red/25 inline-block">
                    01. RESEARCH GAP IDENTIFIED
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                    Traditional mirrors make lifters blind.
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                    Our user research revealed an organic mismatch inside heavy workout environments. Lifters attempt to audit their body lines in reflective glass, but can only observe limited planes. This misalignment, coupled with instructions that fail to correlate to raw physical muscles, results in injury where postures collapse under exhaustion.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-white/5 bg-zinc-900/10 space-y-3.5 font-sans">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-brand-red animate-pulse" />
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-wider block">KEY STATISTICAL VERDICT</span>
                  </div>
                  <h4 className="text-sm font-extrabold text-zinc-200">The Fatigue Boundary Point</h4>
                  <p className="text-xs text-zinc-400 leading-normal">
                    Even advanced lifters with over 7 years of active coaching experience report shoulder or spinal injuries because joint alignments deteriorate silently as mental focus depletes on final reps.
                  </p>
                </div>
              </div>

              {/* Problem Highlight Cards (7 cols bento grid) */}
              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 font-sans">
                
                {/* Gym Observation */}
                <div className="p-6 border border-white/5 bg-[#0e0e11] rounded-lg flex flex-col justify-between hover:border-zinc-800 transition-all col-span-1 sm:col-span-2">
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-[9px] font-mono text-brand-red font-bold uppercase tracking-widest">
                        UW IMA Gym Ethnography
                      </span>
                      <span className="text-[9.5px] font-mono text-zinc-500">n=10–15 Lifters Monitored</span>
                    </div>
                    <h4 className="text-base font-bold text-white">1. Gym Mirrors are Passive & Blind</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      "In 3 of 3 dedicated gym observations, lifters never successfully corrected their own form. They squint, lean off-balance to glance at their reflection, and introduce further lumbar torque under load."
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-white/5 text-[10.5px] text-zinc-500 font-mono">
                    Observed at UW IMA & high-performance weight rooms
                  </div>
                </div>

                {/* Interview 1 Quote */}
                <div className="p-6 border border-[#ef4444]/10 bg-zinc-950/40 rounded-lg flex flex-col justify-between hover:border-zinc-800 transition-all">
                  <div className="space-y-4">
                    <span className="text-[9px] font-mono text-brand-red font-bold uppercase tracking-widest block">
                      User Interview • P1
                    </span>
                    <p className="text-xs text-zinc-200 italic leading-relaxed">
                      "“I stopped my barbell squat set once I felt it was roughly in the right area... I had no idea whether my hips were deep enough, so I guessed.”"
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-white/5 text-[9.5px] text-zinc-500 font-mono">
                    Participant P1 (6-month active lifter)
                  </div>
                </div>

                {/* Interview 3 Quote */}
                <div className="p-6 border border-[#ef4444]/10 bg-zinc-950/40 rounded-lg flex flex-col justify-between hover:border-zinc-800 transition-all">
                  <div className="space-y-4">
                    <span className="text-[9px] font-mono text-brand-red font-bold uppercase tracking-widest block">
                      User Interview • P3
                    </span>
                    <p className="text-xs text-zinc-200 italic leading-relaxed">
                      "“Even after training for 7 years, I suffered a severe slipped disc during fatigue. Instructions on screens do not translate to body feel in the heat of a set.”"
                    </p>
                  </div>
                  <div className="mt-6 pt-3 border-t border-white/5 text-[9.5px] text-zinc-500 font-mono">
                    Participant P3 (7-year expert weightlifter)
                  </div>
                </div>

              </div>

            </motion.div>
          )}

          {/* TAB 2: SOLUTION & VALUE PROPOSITIONS */}
          {activeTab === 'solution' && (
            <motion.div
              key="solution-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-12"
            >
              
              {/* Solution Overview */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center text-left">
                <div className="lg:col-span-7 space-y-4">
                  <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest bg-brand-red/10 px-2.5 py-1 rounded-full border border-brand-red/25 inline-block">
                    02. CORE SOLUTION HYPOTHESIS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    Translate visual cues directly into physical feel.
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                    IronPath solves the feedback mismatch by creating a closed-loop system dividing duties between three integrated elements: the <strong className="text-zinc-200 font-medium">Smart Mirror</strong> (visual skeletal mapping), the <strong className="text-zinc-200 font-medium font-bold">Aeroweave Shirt</strong> (monitoring real bioconductive contraction and strain metrics), and <strong className="text-zinc-200 font-medium font-bold">Wireless Earbuds</strong> (delivering targeted, instant audio correction lines synchronized with form degradation).
                  </p>
                </div>
                
                <div className="lg:col-span-5 p-5 border border-brand-blue/15 bg-brand-blue/5 rounded-lg text-left text-xs text-zinc-300 font-sans leading-relaxed space-y-2">
                  <h4 className="font-bold text-white flex items-center gap-1.5 font-mono text-[10px] text-brand-blue">
                    <CheckCircle2 className="w-3.5 h-3.5" /> VALUE ADDITION & COMPONENT SYNERGY
                  </h4>
                  <p>
                    Rather than telling you to genericly "be careful", the system tracks live joint fatigue and verbally whispers correction: <code className="text-brand-red font-mono font-bold bg-[#08080a] px-1.5 py-0.5 rounded text-[10px]">"Forward lean detected → pull chest up"</code> before your lumbar arches. It automatically logs workout volumes and adapts rep requirements dynamically.
                  </p>
                </div>
              </div>

              {/* Three Component Ecosystem Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-sans">
                
                {/* Component 1 */}
                <div className="p-6 border border-white/5 bg-[#0e0e11] rounded-lg hover:border-brand-red/20 transition-all text-left space-y-4">
                  <div className="w-12 h-12 bg-brand-red/10 border border-brand-red/20 rounded-xl flex items-center justify-center">
                    <Compass className="w-6 h-6 text-brand-red" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-zinc-500 block uppercase">COMPONENT A</span>
                    <h4 className="text-lg font-bold text-white tracking-tight">AI SMART MIRROR</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Projects an interactive, high-contrast 3D skeletal skeleton directly in the glass overlay. Measures sagittal planes, knee symmetry, and barbell trajectories from every angle.
                    </p>
                  </div>
                  <ul className="text-[10px] font-mono text-zinc-500 space-y-1">
                    <li>• Real-time skeletal overlay</li>
                    <li>• Imbalance alignment overlays</li>
                    <li>• High contrast screen-in-glass</li>
                  </ul>
                </div>

                {/* Component 2 */}
                <div className="p-6 border border-white/5 bg-[#0e0e11] rounded-lg hover:border-brand-blue/20 transition-all text-left space-y-4">
                  <div className="w-12 h-12 bg-brand-blue/10 border border-brand-blue/20 rounded-xl flex items-center justify-center">
                    <Dumbbell className="w-6 h-6 text-brand-blue" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-zinc-500 block uppercase">COMPONENT B</span>
                    <h4 className="text-lg font-bold text-white tracking-tight text-brand-blue">SENSOR-EMBEDDED WEAR</h4>
                    <p className="text-xs text-zinc-450 leading-relaxed">
                      The Aeroweave compression suit. Embedded silver yarn ECG conduction nodes measure chest and rib movements alongside thoracic position changes via the magnetic neck hub pod.
                    </p>
                  </div>
                  <ul className="text-[10px] font-mono text-zinc-500 space-y-1">
                    <li>• Silver conduct yarns (No hard tabs)</li>
                    <li>• Respiratory volume expansion tracking</li>
                    <li>• Smart Core BLE magnetic nape pod</li>
                  </ul>
                </div>

                {/* Component 3 */}
                <div className="p-6 border border-white/5 bg-[#0e0e11] rounded-lg hover:border-brand-green/20 transition-all text-left space-y-4">
                  <div className="w-12 h-12 bg-brand-green/10 border border-brand-green/20 rounded-xl flex items-center justify-center">
                    <Volume2 className="w-6 h-6 text-brand-green" />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[9px] font-mono text-zinc-500 block uppercase">COMPONENT C</span>
                    <h4 className="text-lg font-bold text-white tracking-tight">WIRELESS EARPHONES</h4>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Synced audio cueing mechanism. Rather than staring at cards or indicators, verbal cues are pushed straight into the muscle memory audio field the split-second posture slips.
                    </p>
                  </div>
                  <ul className="text-[10px] font-mono text-zinc-500 space-y-1">
                    <li>• Real-time high-fidelity corrective audio</li>
                    <li>• Passive-isolation structural cups</li>
                    <li>• Sweatproof bio-mesh audio feedback</li>
                  </ul>
                </div>

              </div>

            </motion.div>
          )}

          {/* TAB 3: CINEMATIC VIDEO & STORYBOARD */}
          {activeTab === 'storyboard' && (
            <motion.div
              key="video-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center"
            >
              
              {/* Left Column: Explainer and slide selectors */}
              <div className="lg:col-span-5 text-left space-y-6">
                <div>
                  <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest bg-brand-red/10 px-2.5 py-1 rounded-full border border-brand-red/25 inline-block mb-2">
                    03. EMBEDDED PITCH VIDEO CONCEPT
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                    The Closed Loop Concept Video
                  </h3>
                  <p className="text-xs text-zinc-400 mt-2 font-sans leading-relaxed">
                    Explore key chapters of our concept pitch video documenting the user journeys we identified under research, and demonstrating how the smart mirror, pods, and audio feedback sync.
                  </p>
                </div>

                <div className="space-y-2">
                  {VIDEO_CHAPTERS.map((chap, idx) => {
                    const isSelected = activeChapter === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => {
                          setActiveChapter(idx);
                          setIsPlaying(true);
                        }}
                        className={`w-full text-left p-3.5 border rounded-lg transition-all flex items-center justify-between cursor-pointer ${
                          isSelected 
                            ? 'border-brand-red bg-brand-red/5 text-white shadow-md' 
                            : 'border-white/5 bg-[#0e0e11]/60 text-zinc-400 hover:border-zinc-800'
                        }`}
                      >
                        <div className="font-sans">
                          <span className="text-[9px] font-mono text-brand-red tracking-wider block uppercase">{chap.time}</span>
                          <span className="text-xs font-bold block mt-0.5">{chap.title}</span>
                          <span className="text-[10px] text-zinc-500 font-mono block">{chap.subtitle}</span>
                        </div>
                        <ChevronRight className={`w-4 h-4 transition-transform ${isSelected ? 'translate-x-1 text-brand-red' : 'text-zinc-650'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Right Column: Custom Video Frame Mockup */}
              <div className="lg:col-span-7">
                <div className="p-4 bg-zinc-950 border border-white/10 rounded-2xl shadow-2xl relative overflow-hidden group">
                  
                  {/* Decorative ambient flare */}
                  <div className="absolute top-0 left-0 w-36 h-36 bg-gradient-to-br from-brand-red/15 to-transparent blur-xl" />
                  
                  {/* Simulated Cinematic Screen */}
                  <div className="aspect-[16/10] bg-[#0c0c0e] rounded-xl border border-white/5 relative flex flex-col justify-between overflow-hidden">
                    
                    {/* Top status bar */}
                    <div className="z-10 p-3 bg-zinc-950/80 backdrop-blur-md border-b border-white/5 text-[9px] font-mono flex justify-between text-zinc-500 select-none">
                      <span className="flex items-center gap-1">
                        <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-brand-red animate-pulse' : 'bg-zinc-650'}`} />
                        CAP: CONCEPT_PITCH_STORYBOARD.RAW
                      </span>
                      <span>UW CSE 440 • SPRING 2026</span>
                    </div>

                    {/* Interactive Simulation Frame Content */}
                    <div className="flex-grow flex flex-col items-center justify-center p-6 relative">
                      
                      {/* Active chapter text animation background */}
                      <div className="absolute top-6 left-1/2 -translate-x-1/2 bg-zinc-900/70 border border-white/5 px-3 py-1 rounded font-mono text-[9px] text-brand-red uppercase tracking-wider select-none font-bold">
                        {VIDEO_CHAPTERS[activeChapter].visualText}
                      </div>

                      {/* Moving Equalizer or audio pulse to signify play speed */}
                      <div className="flex items-center gap-1.5 h-14 justify-center">
                        {VIDEO_CHAPTERS[activeChapter].barHeights.map((h, i) => (
                          <div 
                            key={i} 
                            className="w-1 rounded-full bg-gradient-to-t from-brand-red to-zinc-500 transition-all duration-300"
                            style={{ 
                              height: isPlaying ? `${Math.max(10, h * (1 + Math.sin(Date.now() / 400 + i) * 0.15))}%` : '8px'
                            }}
                          />
                        ))}
                      </div>

                      {/* Large Action play/pause symbol overlay */}
                      <button 
                        onClick={handlePlayToggle}
                        className="mt-4 w-10 h-10 rounded-full bg-brand-red hover:bg-[#b00e0e] text-white flex items-center justify-center hover:scale-105 active:scale-95 transition-all shadow-md z-15 cursor-pointer animate-pulse"
                      >
                        {isPlaying ? <Pause className="w-4 h-4 fill-current text-white" /> : <Play className="w-4 h-4 fill-current text-white ml-0.5" />}
                      </button>

                    </div>

                    {/* Caption Overlaid Block (mimics video subtitles) */}
                    <div className="z-10 p-4 bg-zinc-950/90 border-t border-white/5 text-left space-y-1">
                      <span className="text-[8px] font-mono text-zinc-500 uppercase font-bold tracking-widest block">NARRATOR AUDIO CUE:</span>
                      <p className="text-[11px] leading-relaxed text-zinc-300 font-sans italic">
                        {VIDEO_CHAPTERS[activeChapter].caption}
                      </p>
                    </div>

                  </div>

                  {/* Player control footer */}
                  <div className="flex items-center justify-between text-zinc-500 font-mono text-[10px] mt-4 pt-1 select-none">
                    <div className="flex items-center gap-4">
                      <button onClick={handlePlayToggle} className="text-zinc-300 hover:text-brand-red cursor-pointer">
                        {isPlaying ? 'PAUSE' : 'PLAY'}
                      </button>
                      <span>TRACK CH-0{activeChapter + 1}</span>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <button onClick={handleMuteToggle} className="text-zinc-400 hover:text-white flex items-center gap-1 cursor-pointer">
                        {isMuted ? <VolumeX className="w-3.5 h-3.5 text-brand-red" /> : <Volume2 className="w-3.5 h-3.5 text-zinc-400" />}
                        <span>{isMuted ? 'UNMUTE_SYSTEM_AUDIO' : 'MUTE'}</span>
                      </button>
                      <span className="text-zinc-400">{VIDEO_CHAPTERS[activeChapter].time}</span>
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          )}

          {/* TAB 4: PEEK INTO THE PROCESS (PAPER TO DIGITAL) */}
          {activeTab === 'process' && (
            <motion.div
              key="process-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-12 text-left"
            >
              
              {/* Process Intro */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-6 space-y-4">
                  <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest bg-brand-red/10 px-2.5 py-1 rounded-full border border-brand-red/25 inline-block">
                    04. PEEK INTO THE PROCESS & LEARNINGS
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                    A look at early sketches and paper iterations.
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed font-sans">
                    Our process was driven heavily by iterative wireframing. The first paper mockup targeted how a user calibrates form under active exercise setups. We evaluated how to deliver metrics back to the athlete without distracting their focus while weights were suspended in transition.
                  </p>
                </div>

                {/* User Testing & Learned Pivots */}
                <div className="lg:col-span-6 bg-[#0e0e11] border border-white/5 p-6 rounded-lg space-y-4">
                  <h4 className="text-xs font-mono font-bold text-brand-red uppercase tracking-wider">
                    RE-DESIGN PIVOTS: CORE TEST LEARNINGS
                  </h4>
                  <ul className="space-y-3.5 text-xs font-sans text-zinc-300">
                    <li className="flex items-start gap-2.5">
                      <span className="text-[10px] font-mono font-bold text-[#ef4444] bg-[#ef4444]/15 px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5">LEARN 01</span>
                      <p className="leading-relaxed">
                        <strong className="text-white font-semibold">Staring at screens kills neck postures:</strong> Users test-carrying heavy loads can't look to side-mounted screens or mirrors without ruining cervical spine angles. Pivoted to focus primarily on **Wireless Earbuds sound warnings over glass-only indicators**.
                      </p>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="text-[10px] font-mono font-bold text-[#ef4444] bg-[#ef4444]/15 px-1.5 py-0.5 rounded flex-shrink-0 mt-0.5">LEARN 02</span>
                      <p className="leading-relaxed">
                        <strong className="text-white font-semibold">Absolute numbers don't translate to feeling:</strong> Explaining that "shoulder angle is 45°" is useless to a fatigued lifter. Pivoted to simple, directed physical cues: <code className="text-brand-red font-mono bg-zinc-950 px-1 py-0.5 rounded text-[10px]">“Chest Up”</code> and <code className="text-brand-red font-mono bg-zinc-950 px-1 py-0.5 rounded text-[10px]">“Sit Back”</code>.
                      </p>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Side-by-Side Paper Iteration vs Digital Mockup comparison */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-6">
                
                {/* PAPER Mockup Vector Simulation */}
                <div className="border border-[#7c725c]/10 bg-[#161512]/15 p-6 sm:p-8 rounded-lg relative overflow-hidden flex flex-col justify-between space-y-6">
                  
                  {/* Title */}
                  <div>
                    <span className="text-[10px] font-mono font-bold text-[#d4af37] uppercase tracking-widest bg-[#d4af37]/10 px-2.5 py-1 rounded border border-[#d4af37]/20 inline-block mb-2">
                      PAPER PROTOTYPE STAGE (LOW-FIDELITY SKETCH)
                    </span>
                    <h4 className="text-lg font-bold text-stone-200 font-sans">The Hand-Drawn Tutorial & Checklist Loop</h4>
                    <p className="text-xs text-stone-400 mt-1">Reconstructed blueprint showing hand-drawn checklist steps and early biometric progress score indicator.</p>
                  </div>

                  {/* SVG Hand-Drawn sketch */}
                  <div className="aspect-[16/10] bg-[#fcf9f2] text-[#423c34] rounded-lg relative p-4 flex gap-4 overflow-hidden shadow-inner border border-stone-300">
                    
                    {/* Graph grid background design */}
                    <div className="absolute inset-0 opacity-[0.05] pointer-events-none" style={{
                      backgroundImage: 'radial-gradient(#423c34 1px, transparent 1px)',
                      backgroundSize: '12px 12px'
                    }} />

                    {/* Left: Drawn character squatting */}
                    <div className="flex-1 border border-stone-300 hover:border-brand-red/40 rounded p-2 flex flex-col justify-between relative bg-stone-50/50">
                      <span className="text-[8px] font-mono uppercase text-stone-500 [font-family:cursive]">SQUAT SETUP (REPS TARGET 12)</span>
                      
                      {/* Sketched skeleton character */}
                      <div className="flex-grow flex items-center justify-center py-6">
                        <svg viewBox="0 0 100 100" className="w-24 h-24 stroke-[#524c44] stroke-[2.2] fill-none stroke-linecap-round">
                          {/* Sketched Head */}
                          <circle cx="50" cy="22" r="6" strokeDasharray="3,2" />
                          <line x1="50" y1="28" x2="50" y2="60" />
                          {/* Sketched bending legs (Hinge angle) */}
                          <line x1="50" y1="60" x2="35" y2="78" />
                          <line x1="35" y1="78" x2="48" y2="92" />
                          {/* Left angle indicator annotation */}
                          <path d="M 38 73 C 45 70 48 76 42 84" stroke="#d97706" strokeWidth="1.5" />
                          <text x="52" y="82" fill="#d97706" className="text-[7.5px] font-sans font-bold [font-family:cursive]">Hinge: 42°</text>
                          {/* Hands reaching forward to hold hypothetical bar */}
                          <line x1="50" y1="36" x2="72" y2="36" />
                          <line x1="72" y1="36" x2="72" y2="52" />
                          {/* Handwritten annotation lines */}
                          <path d="M 52 36 L 58 45" stroke="#ef4444" strokeWidth="1" strokeDasharray="2,1" />
                        </svg>
                      </div>

                      <div className="flex justify-between items-center text-[7px] font-mono text-zinc-500 border-t border-stone-200 pt-1">
                        <span>[ ] LIFTING CABLE DISCHARGE</span>
                        <span>[X] BLE ACTIVE</span>
                      </div>
                    </div>

                    {/* Right: Sketched Score Feedback Loop card */}
                    <div className="w-[140px] border border-stone-300 rounded p-2.5 flex flex-col justify-between bg-stone-50/50 relative">
                      <div className="space-y-1.5 text-left [font-family:cursive]">
                        <span className="text-[7.5px] text-[#2563eb] font-bold block uppercase tracking-wider font-mono">EARLY FEEDBACK LOOP</span>
                        
                        {/* Sketched Progress Circle */}
                        <div className="flex items-center gap-2 py-1">
                          <div className="w-8 h-8 rounded-full border border-stone-400 flex items-center justify-center font-bold text-[9px] relative">
                            <span>97%</span>
                            {/* Handdrawn circle loop outer */}
                            <div className="absolute inset-[-2px] border border-stone-300 border-dashed rounded-full" />
                          </div>
                          <div>
                            <span className="text-[7.5px] font-bold text-stone-700 block select-none">FORM ZONE EXCELLENT</span>
                            <span className="text-[6.5px] text-stone-500 leading-none block">2.3% improvement since Dec</span>
                          </div>
                        </div>

                        {/* Handdrawn list notes */}
                        <div className="text-[7px] text-stone-600 space-y-1 leading-normal pt-1">
                          <p>• Symmetrical lock checks [OK]</p>
                          <p>• Avoid spinal torso flexion [PASS]</p>
                          <p>• Audio warning triggered at +5° bend</p>
                        </div>
                      </div>

                      <div className="pt-2.5 border-t border-stone-200 text-center [font-family:cursive]">
                        <span className="text-[8px] font-bold text-brand-red block font-mono">"You mastered deep squats!"</span>
                      </div>
                    </div>

                  </div>

                  <span className="text-[10px] text-stone-500 font-mono tracking-wide leading-relaxed">
                    *Our low-fidelity iteration mapped variables including absolute knee displacement relative to shoelaces, torso flexion alarms, and visual dashboard grids.
                  </span>
                </div>

                {/* HIGH-FIDELITY DIGITAL INTERACTION */}
                <div className="border border-white/5 bg-[#0e0e11] p-6 sm:p-8 rounded-lg flex flex-col justify-between space-y-6">
                  
                  {/* Title */}
                  <div>
                    <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest bg-brand-red/10 px-2.5 py-1 rounded border border-brand-red/20 inline-block mb-2">
                      DIGITAL DEPLOYMENT STAGE (HIGH-FIDELITY INTERACTIVE CODE)
                    </span>
                    <h4 className="text-lg font-bold text-zinc-100 font-sans">The Computed Glass HUD overlay & Sensor Hotspots</h4>
                    <p className="text-xs text-zinc-400 mt-1">The finalized operational simulation is live in our sandbox. It handles precise multi-joint mapping (Deadlift, Squat, Shoulder press) and hotspot telemetry decoding.</p>
                  </div>

                  {/* Digital screen mockup preview representing live apps */}
                  <div className="bg-[#050506]/90 border border-white/5 p-4 rounded-lg aspect-[16/10] flex flex-col justify-between space-y-4">
                    
                    {/* Header stats dashboard */}
                    <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                      <div className="flex items-center gap-1.5">
                        <span className="inline-block w-2 h-2 rounded-full bg-brand-red animate-ping" />
                        <span className="text-[9px] font-mono text-zinc-200">ACTIVE DETECTOR STATUS: COMPUTING</span>
                      </div>
                      <span className="text-[8.5px] font-mono text-[#10b981] bg-[#10b981]/15 px-2 py-0.5 rounded uppercase font-bold">SOLID SIGNAL BLE</span>
                    </div>

                    {/* Vector mapping snippet */}
                    <div className="flex-grow flex items-center justify-center p-4">
                      
                      <div className="relative text-center w-full max-w-xs space-y-1">
                        <span className="text-[8px] text-zinc-500 font-mono block tracking-widest uppercase">COMPUTERIZED MOTION ANALYSIS</span>
                        <h5 className="text-sm font-extrabold text-white">99.8% Computed Joint Precision</h5>
                        <p className="text-[10.5px] leading-relaxed text-zinc-400">
                          Rather than manual estimation, the digital mockup is fully interactive, syncing with 2.4GHz low-latency broadcasts to render live joint vectors and warn you of spinal misalignment immediately.
                        </p>
                      </div>

                    </div>

                    {/* Footer list */}
                    <div className="grid grid-cols-2 gap-4 text-[9px] font-mono text-zinc-500 leading-none pt-2 border-t border-zinc-850">
                      <div>
                        <span>PRIMARY AXIS: SAGITTAL</span>
                      </div>
                      <div className="text-right">
                        <span className="text-brand-red uppercase font-bold">STREAM LIVE OVERLAY</span>
                      </div>
                    </div>

                  </div>

                  <span className="text-[10px] text-zinc-500 font-mono tracking-wide leading-relaxed">
                    *The living prototype is fully realized above in our sandbox environment, utilizing functional sliders allowing you to simulate posture failure.
                  </span>
                </div>

              </div>

            </motion.div>
          )}

          {/* TAB 5: TEAM INFORMATION */}
          {activeTab === 'team' && (
            <motion.div
              key="team-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.25 }}
              className="space-y-12"
            >
              
              {/* Context Block */}
              <div className="text-left max-w-3xl space-y-3">
                <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest bg-brand-red/10 px-2.5 py-1 rounded-full border border-brand-red/25 inline-block">
                  CSE 440 • UNIVERSITY OF WASHINGTON
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight font-sans">
                  Meet Team IronPath
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed font-sans mt-2">
                  Our group represents a diverse integration of software engineering, biomechanics research, and interactive system design. This project was developed as a comprehensive design case study for CSE 440 (Introduction to Human-Computer Interaction).
                </p>
              </div>

              {/* Grid of Team Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-sans">
                {TEAM_MEMBERS.map((mem) => (
                  <div key={mem.name} className="p-6 border border-white/5 bg-[#0e0e11] rounded-lg text-left flex flex-col justify-between hover:border-brand-red/20 hover:scale-[1.02] active:scale-[0.98] transition-all">
                    <div className="space-y-4">
                      {/* Placeholder circle block representing headshot with user initials */}
                      <div className="w-12 h-12 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center font-mono text-zinc-400 font-bold tracking-widest text-sm uppercase">
                        {mem.name.split(' ').map(n=>n[0]).join('')}
                      </div>
                      
                      <div className="space-y-1">
                        <h4 className="text-base font-extrabold text-zinc-100">{mem.name}</h4>
                        <span className="text-[9.5px] font-mono text-brand-red uppercase font-bold tracking-wider block bg-brand-red/5 border border-brand-red/10 px-2 py-0.5 rounded-md inline-block">
                          {mem.role}
                        </span>
                      </div>

                      <p className="text-xs text-zinc-400 leading-relaxed pt-2 border-t border-white/5">
                        {mem.bio}
                      </p>
                    </div>

                    <div className="mt-6 text-[8.5px] text-zinc-650 font-mono tracking-widest font-bold">
                       UNIVERSITY OF WASHINGTON
                    </div>
                  </div>
                ))}
              </div>

              {/* Institution Footnote banner */}
              <div className="p-4 border border-zinc-900 bg-zinc-950/60 rounded-xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between font-mono text-[9px] text-zinc-500 gap-4">
                <span className="uppercase tracking-wider font-bold">Academic Institution: University of Washington • Department of Computer Science & Engineering</span>
                <span className="text-brand-red font-bold uppercase tracking-widest">COURSEWORK SUBMISSION • S2026</span>
              </div>

            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </section>
  );
}
