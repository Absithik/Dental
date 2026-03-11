/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { motion } from "framer-motion";
import { appointmentContent } from "./content";
import { fadeRightVariant } from "./animation";

const formVariant: any = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export function AppointmentSection() {
    return (
        <section className="relative px-4 sm:px-6 lg:px-8 py-12 md:py-24 max-w-7xl mx-auto z-20">
            {/* Main Blue Banner Container */}
            <div className="relative bg-[#3b47bd] rounded-[2rem] lg:rounded-[3rem] overflow-hidden pt-16 pb-32 md:pb-40 px-6 text-center shadow-xl border border-[#3b47bd]">

                {/* Decorative Pattern Lines bg */}
                <div className="absolute inset-0 opacity-15 pointer-events-none mix-blend-overlay">
                    <svg className="absolute w-[200%] md:w-[150%] h-[200%] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" viewBox="0 0 800 400" fill="none" xmlns="http://www.w3.org/2000/svg">
                        {/* Overlapping stylized tooth/flower pattern from image reference */}
                        <path d="M 100 0 C 100 100, 200 100, 200 200 C 200 300, 100 300, 100 400" stroke="white" strokeWidth="1" fill="none" />
                        <path d="M 300 0 C 300 100, 200 100, 200 200 C 200 300, 300 300, 300 400" stroke="white" strokeWidth="1" fill="none" />

                        <path d="M 500 0 C 500 100, 600 100, 600 200 C 600 300, 500 300, 500 400" stroke="white" strokeWidth="1" fill="none" />
                        <path d="M 700 0 C 700 100, 600 100, 600 200 C 600 300, 700 300, 700 400" stroke="white" strokeWidth="1" fill="none" />

                        <path d="M 0 100 C 100 100, 100 200, 200 200 C 300 200, 300 100, 400 100" stroke="white" strokeWidth="1" fill="none" />
                        <path d="M 0 300 C 100 300, 100 200, 200 200 C 300 200, 300 300, 400 300" stroke="white" strokeWidth="1" fill="none" />

                        <path d="M 400 100 C 500 100, 500 200, 600 200 C 700 200, 700 100, 800 100" stroke="white" strokeWidth="1" fill="none" />
                        <path d="M 400 300 C 500 300, 500 200, 600 200 C 700 200, 700 300, 800 300" stroke="white" strokeWidth="1" fill="none" />
                    </svg>
                </div>

                <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
                    <motion.span
                        variants={fadeRightVariant as any}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-[10px] font-semibold text-white uppercase tracking-widest mb-6"
                    >
                        {appointmentContent.badge}
                    </motion.span>

                    <motion.h2
                        variants={fadeRightVariant as any}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-3xl md:text-5xl lg:text-[42px] font-medium mb-6 leading-[1.2] text-white tracking-tight whitespace-pre-line"
                    >
                        {appointmentContent.title}
                    </motion.h2>

                    <motion.p
                        variants={fadeRightVariant as any}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="text-base md:text-lg text-white/90 leading-relaxed max-w-2xl font-light"
                    >
                        {appointmentContent.description}
                    </motion.p>
                </div>
            </div>

            {/* Overlapping White Form Card */}
            <motion.div
                variants={formVariant}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="relative z-20 max-w-[1000px] mx-auto bg-white rounded-2xl p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.06)] -mt-20 md:-mt-24 border border-slate-100 mx-4 md:mx-auto"
            >
                <div className="flex flex-col gap-6">
                    <p className="text-slate-600 text-[15px]">
                        {appointmentContent.form.description}
                    </p>

                    <form className="flex flex-col lg:flex-row gap-4 items-center" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex-1 w-full relative">
                            <input
                                type="text"
                                placeholder={appointmentContent.form.name_placeholder}
                                className="w-full h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>

                        <div className="flex-1 w-full relative">
                            <input
                                type="email"
                                placeholder={appointmentContent.form.email_placeholder}
                                className="w-full h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>

                        <div className="flex-1 w-full relative">
                            <input
                                type="tel"
                                placeholder={appointmentContent.form.phone_placeholder}
                                className="w-full h-12 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary"
                                required
                            />
                        </div>

                        <div className="flex-1 w-full relative group">
                            <input
                                type="text"
                                placeholder={appointmentContent.form.date_placeholder}
                                onFocus={(e) => e.target.type = 'date'}
                                onBlur={(e) => e.target.type = 'text'}
                                className="w-full h-12 rounded-lg border border-slate-200 bg-white pl-4 pr-10 text-sm font-medium text-slate-800 outline-none transition-all placeholder:text-slate-500 focus:border-primary focus:ring-1 focus:ring-primary appearance-none"
                                required
                            />
                            {/* Custom Calendar Icon purely decorative */}
                            <svg className="absolute right-4 top-1/2 -translate-y-1/2 text-primary pointer-events-none" xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2" /><line x1="16" x2="16" y1="2" y2="6" /><line x1="8" x2="8" y1="2" y2="6" /><line x1="3" x2="21" y1="10" y2="10" /><path d="M8 14h.01" /><path d="M12 14h.01" /><path d="M16 14h.01" /><path d="M8 18h.01" /><path d="M12 18h.01" /><path d="M16 18h.01" /></svg>
                        </div>

                        <button
                            type="submit"
                            className="h-12 w-full lg:w-16 rounded-lg bg-primary hover:bg-primary/90 text-white flex items-center justify-center transition-colors shrink-0"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </button>
                    </form>
                </div>
            </motion.div>
        </section>
    );
}
