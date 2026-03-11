"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ctaContent } from "./content";
import { variant } from "./animation";

export function CTASection() {
    return (
        <section className="py-24 bg-background">
            <Container>
                <motion.div
                    variants={variant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="relative rounded-3xl overflow-hidden bg-primary text-primary-foreground py-16 px-8 md:px-16 text-center"
                >
                    {/* Decorative background elements */}
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />

                    <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
                        <h2 className="text-3xl md:text-5xl font-bold mb-6">
                            {ctaContent.title}
                        </h2>
                        <p className="text-lg md:text-xl text-primary-foreground/90 mb-10 max-w-2xl">
                            {ctaContent.description}
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full px-8 text-base shadow-lg" asChild>
                                <Link href={ctaContent.button_primary.href}>
                                    {ctaContent.button_primary.label}
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 rounded-full px-8 text-base" asChild>
                                <Link href={ctaContent.button_secondary.href}>
                                    {ctaContent.button_secondary.label}
                                </Link>
                            </Button>
                        </div>
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
