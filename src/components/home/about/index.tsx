/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { aboutContent } from "./content";
import { fadeUpVariant, imageVariant, listVariants, listItemVariant } from "./animation";
import { Button } from "@/components/ui/Button";
import Link from "next/link";

export function AboutSection() {
    return (
        <section className="py-24 bg-background overflow-hidden overflow-x-hidden">
            <Container>
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Content Side (Left) */}
                    <div className="flex flex-col order-2 lg:order-1 lg:max-w-xl">
                        <motion.span
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-sm font-bold text-primary uppercase tracking-wider mb-4"
                        >
                            {aboutContent.badge}
                        </motion.span>

                        <motion.h2
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-4xl md:text-5xl lg:text-[2.75rem] font-medium tracking-tight text-foreground leading-[1.1] mb-6"
                        >
                            {aboutContent.title}
                        </motion.h2>

                        <motion.p
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="text-lg text-muted-foreground leading-relaxed mb-10"
                        >
                            {aboutContent.description}
                        </motion.p>

                        <motion.div
                            variants={listVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            className="flex flex-col gap-8 mb-12"
                        >
                            {aboutContent.points.map((point, index) => {
                                const Icon = point.icon;
                                return (
                                    <motion.div
                                        key={index}
                                        variants={listItemVariant}
                                        className="flex gap-4"
                                    >
                                        <div className="flex-shrink-0 mt-1">
                                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                                                <Icon size={20} strokeWidth={2.5} />
                                            </div>
                                        </div>
                                        <div className="flex flex-col">
                                            <h4 className="text-lg font-medium text-foreground mb-2">{point.title}</h4>
                                            <p className="text-muted-foreground leading-relaxed">{point.description}</p>
                                        </div>
                                    </motion.div>
                                );
                            })}
                        </motion.div>

                        <motion.div
                            variants={fadeUpVariant}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                        >
                            <Button size="lg" asChild className="rounded-full px-8 py-6 bg-[#3b5998] hover:bg-[#3b5998]/90 text-white font-medium text-sm shadow-xl hover:-translate-y-1 transition-transform">
                                <Link href="/about">ABOUT OUR CLINIC</Link>
                            </Button>
                        </motion.div>
                    </div>

                    {/* Image Side (Right) */}
                    <motion.div
                        variants={imageVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                        className="relative order-1 lg:order-2 h-[400px] sm:h-[500px] lg:h-[700px] w-full"
                    >
                        <img
                            src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                            alt="Dental Clinic Environment"
                            className="object-cover w-full h-full rounded-[2rem] lg:rounded-[3rem] shadow-2xl"
                            loading="lazy"
                        />
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
