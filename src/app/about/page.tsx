import { AboutSection } from "@/components/home/about";
import { DoctorsSection } from "@/components/home/doctors";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "About Us | DentalCare Clinic",
    description: "Learn more about our dental clinic history, experienced doctors, and advanced medical equipment.",
};

export default function AboutPage() {
    return (
        <div className="min-h-screen">
            <AboutSection />
            <div className="border-t">
                <DoctorsSection />
            </div>
        </div>
    );
}
