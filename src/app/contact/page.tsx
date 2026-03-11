import { Container } from "@/components/ui/Container";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { InputField } from "@/components/ui/InputField";
import { Button } from "@/components/ui/Button";
import { Metadata } from "next";
import { MapPin, Phone, Mail } from "lucide-react";

export const metadata: Metadata = {
    title: "Contact Us | DentalCare Clinic",
    description: "Get in touch with us for any inquiries or to schedule a visit.",
};

export default function ContactPage() {
    return (
        <div className="py-24 bg-background min-h-[80vh]">
            <Container>
                <SectionTitle title="Get In Touch" subtitle="Contact Us" className="max-w-2xl mx-auto mb-16" />

                <div className="grid lg:grid-cols-2 gap-16">
                    <div>
                        <h3 className="text-2xl font-bold mb-6">Send Us A Message</h3>
                        <form className="space-y-4">
                            <div className="grid grid-cols-2 gap-4">
                                <InputField placeholder="First Name" />
                                <InputField placeholder="Last Name" />
                            </div>
                            <InputField type="email" placeholder="Email Address" />
                            <InputField placeholder="Subject" />
                            <textarea
                                className="flex min-h-[150px] w-full rounded-md border border-input bg-background px-4 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                placeholder="Your Message..."
                            />
                            <Button size="lg" className="w-full">Send Message</Button>
                        </form>
                    </div>

                    <div className="space-y-8 lg:pl-12">
                        <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <MapPin />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Location</h4>
                                <p className="text-muted-foreground">123 Smile Avenue, Dental District, New York, NY 10001</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <Phone />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Call Us</h4>
                                <p className="text-muted-foreground">+1 (555) 123-4567<br />Emergency: +1 (555) 987-6543</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-4">
                            <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <Mail />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Email Us</h4>
                                <p className="text-muted-foreground">info@dentalcare.com<br />support@dentalcare.com</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    );
}
