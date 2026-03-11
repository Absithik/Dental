import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/Card";
import { Activity, PlusCircle, Sparkles, Smile, Syringe, Stethoscope, Scissors, HeartPulse, ShieldPlus, Heart } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Services | DentalCare Clinic",
    description: "Explore our comprehensive list of professional dental services including Root Canals, Implants, Whitening, and more.",
};

const allServices = [
    { title: "Root Canal Treatment", desc: "Painless root canal procedures to save your natural teeth.", icon: Activity },
    { title: "Dental Implants", desc: "Permanent replacements for missing teeth that look natural.", icon: PlusCircle },
    { title: "Teeth Whitening", desc: "Professional whitening services for a brighter smile.", icon: Sparkles },
    { title: "Smile Designing", desc: "Complete smile makeovers using advanced cosmetic dentistry.", icon: Smile },
    { title: "Braces & Aligners", desc: "Straighten your teeth with invisible aligners or braces.", icon: Scissors },
    { title: "Pediatric Dentistry", desc: "Gentle dental care specifically for children.", icon: Stethoscope },
    { title: "Tooth Extraction", desc: "Safe extractions including wisdom teeth removal.", icon: Syringe },
    { title: "Dental Fillings", desc: "Tooth-colored composite fillings to restore decayed teeth.", icon: ShieldPlus },
    { title: "Gum Treatment", desc: "Advanced periodontics for healthy gums and prevention.", icon: HeartPulse },
    { title: "Full Mouth Rehabilitation", desc: "Comprehensive restoration of your entire mouth.", icon: Heart }
];

export default function ServicesPage() {
    return (
        <div className="py-24 bg-slate-50 min-h-[80vh]">
            <Container>
                <SectionTitle title="Our Dental Services" subtitle="Comprehensive Care" className="max-w-2xl mx-auto" />
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {allServices.map((srv, i) => {
                        const Icon = srv.icon;
                        return (
                            <Card key={i} className="hover:border-primary/50 transition-colors bg-background" id={srv.title.toLowerCase().replace(/ /g, '-')}>
                                <CardHeader>
                                    <div className="w-14 h-14 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                        <Icon size={28} strokeWidth={1.5} />
                                    </div>
                                    <CardTitle>{srv.title}</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-muted-foreground leading-relaxed">{srv.desc}</p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </Container>
        </div>
    )
}
