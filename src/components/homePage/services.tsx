import ServicesCarousel from "@/components/homePage/ServicesCarousel";

export default function ServicesSection() {
  return (
    <section
      className="
        bg-white text-black
        mx-0 lg:mx-30
        px-4 sm:px-6 lg:px-0
        flex flex-col
        gap-10 lg:gap-10
      "
    >
      {/* Header */}
      <div
        className="
          flex w-full flex-col
          gap-6
          lg:flex-row lg:items-start lg:justify-between
        "
      >
        {/* Heading */}
        <h2
          className="
            w-full lg:max-w-xl
            text-[32px] sm:text-[36px] lg:text-[42px]
            font-semibold leading-tight
          "
        >
          We Always Provide The
          <br />
          Best Service
        </h2>

        {/* Description */}
        <div
          className="
            w-full lg:basis-2/3 lg:max-w-md
            text-left
          "
        >
          <p className="mb-2 text-sm font-semibold">Services</p>
          <p className="text-sm leading-relaxed text-black">
            With a strong focus on quality, safety, and consistency, LAMPS
            delivers standardized facility services backed by trained manpower
            and expert supervision.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px w-full bg-[#CFE3D8]" />

      {/* Carousel */}
      <ServicesCarousel />
    </section>
  );
}
