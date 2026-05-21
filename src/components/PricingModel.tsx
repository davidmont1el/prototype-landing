import React, { useState } from 'react';
import { Package, CheckCircle, ShieldCheck, CreditCard, ChevronRight, Share2, Sparkles } from 'lucide-react';

export default function PricingModel() {
  const [mirrorSize, setMirrorSize] = useState<'43' | '55'>('43');
  const [extraShirts, setExtraShirts] = useState<number>(1); // Additional shirts
  const [shirtSize, setShirtSize] = useState<string>('M');
  const [selectedColor, setSelectedColor] = useState<string>('Obsidian');
  const [cryoCooling, setCryoCooling] = useState<boolean>(false);
  
  // Form Reservation State
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [zipCode, setZipCode] = useState<string>('');
  const [isReserved, setIsReserved] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [reservePassCode, setReservePassCode] = useState<string>('');

  // Math config
  const baseMirrorPrice = mirrorSize === '43' ? 1495 : 1995;
  const shirtUnitPrice = 129;
  const cryoCoolingCost = cryoCooling ? 59 : 0;
  
  // Total prices
  const totalSubtotal = baseMirrorPrice + (extraShirts * shirtUnitPrice) + cryoCoolingCost;
  const bundleDiscount = extraShirts >= 2 ? 75 : 0; 
  const shippingCost = 0; // FREE shipping
  const grandTotal = totalSubtotal - bundleDiscount;

  // Handles booking reservation
  const handleReservation = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) return;

    setIsSubmitting(true);
    
    // Simulate minor high-end loading response
    setTimeout(() => {
      const serialPart = Math.floor(100000 + Math.random() * 900000);
      const colorAbbr = selectedColor.substring(0, 3).toUpperCase();
      const code = `AURA-${colorAbbr}-${mirrorSize}-${serialPart}`;
      
      setReservePassCode(code);
      setIsSubmitting(false);
      setIsReserved(true);
    }, 1200);
  };

  return (
    <div className="p-1 sm:p-4">
      {/* Dynamic Render: Reserved Pass vs Setup Deck */}
      {isReserved ? (
        <div className="max-w-xl mx-auto border border-brand-cyan/30 bg-zinc-950/80 rounded-3xl p-6 sm:p-8 relative overflow-hidden shadow-[0_0_30px_rgba(0,f0,ff,0.15)]">
          <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-brand-cyan/2 to-transparent pointer-events-none" />
          
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="w-14 h-14 rounded-full bg-brand-cyan/10 border border-brand-cyan flex items-center justify-center text-brand-cyan">
              <ShieldCheck className="w-8 h-8 animate-pulse" />
            </div>
            
            <div>
              <span className="text-[10px] font-mono font-bold text-brand-green bg-brand-green/10 px-2.5 py-1 rounded-full uppercase tracking-widest select-none">
                MEMBER ALPHA REGISTERED
              </span>
              <h3 className="text-2xl font-black text-white tracking-tight mt-2.5">Your Aura Gym is Secured.</h3>
              <p className="text-xs text-zinc-400 mt-1 max-w-sm mx-auto leading-relaxed">
                Welcome to the future of biomechanical feedback. Your reservation spot has been logged into the ledger system.
              </p>
            </div>

            {/* Simulated pass barcode card */}
            <div className="w-full bg-zinc-900 border border-zinc-800 rounded-2xl p-5 text-left font-mono space-y-4 mt-6">
              
              <div className="flex justify-between items-start border-b border-zinc-800 pb-3">
                <div>
                  <span className="text-[9px] text-zinc-500 block">ALPHA ATHLETE</span>
                  <p className="text-sm font-bold text-white uppercase">{name}</p>
                </div>
                <div className="text-right">
                  <span className="text-[9px] text-zinc-500 block">SHIP ALLOCATION</span>
                  <p className="text-xs font-semibold text-zinc-300">EST. JULY 2026</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-y-3 gap-x-2 text-xs border-b border-zinc-800 pb-3.5">
                <div>
                  <span className="text-[9px] text-zinc-500 block">CABINET DISPLAY</span>
                  <p className="text-zinc-200 font-semibold">{mirrorSize === '43' ? '43" Portrait Mirror' : '55" Massive Mirror'}</p>
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 block">SHIRT PACKAGE</span>
                  <p className="text-zinc-200 font-semibold">{extraShirts + 1} Biosensor Shirts ({shirtSize})</p>
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 block">WEAVE DETAILS</span>
                  <p className="text-zinc-200 font-semibold">{cryoCooling ? 'Metallic + Cryo Upgraded' : 'Standard Bio-Conduction'}</p>
                </div>
                <div>
                  <span className="text-[9px] text-zinc-500 block">HUB HUE</span>
                  <p className="text-zinc-200 font-semibold">{selectedColor}</p>
                </div>
              </div>

              <div>
                <span className="text-[9px] text-zinc-500 block text-center select-none">ALLOCATION PASS SERIAL</span>
                <p className="text-md font-bold text-center tracking-widest text-brand-cyan select-all mt-0.5">{reservePassCode}</p>
                
                {/* SVG Barcode design */}
                <div className="mt-4 flex flex-col items-center">
                  <div className="w-48 h-8 flex items-center justify-between opacity-40">
                    {Array.from({ length: 32 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="bg-white h-full" 
                        style={{ width: `${(i % 3 === 0 ? 3 : (i % 2 === 0 ? 1 : 2.2))}px` }} 
                      />
                    ))}
                  </div>
                  <span className="text-[8px] text-zinc-500 mt-1 uppercase">AURA-CORRESPONDENT-LEDGER</span>
                </div>
              </div>

            </div>

            <p className="text-[10px] text-zinc-500 max-w-sm pt-2">
              A private reservation email has been pushed to <span className="text-zinc-300 font-medium">{email}</span>. No charges or transaction requests will be processed until the hardware departs our fabrication workspace.
            </p>

            <button
              onClick={() => {
                setIsReserved(false);
                setName('');
                setEmail('');
                setZipCode('');
              }}
              className="cursor-pointer text-xs font-mono font-bold text-brand-cyan underline uppercase hover:text-white pt-2.5"
            >
              Configure or Book Another System
            </button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Setup controls */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            
            {/* Mirror Size choose */}
            <div className="space-y-3">
              <label className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">Step 1: Select Mirror Cabinet Size</label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setMirrorSize('43')}
                  className={`cursor-pointer border text-left p-4 rounded-2xl transition-all duration-300 ${
                    mirrorSize === '43'
                      ? 'border-brand-cyan bg-brand-cyan/5 text-white ring-1 ring-brand-cyan/25'
                      : 'border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-bold text-zinc-100">43" PORTRAIT CASING</span>
                    <span className="text-xs font-mono font-bold text-brand-cyan">$1,495</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-normal">
                    Designed for compact wall spaces or bedrooms. Full visual posture tracking fit with stellar resolution.
                  </p>
                </button>

                <button
                  type="button"
                  onClick={() => setMirrorSize('55')}
                  className={`cursor-pointer border text-left p-4 rounded-2xl transition-all duration-300 ${
                    mirrorSize === '55'
                      ? 'border-brand-cyan bg-brand-cyan/5 text-white ring-1 ring-brand-cyan/25'
                      : 'border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <span className="text-sm font-bold text-zinc-100">55" STUDIO MONOLITH</span>
                    <span className="text-xs font-mono font-bold text-brand-cyan">$1,995</span>
                  </div>
                  <p className="text-[11px] text-zinc-400 mt-1 leading-normal">
                    Stunning edge-to-edge reflection designed for permanent home gyms. Full side skeletal-overlay.
                  </p>
                </button>
              </div>
            </div>

            {/* Shirt sizing and Quantity customizer */}
            <div className="space-y-4 pt-2">
              <div className="flex justify-between items-baseline">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400">Step 2: Bio-Sensor Shirt Pack</label>
                <span className="text-[10px] text-brand-green font-semibold">1 Bio-Shirt Free + Extra Shirts</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-zinc-900/40 border border-zinc-850 p-4 rounded-2xl">
                
                {/* Number slider */}
                <div className="space-y-1.5 justify-center flex flex-col">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-zinc-300">Total Bio-Shirts:</span>
                    <span className="text-white font-mono">{extraShirts + 1} (1 Free Bundle)</span>
                  </div>
                  
                  <div className="flex items-center gap-3">
                    <button
                      type="button"
                      disabled={extraShirts <= 0}
                      onClick={() => setExtraShirts(prev => prev - 1)}
                      className={`cursor-pointer w-8 h-8 rounded-lg border flex items-center justify-center font-bold font-mono text-lg transition-colors select-none ${
                        extraShirts <= 0 
                          ? 'border-zinc-800 text-zinc-700 bg-zinc-950/20' 
                          : 'border-zinc-700 text-zinc-300 hover:bg-zinc-800'
                      }`}
                    >
                      -
                    </button>
                    <span className="font-mono text-base font-bold text-center text-white w-6 select-none">{extraShirts}</span>
                    <button
                      type="button"
                      disabled={extraShirts >= 4}
                      onClick={() => setExtraShirts(prev => prev + 1)}
                      className={`cursor-pointer w-8 h-8 rounded-lg border flex items-center justify-center font-bold font-mono text-lg transition-colors select-none ${
                        extraShirts >= 4 
                          ? 'border-zinc-800 text-zinc-700 bg-zinc-950/20' 
                          : 'border-zinc-700 text-zinc-300 hover:bg-zinc-800'
                      }`}
                    >
                      +
                    </button>
                    <p className="text-[10px] text-zinc-400 italic">+$129 / additional</p>
                  </div>
                </div>

                {/* Sizing box */}
                <div className="space-y-1.5">
                  <span className="text-[11px] text-zinc-300 font-semibold block">Select Your Compression Size:</span>
                  <div className="grid grid-cols-6 gap-1">
                    {['XS', 'S', 'M', 'L', 'XL', 'XXL'].map((sz) => (
                      <button
                        key={sz}
                        type="button"
                        onClick={() => setShirtSize(sz)}
                        className={`cursor-pointer py-2 text-xs font-mono font-bold rounded-lg border text-center transition-all ${
                          shirtSize === sz
                            ? 'border-brand-cyan bg-brand-cyan/10 text-white font-black'
                            : 'border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700'
                        }`}
                      >
                        {sz}
                      </button>
                    ))}
                  </div>
                </div>

              </div>
            </div>

            {/* Design aesthetics and tech upgrades */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              
              {/* Cabinet Wood Dye Color Select */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 block">Step 3: Frame Anodized Color</label>
                <div className="flex gap-2">
                  {['Obsidian', 'Chroma-Steel', 'Siren-Red'].map((col) => (
                    <button
                      key={col}
                      type="button"
                      onClick={() => setSelectedColor(col)}
                      className={`cursor-pointer py-2 px-3 text-xs font-semibold rounded-xl border text-center flex-1 transition-all capitalize ${
                        selectedColor === col
                          ? 'border-brand-cyan bg-brand-cyan/5 text-white font-bold'
                          : 'border-zinc-800 bg-zinc-500/2 text-zinc-400 hover:border-zinc-700'
                      }`}
                    >
                      <span className={`inline-block w-2 h-2 rounded-full mr-1.5 ${
                        col === 'Obsidian' ? 'bg-zinc-950 border border-zinc-700' : col === 'Chroma-Steel' ? 'bg-zinc-300' : 'bg-red-500'
                      }`} />
                      {col.split('-')[0]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cryo Cooling Toggle */}
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-widest text-zinc-400 block">Step 4: Cryo-Mesh Upgrade</label>
                <button
                  type="button"
                  onClick={() => setCryoCooling(!cryoCooling)}
                  className={`cursor-pointer text-left p-2 px-3 rounded-xl border flex items-center justify-between w-full h-[38px] transition-all duration-200 ${
                    cryoCooling
                      ? 'border-brand-cyan bg-brand-cyan/5 text-white'
                      : 'border-zinc-800 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700'
                  }`}
                >
                  <span className="text-xs font-medium">Add Cryo-Flow cooling fibers</span>
                  <span className="text-[11px] font-mono font-bold text-brand-cyan">+$59</span>
                </button>
              </div>

            </div>

          </div>

          {/* Checkout pricing receipt bar */}
          <div className="lg:col-span-5 flex flex-col justify-between p-6 border border-zinc-800 bg-zinc-900/30 rounded-3xl backdrop-blur-sm self-start">
            
            <form onSubmit={handleReservation} className="space-y-5">
              <div className="border-b border-zinc-800 pb-3">
                <div className="flex items-center gap-1">
                  <Package className="w-4 h-4 text-brand-cyan" />
                  <span className="text-[10px] text-zinc-400 font-mono tracking-widest font-bold uppercase block">SECURE RESERVATION</span>
                </div>
                <h4 className="text-lg font-black text-white italic tracking-tight mt-1">AURA SMART CORE PACKAGE</h4>
              </div>

              {/* Receipts details */}
              <div className="space-y-2.5 text-xs font-mono border-b border-zinc-800 pb-4">
                <div className="flex justify-between">
                  <span className="text-zinc-400">Aura Cabinet (Casing: {mirrorSize}")</span>
                  <span className="text-zinc-200">${baseMirrorPrice}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-400">Smart Shirts ({extraShirts + 1} total, 1 included)</span>
                  <span className="text-zinc-200">${extraShirts * shirtUnitPrice}</span>
                </div>
                
                {cryoCooling && (
                  <div className="flex justify-between">
                    <span className="text-zinc-400">Cryo-Cooling Fiber Treatment</span>
                    <span className="text-zinc-200">+$59</span>
                  </div>
                )}
                
                {bundleDiscount > 0 && (
                  <div className="flex justify-between text-brand-green">
                    <span>Bundle Discount (Extra Shirt Save)</span>
                    <span>-${bundleDiscount}</span>
                  </div>
                )}

                <div className="flex justify-between text-zinc-400">
                  <span>Carbon-Neutral Freight</span>
                  <span className="text-brand-green font-bold uppercase">FREE</span>
                </div>

                <div className="flex justify-between text-[15px] font-bold text-white border-t border-zinc-800/80 pt-3">
                  <span>ESTIMATED TOTAL</span>
                  <span className="text-brand-cyan">${grandTotal}</span>
                </div>
              </div>

              {/* Fill credentials */}
              <div className="space-y-3">
                <p className="text-xs font-semibold text-zinc-200">Secure Your Pioneer Member Slot</p>
                <div className="space-y-2">
                  <input
                    type="text"
                    required
                    placeholder="E.g., Elena Rostova"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan placeholder-zinc-600 transition-colors"
                  />
                  <input
                    type="email"
                    required
                    placeholder="activeathlete@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan placeholder-zinc-600 transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="90210 (For local freight logistics)"
                    value={zipCode}
                    onChange={(e) => setZipCode(e.target.value)}
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl p-2.5 text-xs text-white focus:outline-none focus:border-brand-cyan placeholder-zinc-600 transition-colors"
                  />
                </div>
              </div>

              {/* Submit booking */}
              <button
                type="submit"
                disabled={isSubmitting || !name || !email}
                className="cursor-pointer w-full text-center py-3 bg-brand-cyan text-slate-950 font-black tracking-wide text-xs uppercase rounded-xl transition-all hover:bg-white hover:scale-[1.02] active:scale-95 flex items-center justify-center gap-1.5 disabled:opacity-40 disabled:hover:scale-100 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
              >
                {isSubmitting ? (
                  <span>RESERVING DEPLOYMENT KEY...</span>
                ) : (
                  <>
                    <span>SUBMIT WORKSPACE RESERVATION</span>
                    <ChevronRight className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex gap-2 justify-center text-[10px] text-zinc-500 font-mono">
                <span className="flex items-center gap-1">🔒 SECURE 256-BIT</span>
                <span>•</span>
                <span>REFUNDABLE ANYTIME</span>
              </div>

            </form>

          </div>

        </div>
      )}
    </div>
  );
}
