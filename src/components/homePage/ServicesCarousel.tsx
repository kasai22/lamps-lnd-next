"use client";

import Image from "next/image";
import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useRef, useState } from "react";

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
  {
    title: "Grouting Works",
    description:
      "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
    image: "/services/service-1.jpg",
  },
  {
    title: "Interior & Exterior Cleaning",
    description:
      "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
    image: "/services/service-2.jpg",
  },
  {
    title: "Landscaping",
    description:
      "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
    image: "/services/service-3.jpg",
  },
  {
    title: "Pest Control",
    description:
      "While we can customize your cleaning plan to suit your needs, most clients schedule regular cleaning services:",
    image: "/services/service-1.jpg",
  },
];

export default function ServicesSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(0);

  // DESKTOP pages unchanged (6 per page)
  const totalPages = Math.ceil(services.length / 6);

  const scrollToPage = (nextPage: number) => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollTo({
      left: scrollRef.current.clientWidth * nextPage,
      behavior: "smooth",
    });

    setPage(nextPage);
  };

  const scrollMobile = (direction: "prev" | "next") => {
    if (!scrollRef.current) return;

    const container = scrollRef.current;
    const cardWidth = container.clientWidth;

    container.scrollTo({
      left:
        direction === "next"
          ? container.scrollLeft + cardWidth
          : container.scrollLeft - cardWidth,
      behavior: "smooth",
    });
  };


  return (
    <div className="relative w-full overflow-hidden">
      {/* VIEWPORT */}
      <div
        ref={scrollRef}
        className="w-full flex overflow-x-hidden lg:overflow-x-hidden"
      >
        {/* MOBILE: single-card slides */}
        <div className="flex w-full lg:hidden">
          {services.map((service, index) => (
            <div
              key={index}
              className="w-full shrink-0 px-4"
            >
              <div className="space-y-6">
                {/* IMAGE */}
                <div className="overflow-hidden rounded-[30px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={370}
                    height={262}
                    className="h-[262px] w-full object-cover"
                  />
                </div>

                {/* CONTENT */}
                <div className="space-y-4">
                  <h3 className="text-[22px] font-semibold leading-[120%] text-[#0F2A1D]">
                    {service.title}
                  </h3>

                  <p className="text-[15px] leading-[150%] text-[#6B7C73]">
                    {service.description}
                  </p>

                  <button
                    className={`
                      inline-flex items-center gap-2 rounded-lg px-6 py-3
                      text-[15px] font-normal transition
                      ${service.primary
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
            </div>
          ))}
        </div>

        {/* DESKTOP: original paged grid (UNCHANGED) */}
        {Array.from({ length: totalPages }).map((_, pageIndex) => (
          <div
            key={pageIndex}
            className="
              hidden lg:grid
              w-full shrink-0
              grid-cols-3 grid-rows-2
              gap-x-8 gap-y-16
              px-2
            "
          >
            {services
              .slice(pageIndex * 6, pageIndex * 6 + 6)
              .map((service, index) => (
                <div key={index} className="space-y-6">
                  <div className="overflow-hidden rounded-[30px]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      width={370}
                      height={262}
                      className="h-[262px] w-full object-cover"
                    />
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-[24px] font-semibold leading-[120%] text-[#0F2A1D]">
                      {service.title}
                    </h3>

                    <p className="text-[16px] leading-[150%] text-[#6B7C73]">
                      {service.description}
                    </p>

                    <button
                      className={`
                        inline-flex items-center gap-2 rounded-lg px-6 py-3
                        text-[16px] font-normal transition
                        ${service.primary
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
        ))}
      </div>

      {/* MOBILE ARROWS */}
      <div className="flex lg:hidden justify-center gap-6 mt-8">
        <button
          onClick={() => scrollMobile("prev")}
          aria-label="Previous service"
          className="
      flex h-12 w-12 items-center justify-center
      rounded-full bg-[#3CB371] text-white
      shadow-lg transition active:scale-95
    "
        >
          <ArrowLeft size={20} />
        </button>

        <button
          onClick={() => scrollMobile("next")}
          aria-label="Next service"
          className="
      flex h-12 w-12 items-center justify-center
      rounded-full bg-[#3CB371] text-white
      shadow-lg transition active:scale-95
    "
        >
          <ArrowRight size={20} />
        </button>
      </div>


      {/* ARROWS — desktop only */}
      {services.length > 6 && page > 0 && (
        <button
          onClick={() => scrollToPage(page - 1)}
          className="
            hidden lg:flex
            absolute left-0 top-[120px]
            h-12 w-12 items-center justify-center
            rounded-full bg-[#3CB371] text-white
            shadow-lg transition hover:scale-105
          "
        >
          <ArrowLeft size={20} />
        </button>
      )}

      {services.length > 6 && page < totalPages - 1 && (
        <button
          onClick={() => scrollToPage(page + 1)}
          className="
            hidden lg:flex
            absolute right-0 top-[120px]
            h-12 w-12 items-center justify-center
            rounded-full bg-[#3CB371] text-white
            shadow-lg transition hover:scale-105
          "
        >
          <ArrowRight size={20} />
        </button>
      )}
    </div>
  );
}
