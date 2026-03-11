/* eslint-disable @next/next/no-img-element */
"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { containerVariants, itemVariants } from "./animation";

const tags = [
    "Preventive Care",
    "Oral Surgery",
    "Emergency Care",
    "Orthodontics",
    "Cosmetic Dentistry",
    "Dental Repair"
];

const avatars = [
    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80",
    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&auto=format&fit=crop&w=100&q=80"
];

export function HeroSection() {
    return (
        <div className="relative">
            {/* Top Hero Image Section */}
            <section className="relative pt-32 pb-48 lg:pt-48 lg:pb-64 overflow-hidden -mt-[84px]">
                {/* Background video full width/height */}
                <div className="absolute inset-0 -z-10">
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover"
                    >
                        <source src="https://cdn.pixabay.com/video/2021/08/25/86241-592817349_large.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                    <div className="absolute inset-0 bg-black/40" /> {/* Dark overlay for text readability */}
                </div>

                <Container className="relative z-10">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="grid lg:grid-cols-2 gap-8 items-end"
                    >
                        {/* Left text */}
                        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight text-white leading-[1.1]">
                            Exceptional <br />
                            <span className="font-light">dental care.</span>
                        </motion.h1>

                        {/* Right text */}
                        <motion.div variants={itemVariants} className="flex flex-col gap-6 lg:ml-auto max-w-sm text-white lg:pb-6">
                            <p className="text-lg leading-relaxed text-white/90 font-medium">
                                Our team is committed to delivering top-quality, compassionate treatments in a comfortable environment.
                            </p>
                            <Button asChild className="w-fit rounded-full bg-white text-primary hover:bg-white/90 px-8 py-6 text-sm font-semibold shadow-xl">
                                <Link href="/appointment">BOOK NOW</Link>
                            </Button>
                        </motion.div>
                    </motion.div>
                </Container>
            </section>

            {/* Overlapping Info Card Section Below */}
            <section className="relative z-20 -mt-24 lg:-mt-32 pb-16">
                <Container>
                    <div className="grid lg:grid-cols-3 gap-6 lg:gap-8 xl:gap-12 items-stretch">

                        {/* Left Info Card (Spans 2 columns) */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
                            className="bg-white rounded-[2rem] lg:rounded-[3rem] p-8 md:p-12 shadow-2xl shadow-primary/5 lg:col-span-2 h-full"
                        >
                            <div className="grid md:grid-cols-2 gap-12 lg:gap-8 xl:gap-16">
                                {/* Left Column: Heading and tags */}
                                <div className="flex flex-col gap-10">
                                    <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-medium text-foreground tracking-tight leading-[1.15]">
                                        We provide expert dental care tailored to your needs.
                                    </h2>
                                    <div className="flex flex-wrap gap-2 md:gap-3 mt-auto pt-8">
                                        {tags.map((tag) => (
                                            <span key={tag} className="rounded-full border border-primary/40 text-primary px-4 py-1.5 text-sm font-medium hover:bg-primary/5 transition-colors cursor-default">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Right Column: Why Dental + Description */}
                                <div className="flex flex-col gap-6">
                                    <h3 className="text-3xl font-medium tracking-tight">Why Dental?</h3>
                                    <div className="flex -space-x-4">
                                        {avatars.map((url, i) => (
                                            <img
                                                key={i}
                                                src={url}
                                                alt="Patient"
                                                className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm"
                                            />
                                        ))}
                                    </div>
                                    <p className="text-muted-foreground leading-relaxed text-lg mt-2 lg:mt-6">
                                        Whether you&apos;re visiting for a routine check-up achieve a confident, healthy smile.
                                    </p>
                                </div>
                            </div>
                        </motion.div>

                        {/* Right Column: Services card (Spans 1 column) */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
                            className="relative rounded-[2rem] lg:rounded-[3rem] overflow-hidden min-h-[350px] lg:h-full group cursor-pointer shadow-2xl"
                        >
                            <img
                                src="https://images.unsplash.com/photo-1598256989508-30138d6ea003?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                alt="Dental Services"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 transition-opacity duration-300" />
                            <div className="absolute inset-0 p-8 flex flex-col justify-between text-white z-10">
                                <h3 className="text-3xl font-medium">Services</h3>
                                <div className="flex flex-col gap-6">
                                    <p className="text-base font-medium text-white/90 leading-relaxed max-w-[90%]">
                                        We offer a comprehensive range of dental services designed to meet the needs of every patient.
                                    </p>

                                </div>
                            </div>

                            {/* Overlay floating button on bottom right */}
                            <div className="absolute bottom-0 right-0 z-20 bg-slate-50 rounded-tl-3xl p-3">
                                <Link href="/services" className="flex items-center justify-center w-14 h-14 bg-white text-primary rounded-full shadow-lg hover:scale-110 transition-transform">
                                    <ArrowRight size={20} strokeWidth={2.5} />
                                </Link>
                            </div>
                        </motion.div>

                    </div>
                </Container>
            </section>
        </div>
    );
}
