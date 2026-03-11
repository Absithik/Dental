"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { faqContent } from "./content";
import { containerVariants, itemVariants } from "./animation";
import { ChevronDown } from "lucide-react";

export function FAQSection() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 bg-slate-50">
            <Container>
                <div className="grid lg:grid-cols-12 gap-12 items-start">
                    <div className="lg:col-span-5">
                        <SectionTitle
                            align="left"
                            title={faqContent.title}
                            subtitle={faqContent.badge}
                            className="mb-6"
                        />
                        <p className="text-muted-foreground text-lg mb-8">
                            {faqContent.description}
                        </p>
                        {/* Optional decorative image or element */}
                        <div className="hidden lg:block w-full h-64 bg-primary/5 rounded-2xl relative overflow-hidden mt-8">
                            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                                <div className="text-[120px] font-bold text-primary select-none">?</div>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-50px" }}
                            className="space-y-4"
                        >
                            {faqContent.faqs.map((faq, index) => {
                                const isActive = activeIndex === index;

                                return (
                                    <motion.div
                                        key={index}
                                        variants={itemVariants}
                                        className="border rounded-xl bg-background overflow-hidden"
                                    >
                                        <button
                                            className="w-full flex items-center justify-between p-6 text-left transition-colors hover:bg-accent/5"
                                            onClick={() => toggleAccordion(index)}
                                        >
                                            <span className="text-lg font-semibold text-foreground pr-8">
                                                {faq.question}
                                            </span>
                                            <ChevronDown
                                                className={`w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0 ${isActive ? "rotate-180" : ""
                                                    }`}
                                            />
                                        </button>

                                        <AnimatePresence>
                                            {isActive && (
                                                <motion.div
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    transition={{ duration: 0.3 }}
                                                >
                                                    <div className="p-6 pt-0 text-muted-foreground leading-relaxed">
                                                        {faq.answer}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
