import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import SectionTitle from "../components/section-title";
import im1 from '../assets/spray.png'
import im2 from '../assets/disease.png'
import im3 from '../assets/poll.png'

export default function OurLatestCreation() {
    const [isHovered, setIsHovered] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const [className, setClassName] = useState("");

    const sectionData = [
    {
        title: "Precision Spraying System",
        description: "Equipped with a high-capacity 50L tank, the robot utilizes its unique sliding mechanism to reach every leaf and stem. This ensures total crop coverage with zero wasted resources, adapting its reach to the specific geometry of your plants.",
        image: im1, // Agricultural tech placeholder
        align: "object-center",
    },
    {
        title: "GPU-Accelerated AI Diagnosis",
        description: "Powered by a Jetson Orin, our vision system runs an optimized, GPU-accelerated algorithm for real-time edge computing. Trained on 50,000+ images across 38 disease categories, it detects threats instantly while operating efficiently on low resources.",
        image: im2, // AI/Robotics placeholder
        align: "object-right",
    },
    {
        title: "Autonomous Pollination",
        description: "Aegis-AG solves the challenge of declining natural pollinators. By utilizing its adaptive height and sliding mechanics, the robot navigates various crop heights to deliver precise, mechanical pollination that maximizes fruit set and yield.",
        image: im3, // Field/Crop placeholder
        align: "object-center",
    },
];

    useEffect(() => {
        if (isHovered) return;
        const interval = setInterval(() => {
            setActiveIndex((prev) => (prev + 1) % sectionData.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [isHovered, sectionData.length]);

    return (
        <section className="flex flex-col items-center" id="creations">
            <SectionTitle
                title="Core Robotic Capabilities"
                description="Beyond simple automation—Aegis-AG features a unique sliding mechanism and adaptive height system, ensuring full coverage and perfect adaptivity for diverse crop types. We provide high-precision pollination, targeted spraying, and deep-learning disease detection to protect and maximize your harvest."
            />

            <div className="flex items-center gap-4 h-100 w-full max-w-5xl mt-18 mx-auto" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} >
                {sectionData.map((data, index) => (
                    <motion.div key={data.title} className={`relative group flex-grow h-[400px] rounded-xl overflow-hidden ${isHovered && className ? "hover:w-full w-56" : index === activeIndex ? "w-full" : "w-56"} ${className} ${!className ? "pointer-events-none" : ""}`}
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        onAnimationComplete={() => setClassName("transition-all duration-500")}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <img className={`h-full w-full object-cover ${data.align}`} src={data.image} alt={data.title} />
                        <div className={`absolute inset-0 flex flex-col justify-end p-10 text-white bg-black/50 transition-all duration-300 ${isHovered && className ? "opacity-0 group-hover:opacity-100" : index === activeIndex ? "opacity-100" : "opacity-0"}`}>
                            <h1 className="text-3xl font-semibold">{data.title}</h1>
                            <p className="text-sm mt-2">{data.description}</p>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
