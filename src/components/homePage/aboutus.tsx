import Image from "next/image";

const AboutLogisticsSection = () => {
  return (
    <section className="w-full bg-white min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-32">

        {/* 
          MOBILE: column
          DESKTOP (lg+): original row layout preserved
        */}
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-24">

          {/* LEFT CONTENT */}
          <div className="flex-1 w-full text-center lg:text-left">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
              About Us
            </p>

            {/* 
              Desktop text untouched.
              Mobile only: slightly smaller via base, desktop still md:text-4xl
            */}
            <h2 className="mb-6 text-3xl md:text-4xl font-bold leading-tight text-gray-900 w-full">
              Logistics and Manpower <br /> Services
            </h2>

            <p className="mb-6 max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-gray-600">
              LAMPS is a trusted facilities management company offering
              end-to-end housekeeping, cleaning, maintenance, and manpower
              solutions.
            </p>

            <p className="mb-10 max-w-xl mx-auto lg:mx-0 text-base md:text-lg text-gray-600">
              We provide trained, skilled, and verified professionals to ensure
              clean, safe, and efficient environments for homes, societies,
              hospitals, industries, offices, and institutions.
            </p>

            <button className="w-full sm:w-auto rounded-lg bg-green-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-green-600">
              Get a quote
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center lg:justify-end">

            {/* 
              Desktop sizing untouched.
              Mobile only: constrain height to avoid overflow
            */}
            <div className="relative w-full max-w-md h-72 sm:h-96 lg:h-115 overflow-hidden rounded-3x">
              <Image
                src="/about/about_home.jpg"
                alt="Logistics and Manpower Services"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutLogisticsSection;
