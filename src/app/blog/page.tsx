import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Blog & Insights | DentalCare Clinic",
    description: "Read our latest articles on oral hygiene, dental procedures, and news.",
};

export default function BlogPage() {
    return (
        <div className="py-24 bg-slate-50 min-h-[80vh]">
            <Container>
                <SectionTitle title="Latest Insights" subtitle="Our Blog" className="max-w-2xl mx-auto mb-16" />
                <div className="flex items-center justify-center h-64 border-2 border-dashed rounded-2xl border-border">
                    <p className="text-muted-foreground font-medium text-lg">Coming Soon. We are working on exciting articles for you!</p>
                </div>
            </Container>
        </div>
    );
}
