import ServicesCarousel from "@/components/homePage/ServicesCarousel";

export default function ServicesSection() {
  return (
    <section
      className="
        bg-white text-black
        mx-30 
        px-6 lg:px-0
        flex flex-col gap-10
        py-24 lg:py-32
        my-24 lg:my-32
      "
    >
      {/* Header */}
      <div className="flex w-full flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <h2 className="basis-1/3 max-w-xl text-[42px] font-semibold leading-tight">
          We Always Provide The
          <br />
          Best Service
        </h2>

        <div className="basis-2/3 max-w-md">
          <p className="mb-2 text-sm font-semibold">Services</p>
          <p className="text-sm leading-relaxed text-black">
            With a strong focus on quality, safety, and consistency, LAMPS
            delivers standardized facility services backed by trained manpower
            and expert supervision.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div className="h-px max-w-[80%] w-full bg-[#CFE3D8]">
        {/* Carousel */}
        <ServicesCarousel />
        <ServicesCarousel />
      </div>
    </section>
  );
}
