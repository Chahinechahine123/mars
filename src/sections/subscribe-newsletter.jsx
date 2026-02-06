import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
export default function SubscribeNewsletter() {
    return (
        <section className="flex flex-col items-center py-20" id="subscribe">
    <SectionTitle 
        title="Stay Updated on MARS" 
        description="Join our technical mailing list to receive the latest updates on our AI model optimizations, new hardware iterations, and field testing results." 
    />
    <motion.div className="flex items-center justify-center mt-10 border border-slate-700 focus-within:border-indigo-600 focus-within:ring-1 focus-within:ring-indigo-600 text-sm rounded-full h-14 max-w-xl w-full bg-slate-900/20 backdrop-blur-md"
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
    >
        <input 
            type="email" 
            className="bg-transparent outline-none rounded-full px-6 h-full flex-1 text-slate-200 placeholder:text-slate-500" 
            placeholder="Enter your engineer or farm email" 
        />
        <button className="bg-indigo-600 text-white rounded-full h-11 mr-1.5 px-8 flex items-center justify-center font-medium hover:bg-indigo-500 active:scale-95 transition-all shadow-lg shadow-indigo-600/20">
            Get Updates
        </button>
    </motion.div>
    <p className="mt-4 text-xs text-slate-500">
        
    </p>
</section>
    );
}