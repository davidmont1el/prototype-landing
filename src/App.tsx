/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { 
  Dumbbell, 
  Activity, 
  TrendingUp, 
  Award, 
  ShieldCheck, 
  Gauge, 
  Smartphone, 
  Bluetooth, 
  Clock, 
  ChevronRight, 
  Heart, 
  Star, 
  Info, 
  Menu, 
  X,
  Target,
  Sparkles,
  ArrowDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import SmartMirror from './components/SmartMirror';
import SmartShirt from './components/SmartShirt';
import PricingModel from './components/PricingModel';
import { FAQS, RECENT_TESTIMONIALS } from './data';

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  // Smooth scroll to pre-order ID
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen kinetic-dark text-zinc-100 font-sans selection:bg-brand-orange selection:text-zinc-950 overflow-x-hidden">
      
      {/* Background Ambience / Glowing particles mock */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[600px] pointer-events-none overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[20%] w-[450px] h-[450px] rounded-full bg-brand-orange/6 filter blur-[150px] animate-pulse" />
        <div className="absolute top-[20%] right-[15%] w-[450px] h-[450px] rounded-full bg-brand-blue/6 filter blur-[160px]" />
      </div>

      {/* HEADER NAVIGATION */}
      <header className="sticky top-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5 cursor-pointer" onClick={() => scrollToSection('hero')}>
            <div className="w-10 h-10 rounded-lg bg-brand-orange/15 border border-brand-orange/40 flex items-center justify-center glow-orange">
              <Dumbbell className="w-5 h-5 text-brand-orange" />
            </div>
            <div>
              <div className="flex items-baseline gap-1">
                <span className="text-xl font-black tracking-widest text-white font-sans italic">AURA</span>
                <span className="text-[10px] font-mono text-brand-orange font-bold tracking-widest pl-0.5">BIO-MESH</span>
              </div>
              <span className="text-[9px] text-zinc-500 font-mono uppercase tracking-widest block -mt-1 font-semibold">PRECISION SMART LAB</span>
            </div>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-xs font-mono tracking-wider text-zinc-400">
            <button onClick={() => scrollToSection('how-it-works')} className="cursor-pointer hover:text-brand-orange hover:underline hover:underline-offset-4 transition-colors">SYNERGY LOOP</button>
            <button onClick={() => scrollToSection('interactive-mirror')} className="cursor-pointer hover:text-brand-orange hover:underline hover:underline-offset-4 transition-colors">GLASS HUD</button>
            <button onClick={() => scrollToSection('smart-shirt')} className="cursor-pointer hover:text-brand-orange hover:underline hover:underline-offset-4 transition-colors">AEROWEAVE™ SHIRT</button>
            <button onClick={() => scrollToSection('biometric-specs')} className="cursor-pointer hover:text-brand-orange hover:underline hover:underline-offset-4 transition-colors">BIO-STATS</button>
            <button onClick={() => scrollToSection('pricing')} className="cursor-pointer hover:text-brand-orange hover:underline hover:underline-offset-4 transition-colors">RESERVE PLATFORM</button>
          </nav>

          {/* Desktop Right CTA */}
          <div className="hidden md:flex items-center gap-4">
            <span className="text-[10px] font-mono text-brand-orange flex items-center gap-1.5 font-bold tracking-wider">
              <span className="inline-block w-2 h-2 rounded-full bg-brand-orange animate-ping" />
              BETA ACCREDITED
            </span>
            <button 
              onClick={() => scrollToSection('pricing')}
              className="cursor-pointer text-xs font-mono font-bold bg-brand-orange hover:bg-white text-zinc-950 px-5 py-2.5 rounded-lg uppercase tracking-wider transition-all hover:scale-105 active:scale-95 duration-200 shadow-[0_0_15px_rgba(249,115,22,0.25)]"
            >
              PRE-ORDER CORE
            </button>
          </div>

          {/* Mobile Menu Icon */}
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            className="md:hidden p-2 text-zinc-400 hover:text-white"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </header>

      {/* MOBILE NAV PANEL */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-20 bg-zinc-950/95 border-b border-zinc-900 p-6 z-40 md:hidden font-mono text-center space-y-6 shadow-2xl"
          >
            <div className="flex flex-col gap-5 text-sm uppercase">
              <button onClick={() => scrollToSection('how-it-works')} className="text-zinc-300 hover:text-brand-orange">Synergy Loop</button>
              <button onClick={() => scrollToSection('interactive-mirror')} className="text-zinc-300 hover:text-brand-orange">Glass HUD</button>
              <button onClick={() => scrollToSection('smart-shirt')} className="text-zinc-300 hover:text-brand-orange">Aeroweave™ Shirt</button>
              <button onClick={() => scrollToSection('biometric-specs')} className="text-zinc-300 hover:text-brand-orange">Bio-Stats</button>
              <button onClick={() => scrollToSection('pricing')} className="text-zinc-300 hover:text-brand-orange">Pricing & Reservation</button>
            </div>
            <div className="pt-4 border-t border-zinc-900 flex flex-col gap-4 items-center">
              <span className="text-xs text-brand-orange flex items-center gap-1.5 justify-center font-bold">
                <span className="w-2 h-2 rounded-full bg-brand-orange animate-ping" />
                SYSTEM ENTRANCE LIVE
              </span>
              <button 
                onClick={() => scrollToSection('pricing')}
                className="w-full text-xs font-bold bg-brand-orange text-zinc-950 py-3 rounded-lg uppercase tracking-wider"
              >
                PRE-ORDER SYSTEM
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO SECTION */}
      <section id="hero" className="relative pt-12 pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content (6 cols) */}
          <div className="lg:col-span-7 space-y-8 text-left">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-orange/10 border border-brand-orange/20 rounded-full">
              <Bluetooth className="w-3.5 h-3.5 text-brand-orange animate-pulse" />
              <span className="text-[10px] font-mono font-bold text-brand-orange tracking-widest uppercase">
                Sensored Shirt + Smart Mirror Synergy
              </span>
            </div>

            {/* Display Headline */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.08] italic">
              BEYOND REFLECTION.<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange via-amber-400 to-brand-blue">
                TRUE KINETIC INTEGRITY.
              </span>
            </h1>

            {/* Sub-headline */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-sans">
              Meet <strong className="text-white font-medium">AURA</strong>: The world's first unified exercise environment syncing raw high-density biosensors embedded directly in a compression garment to a clinical-grade smart mirror. Every angle is measured, every heartbeat clocked, and every rep validated with sub-millisecond Bluetooth precision.
            </p>

            {/* Features Row */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 font-sans">
              <div className="flex gap-2.5 items-start">
                <div className="p-1.5 text-brand-orange bg-brand-orange/10 border border-brand-orange/15 rounded-lg flex-shrink-0">
                  <Target className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-200">99.8% Form Precision</h4>
                  <p className="text-[10.5px] text-zinc-400 mt-1 leading-normal text-slate-300">Zero-latency skeletal calculations protect your joints on heavy sets.</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="p-1.5 text-brand-blue bg-brand-blue/10 border border-brand-blue/15 rounded-lg flex-shrink-0">
                  <Activity className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-200">Clinical Bio-Telemetry</h4>
                  <p className="text-[10.5px] text-zinc-400 mt-1 leading-normal text-slate-300">Silver yarns weave ECG and breath volume directly into muscles.</p>
                </div>
              </div>

              <div className="flex gap-2.5 items-start">
                <div className="p-1.5 text-brand-green bg-brand-green/10 border border-brand-green/15 rounded-lg flex-shrink-0">
                  <Gauge className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-zinc-200">Strict Rep Auditing</h4>
                  <p className="text-[10.5px] text-zinc-400 mt-1 leading-normal text-slate-300">Assumes a direct Bluetooth handshake so lazy half-reps don't count.</p>
                </div>
              </div>
            </div>

            {/* CTA Interaction Trigger block */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button 
                onClick={() => scrollToSection('pricing')}
                className="cursor-pointer text-center px-8 py-4 bg-brand-orange hover:bg-amber-500 text-white font-extrabold tracking-wide text-xs uppercase rounded-lg transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:scale-105"
              >
                SECURE PLATFORM RESERVATION
              </button>
              
              <button 
                onClick={() => scrollToSection('interactive-mirror')}
                className="cursor-pointer text-center px-6 py-4 bg-zinc-900 border border-zinc-800 hover:border-zinc-700 hover:bg-zinc-805 font-bold text-xs text-zinc-100 rounded-lg transition-all flex items-center justify-center gap-1.5"
              >
                <span>TEST THE GLASS HUD</span>
                <ArrowDown className="w-4 h-4 text-brand-orange animate-bounce" />
              </button>
            </div>

            {/* Interactive Stats Badge */}
            <div className="flex items-center gap-3 pt-4 border-t border-white/5">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border border-zinc-950 font-sans" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=60&h=60" alt="Athlete 1" referrerPolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border border-zinc-950 font-sans" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=60&h=60" alt="Athlete 2" referrerPolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border border-zinc-950 font-sans" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=60&h=60" alt="Athlete 3" referrerPolicy="no-referrer" />
              </div>
              <p className="text-[11px] text-zinc-500 font-mono">
                Pioneered by <span className="text-zinc-300 font-bold">1,200+ Competitors</span>, Physical Therapists, & Sports Coaches.
              </p>
            </div>

          </div>

          {/* Hero Visual Mockup Frame (5 cols) */}
          <div className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center">
            {/* Main Hologram Stand Case */}
            <div className="w-[310px] sm:w-[350px] aspect-[9/16] bg-zinc-950 border border-white/10 rounded-[2.5rem] relative p-4 flex flex-col justify-between glow-orange shadow-[0_0_50px_rgba(249,115,22,0.06)] overflow-hidden">
              
              <div className="absolute inset-0 bg-gradient-to-tr from-zinc-950 via-zinc-900/40 to-transparent" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-gradient-to-r from-brand-orange/10 to-brand-blue/10 rounded-full blur-3xl" />

              {/* HUD Screen Header */}
              <div className="z-10 flex justify-between items-center text-zinc-500 text-[10px] font-mono border-b border-zinc-900 pb-2.5">
                <span>SYSTEM VERSION: V4.8</span>
                <span className="flex items-center gap-1 text-brand-orange">
                  <span className="inline-block w-1.5 h-1.5 rounded-full bg-brand-orange animate-pulse" />
                  ONLINE RE-FLUX
                </span>
              </div>

              {/* Mid Holographic vector illustration */}
              <div className="z-10 py-10 flex-grow flex flex-col items-center justify-center relative space-y-6">
                
                {/* SVG Skeleton mockup representing high-end graphics */}
                <svg viewBox="0 0 100 100" className="w-48 h-48 opacity-80 drop-shadow-[0_0_15px_rgba(249,115,22,0.4)]">
                  {/* Outer circle layout */}
                  <circle cx="50" cy="50" r="47" stroke="#374151" strokeWidth="0.5" strokeDasharray="4,4" fill="none" />
                  <circle cx="50" cy="50" r="38" stroke="#1f2937" strokeWidth="1" fill="none" />
                  <circle cx="50" cy="50" r="12" stroke="#f97316" strokeWidth="0.5" strokeDasharray="2,2" fill="none" className="animate-spin" />
                  
                  {/* Bone vectors */}
                  <line x1="50" y1="18" x2="50" y2="72" stroke="#ffffff" strokeWidth="1.5" />
                  <line x1="28" y1="36" x2="72" y2="36" stroke="#ffffff" strokeWidth="1.5" />
                  <line x1="50" y1="52" x2="35" y2="80" stroke="#f97316" strokeWidth="1.5" />
                  <line x1="50" y1="52" x2="65" y2="80" stroke="#f97316" strokeWidth="1.5" />
                  
                  {/* Symmetrical joint points */}
                  <circle cx="50" cy="18" r="4.5" fill="#ffffff" />
                  <circle cx="50" cy="18" r="2" fill="#f97316" />
                  <circle cx="28" cy="36" r="3.2" fill="#60a5fa" />
                  <circle cx="72" cy="36" r="3.2" fill="#60a5fa" />
                  <circle cx="35" cy="80" r="3" fill="#ffffff" />
                  <circle cx="65" cy="80" r="3" fill="#ffffff" />

                  {/* Radiometric grids */}
                  <line x1="50" y1="0" x2="50" y2="100" stroke="#71717a" strokeWidth="0.1" strokeDasharray="2,2" />
                  <line x1="0" y1="50" x2="100" y2="50" stroke="#71717a" strokeWidth="0.1" strokeDasharray="2,2" />
                </svg>

                {/* Micro tech specs overlay */}
                <div className="text-center font-mono space-y-1">
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest block">JOINT POSITION GRID</span>
                  <span className="text-base font-extrabold text-white tracking-widest block">BIOMECH MATRIX</span>
                  <div className="flex gap-2 justify-center text-[9px] text-brand-orange leading-none font-bold">
                    <span>X: 182.43</span>
                    <span>Y: 094.12</span>
                    <span>LIMIT: PASS</span>
                  </div>
                </div>

              </div>

              {/* HUD Screen Footer */}
              <div className="z-10 bg-zinc-900/50 p-3 rounded-2xl border border-zinc-850 flex items-center justify-between">
                <div>
                  <p className="text-[8px] font-mono text-zinc-400 tracking-wider">AURA DEPLOYMENT STATUS</p>
                  <p className="text-[10px] font-bold text-zinc-200">AURA-STAND CAP-43</p>
                </div>
                <div className="h-2 w-2 rounded-full bg-brand-orange animate-pulse" />
              </div>

            </div> {/* Stand case end */}

            {/* Glowing background halo */}
            <div className="absolute inset-0 bg-brand-orange/2 filter blur-3xl pointer-events-none" />
          </div>

        </div>
      </section>

      {/* SYNERGISTIC LOOP EXPLAINER */}
      <section id="how-it-works" className="py-24 bg-zinc-950 border-t border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase block">
              ENGINEERED COLLABORATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              The Bio-Bluetooth Synergetic Loop
            </h2>
            <p className="text-sm text-zinc-400 max-w-2xl mx-auto">
              How the combination of a clinical-grade Smart Shirt and the Aura Glass HUD computes accurate biomechanics on every rep.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left font-sans">
            
            {/* Step 1 */}
            <div className="p-6 border border-white/5 bg-zinc-900/20 backdrop-blur-sm rounded-lg space-y-4 hover:border-brand-orange/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange font-mono font-bold">
                01
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">The Bio-Mesh Hug</h3>
              <p className="text-xs text-zinc-400 leading-relaxed text-slate-300">
                Slip on the custom Aeroweave compression garment. Instead of bulky sensors strapped to your skin, our bio-conductive silver threads are woven directly into the fabrics, flexing organically as you load your skeleton.
              </p>
              <ul className="text-[10.5px] text-zinc-500 font-mono space-y-1 pt-2">
                <li>• Real Heart Rate waves (ECG)</li>
                <li>• Expansion grids check air volume</li>
                <li>• No bulky hard cases</li>
              </ul>
            </div>

            {/* Step 2 */}
            <div className="p-6 border border-white/5 bg-zinc-900/20 backdrop-blur-sm rounded-lg space-y-4 hover:border-brand-blue/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-brand-blue/10 border border-brand-blue/20 flex items-center justify-center text-brand-blue font-mono font-bold">
                02
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">The BLE Handshake</h3>
              <p className="text-xs text-zinc-400 leading-relaxed text-slate-300">
                Turn on the Smart Core nape pod. Standard camera systems fail under shadows or fast workouts. The Aura Core hub broadcasts muscle expansion and thoracic orientation directly to the smart mirror, providing secondary absolute position layers.
              </p>
              <ul className="text-[10.5px] text-zinc-500 font-mono space-y-1 pt-2">
                <li>• 2.4GHz Ultra-Low Latency Broadcast</li>
                <li>• Immunity from camera occlusion</li>
                <li>• Up to 100 hours of continuous juice</li>
              </ul>
            </div>

            {/* Step 3 */}
            <div className="p-6 border border-white/5 bg-zinc-900/20 backdrop-blur-sm rounded-lg space-y-4 hover:border-brand-orange/20 transition-all">
              <div className="w-10 h-10 rounded-lg bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center text-brand-orange font-mono font-bold">
                03
              </div>
              <h3 className="text-lg font-bold text-white tracking-tight">The Reflection Audit</h3>
              <p className="text-xs text-zinc-400 leading-relaxed text-slate-300">
                The Aura Glass Smart Mirror projects a high-contrast 3D skeletal frame matching your raw joints. Kinetic faults turn immediately orange or red, warning you of spine misalignment, knee values, or improper bar paths in real-time.
              </p>
              <ul className="text-[10.5px] text-zinc-500 font-mono space-y-1 pt-2">
                <li>• Interactive HUD overlays on glass</li>
                <li>• Audits symmetry limits</li>
                <li>• Audio alerts prevent severe flaws</li>
              </ul>
            </div>

          </div>

        </div>
      </section>

      {/* INTERACTIVE EXPERIENCE: SMART MIRROR APPS */}
      <section id="interactive-mirror" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase block">
            LIVE PROTOCOL LABS
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Deploy the Smart Mirror HUD
          </h2>
          <p className="text-sm text-zinc-400 max-w-xl mx-auto">
            Interact with the simulated sports mirror. Select different movements to observe how angle precision shifts based on posture adjustments.
          </p>
        </div>

        {/* Nest Interactive SmartMirror Component */}
        <SmartMirror />

      </section>

      {/* INTERACTIVE EXPERIENCE: BIO-MESH SHIRT DETECTOR */}
      <section id="smart-shirt" className="py-24 bg-zinc-950 border-t border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase block">
              WEARABLE HARDWARE BIO-ANALYSIS
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Aura Aeroweave™ Biometic Shirt
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              Tap the glowing hotspots across the compression wear to discover specs and trace real-time live-updating oscillographic signals.
            </p>
          </div>

          {/* Nest Interactive SmartShirt Component */}
          <SmartShirt />

        </div>
      </section>

      {/* ANALYTICS SPECTRE DASHBOARD SHOWCASE */}
      <section id="biometric-specs" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Dashboard description (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase block">
              STALLION ANALYTICAL ENGINE
            </span>
            <h2 className="text-3xl font-black text-white tracking-tight leading-tight">
              Biomechanical Session Analytics
            </h2>
            <p className="text-sm text-zinc-400 leading-relaxed font-sans">
              When you conclude your sweat, your session records push onto a beautiful companion mobile app or your private Cloud dashboard. Review historic progress factors such as:
            </p>

            <div className="space-y-4 font-sans text-xs">
              <div className="flex gap-3 hover:bg-zinc-900/40 p-2.5 rounded-xl transition-all">
                <span className="font-mono text-xs font-bold text-brand-orange bg-brand-orange/15 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  1
                </span>
                <div>
                  <h4 className="font-bold text-white">Dynamic Form Consistency Scale</h4>
                  <p className="text-zinc-400 mt-0.5">Calculates your deviation vectors on first reps relative to fatigued sets at the finish to identify muscle imbalances.</p>
                </div>
              </div>

              <div className="flex gap-3 hover:bg-zinc-900/40 p-2.5 rounded-xl transition-all">
                <span className="font-mono text-xs font-bold text-brand-blue bg-brand-blue/15 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  2
                </span>
                <div>
                  <h4 className="font-bold text-white">HR Recovery Latency Speed</h4>
                  <p className="text-zinc-400 mt-0.5">Measures precisely how few seconds of physical rest are demanded by your heart wall back to nominal rates between working sets.</p>
                </div>
              </div>

              <div className="flex gap-3 hover:bg-zinc-900/40 p-2.5 rounded-xl transition-all">
                <span className="font-mono text-xs font-bold text-brand-green bg-brand-green/15 rounded-full w-6 h-6 flex items-center justify-center flex-shrink-0">
                  3
                </span>
                <div>
                  <h4 className="font-bold text-white"> Valsalva Brace Efficiency Counter</h4>
                  <p className="text-zinc-400 mt-0.5">Coaches you on breathing rhythm syncs during squats or big hinges, ensuring peak abdominal pressures protect your vertebrae spine.</p>
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center gap-3">
              <Smartphone className="w-5 h-5 text-brand-orange animate-pulse" />
              <span className="text-xs text-zinc-400 font-mono">Mobile Companion available for iOS and Android.</span>
            </div>
          </div>

          {/* Graphic Dashboard (7 cols) */}
          <div className="lg:col-span-7 bg-zinc-900/40 border border-white/5 p-6 sm:p-8 rounded-lg relative overflow-hidden backdrop-blur-sm space-y-6">
            <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-to-bl from-brand-orange/10 to-transparent blur-2xl pointer-events-none" />
            
            {/* Header stats dashboard */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-4 border-b border-zinc-800 pb-4">
              <div>
                <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase block">SESSION HISTORY REPORT</span>
                <span className="text-lg font-bold text-white font-sans mt-0.5 block">Heavy Leg Session — 12 Squats Set</span>
              </div>
              <div className="font-mono text-right flex sm:flex-col gap-2 sm:gap-0">
                <span className="text-zinc-500 text-[9px] uppercase">SESSION QUALITY</span>
                <span className="text-brand-green font-bold text-[14px]">EXCELLENT (96.4%)</span>
              </div>
            </div>

            {/* Dashboard analytical columns widget */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              
              {/* Box 1 */}
              <div className="p-3 bg-zinc-950/40 border border-white/5 rounded-lg space-y-1">
                <span className="text-[9px] text-zinc-400 font-mono block">VELOCITY CONSISTENCY</span>
                <span className="text-lg font-black text-white font-sans block">94.8%</span>
                <p className="text-[10px] text-zinc-500 leading-normal text-slate-400">Maintained continuous lift speeds under load fatigue.</p>
              </div>

              {/* Box 2 */}
              <div className="p-3 bg-zinc-950/40 border border-white/5 rounded-lg space-y-1">
                <span className="text-[9px] text-zinc-400 font-mono block">SPINE DEVIATION LIMIT</span>
                <span className="text-lg font-black text-brand-orange font-sans block">{"<"} 2.8° Max</span>
                <p className="text-[10px] text-zinc-500 leading-normal text-slate-400">Lumbar and neck lines perfectly aligned during load transitions.</p>
              </div>

              {/* Box 3 */}
              <div className="p-3 bg-zinc-950/40 border border-white/5 rounded-lg space-y-1">
                <span className="text-[9px] text-zinc-400 font-mono block">RESPIRED OXYGEN RATE</span>
                <span className="text-lg font-black text-white font-sans block">18 Breaths/Min</span>
                <p className="text-[10px] text-zinc-500 leading-normal text-slate-400">Deep breath-sync triggers strict abdominal walls brace.</p>
              </div>

            </div>

            {/* Simulated Session Chart using beautiful inline vectors */}
            <div className="p-4 bg-zinc-950/50 rounded-lg border border-white/5 space-y-3.5">
              <div className="flex justify-between items-baseline">
                <span className="text-[9px] text-zinc-400 font-mono tracking-widest block font-medium uppercase">REPS KINETICS PATH INDEX (SQUAT)</span>
                <span className="text-[9px] text-brand-orange font-mono pl-2 block leading-none font-bold">REPS 1 TO 12 METERS</span>
              </div>

              <div className="h-[120px] w-full flex items-end justify-between px-2 gap-1 relative overflow-hidden">
                
                {/* Background gridlines */}
                <div className="absolute inset-0 flex flex-col justify-between pointer-events-none opacity-5">
                  <div className="border-b border-white w-full" />
                  <div className="border-b border-white w-full" />
                  <div className="border-b border-white w-full" />
                </div>

                {/* Bars */}
                {[98, 97, 96, 98, 99, 95, 96, 94, 91, 95, 93, 89].map((val, idx) => (
                  <div key={idx} className="flex-1 flex flex-col items-center gap-1.5 h-full justify-end z-10 group">
                    {/* Hover detail */}
                    <div className="opacity-0 group-hover:opacity-100 absolute bottom-16 bg-[#050505] text-brand-orange border border-zinc-805 rounded px-2 py-0.5 text-[9px] font-mono transition-opacity pointer-events-none select-none z-20">
                      R{idx+1}: {val}%
                    </div>
                    {/* Bar stack */}
                    <div 
                      className={`w-full rounded-t-sm transition-all duration-300 ${
                        val > 95 ? 'bg-brand-orange' : val > 90 ? 'bg-brand-blue' : 'bg-brand-red'
                      }`}
                      style={{ height: `${val}%` }}
                    />
                    <span className="text-[8px] text-zinc-500 font-mono">R{idx+1}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Live calibration notice */}
            <div className="flex items-center gap-2 bg-brand-green/5 border border-brand-green/25 rounded-lg p-3 text-xs text-zinc-300">
              <Award className="w-4 h-4 text-brand-green flex-shrink-0 animate-pulse" />
              <span>Calibrated via real-world force plate sync tests with Olympic barbell lifters. True accuracy limits.</span>
            </div>

          </div>

        </div>
      </section>

      {/* AMBASSADORS TESTIMONIALS */}
      <section className="py-24 bg-zinc-950 border-t border-b border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase block">
              ATHLETE VERIFICATION
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Tested Under Heavy Steel loads
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              Read how competing weightlifters and physical science pros employ the Aura Smart Mirror to audit posture patterns.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left font-sans">
            {RECENT_TESTIMONIALS.map((t) => (
              <div key={t.id} className="p-6 sm:p-8 backdrop-blur-xl bg-white/5 border border-white/10 rounded-lg flex flex-col justify-between">
                <div>
                  {/* Stars block */}
                  <div className="flex items-center gap-0.5 text-amber-500 mb-4 select-none">
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>

                  <p className="text-sm text-zinc-200 leading-relaxed italic pr-2 font-normal">
                    "{t.comment}"
                  </p>
                </div>

                {/* Profile detail */}
                <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-white/5">
                  <img className="w-10 h-10 rounded-full object-cover border border-white/5" src={t.avatarUrl} alt={t.author} referrerPolicy="no-referrer" />
                  <div>
                    <h4 className="text-xs font-bold text-white">{t.author}</h4>
                    <p className="text-[10.5px] text-zinc-500 font-mono tracking-wide">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

            {/* FREQUENTLY ASKED QUESTIONS */}
      <section className="py-24 max-w-4xl mx-auto px-4 sm:px-6">
        
        <div className="text-center space-y-3 mb-16">
          <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase block">
            INTEL & SPEC FAQ
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
            Have Questions about Aura?
          </h2>
          <p className="text-sm text-zinc-400">
            Learn more about washing smart yarn, Bluetooth latencies, and setup allocations.
          </p>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div 
                key={idx} 
                className="border border-white/5 bg-[#0e0e11] rounded-lg overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="cursor-pointer w-full text-left p-5 flex justify-between items-center text-zinc-200 hover:text-white font-medium"
                >
                  <span className="text-sm font-semibold tracking-tight">{faq.question}</span>
                  <ChevronRight className={`w-4 h-4 text-brand-orange transition-transform duration-300 ${isOpen ? 'rotate-90' : 'rotate-0'}`} />
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      <div className="p-5 pt-0 text-xs text-zinc-400 border-t border-white/5 leading-relaxed font-normal">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </section>

      {/* PRICING & CUSTOMIZER SECTION */}
      <section id="pricing" className="py-24 bg-zinc-950 border-t border-white/5 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center space-y-3 mb-16">
            <span className="text-xs font-mono font-bold tracking-widest text-brand-orange uppercase block animate-pulse">
              LIMITED PIONEER INVITATION BATCH
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight font-sans">
              Build Your Private Aura Lab
            </h2>
            <p className="text-sm text-zinc-400 max-w-xl mx-auto">
              Reserve your smart mirror display and configure custom compression garments sizes for early-batch delivery.
            </p>
          </div>

          {/* Pricing component nested */}
          <PricingModel />

        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/5 bg-[#050505] py-12 px-4 sm:px-6 lg:px-8 text-center text-zinc-500 font-mono text-xs select-none">
        
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-6">
          
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-brand-orange/15 border border-brand-orange/30 flex items-center justify-center">
              <Dumbbell className="w-4 h-4 text-brand-orange" />
            </div>
            <span className="font-extrabold text-[#fff]">AURA ATHLETICS LAB</span>
          </div>

          <div className="flex gap-6 text-zinc-400 text-[11px]">
            <span className="hover:text-white cursor-pointer" onClick={() => scrollToSection('hero')}>Top</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer" onClick={() => scrollToSection('how-it-works')}>Working Synergy</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer" onClick={() => scrollToSection('interactive-mirror')}>Mirror Demo</span>
            <span>•</span>
            <span className="hover:text-white cursor-pointer" onClick={() => scrollToSection('pricing')}>Get Casing</span>
          </div>

          <div>
            <p>© 2026 Aura Athletic Systems. All rights reserved.</p>
          </div>

        </div>

        {/* HUD state footprint banner */}
        <div className="max-w-7xl mx-auto border-t border-white/5 mt-8 pt-6 flex flex-col sm:flex-row justify-between text-[10px] text-zinc-650 gap-4">
          <div className="flex gap-4 justify-center">
            <span>SECURE LINK: SEC_SYNC_ACTIVE</span>
            <span>SIGNAL RATE: 2.4 GHZ LE</span>
            <span>CALIBRATION PROTOCOL: ISO-9001-KINETIC</span>
          </div>
          <div>
            <span>SYSTEM ENTRANCE RECORDED • TIME LOCK: 2026-05-21 UTC</span>
          </div>
        </div>

      </footer>

    </div>
  );
}
