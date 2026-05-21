import React, { useState, useEffect } from 'react';
import { SENSOR_HOTSPOTS } from '../data';
import { SensorHotspot } from '../types';
import { ShieldCheck, Workflow, Waves, Cpu, Sparkles, Wifi } from 'lucide-react';

export default function SmartShirt() {
  const [activeHotspotId, setActiveHotspotId] = useState<string>('chest-ecg');
  const [waveData, setWaveData] = useState<number[]>(Array(30).fill(40));
  const [oscillatorTimer, setOscillatorTimer] = useState<number>(0);

  const activeHotspot = SENSOR_HOTSPOTS.find(h => h.id === activeHotspotId) || SENSOR_HOTSPOTS[0];

  // Live telemetry generator logic for the selected sensor
  useEffect(() => {
    const streamInterval = setInterval(() => {
      setWaveData(prev => {
        const next = [...prev.slice(1)];
        setOscillatorTimer(t => {
          const nextT = t + 0.3;
          let newVal = 40;
          
          if (activeHotspotId === 'chest-ecg') {
            // ECG Heartbeat wave pattern representation (QRS Complex)
            const cyclePos = Math.floor(nextT * 5) % 8;
            if (cyclePos === 0) newVal = 40; // Flat
            else if (cyclePos === 1) newVal = 35; // P-Wave
            else if (cyclePos === 2) newVal = 40; // Pr Flat
            else if (cyclePos === 3) newVal = 15; // QRS High Spike
            else if (cyclePos === 4) newVal = 72; // S Bottom Dip
            else if (cyclePos === 5) newVal = 40; // Rest
            else if (cyclePos === 6) newVal = 34; // T-Wave
            else newVal = 40; 
          } else if (activeHotspotId === 'back-imu') {
            // IMU gyroscopic micro-shakes (sine wave + minor jitter)
            newVal = 40 + Math.sin(nextT * 2.2) * 15 + (Math.random() - 0.5) * 5;
          } else if (activeHotspotId === 'lats-respiration') {
            // Respiratory wave: slow, smooth abdominal expansions and chest recoil
            newVal = 40 + Math.sin(nextT * 0.7) * 22;
          } else {
            // Bluetooth beacon packet bursts
            newVal = Math.random() > 0.8 ? 10 : (Math.random() > 0.8 ? 65 : 43);
          }
          
          next.push(newVal);
          return nextT;
        });
        return next;
      });
    }, 90);

    return () => clearInterval(streamInterval);
  }, [activeHotspotId]);

  // Construct SVG path for scrolling wave
  const wavePath = waveData
    .map((val, idx) => `${idx === 0 ? 'M' : 'L'} ${(idx * 7.5).toFixed(1)} ${val.toFixed(1)}`)
    .join(' ');

  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
      
      {/* LEFT ASPECT: Premium SVG Shirt Diagram with Hotspots */}
      <div className="md:col-span-5 flex items-center justify-center border border-white/10 bg-[#0e0e11] rounded-lg p-6 relative min-h-[380px] overflow-hidden">
        
        {/* Abstract grids for aesthetic depth */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293708_1px,transparent_1px),linear-gradient(to_bottom,#1f293708_1px,transparent_1px)] bg-[size:16px_16px]" />
        
        {/* Dynamic Shirt Diagram Group */}
        <div className="w-full max-w-[280px] h-full relative aspect-[3/4] flex items-center justify-center">
          
          {/* Main High-Fidelity SVG Shirt */}
          <svg viewBox="0 0 120 160" className="w-full h-full drop-shadow-[0_4px_20px_rgba(0,0,0,0.5)]">
            <defs>
              <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1E293B" stopOpacity="0.85" />
                <stop offset="60%" stopColor="#0F172A" stopOpacity="0.95" />
                <stop offset="100%" stopColor="#020617" stopOpacity="1" />
              </linearGradient>
              <linearGradient id="accentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#f97316" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#3b82f6" stopOpacity="0.1" />
              </linearGradient>
            </defs>

            {/* Torso/Shirt outline path (Highly optimized sleek crew-cut compression design) */}
            <path
              d="M 32,8 
                 C 38,10 42,12 60,12 
                 C 78,12 82,10 88,8 
                 L 110,24 
                 C 114,28 111,36 104,34 
                 L 96,32 
                 L 96,48 
                 C 98,72 100,105 92,154 
                 C 91,157 88,158 84,158 
                 L 36,158 
                 C 32,158 29,157 28,154 
                 C 20,105 22,72 24,48 
                 L 24,32 
                 L 16,34 
                 C 9,36 6,28 10,24 
                 Z"
              fill="url(#shirtGrad)"
              stroke="#334155"
              strokeWidth="1.5"
              strokeLinejoin="round"
            />

            {/* Seamless Compression Side Seams (Sleek Tech Accent Details) */}
            <path d="M 28,45 C 26,72 24,105 31,154" fill="none" stroke="url(#accentGrad)" strokeWidth="2" strokeDasharray="3,3" />
            <path d="M 92,45 C 94,72 96,105 89,154" fill="none" stroke="url(#accentGrad)" strokeWidth="2" strokeDasharray="3,3" />

            {/* Collar lining stitch */}
            <path d="M 32,8 C 38,10 42,12 60,12 C 78,12 82,10 88,8" fill="none" stroke="#475569" strokeWidth="1" />

            {/* Aura Logo Emblem on Chest */}
            <circle cx="60" cy="22" r="3.2" fill="none" stroke="#f97316" strokeWidth="1" className="animate-pulse" />
            <polygon points="60,20 62.5,23.5 57.5,23.5" fill="#f97316" opacity="0.8" />
          </svg>

          {/* SENSOR HOTSPOTS LAYER: Overlay buttons on top of SVG */}
          {SENSOR_HOTSPOTS.map((spot) => {
            const isActive = activeHotspotId === spot.id;
            return (
              <button
                key={spot.id}
                onClick={() => setActiveHotspotId(spot.id)}
                style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                className={`cursor-pointer absolute -translate-x-1/2 -translate-y-1/2 z-20 group`}
              >
                {/* Expanding pulse animation */}
                <span className={`absolute inset-0 rounded-full scale-100 opacity-75 group-hover:bg-brand-orange/35 transition-all duration-300 ${
                  isActive ? 'animate-ping bg-brand-orange/40 w-8 h-8 -left-2 -top-2' : 'w-4 h-4'
                }`} />
                
                {/* Inner core node dot */}
                <span className={`flex items-center justify-center transition-all duration-300 rounded-full border ${
                  isActive
                    ? 'w-6 h-6 border-brand-orange bg-zinc-950 text-brand-orange hover:scale-105'
                    : 'w-4.5 h-4.5 border-zinc-500 bg-zinc-800 text-zinc-300 group-hover:border-brand-orange'
                }`}>
                  <span className={`rounded-full transition-colors ${
                    isActive ? 'w-2 h-2 bg-brand-orange shadow-[0_0_8px_#f97316]' : 'w-1.5 h-1.5 bg-zinc-400 group-hover:bg-brand-orange'
                  }`} />
                </span>
                
                {/* Minimalist floating tag on hover */}
                <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950 border border-zinc-800 px-2 py-1 rounded text-[8px] font-mono text-zinc-300 tracking-wider whitespace-nowrap uppercase shadow-lg select-none pointer-events-none">
                  {spot.subtitle}
                </div>
              </button>
            );
          })}

        </div>
      </div>

      {/* RIGHT ASPECT: Selected Sensor Intel Panel */}
      <div className="md:col-span-7 flex flex-col justify-between p-6 border border-white/5 bg-[#0e0e11] rounded-lg backdrop-blur-sm shadow-xl">
        
        {/* Telemetry Core Details */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
            <div>
              <div className="flex items-center gap-1.5 font-sans">
                <span className="text-[10px] font-mono font-bold text-brand-orange uppercase tracking-widest bg-brand-orange/10 px-2 py-0.5 rounded">
                  {activeHotspot.signalFreq}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-brand-green font-mono uppercase bg-brand-green/10 px-2 py-0.5 rounded">
                  <Wifi className="w-3 h-3" /> BT Broadcaster
                </span>
              </div>
              <h3 className="text-xl font-bold text-white tracking-tight mt-1.5 font-sans">{activeHotspot.title}</h3>
              <p className="text-xs text-zinc-400 font-mono italic">{activeHotspot.subtitle}</p>
            </div>

            <div className="p-2.5 rounded-lg bg-zinc-950/50 border border-white/5 text-zinc-400">
              {activeHotspotId === 'chest-ecg' && <Waves className="w-6 h-6 text-brand-orange animate-pulse" />}
              {activeHotspotId === 'back-imu' && <Cpu className="w-6 h-6 text-brand-orange" />}
              {activeHotspotId === 'lats-respiration' && <ShieldCheck className="w-6 h-6 text-brand-orange" />}
              {activeHotspotId === 'nape-pod' && <Workflow className="w-6 h-6 text-brand-orange" />}
            </div>
          </div>

          <p className="text-xs text-zinc-300 leading-relaxed font-normal font-sans">
            {activeHotspot.description}
          </p>

          <div className="bg-zinc-950/50 p-4 rounded-lg border border-white/5 space-y-2">
            <span className="text-[9px] text-zinc-400 font-mono tracking-widest block font-bold uppercase">PHYSICAL WAVE OSCILLOGRAPH DIRECT INPUT</span>
            
            {/* Telemetry Chart: Animated path inside SVG box */}
            <div className="h-[90px] w-full bg-zinc-950 rounded-lg relative overflow-hidden flex items-end">
              <svg viewBox="0 0 220 90" className="w-full h-full" preserveAspectRatio="none">
                <path
                  d={wavePath}
                  fill="none"
                  stroke="#f97316"
                  strokeWidth="2"
                  strokeLinecap="round"
                  className="transition-all duration-75 animate-pulse"
                />
              </svg>
              
              {/* Overlay pulse details */}
              <div className="absolute right-3 top-2 flex items-center gap-1.5 bg-zinc-900/85 px-2 py-1 border border-zinc-800 rounded font-mono text-[9px] text-zinc-400">
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                <span>STREAM ACTIVE</span>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Specification Matrix */}
        <div className="mt-5 pt-4 border-t border-zinc-800/80 space-y-4">
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-[9px] text-zinc-500 font-mono block uppercase">MATERIAL COMPOSE</span>
              <span className="text-[11px] font-medium text-zinc-200 mt-0.5 block leading-normal font-sans">{activeHotspot.techSpec.split('|')[0]}</span>
            </div>
            <div>
              <span className="text-[9px] text-zinc-500 font-mono block uppercase">TELEMETRY DECODE</span>
              <span className="text-[11px] font-medium text-zinc-200 mt-0.5 block leading-normal font-sans">{activeHotspot.techSpec.split('|')[1] || 'Real-time Vector Packets'}</span>
            </div>
          </div>

          <div className="flex items-center gap-2 bg-brand-orange/5 border border-brand-orange/15 rounded-lg p-3">
            <Sparkles className="w-4 h-4 text-brand-orange flex-shrink-0" />
            <p className="text-[11px] leading-relaxed text-zinc-300 font-sans">
              <strong className="text-white font-semibold">Form Integration:</strong> Synergizes raw metrics at {activeHotspot.signalFreq === 'Bluetooth LE' ? 'sub-millisecond' : activeHotspot.signalFreq} sync rates with the mirror skeletal model to verify {activeHotspot.metrics.join(', ')}.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}
