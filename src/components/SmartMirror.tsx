import React, { useState, useEffect } from 'react';
import { EXERCISES } from '../data';
import { SkeletonRig, Exercise } from '../types';
import { Activity, Zap, Cpu, Bluetooth, AlertTriangle, Sparkles, CheckCircle, Flame } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function SmartMirror() {
  const [selectedExId, setSelectedExId] = useState<string>('squat');
  const [completion, setCompletion] = useState<number>(10); // Starts slightly in motion
  const [deviation, setDeviation] = useState<number>(0); // 0 is perfect form, -50 to +50 is flawed
  const [isSimulating, setIsSimulating] = useState<boolean>(true);
  const [simDirection, setSimDirection] = useState<number>(1); // 1 = down/curl, -1 = up/uncurl
  const [repCount, setRepCount] = useState<number>(3);
  const [hr, setHr] = useState<number>(128);

  const activeExercise = EXERCISES.find(e => e.id === selectedExId) || EXERCISES[0];
  const currentRig: SkeletonRig = activeExercise.getDefaultRig(completion, deviation);

  // Dynamic feedback and color evaluation
  const getFormStatus = () => {
    if (Math.abs(deviation) < 12) {
      return {
        label: 'FORM EXCELLENT',
        color: 'text-brand-green border-brand-green/30 bg-brand-green/10',
        lineColor: '#10b981',
        glowClass: 'glow-green',
        msg: activeExercise.deviations.perfectFeedback,
        precision: 98 - Math.abs(deviation) * 0.5
      };
    } else if (deviation < 0) {
      return {
        label: 'FORM DEFLECTION L',
        color: 'text-brand-orange border-brand-orange/30 bg-brand-orange/10',
        lineColor: '#f97316',
        glowClass: 'shadow-[0_0_15px_rgba(249,115,22,0.3)]',
        msg: activeExercise.deviations.lowFeedback,
        precision: Math.max(45, 85 - Math.abs(deviation) * 0.8)
      };
    } else {
      return {
        label: 'FORM DISPLACEMENT R',
        color: 'text-brand-red border-brand-red/30 bg-brand-red/10',
        lineColor: '#ef4444',
        glowClass: 'shadow-[0_0_15px_rgba(239,68,68,0.3)]',
        msg: activeExercise.deviations.highFeedback,
        precision: Math.max(38, 80 - Math.abs(deviation) * 0.9)
      };
    }
  };

  const status = getFormStatus();

  // Automatic rep simulator loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isSimulating) {
      interval = setInterval(() => {
        setCompletion(prev => {
          let next = prev + simDirection * 2.5;
          if (next >= 95) {
            setSimDirection(-1);
            // Dynamic minor heart rate increase at bottom
            setHr(h => Math.min(175, h + Math.floor(Math.random() * 4) + 1));
            return 95;
          }
          if (next <= 5) {
            setSimDirection(1);
            // Count a rep! Only count if form precision was solid (e.g. deviation <= 25)
            if (prev > next) {
              setRepCount(rc => rc + 1);
            }
            // Minor recover heart-rate decay
            setHr(h => Math.max(110, h - Math.floor(Math.random() * 3)));
            return 5;
          }
          return next;
        });
      }, 55);
    }
    return () => clearInterval(interval);
  }, [isSimulating, simDirection]);

  // Simulate slight Heart Rate jitter always
  useEffect(() => {
    const hrInterval = setInterval(() => {
      setHr(h => {
        const jitter = Math.random() > 0.5 ? 1 : -1;
        return Math.max(80, Math.min(180, h + jitter));
      });
    }, 1500);
    return () => clearInterval(hrInterval);
  }, []);

  // Helper to render skeleton SVG lines
  const drawLine = (pt1: { x: number, y: number }, pt2: { x: number, y: number }, isPrimaryJoint = false) => {
    const isErrorLine = Math.abs(deviation) > 15;
    const strokeColor = isPrimaryJoint && isErrorLine ? status.lineColor : '#ffffffd0';
    const strokeWidth = isPrimaryJoint && isErrorLine ? '3' : '2';
    
    return (
      <line
        x1={pt1.x}
        y1={pt1.y}
        x2={pt2.x}
        y2={pt2.y}
        stroke={strokeColor}
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        className="transition-all duration-75"
      />
    );
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* LEFT: Mirror Simulator Frame */}
      <div className="lg:col-span-7 flex flex-col items-center">
        {/* Device Wrapper */}
        <div className="w-full max-w-[380px] sm:max-w-[420px] bg-[#0e0e11] p-3 rounded-lg shadow-2xl border border-white/10 transition-transform duration-300">
          
          {/* Main Mirror HUD */}
          <div className="aspect-[3/4.2] w-full bg-slate-950/95 relative rounded-lg overflow-hidden p-6 font-sans flex flex-col justify-between border border-white/5 shadow-inner">
            
            {/* Mirror Reflective Metallic Sheen Overlay */}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/3 to-transparent rotate-12" />
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />

            {/* Mirror HUD Top Stats Bar */}
            <div className="z-10 flex items-center justify-between">
              
              {/* Dynamic User Profile Indicator */}
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border border-brand-orange bg-zinc-800 overflow-hidden flex items-center justify-center">
                  <div className="w-3 h-3 rounded-full bg-brand-orange animate-pulse" />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase">Athlete Active</p>
                  <p className="text-xs font-semibold text-white">Guest Session</p>
                </div>
              </div>

              {/* Connected Shirt Emblem */}
              <div className="flex items-center gap-1.5 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full">
                <Bluetooth className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
                <span className="text-[9px] font-mono font-bold text-brand-orange tracking-wider uppercase">BIOSYNC 5.3</span>
              </div>
              
            </div>

            {/* Dynamic SKELETON / RENDER Layer (SVG) */}
            <div className="absolute inset-0 top-16 bottom-24 flex items-center justify-center z-0">
              <svg 
                viewBox="50 20 100 210" 
                className="w-full h-full max-h-[340px] drop-shadow-[0_0_12px_rgba(0,240,255,0.15)]"
              >
                {/* Simulated Barbell Base (for Squats) */}
                {selectedExId === 'squat' && (
                  <g className="opacity-90">
                    {/* Barbell collar */}
                    <line 
                      x1={currentRig.leftShoulder.x - 22} 
                      y1={currentRig.leftShoulder.y - 8} 
                      x2={currentRig.rightShoulder.x + 22} 
                      y2={currentRig.rightShoulder.y - 8} 
                      stroke="#4b5563" 
                      strokeWidth="5" 
                      strokeLinecap="round" 
                    />
                    {/* Heavy plates left */}
                    <rect x={currentRig.leftShoulder.x - 27} y={currentRig.leftShoulder.y - 20} width="6" height="24" rx="2" fill="#1f2937" />
                    <rect x={currentRig.leftShoulder.x - 32} y={currentRig.leftShoulder.y - 17} width="4" height="18" rx="2" fill="#111827" />
                    {/* Heavy plates right */}
                    <rect x={currentRig.rightShoulder.x + 21} y={currentRig.rightShoulder.y - 20} width="6" height="24" rx="2" fill="#1f2937" />
                    <rect x={currentRig.rightShoulder.x + 28} y={currentRig.rightShoulder.y - 17} width="4" height="18" rx="2" fill="#111827" />
                  </g>
                )}

                {/* Dumbbells for Bicep Curls / Press */}
                {selectedExId === 'curl' && (
                  <g className="opacity-90">
                    {/* Left Dumbbell */}
                    <line x1={currentRig.leftWrist.x - 6} y1={currentRig.leftWrist.y} x2={currentRig.leftWrist.x + 6} y2={currentRig.leftWrist.y} stroke="#6b7280" strokeWidth="4" />
                    <circle cx={currentRig.leftWrist.x - 7} cy={currentRig.leftWrist.y} r="5" fill="#1f2937" />
                    <circle cx={currentRig.leftWrist.x + 7} cy={currentRig.leftWrist.y} r="5" fill="#1f2937" />
                    
                    {/* Right Dumbbell */}
                    <line x1={currentRig.rightWrist.x - 6} y1={currentRig.rightWrist.y} x2={currentRig.rightWrist.x + 6} y2={currentRig.rightWrist.y} stroke="#6b7280" strokeWidth="4" />
                    <circle cx={currentRig.rightWrist.x - 7} cy={currentRig.rightWrist.y} r="5" fill="#1f2937" />
                    <circle cx={currentRig.rightWrist.x + 7} cy={currentRig.rightWrist.y} r="5" fill="#1f2937" />
                  </g>
                )}

                {selectedExId === 'press' && (
                  <g className="opacity-90">
                    {/* Left DB */}
                    <line x1={currentRig.leftWrist.x - 8} y1={currentRig.leftWrist.y} x2={currentRig.leftWrist.x + 8} y2={currentRig.leftWrist.y} stroke="#9ca3af" strokeWidth="4" />
                    <rect x={currentRig.leftWrist.x - 12} y={currentRig.leftWrist.y - 5} width="4" height="10" rx="1" fill="#374151" />
                    <rect x={currentRig.leftWrist.x + 8} y={currentRig.leftWrist.y - 5} width="4" height="10" rx="1" fill="#374151" />

                    {/* Right DB */}
                    <line x1={currentRig.rightWrist.x - 8} y1={currentRig.rightWrist.y} x2={currentRig.rightWrist.x + 8} y2={currentRig.rightWrist.y} stroke="#9ca3af" strokeWidth="4" />
                    <rect x={currentRig.rightWrist.x - 12} y={currentRig.rightWrist.y - 5} width="4" height="10" rx="1" fill="#374151" />
                    <rect x={currentRig.rightWrist.x + 8} y={currentRig.rightWrist.y - 5} width="4" height="10" rx="1" fill="#374151" />
                  </g>
                )}

                {/* SKELETON RIG CONNECTIONS */}
                {/* Spine & Head */}
                {drawLine(currentRig.head, currentRig.neck)}
                {drawLine(currentRig.neck, currentRig.spine, selectedExId === 'squat' || selectedExId === 'press')}
                {drawLine(currentRig.spine, { x: (currentRig.leftHip.x + currentRig.rightHip.x) / 2, y: (currentRig.leftHip.y + currentRig.rightHip.y) / 2 }, true)}

                {/* Shoulders */}
                {drawLine(currentRig.leftShoulder, currentRig.rightShoulder)}
                {drawLine(currentRig.neck, currentRig.leftShoulder)}
                {drawLine(currentRig.neck, currentRig.rightShoulder)}

                {/* Arms */}
                {drawLine(currentRig.leftShoulder, currentRig.leftElbow, selectedExId === 'curl')}
                {drawLine(currentRig.leftElbow, currentRig.leftWrist, selectedExId === 'curl' || selectedExId === 'press')}
                {drawLine(currentRig.rightShoulder, currentRig.rightElbow, selectedExId === 'curl')}
                {drawLine(currentRig.rightElbow, currentRig.rightWrist, selectedExId === 'curl' || selectedExId === 'press')}

                {/* Pelvis */}
                {drawLine(currentRig.leftHip, currentRig.rightHip)}

                {/* Legs */}
                {drawLine(currentRig.leftHip, currentRig.leftKnee, selectedExId === 'squat')}
                {drawLine(currentRig.leftKnee, currentRig.leftAnkle, selectedExId === 'squat')}
                {drawLine(currentRig.rightHip, currentRig.rightKnee, selectedExId === 'squat')}
                {drawLine(currentRig.rightKnee, currentRig.rightAnkle, selectedExId === 'squat')}

                {/* SKELETON NODES (Glow points) */}
                {/* Head */}
                <circle cx={currentRig.head.x} cy={currentRig.head.y} r="5" fill="#ffffff" className="transition-all duration-75" />
                <circle cx={currentRig.head.x} cy={currentRig.head.y} r="3" fill="#f97316" className="transition-all duration-75" />

                {/* Left Arm Nodes */}
                <circle cx={currentRig.leftShoulder.x} cy={currentRig.leftShoulder.y} r="3.5" fill="#ffffff" />
                <circle cx={currentRig.leftElbow.x} cy={currentRig.leftElbow.y} r="3.5" fill={selectedExId === 'curl' && Math.abs(deviation) > 15 ? status.lineColor : '#60a5fa'} />
                <circle cx={currentRig.leftWrist.x} cy={currentRig.leftWrist.y} r="3.5" fill="#ffffff" />

                {/* Right Arm Nodes */}
                <circle cx={currentRig.rightShoulder.x} cy={currentRig.rightShoulder.y} r="3.5" fill="#ffffff" />
                <circle cx={currentRig.rightElbow.x} cy={currentRig.rightElbow.y} r="3.5" fill={selectedExId === 'curl' && Math.abs(deviation) > 15 ? status.lineColor : '#60a5fa'} />
                <circle cx={currentRig.rightWrist.x} cy={currentRig.rightWrist.y} r="3.5" fill="#ffffff" />

                {/* Lower Back/Spine */}
                <circle cx={currentRig.spine.x} cy={currentRig.spine.y} r="4" fill={(selectedExId === 'squat' || selectedExId === 'press') && deviation > 15 ? status.lineColor : '#60a5fa'} />

                {/* Hips */}
                <circle cx={currentRig.leftHip.x} cy={currentRig.leftHip.y} r="3.5" fill="#ffffff" />
                <circle cx={currentRig.rightHip.x} cy={currentRig.rightHip.y} r="3.5" fill="#ffffff" />

                {/* Knees */}
                <circle cx={currentRig.leftKnee.x} cy={currentRig.leftKnee.y} r="4" fill={selectedExId === 'squat' && deviation < -15 ? status.lineColor : '#f97316'} />
                <circle cx={currentRig.rightKnee.x} cy={currentRig.rightKnee.y} r="4" fill={selectedExId === 'squat' && deviation < -15 ? status.lineColor : '#f97316'} />

                {/* Ankles */}
                <circle cx={currentRig.leftAnkle.x} cy={currentRig.leftAnkle.y} r="3" fill="#ffffff" />
                <circle cx={currentRig.rightAnkle.x} cy={currentRig.rightAnkle.y} r="3" fill="#ffffff" />
              </svg>
            </div>

            {/* Floating Telemetry Screen Overlays */}

            {/* Widget Left: Rep Metrics */}
            <div className="z-10 absolute left-4 top-24 flex flex-col gap-2.5 max-w-[120px]">
              
              {/* Rep Count Box */}
              <div className="p-2 border border-blue-500/10 bg-slate-950/80 rounded-xl backdrop-blur-md">
                <span className="text-[9px] text-zinc-400 font-mono tracking-widest block font-medium uppercase">REP RECKON</span>
                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold font-mono text-white tracking-tight">{repCount}</span>
                  <span className="text-zinc-500 font-mono text-[10px]">/12</span>
                </div>
              </div>

              {/* Bio Heartrate Box */}
              <div className="p-2 border border-emerald-500/10 bg-slate-950/80 rounded-xl backdrop-blur-md flex flex-col gap-0.5">
                <span className="text-[9px] text-zinc-400 font-mono tracking-widest block font-medium uppercase">HEART BIO</span>
                <div className="flex items-center gap-1">
                  <Activity className="w-3.5 h-3.5 text-brand-red animate-pulse" />
                  <span className="text-base font-bold font-mono text-white tracking-wider">{hr}</span>
                  <span className="text-zinc-500 font-mono text-[8.5px]">BPM</span>
                </div>
                {/* Custom glowing mini-pulse line */}
                <div className="w-full h-[3px] bg-zinc-800 rounded-full overflow-hidden mt-1">
                  <div className="h-full bg-brand-green w-3/5 rounded-full animate-pulse" />
                </div>
              </div>

            </div>

            {/* Widget Right: Precision Indicators */}
            <div className="z-10 absolute right-4 top-24 flex flex-col gap-2.5 max-w-[124px]">

              {/* Form Precision Rating Circle / Arc value */}
              <div className="p-2 border border-brand-orange/10 bg-slate-950/80 rounded-lg backdrop-blur-md flex flex-col items-end">
                <span className="text-[9px] text-zinc-400 font-mono tracking-widest block font-medium uppercase text-right">FORM FIT</span>
                <span className={`text-[17px] font-extrabold font-mono tracking-tight ${status.label.includes('EXCELLENT') ? 'text-brand-green' : 'text-brand-orange'}`}>
                  {status.precision.toFixed(0)}%
                </span>
                <span className="text-[8px] text-zinc-500 font-mono uppercase tracking-wider block">PRECISE</span>
              </div>

              {/* Target Force indicator */}
              <div className="p-2 border border-brand-blue/10 bg-slate-950/80 rounded-lg backdrop-blur-md flex flex-col items-end">
                <span className="text-[9px] text-zinc-400 font-mono tracking-widest block font-medium uppercase text-right text-ellipsis overflow-hidden w-full whitespace-nowrap">VELOCITY</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <Zap className="w-3 h-3 text-brand-orange animate-pulse" />
                  <span className="text-xs font-bold font-mono text-zinc-200">
                    {isSimulating ? (1.2 - Math.abs(50 - completion) * 0.015).toFixed(2) : "0.00"}
                  </span>
                  <span className="text-[8px] text-zinc-500 font-mono">M/S</span>
                </div>
              </div>

            </div>

            {/* Bottom HUD: Live Posture Feedback Box */}
            <div className={`z-10 w-full border rounded-lg p-3 bg-zinc-950/90 backdrop-blur-sm shadow-lg transition-all duration-300 ${status.color}`}>
              <div className="flex items-center justify-between border-b border-white/5 pb-1.5 mb-1.5">
                <div className="flex items-center gap-1.5">
                  {Math.abs(deviation) < 12 ? (
                    <Sparkles className="w-3.5 h-3.5 text-brand-green" />
                  ) : (
                    <AlertTriangle className="w-3.5 h-3.5 text-brand-orange animate-bounce" />
                  )}
                  <span className="text-[10px] font-bold font-mono tracking-widest select-none">{status.label}</span>
                </div>
                <span className="text-[9px] text-white/50 font-mono select-none">AI REFLEX COACH</span>
              </div>
              <p className="text-xs font-medium leading-relaxed text-zinc-200 tracking-tight transition-all duration-300">
                {status.msg}
              </p>
            </div>

          </div> {/* Aspect Frame end */}
        </div>{/* Device wrapper end */}

        {/* Sync Status Button */}
        <div className="flex items-center gap-2 mt-4 text-[11px] font-mono select-none text-zinc-400 border border-white/5 bg-zinc-900/40 px-3.5 py-1.5 rounded-lg">
          <span>COOPERATING SHIRT AT:</span>
          <span className="text-brand-orange font-bold">100% SIGNAL</span>
        </div>
      </div>


      {/* RIGHT: Dynamic Control Deck & AI Guide */}
      <div className="lg:col-span-5 flex flex-col gap-6">
        
        {/* Step Customizer */}
        <div className="p-5 border border-white/5 bg-[#0e0e11] backdrop-blur-sm rounded-lg flex flex-col gap-5">
          <div>
            <span className="text-[10px] text-brand-orange font-mono font-bold tracking-widest uppercase block mb-1">INTERACTIVE MIRROR SANDBOX</span>
            <h3 className="text-xl font-bold text-white tracking-tight font-sans">Vary Forms & Posture Alignment</h3>
            <p className="text-xs text-zinc-400 mt-1 font-sans">
              Select an exercise below, then simulate errors or adjust depth using the controls to experience how the Bio-mesh system operates in real time.
            </p>
          </div>

          {/* Exercise Selector Grid */}
          <div className="grid grid-cols-3 gap-2">
            {EXERCISES.map((ex) => (
              <button
                key={ex.id}
                onClick={() => {
                  setSelectedExId(ex.id);
                  setCompletion(15);
                  setDeviation(0);
                }}
                className={`flex flex-col items-center justify-between p-2.5 rounded-lg border text-center transition-all duration-200 cursor-pointer ${
                  selectedExId === ex.id
                    ? 'border-brand-orange bg-brand-orange/5 text-white shadow-[0_0_12px_rgba(249,115,22,0.14)]'
                    : 'border-zinc-850 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                }`}
              >
                <div className={`p-1.5 rounded-md mb-1.5 ${selectedExId === ex.id ? 'bg-brand-orange/10 text-brand-orange' : 'bg-zinc-900 text-zinc-500'}`}>
                  {ex.id === 'squat' && <Flame className="w-4 h-4" />}
                  {ex.id === 'curl' && <Activity className="w-4 h-4" />}
                  {ex.id === 'press' && <Cpu className="w-4 h-4" />}
                </div>
                <span className="text-[10px] font-bold tracking-tight uppercase leading-none block">{ex.name.split(' ').slice(-1)[0]}</span>
                <span className="text-[8px] text-zinc-500 font-mono mt-0.5">{ex.category}</span>
              </button>
            ))}
          </div>

          {/* Control Loops */}
          <div className="flex flex-col gap-4 border-t border-zinc-800/80 pt-4">

            {/* Loop Slider: Simulation Autoplay Toggle */}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-white">Dynamic Rep Engine</p>
                <p className="text-[10px] text-zinc-400 leading-none mt-0.5">Auto-loop the workout motion</p>
              </div>
              <button
                onClick={() => setIsSimulating(!isSimulating)}
                className={`cursor-pointer text-xs font-mono font-bold px-3 py-1.5 rounded-lg border transition-all duration-300 ${
                  isSimulating 
                    ? 'bg-emerald-500/10 border-brand-green text-brand-green hover:bg-emerald-500/20' 
                    : 'bg-zinc-800/80 border-zinc-700 text-zinc-400 hover:text-white'
                }`}
              >
                {isSimulating ? 'SIMULATOR: LIVE' : 'SIMULATOR: FROZEN'}
              </button>
            </div>

            {/* Manual Rep Completion Slider */}
            {!isSimulating && (
              <div className="space-y-1.5">
                <div className="flex items-center justify-between text-xs">
                  <span className="text-zinc-400 font-medium">Rep Depth / Extension</span>
                  <span className="text-brand-orange font-mono font-bold">{completion.toFixed(0)}%</span>
                </div>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={completion}
                  onChange={(e) => setCompletion(Number(e.target.value))}
                  className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-orange"
                />
                <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                  <span>START (VERTICAL)</span>
                  <span>PEAK RECOIL</span>
                </div>
              </div>
            )}

            {/* Deviation slider (The critical form flaw trigger) */}
            <div className="space-y-2 pt-1">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-semibold text-white">Form Alignment Offset</span>
                  <p className="text-[10px] text-zinc-400 leading-none mt-0.5">Shift slider to represent improper biomechanics</p>
                </div>
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  Math.abs(deviation) < 12 
                    ? 'text-brand-green bg-brand-green/15 border border-brand-green/20' 
                    : deviation < 0 
                      ? 'text-brand-orange bg-brand-orange/15 border border-brand-orange/20' 
                      : 'text-brand-red bg-brand-red/15 border border-brand-red/20'
                }`}>
                  {deviation === 0 ? 'PERFECT (0%)' : `${deviation > 0 ? '+' : ''}${deviation}%`}
                </span>
              </div>
              
              <input
                type="range"
                min="-50"
                max="50"
                value={deviation}
                onChange={(e) => {
                  setDeviation(Number(e.target.value));
                  // If user interacts, frozen state gives better evaluation focus
                  if (isSimulating) {
                    setIsSimulating(false);
                  }
                }}
                className="w-full h-1 bg-zinc-800 rounded-lg appearance-none cursor-pointer accent-brand-orange"
              />
              <div className="flex justify-between text-[9px] text-zinc-500 font-mono">
                <span className="uppercase">{activeExercise.deviations.lowLabel}</span>
                <span className="text-zinc-400 font-bold uppercase">PERFECT DEPLOYMENT</span>
                <span className="uppercase">{activeExercise.deviations.highLabel}</span>
              </div>
            </div>

            {/* Rep Reset button */}
            <div className="flex gap-2 pt-1">
              <button
                onClick={() => {
                  setRepCount(0);
                  setCompletion(10);
                  setDeviation(0);
                  setIsSimulating(true);
                }}
                className="cursor-pointer w-full text-center text-[10px] font-mono tracking-wider font-bold py-2 border border-zinc-800 bg-zinc-950/50 hover:bg-zinc-800/60 hover:text-white rounded-xl text-zinc-400 transition-colors"
              >
                RESET LAP COUNTER
              </button>
            </div>

          </div>
        </div>

        {/* AI Bio-Sync Form Insights */}
        <div className="p-5 border border-white/5 bg-[#0e0e11] rounded-lg">
          <span className="text-[10px] text-brand-orange font-mono font-bold tracking-widest uppercase block mb-1">COGNITIVE BIO-MIRROR TECHNOLOGY</span>
          <h4 className="text-md font-bold text-[#fff] tracking-tight font-sans">Active Analytics Overview</h4>
          
          <div className="mt-3 space-y-3 text-xs text-zinc-350">
            <div className="flex items-start gap-2 bg-zinc-950/40 p-2.5 rounded-lg border border-white/5">
              <span className="font-mono text-brand-orange bg-brand-orange/10 px-1.5 py-0.5 rounded text-[10px] uppercase font-bold mt-0.5 select-none font-sans">JOINT TARGET</span>
              <div>
                <p className="font-semibold text-zinc-200">{activeExercise.jointTarget}</p>
                <p className="text-[10px] text-zinc-400 mt-0.5">Mirror checks standard angular limit thresholds: <span className="font-mono text-zinc-300">{activeExercise.idealAngleRange}</span>.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-2 bg-zinc-950/40 p-2.5 rounded-lg border border-white/5">
              <span className="font-mono text-brand-blue bg-brand-blue/10 px-1.5 py-0.5 rounded text-[10px] uppercase font-bold mt-0.5 select-none font-sans">SHIRT FED</span>
              <div>
                <p className="font-semibold text-zinc-200">Active Sensors Engaged</p>
                <p className="text-[10px] text-zinc-400 mt-0.5 font-sans">The Bio-Mesh Shirt sends real-time pressure & alignment signals across: <span className="text-zinc-300 font-medium italic">{activeExercise.activeSensors.join(', ')}</span>.</p>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}
