/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { whyChooseUsContent } from "./content";
import { containerVariants, itemVariants, imageVariant } from "./animation";

export function WhyChooseUs() {
    return (
        <section className="py-24 bg-background">
            <Container>
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Content Side */}
                    <div>
                        <SectionTitle
                            align="left"
                            title={whyChooseUsContent.title}
                            subtitle={whyChooseUsContent.badge}
                            className="mb-6"
                        />
                        <p className="text-muted-foreground mb-12 text-lg">
                            {whyChooseUsContent.description}
                        </p>

                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            className="grid sm:grid-cols-2 gap-8"
                        >
                            {whyChooseUsContent.features.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <motion.div key={index} variants={itemVariants} className="flex flex-col gap-3">
                                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
                                            <Icon size={24} />
                                        </div>
                                        <h4 className="text-lg font-bold text-foreground">{feature.title}</h4>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {feature.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </motion.div>
                    </div>

                    {/* Image Side */}
                    <motion.div
                        variants={imageVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl lg:ml-8"
                    >
                        <div className="absolute inset-0 bg-primary/20 mix-blend-multiply z-10" />
                        <img
                            src={whyChooseUsContent.image_url}
                            alt="Dental Team"
                            className="w-full h-full object-cover"
                            loading="lazy"
                        />
                    </motion.div>
                </div>
            </Container>
        </section>
    );
}
