/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { testimonialsContent } from "./content";
import { containerVariants, itemVariants } from "./animation";

export function Testimonials() {
    return (
        <section className="py-24 bg-white relative overflow-hidden">
            <Container className="relative z-10 max-w-6xl">

                <div className="text-center mb-20 flex flex-col items-center">
                    <span className="text-primary font-bold text-xs tracking-widest uppercase mb-4">
                        {testimonialsContent.badge}
                    </span>
                    <h2 className="text-4xl md:text-5xl font-medium text-foreground tracking-tight">
                        {testimonialsContent.title}
                    </h2>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid md:grid-cols-3 gap-6 lg:gap-8 pt-10"
                >
                    {testimonialsContent.reviews.map((review, index) => {
                        // Determine floating avatar position based on index
                        let avatarPositionClass = "";
                        if (index === 0) {
                            avatarPositionClass = "left-1/2 -translate-x-1/2 bottom-[-2.5rem] md:bottom-[-3rem] md:left-8 md:translate-x-0"; // Bottom center mobile, Bottom left desktop
                        } else if (index === 1) {
                            avatarPositionClass = "left-1/2 -translate-x-1/2 bottom-[-2.5rem] md:top-[-3rem] md:bottom-auto"; // Bottom center mobile, Top center desktop
                        } else {
                            avatarPositionClass = "left-1/2 -translate-x-1/2 bottom-[-2.5rem] md:bottom-[-3rem] md:right-8 md:left-auto md:translate-x-0"; // Bottom center mobile, Bottom right desktop
                        }

                        return (
                            <motion.div key={index} variants={itemVariants} className="relative h-full flex mt-8 md:mt-0 mb-12 md:mb-0">
                                <div className="bg-slate-50/80 rounded-3xl p-8 lg:p-10 w-full relative min-h-[250px] md:h-[300px] flex flex-col justify-start">
                                    <h3 className="text-2xl text-slate-800 tracking-tight font-medium mb-4">
                                        “{review.title}”
                                    </h3>
                                    <p className="text-slate-500 font-normal leading-relaxed text-[15px]">
                                        "{review.content}"
                                    </p>
                                </div>

                                {/* Floating Avatar Pill */}
                                <div className={`absolute ${avatarPositionClass} bg-white rounded-full p-2 shadow-[0_8px_30px_rgb(0,0,0,0.06)] flex items-center gap-3 pr-6 min-w-[200px] z-20`}>
                                    <img
                                        src={review.image}
                                        alt={review.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="flex flex-col justify-center">
                                        <h4 className="text-sm font-semibold text-slate-800 leading-none mb-1">{review.name}</h4>
                                        <p className="text-[11px] text-slate-500 leading-none">{review.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Container>
        </section>
    );
}
