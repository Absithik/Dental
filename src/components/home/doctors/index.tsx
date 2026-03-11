/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { doctorsContent } from "./content";
import { cardVariants } from "./animation";
import { Users } from "lucide-react";
import Link from "next/link";

export function DoctorsSection() {
    return (
        <section className="py-24 bg-slate-50">
            <Container>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">

                    {/* Item 1: Intro Block */}
                    <div className="flex flex-col justify-center gap-6 p-8 lg:pr-12">
                        <span className="text-primary font-bold text-sm tracking-wider uppercase">
                            {doctorsContent.badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl font-extrabold text-foreground leading-tight whitespace-pre-line">
                            {doctorsContent.title}
                        </h2>
                        <div className="mt-4">
                            <Button size="lg" asChild className="rounded-full px-8">
                                <Link href={doctorsContent.buttonLink}>
                                    {doctorsContent.buttonText}
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Item 2: Doctor 1 */}
                    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#EAEAEA]">
                            <img src={doctorsContent.doctors[0].image} alt={doctorsContent.doctors[0].name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground">{doctorsContent.doctors[0].name}</h3>
                            <p className="text-muted-foreground">{doctorsContent.doctors[0].specialty}</p>
                        </div>
                    </motion.div>

                    {/* Item 3: Doctor 2 */}
                    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#EAEAEA]">
                            <img src={doctorsContent.doctors[1].image} alt={doctorsContent.doctors[1].name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground">{doctorsContent.doctors[1].name}</h3>
                            <p className="text-muted-foreground">{doctorsContent.doctors[1].specialty}</p>
                        </div>
                    </motion.div>

                    {/* Item 4: CTA Block */}
                    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm flex flex-col justify-center gap-6">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
                            <Users size={24} />
                        </div>
                        <h3 className="text-2xl font-bold text-foreground">
                            {doctorsContent.ctaTitle}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                            {doctorsContent.ctaDescription}
                        </p>
                        <div className="mt-2">
                            <Button size="sm" variant="outline" asChild className="rounded-full px-6 text-primary border-primary/20 hover:bg-primary/5">
                                <Link href={doctorsContent.ctaButtonLink}>
                                    {doctorsContent.ctaButtonText}
                                </Link>
                            </Button>
                        </div>
                    </motion.div>

                    {/* Item 5: Doctor 3 */}
                    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#EAEAEA]">
                            <img src={doctorsContent.doctors[2].image} alt={doctorsContent.doctors[2].name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground">{doctorsContent.doctors[2].name}</h3>
                            <p className="text-muted-foreground">{doctorsContent.doctors[2].specialty}</p>
                        </div>
                    </motion.div>

                    {/* Item 6: Doctor 4 */}
                    <motion.div variants={cardVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="flex flex-col gap-4">
                        <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-[#EAEAEA]">
                            <img src={doctorsContent.doctors[3].image} alt={doctorsContent.doctors[3].name} className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-foreground">{doctorsContent.doctors[3].name}</h3>
                            <p className="text-muted-foreground">{doctorsContent.doctors[3].specialty}</p>
                        </div>
                    </motion.div>

                </div>
            </Container>
        </section>
    );
}
