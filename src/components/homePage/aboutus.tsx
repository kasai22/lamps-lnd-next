import Image from "next/image";

const AboutLogisticsSection = () => {
  return (
    <section className="w-full bg-white min-h-screen flex items-center">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:py-32">
        <div className="flex flex-row gap-25 items-center lg:flex-col">
          {/* LEFT CONTENT */}
          <div className="flex-1">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-500">
              About Us
            </p>

            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Logistics and Manpower <br /> Services
            </h2>

            <p className="mb-6 max-w-xl text-lg text-gray-600">
              LAMPS is a trusted facilities management company offering
              end-to-end housekeeping, cleaning, maintenance, and manpower
              solutions.
            </p>

            <p className="mb-10 max-w-xl text-lg text-gray-600">
              We provide trained, skilled, and verified professionals to ensure
              clean, safe, and efficient environments for homes, societies,
              hospitals, industries, offices, and institutions.
            </p>

            <button className="rounded-lg bg-green-500 px-8 py-4 text-base font-semibold text-white transition hover:bg-green-600">
              Get a quote
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <div className="relative h-115 w-full max-w-md overflow-hidden rounded-3xl border-4 border-green-500">
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
