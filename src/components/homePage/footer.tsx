import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-[#111D15] text-white py-16 px-6 md:px-12 lg:px-24">
            <div className="max-w-7xl mx-auto">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                    {/* Column 1: Logo and Tagline */}
                    <div className="space-y-6">
                        <div className="flex items-center">
                            {/* Replace with your actual logo asset */}
                            <img
                                src="/lampsfooter.png"
                                alt="LAMPS Logo"
                                className="h-12 w-auto brightness-0 invert"
                            />
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                            Stay updated with our latest cleaning tips, service updates, and helpful articles on maintaining a spotless home.
                        </p>
                    </div>

                    {/* Column 2: Company Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Company</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">About Us</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Services</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Our Team</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Know More Links */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Know More</h3>
                        <ul className="space-y-4">
                            <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Support</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="text-gray-300 hover:text-green-500 transition-colors">Terms & conditions</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter */}
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Newsletter</h3>
                        <div className="flex flex-col space-y-4">
                            <input
                                type="email"
                                placeholder="Email"
                                className="bg-transparent border border-gray-700 rounded-md p-3 focus:outline-none focus:border-green-500 transition-colors text-white"
                            />
                            <button
                                type="button"
                                className="bg-[#62B16B] hover:bg-[#52a05b] text-white font-semibold py-2 px-6 rounded-md w-fit transition-colors"
                            >
                                Send
                            </button>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-gray-800 text-center">
                    <p className="text-gray-400 text-sm">
                        1993 "LAMPS" All Rights Received
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;