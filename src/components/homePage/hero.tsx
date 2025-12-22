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

  const goToSlide = (index: number) => setCurrent(index);

  return (
    <section className="relative w-full min-h-[80vh] md:min-h-screen overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute mt-[4.5rem] inset-0 flex items-center justify-center md:justify-start transition-all duration-700 ease-in-out
          ${
            current === index
              ? "opacity-100 translate-x-0"
              : "opacity-0 translate-x-10"
          }
        `}
          style={{
            backgroundImage: `url(${slide.img})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Overlay — darker on mobile */}
          <div className="absolute inset-0 bg-black/50 md:bg-black/40" />

          {/* Content */}
          <div className="relative px-6 py-16 text-center md:text-left md:px-20 max-w-2xl text-white">
            <p className="text-base md:text-xl font-light opacity-90 mb-2">
              {slide.subtitle}
            </p>

            <h1 className="text-3xl leading-snug font-extrabold mb-4 md:text-5xl md:leading-tight">
              {slide.title}
            </h1>

            <p className="text-sm md:text-lg opacity-95 mb-8">{slide.desc}</p>

            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center md:items-start justify-center md:justify-start">
              <GradientButton label="Contact Us" href="/contact" />

              <Link
                href="/services"
                className="w-full md:w-auto border border-white text-white px-6 py-3 rounded-lg font-semibold hover:border-green-500 hover:text-green-500 active:scale-95 transition-all duration-200 text-center"
              >
                View Services
              </Link>
            </div>
          </div>
        </div>
      ))}

      {/* Pagination Dots */}
      <div className="absolute bottom-4 md:bottom-8 w-full flex justify-center gap-3 md:gap-4 z-20">
        <button
          className=" text-white hover:bg-green-600 rounded-full shadow z-20"
          onClick={() =>
            setCurrent((prev) => (prev - 1 + slides.length) % slides.length)
          }
        >
          <AiOutlineLeft />
        </button>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300
            ${current === index ? "bg-green-500 scale-125" : "bg-white/50"}
          `}
          />
        ))}

        <button
          className=" text-white hover:bg-green-600 rounded-full shadow z-20"
          onClick={() => setCurrent((prev) => (prev + 1) % slides.length)}
        >
          <AiOutlineRight />
        </button>
      </div>

      {/* Navigation — thumbs easy area */}
    </section>
  );
}
