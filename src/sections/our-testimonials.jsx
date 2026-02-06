import SectionTitle from "../components/section-title";
import { motion } from "framer-motion";
import c from '../assets/chahine.jpg'
import r from '../assets/rhyl.jpg'
import d from '../assets/dave.jpg'

export default function OurTestimonials() {
    const testimonials = [
    { 
        name: "Med Chahine Bouaziz", 
        role: "AI Engineer", 
        quote: "Developed the core AI architecture, training the YOLOv11m model and optimizing it for real-time inference on edge devices. He also strategically curated the Bill of Materials to ensure industrial performance at a low cost.", 
        image: c, 
    },
    { 
        name: "David Enkoke", 
        role: "Software Engineer", 
        quote: "Engineered the robot's control systems, including the complex sliding mechanics and high-precision movement algorithms. He ensured the seamless integration between the hardware drivers and the high-level logic.", 
        image: d, 
    },
    { 
        name: "Rhyl Kiio", 
        role: "Design & Documentation Lead", 
        quote: "Heads the 3D structural design of the MARS chassis and sub-systems. He is also responsible for the comprehensive technical documentation and system architecture mapping for the final project rollout.", 
        image: r, 
    },
];

    return (
        <section className="flex flex-col items-center" id="testimonials">
            <SectionTitle title="Our team" description="The team members and their roles in developing the MARS platform." />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-18 max-w-6xl mx-auto">
                {testimonials.map((testimonial, index) => (
                    <motion.div key={testimonial.name} className="group border border-slate-800 p-6 rounded-xl"
                        initial={{ y: 150, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: `${index * 0.15}`, type: "spring", stiffness: 320, damping: 70, mass: 1 }}
                    >
                        <p className="text-slate-100 text-base">{testimonial.quote}</p>
                        <div className="flex items-center gap-3 mt-8 group-hover:-translate-y-1 duration-300">
                            <img className="size-10 rounded-full" src={testimonial.image} alt="user image" />
                            <div>
                                <h2 className="text-gray-200 font-medium">
                                    {testimonial.name}
                                </h2>
                                <p className="text-indigo-500">{testimonial.role}</p>
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
}