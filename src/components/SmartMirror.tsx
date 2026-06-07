import React, { useState, useEffect } from 'react';
import { EXERCISES } from '../data';
import { SkeletonRig } from '../types';
import { 
  Activity, 
  Zap, 
  Cpu, 
  Bluetooth, 
  AlertTriangle, 
  Sparkles, 
  CheckCircle2, 
  Flame, 
  Dumbbell, 
  Home, 
  ChevronRight, 
  Play, 
  Pause, 
  Square, 
  ArrowLeft,
  Smartphone, 
  Headphones, 
  BookOpen, 
  Check, 
  Award,
  TrendingUp,
  X
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function SmartMirror() {
  // Navigation states mimicking their exact digital mockup pages
  const [mirrorMode, setMirrorMode] = useState<'how-it-works' | 'home' | 'workout' | 'progress-list' | 'progress-detail' | 'tutorial'>('home');
  
  // Interactive system states
  const [selectedExId, setSelectedExId] = useState<string>('squat');
  const [completion, setCompletion] = useState<number>(45); 
  const [deviation, setDeviation] = useState<number>(0); // 0 is perfect, negative/positive represents improper alignment
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [simDirection, setSimDirection] = useState<number>(1); 
  const [repCount, setRepCount] = useState<number>(8);
  const [avgScore, setAvgScore] = useState<number>(92);
  const [hr, setHr] = useState<number>(128);

  // Device connectivity states (clickable mock triggers)
  const [isShirtConnected, setIsShirtConnected] = useState<boolean>(true);
  const [isEarbudsConnected, setIsEarbudsConnected] = useState<boolean>(true);

  // Detailed info popup state for 'How it Works' Details button
  const [detailsPopup, setDetailsPopup] = useState<string | null>(null);

  const activeExercise = EXERCISES.find(e => e.id === selectedExId) || EXERCISES[0];
  const currentRig: SkeletonRig = activeExercise.getDefaultRig(completion, deviation);

  // Tutorial Checklist completed states
  const [checkedGuide, setCheckedGuide] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
    3: false,
    4: true,
    5: false,
  });

  const toggleCheck = (idx: number) => {
    setCheckedGuide(prev => ({ ...prev, [idx]: !prev[idx] }));
  };

  // Evaluate dynamic formula for form score
  const getPrecisionScore = () => {
    const errorFactor = Math.abs(deviation);
    if (errorFactor < 10) return 96 - Math.floor(errorFactor * 0.5);
    if (errorFactor < 25) return 88 - Math.floor(errorFactor * 0.6);
    return Math.max(58, 76 - Math.floor(errorFactor * 0.8));
  };
  const currentPrecision = getPrecisionScore();

  // Automatic workout motion simulator
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSimulating && mirrorMode === 'workout') {
      interval = setInterval(() => {
        setCompletion(prev => {
          let next = prev + simDirection * 4;
          if (next >= 95) {
            setSimDirection(-1);
            setHr(h => Math.min(170, h + Math.floor(Math.random() * 5) + 1));
            return 95;
          }
          if (next <= 5) {
            setSimDirection(1);
            // On completion of concentric drive, append rep target
            setRepCount(rc => {
              const nextRep = rc + 1;
              return nextRep > 12 ? 1 : nextRep;
            });
            setHr(h => Math.max(115, h - Math.floor(Math.random() * 2)));
            return 5;
          }
          return next;
        });
      }, 60);
    }
    return () => clearInterval(interval);
  }, [isSimulating, simDirection, mirrorMode]);

  // Jitter heart rate metrics slightly for live telemetry styling
  useEffect(() => {
    const hrInterval = setInterval(() => {
      setHr(h => {
        const delta = Math.random() > 0.5 ? 1 : -1;
        return Math.max(100, Math.min(175, h + delta));
      });
    }, 2000);
    return () => clearInterval(hrInterval);
  }, []);

  // Standard line painter helper for vectors
  const drawLine = (pt1: { x: number, y: number }, pt2: { x: number, y: number }, isStrained = false) => {
    const strokeColor = isStrained ? '#d11212' : '#ffffffd9';
    return (
      <line
        x1={pt1.x}
        y1={pt1.y}
        x2={pt2.x}
        y2={pt2.y}
        stroke={strokeColor}
        strokeWidth={isStrained ? '3.5' : '2'}
        strokeLinecap="round"
        className="transition-all duration-75"
      />
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start relative select-none">
      
      {/* 🛡️ GRAPHICAL DETAIL POPUP OVERLAY */}
      <AnimatePresence>
        {detailsPopup && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50 font-sans"
          >
            <motion.div 
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="bg-zinc-950 border border-brand-red/30 p-6 rounded-2xl max-w-sm w-full space-y-4"
            >
              <div className="flex justify-between items-center border-b border-zinc-800 pb-2">
                <span className="text-xs font-mono font-bold text-brand-red uppercase">AEROWEAVE SPECIFICATION</span>
                <button onClick={() => setDetailsPopup(null)} className="cursor-pointer text-zinc-500 hover:text-white">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-bold text-white">Smart Compression Textiles</h4>
                <p className="text-xs text-zinc-400 leading-relaxed">
                  The IronPath biometric compression wear maps biological signals at the source. Utilizing ultra-thin conductive silver filaments integrated organically with custom elastane blends, the shirt captures muscle conduction, chest volume expansion, and postural spine rotation directly.
                </p>
                <div className="p-3 bg-zinc-900 border border-white/5 rounded-xl text-[11px] font-mono text-zinc-300">
                  <p className="text-brand-red font-bold uppercase text-[9px] mb-1">HARDWARE CHIPSETS</p>
                  <p>• ARM Cortex-M4 Microcontroller</p>
                  <p>• Integrated 9-DOF Inertial Node</p>
                  <p>• IP69K Hot Bath Washable</p>
                </div>
              </div>
              <button 
                onClick={() => setDetailsPopup(null)}
                className="cursor-pointer w-full py-2 bg-zinc-900 border border-zinc-800 text-xs font-bold text-white rounded-xl hover:bg-zinc-800 uppercase"
              >
                Close Specification
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* LEFT ASPECT COLS (7): FULL HIGH-FIDELITY SMART MIRROR OS */}
      <div className="lg:col-span-7 flex flex-col items-center">
        
        {/* Device Bezel Shell Frame */}
        <div className="w-full max-w-[370px] sm:max-w-[400px] bg-[#0c0c0f] p-4 rounded-[2.5rem] shadow-2xl border border-zinc-800 relative ring-4 ring-zinc-900/40">
          
          {/* Glass Overlay Reflex Camera Filter */}
          <div className="aspect-[9/18.5] w-full bg-[#050508] relative rounded-[2rem] overflow-hidden flex flex-col justify-between border border-white/5 shadow-inner">
            
            {/* Mirror Sheen Reflection Diagonal Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/2 to-transparent rotate-12 z-20" />
            
            {/* 1. TOP BAR HUD (Shared across all pages) */}
            <div className="z-30 p-4 pb-2 flex items-center justify-between border-b border-white/5 bg-[#050508]/60 backdrop-blur-sm">
              <div className="flex items-center gap-1.5 cursor-pointer" onClick={() => setMirrorMode('home')}>
                <div className="w-4 h-4 text-brand-red font-black flex items-center justify-center bg-brand-red/10 rounded-md border border-brand-red/30">
                  <span className="text-[10px] font-sans">IP</span>
                </div>
                <span className="text-[10px] font-sans font-extrabold text-white tracking-widest italic uppercase">
                  IRON<span className="text-brand-red font-black">PATH</span>
                </span>
              </div>
              
              <div className="flex items-center gap-2">
                <span className="text-[10px] text-zinc-400 font-mono font-medium">7:43 PM</span>
                <span className="w-1.5 h-1.5 rounded-full bg-brand-red animate-pulse" />
              </div>
            </div>

            {/* MAIN PORTRAIT INTERACTIVE LAYER (Rendered depending on active MirrorMode) */}
            <div className="flex-grow relative overflow-y-auto px-4 py-4 flex flex-col justify-between z-10 font-sans">
              
              <AnimatePresence mode="wait">
                
                {/* A. HOW IT WORKS SCREEN (Page 10) */}
                {mirrorMode === 'how-it-works' && (
                  <motion.div 
                    key="how-it-works"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    className="flex-grow flex flex-col justify-between h-full space-y-4"
                  >
                    <div className="space-y-4 text-center">
                      <div className="space-y-1">
                        <span className="text-[9px] font-mono tracking-widest font-black text-brand-red uppercase block">
                          SYSTEM SETUP
                        </span>
                        <h3 className="text-lg font-extrabold text-white italic uppercase tracking-tight">How it Works</h3>
                        <div className="w-10 h-0.5 bg-brand-red mx-auto mt-1" />
                      </div>

                      {/* 3 Physical Components Grid */}
                      <div className="grid grid-cols-1 gap-2.5">
                        
                        {/* Device Card 1: Shirt */}
                        <div className="p-3 bg-zinc-950/80 border border-white/5 rounded-xl flex items-center gap-3 text-left">
                          <div className="p-2.5 bg-zinc-900 border border-white/10 rounded-lg text-brand-red">
                            <Dumbbell className="w-5 h-5" />
                          </div>
                          <div className="flex-grow">
                            <div className="flex justify-between items-baseline">
                              <span className="text-[10px] font-bold text-zinc-100 uppercase tracking-wide">Sensor Clothing</span>
                              <button 
                                onClick={() => setDetailsPopup('shirt')} 
                                className="cursor-pointer text-[9px] font-mono text-brand-red underline uppercase hover:text-white"
                              >
                                More Details
                              </button>
                            </div>
                            <p className="text-[10px] text-zinc-500 mt-0.5 leading-snug">
                              Tracks muscle contraction, thoracic expansion, and 3D spine alignment in real-time.
                            </p>
                          </div>
                        </div>

                        {/* Device Card 2: Mirror */}
                        <div className="p-3 bg-zinc-950/80 border border-white/5 rounded-xl flex items-center gap-3 text-left">
                          <div className="p-2.5 bg-zinc-900 border border-white/10 rounded-lg text-brand-red">
                            <Activity className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-zinc-100 uppercase tracking-wide block">Smart Mirror</span>
                            <p className="text-[10px] text-zinc-500 mt-0.5 leading-snug">
                              Projects high-precision skeleton HUD layouts overlaying physical posture vectors.
                            </p>
                          </div>
                        </div>

                        {/* Device Card 3: Earbuds */}
                        <div className="p-3 bg-zinc-950/80 border border-white/5 rounded-xl flex items-center gap-3 text-left">
                          <div className="p-2.5 bg-zinc-900 border border-white/10 rounded-lg text-brand-red">
                            <Headphones className="w-5 h-5" />
                          </div>
                          <div>
                            <span className="text-[10px] font-bold text-zinc-100 uppercase tracking-wide block">Earbuds (Safety)</span>
                            <p className="text-[10px] text-zinc-500 mt-0.5 leading-snug">
                              Provides immediate sub-millisecond audio cue coaching alerts during lift motions.
                            </p>
                          </div>
                        </div>

                      </div>
                    </div>

                    {/* Actions Panel */}
                    <div className="space-y-2 pt-2">
                      <button 
                        onClick={() => {
                          setIsEarbudsConnected(true);
                          setMirrorMode('home');
                        }}
                        className="cursor-pointer w-full py-2.5 bg-brand-red hover:bg-[#b00e0e] text-white font-extrabold tracking-wide text-xs uppercase rounded-xl transition-all flex items-center justify-center gap-1"
                      >
                        Start Setup <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                      <button 
                        onClick={() => setMirrorMode('home')}
                        className="cursor-pointer w-full py-2 bg-zinc-950/60 border border-zinc-800 text-zinc-400 hover:text-white uppercase font-mono tracking-wider text-[10px] rounded-xl transition-colors"
                      >
                        Skip Tutorial
                      </button>
                    </div>

                  </motion.div>
                )}

                {/* B. HOME SCREEN LAUNCHER (Page 3) */}
                {mirrorMode === 'home' && (
                  <motion.div 
                    key="home"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex-grow flex flex-col justify-between h-full pt-4 space-y-6"
                  >
                    <div className="text-center space-y-1">
                      <span className="text-[10px] font-mono tracking-widest text-[#d11212] font-black block uppercase">
                        LAB PORTAL
                      </span>
                      <h2 className="text-xl font-bold text-white tracking-widest uppercase italic">Home Dashboard</h2>
                      <div className="w-10 h-0.5 bg-brand-red mx-auto mt-1" />
                    </div>

                    {/* Calibration wireframe circle representation */}
                    <div className="py-2 flex justify-center relative">
                      <div className="w-32 h-32 rounded-full border border-brand-red/10 flex items-center justify-center relative bg-zinc-950/20">
                        {/* Spinning indicator */}
                        <div className="absolute inset-0 rounded-full border border-transparent border-t-brand-red/20 border-b-brand-red/20 animate-spin" style={{ animationDuration: '6s' }} />
                        <Dumbbell className="w-10 h-10 text-brand-red/35" />
                        <span className="absolute bottom-2 text-[8px] text-zinc-600 font-mono">CALIBRATION CAP</span>
                      </div>
                    </div>

                    {/* Launcher Navigation Cards */}
                    <div className="space-y-3.5">
                      {/* 1. START WORKOUT BUTTON */}
                      <button 
                        onClick={() => setMirrorMode('workout')}
                        className="cursor-pointer w-full bg-gradient-to-r from-brand-red via-brand-red to-red-800 hover:from-[#b00e0e] hover:to-brand-red text-white py-3.5 rounded-xl font-black uppercase tracking-wider text-xs shadow-[0_0_15px_rgba(209,18,18,0.3)] transition-all transform hover:scale-[1.01] active:scale-95 flex items-center justify-center gap-2"
                      >
                        <Play className="w-4 h-4 fill-current" /> Start Workout
                      </button>

                      <div className="grid grid-cols-2 gap-3">
                        <button 
                          onClick={() => setMirrorMode('progress-list')}
                          className="cursor-pointer bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 p-3 rounded-xl text-center space-y-1 transition-all"
                        >
                          <Activity className="w-4 h-4 text-brand-red mx-auto" />
                          <span className="text-[11px] font-bold text-zinc-100 tracking-wider block uppercase">Progress</span>
                        </button>
                        <button 
                          onClick={() => {
                            setMirrorMode('progress-detail');
                          }}
                          className="cursor-pointer bg-zinc-950/80 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-900/60 p-3 rounded-xl text-center space-y-1 transition-all"
                        >
                          <Award className="w-4 h-4 text-brand-red mx-auto" />
                          <span className="text-[11px] font-bold text-zinc-100 tracking-wider block uppercase">History</span>
                        </button>
                      </div>

                      {/* 2. TUTORIAL DIRECTORY */}
                      <button 
                        onClick={() => setMirrorMode('tutorial')}
                        className="cursor-pointer w-full bg-[#141419] border border-zinc-800/80 hover:border-zinc-750 hover:bg-zinc-900/50 py-2.5 rounded-xl font-bold uppercase tracking-wider text-[10px] text-zinc-300 transition-all flex items-center justify-center gap-1.5"
                      >
                        <BookOpen className="w-3.5 h-3.5 text-brand-red" /> Tutorial Guide <ChevronRight className="w-3 h-3 text-brand-red" />
                      </button>
                    </div>

                  </motion.div>
                )}

                {/* C. ACTIVE WORKOUT HUD (Pages 4 and 5) */}
                {mirrorMode === 'workout' && (
                  <motion.div 
                    key="workout"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="flex-grow flex flex-col justify-between h-full space-y-4"
                  >
                    {/* Header */}
                    <div className="flex justify-between items-start border-b border-white/5 pb-2">
                      <button 
                        onClick={() => setMirrorMode('home')}
                        className="cursor-pointer flex items-center gap-1 text-[9.5px] font-mono text-zinc-400 hover:text-white uppercase font-bold"
                      >
                        <ArrowLeft className="w-3 h-3 text-brand-red" /> Home
                      </button>
                      <div className="text-right">
                        <span className="text-[11px] font-black text-white block leading-none uppercase tracking-wide">
                          {selectedExId === 'squat' ? 'SQUAT' : selectedExId === 'curl' ? 'BICEP CURL' : selectedExId === 'press' ? 'SHOULDER PRESS' : 'DEADLIFT'}
                        </span>
                        <span className="text-[8px] font-mono text-brand-red border-t border-brand-red/10 mt-0.5 block">Set 2/3</span>
                      </div>
                    </div>

                    {/* SKELETAL RENDER CANVAS */}
                    <div className="relative aspect-[4/3.8] bg-zinc-950/20 border border-white/5 rounded-xl overflow-hidden flex items-center justify-center py-2 shadow-inner group">
                      
                      {/* SVG Canvas */}
                      <svg viewBox="55 20 90 205" className="w-full h-full max-h-[175px] drop-shadow-[0_0_10px_rgba(209,18,18,0.2)]">
                        
                        {/* Perfect/Warning Backdrop Glow Area */}
                        {Math.abs(deviation) > 15 ? (
                          <circle cx="100" cy="95" r="45" fill="#d11212" className="opacity-5 animate-pulse" />
                        ) : (
                          <circle cx="100" cy="95" r="45" fill="#10b981" className="opacity-5" />
                        )}

                        {/* Draw current skeletal posture lines */}
                        {drawLine(currentRig.head, currentRig.neck)}
                        {drawLine(currentRig.neck, currentRig.spine, Math.abs(deviation) > 20)}
                        {drawLine(currentRig.spine, { x: (currentRig.leftHip.x + currentRig.rightHip.x) / 2, y: (currentRig.leftHip.y + currentRig.rightHip.y) / 2 }, Math.abs(deviation) > 20)}
                        {drawLine(currentRig.leftShoulder, currentRig.rightShoulder)}
                        {drawLine(currentRig.neck, currentRig.leftShoulder)}
                        {drawLine(currentRig.neck, currentRig.rightShoulder)}
                        {drawLine(currentRig.leftHip, currentRig.rightHip)}
                        
                        {/* Joints (Arms) */}
                        {drawLine(currentRig.leftShoulder, currentRig.leftElbow)}
                        {drawLine(currentRig.leftElbow, currentRig.leftWrist)}
                        {drawLine(currentRig.rightShoulder, currentRig.rightElbow)}
                        {drawLine(currentRig.rightElbow, currentRig.rightWrist)}

                        {/* Joints (Legs) */}
                        {drawLine(currentRig.leftHip, currentRig.leftKnee, selectedExId === 'squat' && deviation < -15)}
                        {drawLine(currentRig.leftKnee, currentRig.leftAnkle, selectedExId === 'squat' && deviation < -15)}
                        {drawLine(currentRig.rightHip, currentRig.rightKnee, selectedExId === 'squat' && deviation < -15)}
                        {drawLine(currentRig.rightKnee, currentRig.rightAnkle, selectedExId === 'squat' && deviation < -15)}

                        {/* Joint nodes */}
                        <circle cx={currentRig.head.x} cy={currentRig.head.y} r="4" fill="#ffffff" />
                        <circle cx={currentRig.head.x} cy={currentRig.head.y} r="1.5" fill="#d11212" />
                        
                        <circle cx={currentRig.leftShoulder.x} cy={currentRig.leftShoulder.y} r="3" fill="#ffffff" />
                        <circle cx={currentRig.rightShoulder.x} cy={currentRig.rightShoulder.y} r="3" fill="#ffffff" />
                        
                        <circle cx={currentRig.leftElbow.x} cy={currentRig.leftElbow.y} r="3" fill={Math.abs(deviation) > 20 ? '#d11212' : '#ffffff'} />
                        <circle cx={currentRig.rightElbow.x} cy={currentRig.rightElbow.y} r="3" fill={Math.abs(deviation) > 20 ? '#d11212' : '#ffffff'} />
                        
                        <circle cx={currentRig.leftHip.x} cy={currentRig.leftHip.y} r="3" fill="#ffffff" />
                        <circle cx={currentRig.rightHip.x} cy={currentRig.rightHip.y} r="3" fill="#ffffff" />

                        {/* Knees: highlight red in knee cave squat */}
                        <circle cx={currentRig.leftKnee.x} cy={currentRig.leftKnee.y} r="3.5" fill={selectedExId === 'squat' && deviation < -15 ? '#d11212' : '#ffffff'} />
                        <circle cx={currentRig.rightKnee.x} cy={currentRig.rightKnee.y} r="3.5" fill={selectedExId === 'squat' && deviation < -15 ? '#d11212' : '#ffffff'} />

                        <circle cx={currentRig.leftAnkle.x} cy={currentRig.leftAnkle.y} r="2.5" fill="#ffffff" />
                        <circle cx={currentRig.rightAnkle.x} cy={currentRig.rightAnkle.y} r="2.5" fill="#ffffff" />

                      </svg>

                      {/* Display Alert Flags ON TOP of posture when alignment errors exist */}
                      {Math.abs(deviation) > 15 && (
                        <div className="absolute inset-x-2 top-2 bg-brand-red/10 border border-brand-red/35 p-1.5 rounded-lg text-left text-brand-red flex items-start gap-1 backdrop-blur-md">
                          <AlertTriangle className="w-3.5 h-3.5 text-brand-red flex-shrink-0 mt-0.5 animate-bounce" />
                          <div className="text-[10px] font-mono leading-tight space-y-0.5">
                            {deviation < 0 ? (
                              <>
                                <p className="font-bold">• Knees cave inward ➔ Drive out</p>
                                <p className="text-[9px] text-zinc-400 font-sans leading-none">Stabilize feet plantar arches</p>
                              </>
                            ) : (
                              <>
                                <p className="font-bold">• Forward lean ➔ Chest up</p>
                                <p className="text-[9px] text-zinc-400 font-sans leading-none">Spine rounding detected. Fix core</p>
                              </>
                            )}
                          </div>
                        </div>
                      )}

                    </div>

                    {/* METRICS ROW */}
                    <div className="grid grid-cols-2 gap-3">
                      
                      {/* Left: Rep count */}
                      <div className="p-2 border border-zinc-800 bg-zinc-950/60 rounded-xl text-center">
                        <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-wider block">REPS</span>
                        <div className="flex items-baseline justify-center gap-0.5 mt-0.5">
                          <span className="text-xl font-black text-white font-mono">{repCount}</span>
                          <span className="text-[10px] text-zinc-600 font-mono">/12</span>
                        </div>
                      </div>

                      {/* Right: Form score */}
                      <div className={`p-2 border rounded-xl text-center transition-colors ${
                        Math.abs(deviation) > 15 
                          ? 'border-brand-red bg-brand-red/10 text-brand-red' 
                          : 'border-emerald-500/20 bg-emerald-500/5 text-brand-green'
                      }`}>
                        <span className="text-[9px] text-zinc-500 font-mono tracking-wider block font-bold uppercase">FORM SCORE</span>
                        <div className="flex items-baseline justify-center gap-1 mt-0.5">
                          <span className="text-xl font-black font-sans leading-none tracking-tight">{currentPrecision}</span>
                          <span className="text-[9px] font-mono">{Math.abs(deviation) > 15 ? '▼' : '▲'}</span>
                        </div>
                      </div>

                    </div>

                    {/* RED/YELLOW AUDIBLE WARNING INSTRUCTIONS (Page 5) */}
                    {Math.abs(deviation) > 15 && (
                      <div className="p-2.5 bg-zinc-950/90 border border-brand-red/35 rounded-xl space-y-1 font-mono text-[10.5px]">
                        <div className="text-[#d11212] font-black flex items-center gap-1.5 animate-pulse">
                          <span>🚨 AUDIBLE COACH WARNING CUES:</span>
                        </div>
                        <p className="text-zinc-300 font-bold leading-normal italic pl-4">
                          {deviation < 0 
                            ? '“Knees past toes excessively → Sit back, knees out!”' 
                            : '“Forward lean detected → Chest up, keep spine flat!”'
                          }
                        </p>
                        <p className="text-[9px] text-zinc-500 leading-none pl-4 mt-1">
                          👂 Voiced through earbuds. Reduce load 5 lbs.
                        </p>
                      </div>
                    )}

                    {/* PHYSICAL CONTROLLER ACTIONS (PAUSE, PRACTICE CUE, STOP) */}
                    <div className="flex items-center justify-between gap-2.5 pt-1">
                      
                      <button 
                        onClick={() => setIsSimulating(!isSimulating)}
                        className="cursor-pointer flex flex-col items-center justify-center bg-zinc-950 border border-zinc-800 p-2 text-zinc-400 hover:text-white rounded-xl flex-1 text-center transition-colors"
                      >
                        {isSimulating ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 text-brand-red" />}
                        <span className="text-[8.5px] font-mono uppercase tracking-wider block mt-1">{isSimulating ? 'Pause' : 'Play'}</span>
                      </button>

                      <button 
                        onClick={() => {
                          setRepCount(rc => rc >= 12 ? 1 : rc + 1);
                          setIsSimulating(false);
                        }}
                        className="cursor-pointer bg-brand-red hover:bg-[#b00e0e] text-white p-2.5 rounded-xl flex-[1.6] flex flex-col items-center justify-center text-center shadow-[0_0_12px_rgba(209,18,18,0.25)] transition-all active:scale-95"
                      >
                        <Zap className="w-4 h-4 fill-current text-white animate-pulse" />
                        <span className="text-[9px] font-black uppercase tracking-wider mt-1">Practice Rep ➔</span>
                      </button>

                      <button 
                        onClick={() => {
                          setMirrorMode('progress-detail');
                        }}
                        className="cursor-pointer flex flex-col items-center justify-center bg-zinc-950 border border-zinc-800 p-2 text-zinc-400 hover:text-zinc-100 rounded-xl flex-1 text-center transition-colors"
                      >
                        <Square className="w-3.5 h-3.5" />
                        <span className="text-[8.5px] font-mono uppercase tracking-wider block mt-1.5">Stop</span>
                      </button>

                    </div>

                  </motion.div>
                )}

                {/* D. PROGRESS EXERCISES DIRECTORY (Page 7) */}
                {mirrorMode === 'progress-list' && (
                  <motion.div 
                    key="progress-list"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="flex-grow flex flex-col justify-between h-full space-y-5"
                  >
                    <div>
                      <div className="flex justify-between items-center border-b border-white/5 pb-2.5">
                        <button 
                          onClick={() => setMirrorMode('home')}
                          className="cursor-pointer flex items-center gap-1 text-[9px] font-mono text-zinc-400 hover:text-white uppercase font-bold"
                        >
                          <ArrowLeft className="w-3 h-3 text-brand-red" /> Back
                        </button>
                        <span className="text-[11px] font-black text-white block uppercase tracking-wide">
                          Progress Listing
                        </span>
                      </div>

                      {/* Series list */}
                      <div className="space-y-2 mt-4">
                        
                        <div 
                          onClick={() => setMirrorMode('progress-detail')}
                          className="cursor-pointer p-3 bg-zinc-950/80 border border-zinc-805 hover:border-[#d11212]/30 rounded-xl flex justify-between items-center group transition-all"
                        >
                          <div>
                            <p className="text-xs font-bold text-zinc-100 uppercase group-hover:text-brand-red">Bench Press</p>
                            <p className="text-[10px] text-zinc-500 font-mono mt-0.5">140 lbs / <span className="text-brand-green">92 form avg</span></p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-white" />
                        </div>

                        <div 
                          onClick={() => {
                            setSelectedExId('squat');
                            setMirrorMode('progress-detail');
                          }}
                          className="cursor-pointer p-3 bg-zinc-950/80 border border-zinc-805 hover:border-[#d11212]/30 rounded-xl flex justify-between items-center group transition-all"
                        >
                          <div>
                            <p className="text-xs font-bold text-zinc-100 uppercase group-hover:text-brand-red">Squat (Active Target)</p>
                            <p className="text-[10px] text-zinc-500 font-mono mt-0.5">190 lbs / <span className="text-brand-red">94 form avg</span></p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-white" />
                        </div>

                        <div 
                          onClick={() => {
                            setSelectedExId('deadlift');
                            setMirrorMode('progress-detail');
                          }}
                          className="cursor-pointer p-3 bg-zinc-950/80 border border-zinc-805 hover:border-[#d11212]/30 rounded-xl flex justify-between items-center group transition-all"
                        >
                          <div>
                            <p className="text-xs font-bold text-zinc-100 uppercase group-hover:text-brand-red">Deadlift</p>
                            <p className="text-[10px] text-zinc-500 font-mono mt-0.5">140 lbs / <span className="text-yellow-500">88 form avg</span></p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-white" />
                        </div>

                        <div 
                          onClick={() => {
                            setSelectedExId('press');
                            setMirrorMode('progress-detail');
                          }}
                          className="cursor-pointer p-3 bg-zinc-950/80 border border-zinc-805 hover:border-[#d11212]/30 rounded-xl flex justify-between items-center group transition-all"
                        >
                          <div>
                            <p className="text-xs font-bold text-zinc-100 uppercase group-hover:text-brand-red">Overhead Press</p>
                            <p className="text-[10px] text-zinc-500 font-mono mt-0.5">80 lbs / <span className="text-brand-green">90 form avg</span></p>
                          </div>
                          <ChevronRight className="w-4 h-4 text-zinc-600 group-hover:text-white" />
                        </div>

                      </div>
                    </div>

                    <p className="text-[9px] text-zinc-600 font-mono leading-relaxed bg-[#0a0a0d] p-2 rounded-lg border border-white/5">
                      💡 Select any exercise above to render historic trends, weight stats, and warnings.
                    </p>

                  </motion.div>
                )}

                {/* E. PROGRESS GRAPH SCREEN (Page 8) */}
                {mirrorMode === 'progress-detail' && (
                  <motion.div 
                    key="progress-detail"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="flex-grow flex flex-col justify-between h-full space-y-4"
                  >
                    <div>
                      <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <button 
                          onClick={() => setMirrorMode('progress-list')}
                          className="cursor-pointer flex items-center gap-1 text-[9px] font-mono text-zinc-400 hover:text-white uppercase font-bold"
                        >
                          <ArrowLeft className="w-3 h-3 text-brand-red" /> Back
                        </button>
                        <span className="text-[11px] font-black text-white block uppercase tracking-wide leading-none">
                          {selectedExId === 'squat' ? 'SQUAT' : selectedExId === 'curl' ? 'BICEP CURL' : selectedExId === 'press' ? 'SHOULDER PRESS' : 'DEADLIFT'} PROGRESS
                        </span>
                      </div>

                      {/* Quad stats boxes from mockup */}
                      <div className="grid grid-cols-2 gap-2 mt-3.5">
                        <div className="p-1.5 bg-[#0e0e12] border border-white/5 rounded-lg text-center">
                          <span className="text-[7.5px] font-mono text-zinc-500 block">WEIGHT</span>
                          <span className="text-xs font-bold text-brand-green">190 lbs ▲</span>
                        </div>
                        <div className="p-1.5 bg-[#0e0e12] border border-white/5 rounded-lg text-center">
                          <span className="text-[7.5px] font-mono text-zinc-500 block">REPS / WEEK</span>
                          <span className="text-xs font-bold text-zinc-300">36 ━</span>
                        </div>
                        <div className="p-1.5 bg-[#0e0e12] border border-white/5 rounded-lg text-center">
                          <span className="text-[7.5px] font-mono text-zinc-500 block">AVG FORM SCORE</span>
                          <span className="text-xs font-bold text-brand-green">92 ▲</span>
                        </div>
                        <div className="p-1.5 bg-[#0e0e12] border border-white/5 rounded-lg text-center">
                          <span className="text-[7.5px] font-mono text-zinc-500 block">FORM WARNING</span>
                          <span className="text-xs font-bold text-brand-red">2 ▼</span>
                        </div>
                      </div>

                      {/* SVG Line progress graph (Page 8) */}
                      <div className="mt-4 p-2.5 bg-zinc-950/60 border border-white/5 rounded-xl">
                        <p className="text-[8px] font-mono tracking-widest text-zinc-500 uppercase block mb-2">METRIC VALUE TRENDS (W1-W4)</p>
                        
                        <div className="h-28 w-full relative flex items-end">
                          
                          {/* Y-Axis lines representing standard loads */}
                          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none text-[7.5px] font-mono text-zinc-700 select-none pb-4 pt-1">
                            <div className="border-b border-zinc-900/65 w-full flex justify-between"><span>190 lbs</span><span /></div>
                            <div className="border-b border-zinc-900/65 w-full flex justify-between"><span>180 lbs</span><span /></div>
                            <div className="border-b border-zinc-900/65 w-full flex justify-between"><span>170 lbs</span><span /></div>
                          </div>

                          {/* Interactive Graph Plot Path SVG */}
                          <svg viewBox="0 0 100 50" className="w-full h-20 overflow-visible z-10">
                            {/* Linear Gradient for Red Shaded Area underneath progress line */}
                            <defs>
                              <linearGradient id="area-grad" x1="0" y1="0" x2="0" y2="1">
                                <stop offset="0%" stopColor="#d11212" stopOpacity="0.25" />
                                <stop offset="100%" stopColor="#d11212" stopOpacity="0.0" />
                              </linearGradient>
                            </defs>
                            
                            {/* Area Gradient Shape */}
                            <path 
                              d="M 5,38 L 35,22 L 65,22 L 95,12 L 95,50 L 5,50 Z" 
                              fill="url(#area-grad)" 
                            />

                            {/* Base Trend Path Line */}
                            <path 
                              d="M 5,38 L 35,22 L 65,22 L 95,12" 
                              fill="none" 
                              stroke="#d11212" 
                              strokeWidth="2.5" 
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            />
                            
                            {/* Highlighted joint nodes coordinate values */}
                            <circle cx="5" cy="38" r="3" fill="#ffffff" stroke="#d11212" strokeWidth="1" />
                            <circle cx="35" cy="22" r="3" fill="#ffffff" stroke="#d11212" strokeWidth="1" />
                            <circle cx="65" cy="22" r="3" fill="#ffffff" stroke="#d11212" strokeWidth="1" />
                            <circle cx="95" cy="12" r="3" fill="#ffffff" stroke="#d11212" strokeWidth="1" />
                          </svg>

                        </div>

                        {/* X-axis indicators */}
                        <div className="flex justify-between items-center text-[9px] font-mono text-zinc-500 px-1 mt-1 border-t border-zinc-900 pt-1.5">
                          <span>W1</span>
                          <span>W2</span>
                          <span>W3</span>
                          <span>W4</span>
                        </div>

                      </div>
                    </div>

                    <button 
                      onClick={() => setMirrorMode('workout')}
                      className="cursor-pointer w-full py-2 bg-zinc-900 border border-zinc-800 text-[10px] font-mono font-bold text-zinc-400 hover:text-white uppercase rounded-xl transition-colors text-center block mt-1"
                    >
                      Return To Active Workout Mode
                    </button>

                  </motion.div>
                )}

                {/* F. STEP BY STEP TUTORIAL CHECKLIST (Page 11) */}
                {mirrorMode === 'tutorial' && (
                  <motion.div 
                    key="tutorial"
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    className="flex-grow flex flex-col justify-between h-full space-y-4"
                  >
                    <div>
                      <div className="flex justify-between items-center border-b border-white/5 pb-2">
                        <button 
                          onClick={() => setMirrorMode('home')}
                          className="cursor-pointer flex items-center gap-1 text-[9px] font-mono text-zinc-400 hover:text-white uppercase font-bold"
                        >
                          <ArrowLeft className="w-3 h-3 text-brand-red" /> Back
                        </button>
                        <span className="text-[11px] font-black text-white block uppercase tracking-wide">
                          Squat Tutorial
                        </span>
                      </div>

                      {/* Small Posture reference */}
                      <div className="my-2.5 p-2 bg-[#0d0d11] border border-white/5 rounded-xl flex items-center gap-3">
                        <div className="w-14 h-14 bg-zinc-950 rounded-lg flex items-center justify-center p-1.5 flex-shrink-0">
                          {/* Ideal pose mockup svg */}
                          <svg viewBox="55 20 90 205" className="w-full h-full opacity-65">
                            <line x1="80" y1="35" x2="80" y2="220" stroke="#10b981" strokeWidth="2.5" strokeDasharray="3,3" />
                            {drawLine({ x:100, y:35 }, { x:100, y:55 })}
                            {drawLine({ x:100, y:55 }, { x:100, y:120 })}
                            {drawLine({ x:100, y:120 }, { x:83, y:155 })}
                            {drawLine({ x:83, y:155 }, { x:80, y:220 })}
                            <circle cx="100" cy="35" r="5" fill="#10b981" />
                            <circle cx="100" cy="55" r="3" fill="#ffffff" />
                            <circle cx="83" cy="155" r="3" fill="#ffffff" />
                            <circle cx="80" cy="220" r="3.5" fill="#10b981" />
                          </svg>
                        </div>
                        <div>
                          <p className="text-[10px] font-bold text-zinc-100 uppercase">Interactive Checklist</p>
                          <p className="text-[9px] text-zinc-500 leading-snug font-sans">
                            Complete the physical stance verification items prior to adding weights.
                          </p>
                        </div>
                      </div>

                      {/* Checklist */}
                      <div className="space-y-1.5 max-h-[145px] overflow-y-auto pr-1">
                        {[
                          'Feet shoulder width apart',
                          'Toes slightly outward (15°)',
                          'Heels planted firmly',
                          'Core braced dynamically',
                          'Chest up continuously',
                          'Knees track over toes'
                        ].map((item, idx) => (
                          <div 
                            key={idx}
                            onClick={() => toggleCheck(idx)}
                            className="cursor-pointer p-1.5 bg-zinc-950/60 border border-zinc-900 rounded-lg flex items-center gap-2 hover:border-zinc-800 transition-colors"
                          >
                            <div className={`w-4 h-4 rounded flex items-center justify-center border transition-all ${
                              checkedGuide[idx] 
                                ? 'bg-brand-red/10 border-brand-red text-brand-red' 
                                : 'border-zinc-800 bg-zinc-900/40 text-transparent'
                            }`}>
                              <Check className="w-3 h-3 stroke-[3.5]" />
                            </div>
                            <span className={`text-[10.5px] font-sans transition-colors ${
                              checkedGuide[idx] ? 'text-zinc-200 line-through decoration-zinc-800' : 'text-zinc-400 font-medium'
                            }`}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>

                    </div>

                    <button 
                      onClick={() => setMirrorMode('workout')}
                      className="cursor-pointer w-full py-2 bg-brand-red text-white text-[10.5px] font-black uppercase tracking-wider rounded-xl hover:bg-[#b00e0e]"
                    >
                      Start active practice rep
                    </button>

                  </motion.div>
                )}

              </AnimatePresence>

            </div> {/* Close PORTFOLIO ASPECT LAYERS */}

            {/* 3. DEVICE BOTTOM CONTROLLER STATUS BAR (Page 10 status connection check) */}
            <div className="z-30 p-4 pt-2 pb-5 bg-[#050508]/80 border-t border-white/5 text-center flex flex-col gap-2">
              
              {/* Connected Dots Row */}
              <div className="flex items-center justify-around text-[9px] font-mono text-zinc-400 bg-zinc-950/50 p-2 rounded-xl border border-white/5">
                
                {/* Clickable SHIRT signal status node */}
                <button 
                  onClick={() => setIsShirtConnected(!isShirtConnected)}
                  className="cursor-pointer flex items-center gap-1.5 hover:text-white transition-colors"
                  title="Click to toggle simulated shirt state"
                >
                  <span className={`w-2 h-2 rounded-full transition-colors duration-200 ${isShirtConnected ? 'bg-[#10b981]' : 'bg-zinc-700'}`} />
                  <span className={`${isShirtConnected ? 'text-zinc-300 font-bold' : 'text-zinc-500'}`}>• Shirt Connected</span>
                </button>

                {/* Clickable EARBUDS signal status node */}
                <button 
                  onClick={() => setIsEarbudsConnected(!isEarbudsConnected)}
                  className="cursor-pointer flex items-center gap-1.5 hover:text-white transition-colors"
                  title="Click to toggle simulated earbud state"
                >
                  <span className={`w-2 h-2 rounded-full transition-colors duration-200 ${isEarbudsConnected ? 'bg-[#10b981]' : 'bg-zinc-700'}`} />
                  <span className={`${isEarbudsConnected ? 'text-zinc-300 font-bold' : 'text-zinc-500'}`}>• Earbuds Ready</span>
                </button>

              </div>

              {/* Small informational instruction */}
              <p className="text-[8px] font-mono text-zinc-600 uppercase tracking-widest leading-none select-none">
                Interactive Touchscreen Glass Panel Mode
              </p>

            </div>

          </div> {/* Close Camera aspect screen frame */}

        </div> {/* Close bezel shell frame */}

        {/* Outer label indicator badge */}
        <div className="mt-4 flex items-center gap-2 text-[11px] font-mono text-zinc-400 border border-white/5 bg-zinc-900/40 px-3.5 py-1.5 rounded-lg">
          <span>INTERFACING DEPLOYMENT PROTOCOL:</span>
          <span className="text-brand-red font-bold uppercase animate-pulse">
            Active Mockup Emulation
          </span>
        </div>

      </div>

      {/* RIGHT SIDE ASPECT COLS (5): LAB CONTROLLER & DESIGN METRICS */}
      <div className="lg:col-span-5 flex flex-col gap-6 font-sans">
        
        {/* Module 1: Physical Controller Sandbox */}
        <div className="p-5 border border-white/5 bg-[#0a0a0d] backdrop-blur-sm rounded-2xl flex flex-col gap-5">
          <div>
            <span className="text-[9px] text-[#d11212] font-mono font-bold tracking-widest uppercase block mb-1">
              GLASS HUD DIGITAL EXTRAPOLATION
            </span>
            <h3 className="text-lg font-bold text-white tracking-tight">Postural Sandbox Controller</h3>
            <p className="text-xs text-zinc-400 mt-1">
              Select an exercise movement below. Then adjust the <strong>Postural Offset alignment slider</strong> below to simulate form mistakes. Watch how the Virtual Smart Mirror processes alerts over audio and visual overlays!
            </p>
          </div>

          {/* Quick-Nav Mirror View Directory Shortcuts */}
          <div className="space-y-2 border-b border-zinc-900 pb-4">
            <span className="text-[9px] text-zinc-500 font-mono font-bold uppercase block tracking-wider">
              Quick-Switch Interactive Mirror Screen:
            </span>
            <div className="grid grid-cols-3 gap-2">
              <button 
                onClick={() => setMirrorMode('how-it-works')}
                className={`cursor-pointer border py-1.5 px-2 text-[9px] font-mono font-semibold rounded-lg text-center transition-all ${
                  mirrorMode === 'how-it-works' 
                    ? 'border-brand-red bg-brand-red/10 text-white font-black shadow-[0_0_8px_rgba(209,18,18,0.2)]'
                    : 'border-zinc-800 bg-zinc-950/40 text-zinc-500 hover:border-zinc-700'
                }`}
              >
                1. How Setup
              </button>
              <button 
                onClick={() => setMirrorMode('home')}
                className={`cursor-pointer border py-1.5 px-2 text-[9px] font-mono font-semibold rounded-lg text-center transition-all ${
                  mirrorMode === 'home' 
                    ? 'border-brand-red bg-brand-red/10 text-white font-black shadow-[0_0_8px_rgba(209,18,18,0.2)]'
                    : 'border-zinc-800 bg-zinc-950/40 text-zinc-500 hover:border-zinc-700'
                }`}
              >
                2. Home HUD
              </button>
              <button 
                onClick={() => setMirrorMode('workout')}
                className={`cursor-pointer border py-1.5 px-2 text-[9px] font-mono font-semibold rounded-lg text-center transition-all ${
                  mirrorMode === 'workout' 
                    ? 'border-brand-red bg-brand-red/10 text-white font-black shadow-[0_0_8px_rgba(209,18,18,0.2)]'
                    : 'border-zinc-800 bg-zinc-950/40 text-zinc-500 hover:border-zinc-700'
                }`}
              >
                3. Active Rep
              </button>
              <button 
                onClick={() => setMirrorMode('progress-list')}
                className={`cursor-pointer border py-1.5 px-2 text-[9px] font-mono font-semibold rounded-lg text-center transition-all ${
                  mirrorMode === 'progress-list' 
                    ? 'border-brand-red bg-brand-red/10 text-white font-black shadow-[0_0_8px_rgba(209,18,18,0.2)]'
                    : 'border-zinc-800 bg-zinc-950/40 text-zinc-500 hover:border-zinc-700'
                }`}
              >
                4. Exercise List
              </button>
              <button 
                onClick={() => setMirrorMode('progress-detail')}
                className={`cursor-pointer border py-1.5 px-2 text-[9px] font-mono font-semibold rounded-lg text-center transition-all ${
                  mirrorMode === 'progress-detail' 
                    ? 'border-brand-red bg-brand-red/10 text-white font-black shadow-[0_0_8px_rgba(209,18,18,0.2)]'
                    : 'border-zinc-800 bg-zinc-950/40 text-zinc-500 hover:border-zinc-700'
                }`}
              >
                5. Progress Graph
              </button>
              <button 
                onClick={() => setMirrorMode('tutorial')}
                className={`cursor-pointer border py-1.5 px-2 text-[9px] font-mono font-semibold rounded-lg text-center transition-all ${
                  mirrorMode === 'tutorial' 
                    ? 'border-brand-red bg-brand-red/10 text-white font-black shadow-[0_0_8px_rgba(209,18,18,0.2)]'
                    : 'border-zinc-800 bg-zinc-950/40 text-zinc-500 hover:border-zinc-700'
                }`}
              >
                6. Guide stance
              </button>
            </div>
          </div>

          {/* Exercise select Grid */}
          <div className="space-y-1.5">
            <span className="text-[9px] text-zinc-500 font-mono font-bold uppercase block tracking-wider">
              Select Static Test Blueprint:
            </span>
            <div className="grid grid-cols-2 gap-2">
              {EXERCISES.map((ex) => (
                <button
                  key={ex.id}
                  onClick={() => {
                    setSelectedExId(ex.id);
                    setDeviation(0);
                    setCompletion(ex.id === 'deadlift' ? 85 : 45);
                    setMirrorMode('workout');
                  }}
                  className={`flex items-center justify-between p-2 rounded-xl border text-left transition-all cursor-pointer ${
                    selectedExId === ex.id && mirrorMode === 'workout'
                      ? 'border-brand-red bg-brand-red/5 text-white'
                      : 'border-zinc-900 bg-zinc-950/50 text-zinc-400 hover:border-zinc-800 hover:text-zinc-200'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="p-1 rounded-md bg-zinc-900 border border-zinc-800/80 text-brand-red">
                      {ex.id === 'squat' && <Flame className="w-3.5 h-3.5" />}
                      {ex.id === 'curl' && <Activity className="w-3.5 h-3.5" />}
                      {ex.id === 'press' && <Cpu className="w-3.5 h-3.5" />}
                      {ex.id === 'deadlift' && <Dumbbell className="w-3.5 h-3.5" />}
                    </span>
                    <div>
                      <span className="text-[10px] font-bold block leading-none uppercase">{ex.name.split(' ').slice(-1)[0]}</span>
                      <span className="text-[7.5px] font-mono text-zinc-500 mt-0.5 block">{ex.category}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Alignment Control Sliders */}
          <div className="space-y-4 pt-2 border-t border-zinc-900">
            
            {/* Deviation alignment offset */}
            <div className="space-y-2">
              <div className="flex justify-between items-baseline">
                <div>
                  <span className="text-xs font-bold text-white block">Postural Alignment Offset</span>
                  <span className="text-[9.5px] text-zinc-500 mt-0.5 block">Slide left/right to introduce lifting error states</span>
                </div>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded ${
                  Math.abs(deviation) < 15 
                    ? 'text-brand-green bg-emerald-500/10 border border-emerald-500/15'
                    : 'text-brand-red bg-brand-red/10 border border-brand-red/20 animate-pulse'
                }`}>
                  {deviation === 0 ? 'NEUTRAL (Perfect)' : deviation > 0 ? `Lean Right: +${deviation}%` : `Knee Cave: ${deviation}%`}
                </span>
              </div>

              <input 
                type="range"
                min="-45"
                max="45"
                value={deviation}
                onChange={(e) => {
                  setDeviation(Number(e.target.value));
                  if (mirrorMode !== 'workout') {
                    setMirrorMode('workout');
                  }
                  setIsSimulating(false);
                }}
                className="w-full h-1 bg-zinc-900 rounded-lg appearance-none cursor-pointer accent-brand-red"
              />
              <div className="flex justify-between text-[8px] font-mono text-zinc-500 uppercase tracking-widest leading-none mt-1">
                <span>{activeExercise.deviations.lowLabel.split(' ')[0]} Frame Error</span>
                <span>Perfect Posture</span>
                <span>{activeExercise.deviations.highLabel.split(' ')[0]} Frame Error</span>
              </div>
            </div>

            {/* Simulated loop controls */}
            {mirrorMode === 'workout' && (
              <div className="flex items-center justify-between pt-1 border-t border-zinc-900/60">
                <span className="text-xs font-semibold text-zinc-400">Dynamic Rep Auto-Looping</span>
                <button 
                  onClick={() => setIsSimulating(!isSimulating)}
                  className={`cursor-pointer text-[10px] font-mono font-extrabold px-3 py-1 rounded-lg border transition-colors ${
                    isSimulating 
                      ? 'bg-emerald-500/10 border-brand-green/35 text-brand-green' 
                      : 'bg-zinc-900 border-zinc-800 text-zinc-400'
                  }`}
                >
                  {isSimulating ? 'SIMULATION LOOP: ACTIVE' : 'SIMULATION LOOP: FROZEN'}
                </button>
              </div>
            )}

          </div>

        </div>

        {/* Module 2: Wearable Smart Node Status */}
        <div className="p-5 border border-white/5 bg-[#0a0a0d] rounded-2xl font-sans text-xs">
          <span className="text-[9px] text-[#d11212] font-mono font-bold tracking-widest uppercase block mb-1">
            CYBER-PHYSICAL INTERACTION LOOP
          </span>
          <h4 className="text-sm font-bold text-white tracking-tight">Active Sensor Mesh Feed</h4>
          
          <div className="mt-3.5 space-y-3">
            
            <div className="flex gap-2.5 bg-zinc-950/60 p-3 rounded-xl border border-white/5">
              <span className="font-mono text-brand-red bg-brand-red/10 border border-brand-red/15 px-1.5 py-0.5 rounded text-[9.5px] uppercase font-bold text-center self-start">
                CAM HUD
              </span>
              <div>
                <p className="font-bold text-zinc-200">AI Visual Keypoints Processing</p>
                <p className="text-[10.5px] text-zinc-400 mt-1 leading-normal">
                  The smart mirror camera uses keypoint extraction on joints: <span className="font-semibold text-zinc-300">{activeExercise.jointTarget}</span>. Tracks rotation and spine tilt relative to shins.
                </p>
              </div>
            </div>

            <div className="flex gap-2.5 bg-zinc-950/60 p-3 rounded-xl border border-white/5">
              <span className="font-mono text-indigo-400 bg-indigo-500/10 border border-indigo-500/15 px-1.5 py-0.5 rounded text-[9.5px] uppercase font-bold text-center self-start">
                SHIRT
              </span>
              <div>
                <p className="font-bold text-zinc-200">Bio-Mesh Conductance Hotspots</p>
                <p className="text-[10.5px] text-zinc-400 mt-1 leading-normal">
                  The Aeroweave smart garment coordinates thoracic sensor expansion matching: <span className="text-zinc-305 font-medium italic">{activeExercise.activeSensors.join(', ')}</span>.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>

    </div>
  );
}
