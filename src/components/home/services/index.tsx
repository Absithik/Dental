"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { servicesContent } from "./content";
import { staggerContainer, cardVariant } from "./animation";
import Link from "next/link";

export function DentalServices() {
    return (
        <section className="py-24 bg-slate-50 relative">
            <Container>
                {/* Header Area */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div className="flex flex-col gap-4 flex-1">
                        <span className="text-sm font-semibold text-[#5c6dfb] uppercase tracking-wider">
                            {servicesContent.badge}
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-[2.75rem] font-medium tracking-tight text-foreground leading-[1.1] max-w-2xl">
                            {servicesContent.title}
                        </h2>
                    </div>
                    <Link
                        href="/services"
                        className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-[#3b5998] hover:bg-[#3b5998]/90 text-white font-medium text-sm transition-colors shadow-sm shrink-0"
                    >
                        {servicesContent.button}
                    </Link>
                </div>

                {/* Services Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {servicesContent.services.map((service, index) => {
                        const iconUrl = service.iconUrl;
                        return (
                            <motion.div key={index} variants={cardVariant}>
                                <div className="h-full bg-white rounded-3xl p-8 flex flex-col items-start border border-border/10 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-10px_rgba(0,0,0,0.1)] transition-all duration-300">

                                    {/* Icon Container */}
                                    <div className="relative mb-8">
                                        <div className="w-14 h-14 bg-primary shadow-md rounded-2xl flex items-center justify-center relative z-10">
                                            {/* eslint-disable-next-line @next/next/no-img-element */}
                                            <img src={iconUrl} alt={service.title} className="w-8 h-8 object-contain" />
                                        </div>
                                    </div>

                                    {/* Texts */}
                                    <h3 className="text-2xl font-medium mb-4 text-foreground tracking-tight">
                                        {service.title}
                                    </h3>

                                    <p className="text-muted-foreground leading-relaxed mb-10 flex-1">
                                        {service.description}
                                    </p>

                                    {/* Button */}
                                    <Link
                                        href={`/services#${service.title.toLowerCase().replace(/ /g, '-')}`}
                                        className="inline-flex items-center justify-center px-6 py-2 rounded-full border border-slate-200 text-primary text-xs font-semibold hover:bg-slate-50 transition-colors uppercase tracking-wider"
                                    >
                                        Learn More
                                    </Link>
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>
            </Container>
        </section>
    );
}
