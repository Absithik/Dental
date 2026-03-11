"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionTitleProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string;
    subtitle?: string;
    align?: "left" | "center" | "right";
}

export function SectionTitle({
    title,
    subtitle,
    align = "center",
    className,
    ...props
}: SectionTitleProps) {
    return (
        <div
            className={cn(
                "mb-12 flex flex-col gap-4",
                align === "center" && "items-center text-center",
                align === "left" && "items-start text-left",
                align === "right" && "items-end text-right",
                className
            )}
            {...props}
        >
            {subtitle && (
                <motion.span
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-primary font-semibold tracking-wider uppercase text-sm"
                >
                    {subtitle}
                </motion.span>
            )}
            <motion.h2
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            >
                {title}
            </motion.h2>
        </div>
    );
}
