"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Button } from "@/components/ui/Button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { whiteningContent } from "./content";
import { containerVariants, itemVariants, imageVariants } from "./animation";

export function WhiteningSection() {
    return (
        <section className="py-24 bg-slate-50">
            <Container>
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <SectionTitle
                        align="center"
                        title={whiteningContent.title}
                        subtitle={whiteningContent.badge}
                        className="mb-6"
                    />
                    <p className="text-muted-foreground text-lg">
                        {whiteningContent.description}
                    </p>
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid md:grid-cols-3 gap-8 mb-16"
                >
                    {whiteningContent.features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col items-center text-center gap-4 bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
                            >
                                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-2">
                                    <Icon size={32} />
                                </div>
                                <h4 className="text-xl font-semibold text-foreground">{feature.title}</h4>
                                <p className="text-muted-foreground leading-relaxed">
                                    {feature.description}
                                </p>
                            </motion.div>
                        );
                    })}
                </motion.div>

                <div className="flex flex-col items-center">
                    <motion.div
                        variants={imageVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="mb-12 rounded-2xl overflow-hidden shadow-2xl relative w-full max-w-4xl aspect-[2/1]"
                    >
                        <img
                            src={whiteningContent.image_url}
                            alt="Before and after teeth whitening"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>

                    <Button size="lg" asChild className="rounded-full px-8">
                        <Link href={whiteningContent.buttonLink}>
                            {whiteningContent.buttonText}
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </Container>
        </section>
    );
}
