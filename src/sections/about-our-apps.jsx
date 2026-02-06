import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

export default function AboutOurApps() {
    
    return (
<section className="flex flex-col items-center py-20" id="cost">
    <SectionTitle 
        title="Robot System Cost" 
        description="A transparent breakdown of our Bill of Materials. High-performance multi-agriculture robotics achieved through strategic component selection for under $1,250." 
    />
    
    <motion.div 
        className="relative max-w-5xl mx-auto w-full px-8 md:px-0 mt-12 overflow-hidden"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 240, damping: 70 }}
    >
        <div className="overflow-x-auto rounded-xl border border-slate-800 bg-slate-900/40 backdrop-blur-sm">
            <table className="w-full text-left text-sm border-collapse">
                <thead className="bg-indigo-600/10 text-indigo-400 uppercase text-xs tracking-wider">
                    <tr>
                        <th className="px-6 py-4 font-semibold">Category</th>
                        <th className="px-6 py-4 font-semibold">Component Reference & Specs</th>
                        <th className="px-6 py-4 text-center font-semibold">Qty</th>
                        <th className="px-6 py-4 text-right font-semibold">Total Price</th>
                    </tr>
                </thead>
                <tbody className="divide-y divide-slate-800 text-slate-300">
                    {/* Motion */}
                    <tr className="hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-100">Motor System</td>
                        <td className="px-6 py-4">MY1016Z3 PMDC Geared (350W, 36V, 1.1Nm)</td>
                        <td className="px-6 py-4 text-center">2</td>
                        <td className="px-6 py-4 text-right font-mono text-indigo-400">$86</td>
                    </tr>
                    {/* Navigation */}
                    <tr className="hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-100">Navigation</td>
                        <td className="px-6 py-4">Incremental Rotary Encoders (600 PPR, DC 5-24V) + Couplers</td>
                        <td className="px-6 py-4 text-center">2+2</td>
                        <td className="px-6 py-4 text-right font-mono text-indigo-400">$17</td>
                    </tr>
                    {/* Logic */}
                    <tr className="hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-100">Logic & Drive</td>
                        <td className="px-6 py-4">Arduino Nano ESP32 + Double BTS7960 H-Bridge (43A)</td>
                        <td className="px-6 py-4 text-center">1+2</td>
                        <td className="px-6 py-4 text-right font-mono text-indigo-400">$35</td>
                    </tr>
                    {/* AI Vision */}
                    <tr className="hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-100">AI Vision</td>
                        <td className="px-6 py-4">NVIDIA Jetson Orin Nano 8GB + RaspberryPi Cam V2 (8MP)</td>
                        <td className="px-6 py-4 text-center">1+1</td>
                        <td className="px-6 py-4 text-right font-mono text-indigo-400">$250</td>
                    </tr>
                    {/* Power */}
                    <tr className="hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-100">Power</td>
                        <td className="px-6 py-4">36V LiFePO4 Battery Pack (25Ah–50Ah)</td>
                        <td className="px-6 py-4 text-center">1</td>
                        <td className="px-6 py-4 text-right font-mono text-indigo-400">$494</td>
                    </tr>
                    {/* Liquid Spray */}
                    <tr className="hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-100">Liquid Spray</td>
                        <td className="px-6 py-4">Water Pump + Spray Nozzles + Tank</td>
                        <td className="px-6 py-4 text-center">1+2+1</td>
                        <td className="px-6 py-4 text-right font-mono text-indigo-400">$100</td>
                    </tr>
                    {/* Pollen Spray */}
                    <tr className="hover:bg-slate-800/30 transition-colors">
                        <td className="px-6 py-4 font-medium text-slate-100">Pollen Spray</td>
                        <td className="px-6 py-4">Air Blower + Powder Spray Nozzles</td>
                        <td className="px-6 py-4 text-center">1+2</td>
                        <td className="px-6 py-4 text-right font-mono text-indigo-400">$32</td>
                    </tr>
                    <tr className="hover:bg-slate-800/30 transition-colors">
    <td className="px-6 py-4 font-medium text-slate-100">Transmission</td>
    <td className="px-6 py-4">2x 18-inch Wheels + 2x Chain 420 Heavy Duty</td>
    <td className="px-6 py-4 text-center">2+2</td>
    <td className="px-6 py-4 text-right font-mono text-indigo-400">110$</td>
</tr>
<tr className="hover:bg-slate-800/30 transition-colors">
    <td className="px-6 py-4 font-medium text-slate-100">Chassis</td>
    <td className="px-6 py-4">2020 Aluminum Extrusion (T-Slot) - Structural Frame</td>
    <td className="px-6 py-4 text-center">1 set</td>
    <td className="px-6 py-4 text-right font-mono text-indigo-400">$50</td>
</tr>
                    {/* Total */}
                    <tr className="bg-indigo-600/10 border-t-2 border-indigo-500/50">
                        <td colSpan="3" className="px-6 py-6 font-bold text-slate-100 text-lg">Total Estimated Component Cost</td>
                        <td className="px-6 py-6 text-right font-bold text-green-400 text-2xl font-mono">$1,250</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div className="mt-6 p-4 rounded-lg bg-slate-800/20 border border-slate-800 text-xs text-slate-400">
            <p>** Note: This total excludes power adapters, wiring harnesses, and internal cabling, which vary based on the final layout and cable management requirements.</p>
        </div>
    </motion.div>
</section>
    );
}