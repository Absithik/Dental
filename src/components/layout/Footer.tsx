import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Facebook, Instagram } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-[#111111] text-white pt-16 font-sans">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-6 mb-16">

                    {/* Services Section (Takes up 5 cols) */}
                    <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-3 gap-6">
                        {/* Col 1 */}
                        <div>
                            <h3 className="text-primary font-bold text-lg mb-6 uppercase tracking-wide">SERVICES</h3>

                            <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">GENERAL DENTISTRY</h4>
                            <ul className="space-y-2 text-[13px] text-gray-300">
                                <li><Link href="#" className="hover:text-primary transition-colors">Dental Checkups</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Dental Cleanings</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Digital X-Rays</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Preventive And Routine Care</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Dental Sealants</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Pain Management</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Custom Night Guards</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Restorative Therapy</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Teeth Extraction</Link></li>
                            </ul>
                        </div>

                        {/* Col 2 */}
                        <div className="sm:pt-14">
                            <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">GUM THERAPY</h4>
                            <ul className="space-y-2 text-[13px] text-gray-300 mb-8">
                                <li><Link href="#" className="hover:text-primary transition-colors">Flap Surgery</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Bone Grafting</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Root Planing</Link></li>
                            </ul>

                            <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">ENDODONTIC THERAPY</h4>
                            <ul className="space-y-2 text-[13px] text-gray-300">
                                <li><Link href="#" className="hover:text-primary transition-colors">Root Canal Therapy</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Periapical Surgery</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Post & Core</Link></li>
                            </ul>
                        </div>

                        {/* Col 3 */}
                        <div className="sm:pt-14">
                            <h4 className="font-bold text-sm mb-4 uppercase tracking-wide">COSMETIC THERAPY</h4>
                            <ul className="space-y-2 text-[13px] text-gray-300">
                                <li><Link href="#" className="hover:text-primary transition-colors">Ceramic Veneers</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Composite Veneers</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Smile Design</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Gummy Smile Correction</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Clear Aligners</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Orthodontic Braces</Link></li>
                                <li><Link href="#" className="hover:text-primary transition-colors">Emax Crowns & Bridges</Link></li>
                            </ul>
                        </div>
                    </div>

                    {/* Divider Line */}
                    <div className="hidden lg:block lg:col-span-1 relative">
                        <div className="absolute left-1/2 top-4 bottom-0 w-px bg-gray-800 transform -translate-x-1/2"></div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-primary font-bold text-lg mb-6 uppercase tracking-wide">QUICK LINKS</h3>
                        <ul className="space-y-3 text-[13px] text-white font-medium">
                            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
                            <li><Link href="/whitening" className="hover:text-primary transition-colors">Before & After</Link></li>
                            <li><Link href="/appointment" className="hover:text-primary transition-colors">Request Appointment</Link></li>
                            <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Clinic Address & Review */}
                    <div className="lg:col-span-2">
                        <h3 className="text-primary font-bold text-lg mb-4 uppercase tracking-wide">OUR CLINIC</h3>
                        <p className="text-[13px] text-white leading-relaxed mb-8">
                            No.7, 1st Floor, 3rd Main Rd, Opp. To Canara Bank, Maharaja Nagar, Tirunelveli, Tamil Nadu 627011
                        </p>

                        <h3 className="text-primary font-bold text-lg mb-4 uppercase tracking-wide">REVIEW US</h3>
                        <div className="flex items-center gap-3 w-fit">
                            <a href="#" className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-500 flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                <Instagram size={16} />
                            </a>
                            <a href="#" className="w-8 h-8 rounded-full bg-[#1877F2] flex items-center justify-center text-white hover:opacity-80 transition-opacity">
                                <Facebook size={16} fill="currentColor" stroke="none" />
                            </a>
                        </div>
                    </div>

                    {/* Working Days */}
                    <div className="lg:col-span-2">
                        <h3 className="text-primary font-bold text-lg mb-4 uppercase tracking-wide">WORKING DAYS</h3>
                        <p className="text-[13px] text-white font-medium mb-8">MONDAY - SATURDAY</p>

                        <h3 className="text-primary font-bold text-lg mb-4 uppercase tracking-wide">CLINIC HOURS</h3>
                        <ul className="space-y-2 text-[13px] text-white font-medium">
                            <li>10am - 1:30pm</li>
                            <li>5pm - 9pm</li>
                        </ul>
                    </div>

                </div>
            </Container>

            {/* Bottom Bar */}
            <div className="bg-primary py-3 text-center">
                <p className="text-[11px] text-white font-medium tracking-wide">
                    &copy; 2025 raadhidental.in. All Rights Reserved. Created by Aaron graphics
                </p>
            </div>
        </footer>
    );
}
