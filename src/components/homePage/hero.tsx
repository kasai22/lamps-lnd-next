"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { AiOutlineRight, AiOutlineLeft } from "react-icons/ai";
import GradientButton from "../ui/gradientButton";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  desc: string;
  img: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Complete Facility, Technical & Manpower Solutions",
    subtitle: "Quality Work at a fair price.",
    desc: "Professional housekeeping, deep cleaning, technical maintenance, and manpower services for all client needs.",
    img: "/hero/cleaners1.jpg",
  },
  {
    id: 2,
    title: "Smart Cleaning for Homes, Offices, and Industries",
    subtitle: "Hassle-free Cleaning Services.",
    desc: "From home cleaning to industrial maintenance — we ensure quality, safety, and customer satisfaction.",
    img: "/hero/cleaners2.jpg",
  },
  {
    id: 3,
    title: "End-to-End Property Maintenance Services",
    subtitle: "With Skilled Workforce.",
    desc: "Sanitization, maintenance, repairs, pest control & certified manpower.",
    img: "/hero/cleaners3.jpg",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrent((prev) => (prev + 1) % slides.length),
      120000
    );
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[75vh] md:min-h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 mt-[4.5rem] flex items-center justify-center md:justify-start
            transition-all duration-700 ease-in-out
            ${current === index
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-6 md:translate-x-10"
            }
          `}
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/60 md:bg-black/40" />

          {/* Content */}
          <div className="relative w-full px-5 py-14 sm:px-8 md:px-20
            text-center md:text-left max-w-xl md:max-w-2xl text-white"
          >
            <p className="text-sm sm:text-base md:text-xl font-light opacity-90 mb-2">
              {slide.subtitle}
            </p>

            <h1 className="text-2xl sm:text-3xl leading-snug font-extrabold mb-3
              md:text-5xl md:leading-tight"
            >
              {slide.title}
            </h1>

            <p className="text-sm sm:text-base md:text-lg opacity-95 mb-6 md:mb-8">
              {slide.desc}
            </p>

            <div className="flex flex-col md:flex-row gap-3 md:gap-6
              items-center md:items-start justify-center md:justify-start"
            >
              <GradientButton label="Contact Us" href="/contact" />

              <Link
                href="/services"
                className="w-full sm:w-auto border border-white text-white
                  px-6 py-3 rounded-lg font-semibold
                  hover:border-green-500 hover:text-green-500
                  active:scale-95 transition-all duration-200 text-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-8 w-full
        flex items-center justify-center gap-4 md:gap-4 z-20"
      >
        <button
          className="p-2 md:p-0 rounded-full text-white
            hover:bg-green-600 active:scale-90 transition"
          onClick={() =>
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
          }
        >
          <AiOutlineLeft size={18} />
        </button>

        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full
              transition-all duration-300
              ${current === index ? "bg-green-500 scale-125" : "bg-white/50"}
            `}
          />
        ))}

        <button
          className="p-2 md:p-0 rounded-full text-white
            hover:bg-green-600 active:scale-90 transition"
          onClick={() =>
            setCurrent((prev) => (prev + 1) % slides.length)
          }
        >
          <AiOutlineRight size={18} />
        </button>
      </div>
    </section>
  );
}
