import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";

const technicalFeatures = [
    {
        title: "Robot Navigation System",
        description: (
            <span>
    Utilizing a <b>differential drive kinematic model</b>, Aegis-AG achieves precise trajectory control. 
    Navigation is powered by dual 350W PMDC Geared Motors (1.1Nm torque) and dual 600 PPR Incremental Encoders. 
    The control logic, processed by an <b>Arduino Nano ESP32</b>, calculates the velocity of each wheel (vL, vR) 
    to manage the robot's linear velocity (v) and angular velocity (ω) using the formula:
    <br/>
    <span className="block my-3 py-2 px-4 bg-indigo-500/10 border-l-2 border-indigo-500 text-indigo-300 font-mono text-sm italic">
        v = (r/2)(ωR + ωL) ; ω = (r/L)(ωR - ωL)
    </span>
    High-power BTS7960 H-Bridges (43A) ensure smooth current delivery for loads up to 150kg.
</span>
        ),
        image: "assets/nav.png"
    },
    {
        title: "Adaptive Height & Sliding Mechanism",
        description: "Built on a structural 2020 T-Slot Aluminum frame, this system features a motorized sliding axis that allows the nozzle assembly to traverse the chassis width. The adaptive height mechanism adjusts the vertical clearance of the robot, ensuring the sprayers and sensors maintain an optimal distance from the crop canopy, regardless of the plant's growth stage or variety.",
        image: "assets/T-slot.png"
    },
    {
        title: "High-Pressure Liquid Spray System",
        description: "Driven by a SEAFLO 31-Series Diaphragm Pump (1.5 GPM, 200 PSI), the system delivers 12V-powered high-pressure fluid through TeeJet Even Flat Fan (TP8003E) brass nozzles. The self-priming pump technology ensures a consistent spray pattern capable of reaching several meters, providing deep penetration into dense crop foliage for maximum treatment efficacy.",
        image: "assets/nozzle.png"
    },
    {
        title: "Pneumatic Pollination Mechanism",
        description: "This system uses a WINSINN 120mm High-Pressure Blower (24V Dual Ball Bearing) to create controlled air depression. By generating a high-velocity air stream through GEMA-compatible non-OEM powder nozzles, the robot aerosolizes pollen powder, simulating natural pollination with industrial precision and higher fruit-set reliability.",
        image: "assets/blower.png"
    },
    {
        title: "GPU-Accelerated AI Algorithm",
        description: "Aegis-AG runs a custom YOLOv11m model trained on 50k images across 38 disease categories. To achieve real-time inference on the Jetson Nano, the model was exported to ONNX and quantized from INT16 to INT8. This optimized engine is deployed via a specialized Docker container tailored for Jetson-L4T, enabling GPU-accelerated edge computing with significantly reduced memory footprint.",
        image: "assets/jeston.jpg"
    }
];

export default function TechnicalDetails() {
    return (
        <section className="flex flex-col items-center py-20 bg-slate-950" id="tech-details">
            <SectionTitle 
                title="Technical Engineering" 
                description="Deep dive into the mechanical and digital architecture that powers our multi-purpose agricultural platform." 
            />

            <div className="flex flex-col gap-8 mt-18 max-w-5xl px-4 md:px-0">
                {technicalFeatures.map((feature, index) => (
                    <motion.div 
                        key={index}
                        className="relative w-full overflow-hidden border border-indigo-900/50 flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-[#401B98]/10 to-[#180027]/20 rounded-3xl p-6 md:p-10 text-white"
                        initial={{ y: 100, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, type: "spring", stiffness: 300, damping: 60 }}
                    >
                        {/* Background Glows */}
                        <div className="absolute pointer-events-none top-0 -z-1 left-0 size-48 bg-indigo-600/10 blur-[100px]"></div>
                        <div className="absolute pointer-events-none bottom-0 -z-1 right-0 size-48 bg-indigo-600/10 blur-[100px]"></div>

                        <div className="flex flex-col items-center md:items-start md:w-2/3">
                            <span className="text-xs font-bold text-indigo-400 uppercase tracking-widest bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                                Feature 0{index + 1}
                            </span>
                            <h2 className="text-2xl font-semibold mt-4 text-white">{feature.title}</h2>
                            <div className="text-sm leading-relaxed text-slate-300 mt-4 text-center md:text-left">
                                {feature.description}
                            </div>
                        </div>

                        <div className="md:w-1/3 flex justify-center mt-8 md:mt-0 md:ml-10">
                            <img 
                                className="w-full max-w-[250px] rounded-2xl border border-white/10 shadow-2xl" 
                                src={feature.image} 
                                alt={feature.title} 
                            />
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}