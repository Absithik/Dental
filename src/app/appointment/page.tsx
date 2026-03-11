import { AppointmentSection } from "@/components/home/appointment";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Appointment | DentalCare Clinic",
    description: "Schedule your visit to our dental clinic today.",
};

export default function AppointmentPage() {
    return (
        <div className="pt-20 min-h-[80vh] flex flex-col">
            <AppointmentSection />
        </div>
    );
}
