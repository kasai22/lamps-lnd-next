import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import Image from "next/image";

const WhyChooseUs = () => {
    return (
        <section className="bg-white py-24 w-full flex flex-col md:flex-row items-center justify-between px-8 md:px-16 gap-12">
            {/* Left side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center">
                <h2
                    className="mb-4"
                    style={{
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontWeight: 600,
                        fontSize: "44px",
                        lineHeight: "120%",
                        letterSpacing: "0%",
                    }}
                >
                    WHY CHOOSE LAMPS?
                </h2>
                <p
                    className="mb-6"
                    style={{
                        fontFamily: "'Be Vietnam Pro', sans-serif",
                        fontWeight: 400,
                        fontSize: "16px",
                        lineHeight: "160%",
                        letterSpacing: "0%",
                        color: "#666666",
                        width: "60%",
                    }}
                >
                    Read testimonials from our satisfied clients. See how our cleaning services
                    have made a difference in their lives and homes.
                </p>
                <div className="flex gap-4 text-2xl text-green-500">
                    <BiLeftArrow size={40} className="cursor-pointer" />
                    <BiRightArrow size={40} className="cursor-pointer" />
                </div>
            </div>

            {/* Right side: single horizontal card */}
            <div className="w-full md:w-1/2 flex justify-center">
                <div
                    className="flex flex-row items-start w-[600px] h-[284px] rounded-[20px] p-5"
                    style={{
                        borderStyle: "solid",
                        borderWidth: "10px 10px 0 0", // top right bottom left
                        borderColor: "#36B864",
                    }}
                >
                    {/* Image */}
                    <div className="w-[170px] h-[244px] flex-shrink-0 rounded-[10px] border border-gray-300 overflow-hidden">
                        <Image
                            src="/whychooseus.png"
                            alt="Why Choose Us"
                            width={170}
                            height={244}
                            className="object-cover"
                        />
                    </div>

                    {/* Card content */}
                    <div className="flex flex-col justify-between ml-6 h-full">
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col">
                                <h3
                                    style={{
                                        fontFamily: "'Be Vietnam Pro', sans-serif",
                                        fontWeight: 600,
                                        fontSize: "20px",
                                        lineHeight: "120%",
                                    }}
                                >
                                    Robert Fox
                                </h3>
                                <span
                                    style={{
                                        fontFamily: "'Be Vietnam Pro', sans-serif",
                                        fontWeight: 400,
                                        fontSize: "14px",
                                        lineHeight: "160%",
                                        color: "#666666",
                                    }}
                                >
                                    Business Man
                                </span>
                                <span className="text-yellow-400">★★★★★</span>
                            </div>
                            <div>
                                <Image
                                    src="/quotation.png"
                                    alt="Quotes"
                                    width={50}
                                    height={50}
                                    className="mt-2 mb-4"
                                />
                            </div>
                        </div>
                        <p
                            style={{
                                fontFamily: "'Be Vietnam Pro', sans-serif",
                                fontWeight: 400,
                                fontSize: "16px",
                                lineHeight: "160%",
                                color: "#666666",
                            }}
                        >
                            Excellent service! The team was punctual, thorough, and left my home
                            sparkling clean. Highly recommend for anyone needing a reliable and
                            detailed cleaning service.
                        </p>
                        <span
                            style={{
                                fontFamily: "'Be Vietnam Pro', sans-serif",
                                fontWeight: 400,
                                fontSize: "14px",
                                lineHeight: "160%",
                                color: "#999999",
                            }}
                        >
                            – Client Name
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
