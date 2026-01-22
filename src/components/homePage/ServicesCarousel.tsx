"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef } from "react";

interface Service {
  title: string;
  description: string;
  image: string;
  primary?: boolean;
}

const services: Service[] = [
  {
    title: "Housekeeping & Facility Management",
    description:
      "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
    image: "/services/service-1.jpg",
  },
  {
    title: "Deep Cleaning",
    description:
      "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
    image: "/services/service-2.jpg",
    primary: true,
  },
  {
    title: "Technical Maintenance Services",
    description:
      "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
    image: "/services/service-3.jpg",
  },
];

export default function ServicesCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollNext = () => {
    scrollRef.current?.scrollBy({
      left: 360,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      {/* Carousel */}
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto pr-16 scrollbar-hide flex-row lg:flex-col"
      >
        {services.map((service, index) => (
          /* ✅ FIXED CARD WIDTH */
          <div key={index} className="w-[320px] shrink-0">
            {/* Image */}
            <div className="overflow-hidden rounded-4xl bg-gray-100">
              <Image
                src={service.image}
                alt={service.title}
                width={320}
                height={240}
                className="object-cover"
                priority={index === 0}
              />
            </div>

            {/* Content — EXACT SAME WIDTH */}
            <div className="mt-6 space-y-4">
              <h3 className="text-[22px] font-semibold leading-snug text-[#0F2A1D]">
                {service.title}
              </h3>

              <p className="text-sm leading-relaxed text-[#6B7C73]">
                {service.description}
              </p>

              <button
                className={`inline-flex items-center gap-2 rounded-lg px-5 py-2 text-sm font-medium transition
                  ${
                    service.primary
                      ? "bg-[#3CB371] text-white hover:bg-[#35A864]"
                      : "border border-[#0F2A1D] text-[#0F2A1D] hover:bg-[#0F2A1D] hover:text-white"
                  }
                `}
              >
                Book Now
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Right Arrow */}
      <button
        onClick={scrollNext}
        aria-label="Scroll services"
        className="
          absolute right-0 top-[100px]
          flex h-12 w-12 items-center justify-center
          rounded-full bg-[#3CB371] text-white
          shadow-lg transition hover:scale-105
        "
      >
        <ArrowRight size={20} />
      </button>
    </div>
  );
}
