
import React, { useEffect, useState } from 'react';
import { SENSOR_HOTSPOTS } from '../data';
import {
  Shirt,
  Wifi,
  Activity,
  Monitor,
  Headphones,
  ShieldCheck,
  Waves,
  Move3D,
  Radio,
  CheckCircle2
} from 'lucide-react';

export default function SmartShirt() {
  const [activeHotspotId, setActiveHotspotId] = useState<string>('upper-body-signal');
  const [waveData, setWaveData] = useState<number[]>(Array(30).fill(40));
  const [oscillatorTimer, setOscillatorTimer] = useState<number>(0);

  const activeHotspot =
    SENSOR_HOTSPOTS.find((hotspot) => hotspot.id === activeHotspotId) || SENSOR_HOTSPOTS[0];

  useEffect(() => {
    const streamInterval = setInterval(() => {
      setWaveData((previousValues) => {
        const nextValues = [...previousValues.slice(1)];

        setOscillatorTimer((time) => {
          const nextTime = time + 0.3;
          let newValue = 40;

          if (activeHotspotId === 'upper-body-signal') {
            newValue = 40 + Math.sin(nextTime * 1.1) * 18;
          } else if (activeHotspotId === 'back-alignment') {
            newValue = 40 + Math.sin(nextTime * 2.2) * 14 + (Math.random() - 0.5) * 5;
          } else if (activeHotspotId === 'side-body-signal') {
            newValue = 40 + Math.sin(nextTime * 0.7) * 22;
          } else {
            newValue = Math.random() > 0.82 ? 14 : Math.random() > 0.82 ? 66 : 43;
          }

          nextValues.push(newValue);
          return nextTime;
        });

        return nextValues;
      });
    }, 90);

    return () => clearInterval(streamInterval);
  }, [activeHotspotId]);

  const wavePath = waveData
    .map((value, index) => `${index === 0 ? 'M' : 'L'} ${(index * 7.5).toFixed(1)} ${value.toFixed(1)}`)
    .join(' ');

  const getActiveIcon = () => {
    if (activeHotspotId === 'upper-body-signal') return <Activity className="w-5 h-5" />;
    if (activeHotspotId === 'back-alignment') return <Move3D className="w-5 h-5" />;
    if (activeHotspotId === 'side-body-signal') return <Waves className="w-5 h-5" />;
    return <Radio className="w-5 h-5" />;
  };

  return (
    <section className="py-24 bg-zinc-950 border-t border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(209,18,18,0.08),transparent_45%)]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-red/10 border border-brand-red/20 rounded-full">
            <Shirt className="w-3.5 h-3.5 text-brand-red" />
            <span className="text-[10px] font-mono font-bold text-brand-red tracking-widest uppercase">
              Sensor Clothing Component
            </span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight">
            How the sensor clothing supports the mirror
          </h2>

          <p className="text-sm text-zinc-400 max-w-3xl mx-auto leading-relaxed">
            The graphic below shows the sensor shirt as one example of IronPath’s sensor-infused clothing. The full
            clothing system could also include sensor shorts or pants for lower-body movements. Together, these garments
            track both movement and muscle engagement so the smart mirror can turn body signals into clear form feedback
            and progress summaries.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-5 flex items-center justify-center border border-white/10 bg-[#0e0e11] rounded-2xl p-6 relative min-h-[420px] overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:18px_18px]" />

            <div className="w-full max-w-[300px] relative aspect-[3/4] flex items-center justify-center">
              <svg viewBox="0 0 120 160" className="w-full h-full drop-shadow-[0_4px_24px_rgba(0,0,0,0.55)]">
                <defs>
                  <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#1E293B" stopOpacity="0.9" />
                    <stop offset="60%" stopColor="#0F172A" stopOpacity="0.95" />
                    <stop offset="100%" stopColor="#020617" stopOpacity="1" />
                  </linearGradient>

                  <linearGradient id="shirtAccent" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#d11212" stopOpacity="0.75" />
                    <stop offset="100%" stopColor="#d11212" stopOpacity="0.08" />
                  </linearGradient>
                </defs>

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

                <path
                  d="M 28,45 C 26,72 24,105 31,154"
                  fill="none"
                  stroke="url(#shirtAccent)"
                  strokeWidth="2"
                  strokeDasharray="3,3"
                />
                <path
                  d="M 92,45 C 94,72 96,105 89,154"
                  fill="none"
                  stroke="url(#shirtAccent)"
                  strokeWidth="2"
                  strokeDasharray="3,3"
                />
                <path
                  d="M 32,8 C 38,10 42,12 60,12 C 78,12 82,10 88,8"
                  fill="none"
                  stroke="#475569"
                  strokeWidth="1"
                />

                <circle cx="60" cy="22" r="3.2" fill="none" stroke="#d11212" strokeWidth="1" />
                <polygon points="60,20 62.5,23.5 57.5,23.5" fill="#d11212" opacity="0.85" />
              </svg>

              {SENSOR_HOTSPOTS.map((spot) => {
                const isActive = activeHotspotId === spot.id;

                return (
                  <button
                    key={spot.id}
                    onClick={() => setActiveHotspotId(spot.id)}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className="cursor-pointer absolute -translate-x-1/2 -translate-y-1/2 z-20 group"
                    aria-label={`View ${spot.title}`}
                  >
                    <span
                      className={`absolute inset-0 rounded-full opacity-75 transition-all duration-300 ${
                        isActive
                          ? 'animate-ping bg-brand-red/40 w-8 h-8 -left-2 -top-2'
                          : 'w-4 h-4 group-hover:bg-brand-red/25'
                      }`}
                    />

                    <span
                      className={`flex items-center justify-center transition-all duration-300 rounded-full border ${
                        isActive
                          ? 'w-6 h-6 border-brand-red bg-zinc-950 text-brand-red'
                          : 'w-4.5 h-4.5 border-zinc-500 bg-zinc-800 text-zinc-300 group-hover:border-brand-red'
                      }`}
                    >
                      <span
                        className={`rounded-full transition-colors ${
                          isActive
                            ? 'w-2 h-2 bg-brand-red shadow-[0_0_8px_#d11212]'
                            : 'w-1.5 h-1.5 bg-zinc-400 group-hover:bg-brand-red'
                        }`}
                      />
                    </span>

                    <div className="absolute top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-zinc-950 border border-zinc-800 px-2 py-1 rounded text-[8px] font-mono text-zinc-300 tracking-wider whitespace-nowrap uppercase shadow-lg select-none pointer-events-none">
                      {spot.subtitle}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-7 flex flex-col justify-between p-6 border border-white/5 bg-[#0e0e11] rounded-2xl backdrop-blur-sm shadow-xl">
            <div className="space-y-5">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 border-b border-zinc-800 pb-5">
                <div>
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[10px] font-mono font-bold text-brand-red uppercase tracking-widest bg-brand-red/10 px-2 py-0.5 rounded">
                      {activeHotspot.signalFreq}
                    </span>

                    <span className="flex items-center gap-1 text-[10px] text-zinc-300 font-mono uppercase bg-white/5 px-2 py-0.5 rounded">
                      <Wifi className="w-3 h-3 text-brand-red" />
                      Sends info to mirror
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-white tracking-tight mt-3">
                    {activeHotspot.title}
                  </h3>

                  <p className="text-xs text-zinc-500 font-mono mt-1">{activeHotspot.subtitle}</p>
                </div>

                <div className="p-3 rounded-xl bg-zinc-950/60 border border-white/5 text-brand-red">
                  {getActiveIcon()}
                </div>
              </div>

              <p className="text-sm text-zinc-400 leading-relaxed">
                {activeHotspot.description}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeHotspot.metrics.map((metric) => (
                  <div key={metric} className="p-3 bg-zinc-950/50 border border-white/5 rounded-xl">
                    <CheckCircle2 className="w-4 h-4 text-brand-red mb-2" />
                    <p className="text-[10px] font-mono text-zinc-300 uppercase leading-relaxed">
                      {metric}
                    </p>
                  </div>
                ))}
              </div>

              <div className="p-4 bg-zinc-950/50 border border-white/5 rounded-xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                    Example body signal
                  </span>
                  <span className="text-[10px] font-mono text-brand-red uppercase">
                    Example only
                  </span>
                </div>

                <svg viewBox="0 0 220 80" className="w-full h-24 overflow-visible">
                  <defs>
                    <linearGradient id="signalGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#d11212" stopOpacity="0.15" />
                      <stop offset="50%" stopColor="#d11212" stopOpacity="0.95" />
                      <stop offset="100%" stopColor="#d11212" stopOpacity="0.15" />
                    </linearGradient>
                  </defs>

                  {[20, 40, 60].map((y) => (
                    <line
                      key={y}
                      x1="0"
                      y1={y}
                      x2="220"
                      y2={y}
                      stroke="rgba(255,255,255,0.08)"
                      strokeWidth="1"
                    />
                  ))}

                  <path
                    d={wavePath}
                    fill="none"
                    stroke="url(#signalGradient)"
                    strokeWidth="2.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />

                  <circle cx="212" cy={waveData[waveData.length - 1]} r="3" fill="#d11212" />
                </svg>
              </div>

              <div className="p-4 bg-brand-red/5 border border-brand-red/20 rounded-xl">
                <h4 className="text-xs font-bold text-white mb-2 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-brand-red" />
                  How this supports the final design
                </h4>

                <p className="text-xs text-zinc-400 leading-relaxed">
                  This shirt is shown as an example of IronPath’s sensor clothing. In the full system, sensor-infused
                  bottoms could also be used to track lower-body movement and muscle engagement. The clothing sends this
                  information to the smart mirror, where it is translated into simple feedback. If form becomes risky
                  during a heavy lift, earbuds provide a short safety alert so the user can stop after the current rep
                  and reset.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-5">
          <div className="p-5 bg-white/[0.03] border border-white/5 rounded-xl">
            <Shirt className="w-5 h-5 text-brand-red mb-3" />
            <h4 className="text-sm font-bold text-white">1. Clothing reads body signals</h4>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
              The shirt is one example of the sensor clothing. Bottoms could also be used for lower-body lifts to track
              movement, posture, and muscle engagement.
            </p>
          </div>

          <div className="p-5 bg-white/[0.03] border border-white/5 rounded-xl">
            <Monitor className="w-5 h-5 text-brand-red mb-3" />
            <h4 className="text-sm font-bold text-white">2. Mirror explains feedback</h4>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
              The mirror turns clothing data into simple coaching cues, progress summaries, and workout controls.
            </p>
          </div>

          <div className="p-5 bg-white/[0.03] border border-white/5 rounded-xl">
            <Headphones className="w-5 h-5 text-brand-red mb-3" />
            <h4 className="text-sm font-bold text-white">3. Earbuds alert for safety</h4>
            <p className="text-xs text-zinc-500 mt-2 leading-relaxed">
              Earbuds provide quick safety cues during heavy lifts without becoming a second visual interface.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}