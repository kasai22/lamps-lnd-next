import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const ContactUs = () => {
    return (
        <section className="py-16 px-6 bg-white max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">

                {/* Left Column: Contact Cards */}
                <div className="space-y-6">
                    <h2 className="text-4xl font-bold text-gray-900 mb-8">Find us</h2>

                    {/* Call Us Card */}
                    <div className="flex items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-green-500 p-4 rounded-full text-white mr-6">
                            <Phone size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Call Us</h3>
                            <p className="text-gray-600 font-medium">+91 89999 89499</p>
                        </div>
                    </div>

                    {/* Email Card */}
                    <div className="flex items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-green-500 p-4 rounded-full text-white mr-6">
                            <Mail size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Email Now</h3>
                            <p className="text-gray-600 font-serif">info@lampsservices.com</p>
                        </div>
                    </div>

                    {/* Address Card */}
                    <div className="flex items-center p-6 bg-gray-50 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="bg-green-500 p-4 rounded-full text-white mr-6">
                            <MapPin size={28} />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-gray-900">Address</h3>
                            <p className="text-gray-600">Visakhapatnam, Andhra Pradesh</p>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="space-y-6">
                    <div className="mb-8">
                        <span className="text-gray-600 font-medium uppercase tracking-wide text-sm">Contact info</span>
                        <h2 className="text-4xl font-bold text-gray-900 mt-2">Keep In Touch</h2>
                        <p className="text-gray-500 mt-4 leading-relaxed">
                            We prioritize responding to your inquiries promptly to ensure you receive the assistance you need in a timely manner.
                        </p>
                    </div>

                    <form className="space-y-4">
                        <input
                            type="text"
                            placeholder="Name"
                            className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        />
                        <textarea
                            placeholder="Message"
                            rows={4}
                            className="w-full p-4 bg-white border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                        ></textarea>

                        <button
                            type="submit"
                            className="bg-[#36B864] hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transition-colors duration-200"
                        >
                            Sent Massage
                        </button>
                    </form>
                </div>

            </div>
        </section>
    );
};

export default ContactUs;