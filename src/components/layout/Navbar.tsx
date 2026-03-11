"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
    { name: "HOME", href: "/" },
    { name: "ABOUT", href: "/about" },
    { name: "SERVICES", href: "/services" },
    { name: "DENTISTS", href: "/about#doctors" },
    { name: "PRICING", href: "#" },
    { name: "ALL PAGES", href: "#", hasDropdown: true },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const pathname = usePathname();
    const isHome = pathname === "/";

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const isTransparent = isHome && !isScrolled;

    return (
        <header
            className={cn(
                "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300",
                isTransparent
                    ? "bg-transparent py-4"
                    : "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm border-b py-2"
            )}
        >
            <Container>
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <div className={cn("relative h-10 w-40 transition-all", isTransparent ? "brightness-0 invert" : "")}>
                            <Image
                                src="/images/logo.png"
                                alt="Dental Logo"
                                fill
                                sizes="(max-width: 768px) 150px, 150px"
                                className="object-contain object-left"
                            />
                        </div>

                    </Link>

                    {/* Desktop Navigation (Pill shape) */}
                    <nav className={cn(
                        "hidden lg:flex items-center gap-6 px-8 py-3 rounded-full transition-colors",
                        isTransparent ? "bg-white/10 backdrop-blur-md" : "bg-transparent"
                    )}>
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={cn(
                                    "flex items-center gap-1 text-sm font-semibold transition-colors hover:opacity-70",
                                    isTransparent ? "text-white" : "text-foreground"
                                )}
                            >
                                {link.name}
                                {link.hasDropdown && <ChevronDown size={14} className="ml-0.5" />}
                            </Link>
                        ))}
                    </nav>

                    {/* CTA Button */}
                    <div className="hidden lg:flex items-center">
                        <Button
                            asChild
                            className={cn(
                                "rounded-full px-6 font-semibold shadow-none",
                                isTransparent
                                    ? "bg-white text-primary hover:bg-white/90"
                                    : ""
                            )}
                        >
                            <Link href="/appointment">SCHEDULE A VISIT</Link>
                        </Button>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className={cn("lg:hidden p-2", isTransparent ? "text-white" : "text-foreground")}
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </Container>

            {/* Mobile Navigation */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden border-t bg-background absolute top-full left-0 w-full shadow-lg"
                    >
                        <Container className="py-4 flex flex-col gap-2">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block text-sm font-semibold text-foreground py-3 border-b border-border/50"
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4">
                                <Button className="w-full rounded-full" asChild onClick={() => setIsOpen(false)}>
                                    <Link href="/appointment">SCHEDULE A VISIT</Link>
                                </Button>
                            </div>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
