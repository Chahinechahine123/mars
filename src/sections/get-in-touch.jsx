import SectionTitle from "../components/section-title";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function GetInTouch() {
    return (
        <section className="flex flex-col items-center py-20" id="contact">
            <SectionTitle 
                title="Get in touch" 
                description="Have a technical question or interested in a partnership? Send us a message and our team will get back to you." 
            />
            
            {/* Remplacement du onSubmit par l'action Formspree */}
            <form 
                action="https://formspree.io/f/xstartup0@gmail.com" 
                method="POST"
                className='grid sm:grid-cols-2 gap-3 sm:gap-5 max-w-3xl mx-auto text-slate-400 mt-16 w-full px-4 md:px-0'
            >
                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                >
                    <label className='font-medium text-slate-200'>Your name</label>
                    <input 
                        name='name' 
                        type="text" 
                        required
                        placeholder='Enter your name' 
                        className='w-full mt-2 p-3 bg-slate-900/50 outline-none border border-slate-700 rounded-lg focus:border-indigo-600 transition' 
                    />
                </motion.div>

                <motion.div
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    <label className='font-medium text-slate-200'>Email address</label>
                    <input 
                        name='email' 
                        type="email" 
                        required
                        placeholder='Enter your email' 
                        className='w-full mt-2 p-3 bg-slate-900/50 outline-none border border-slate-700 rounded-lg focus:border-indigo-600 transition' 
                    />
                </motion.div>

                <motion.div className='sm:col-span-2'
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 240, damping: 70, mass: 1 }}
                >
                    <label className='font-medium text-slate-200'>Message</label>
                    <textarea 
                        name='message' 
                        rows={6} 
                        required
                        placeholder='Describe your inquiry or technical feedback...' 
                        className='resize-none w-full mt-2 p-3 bg-slate-900/50 outline-none rounded-lg border border-slate-700 focus:border-indigo-600 transition' 
                    />
                </motion.div>

                {/* Champ caché pour éviter le spam (optionnel mais recommandé par Formspree) */}
                <input type="hidden" name="_subject" value="New Contact from Aegis-AG Website" />

                <motion.button 
                    type='submit' 
                    className='w-max flex items-center gap-2 bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-3.5 rounded-full font-medium transition-all active:scale-95'
                    initial={{ y: 50, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 280, damping: 70, mass: 1 }}
                >
                    Send Message
                    <ArrowUpRight className="size-5" />
                </motion.button>
            </form>
        </section>
    );
}