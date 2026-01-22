import Image from "next/image";

const logos = [
  "/Vaishaki.png",
  "/ramky.png",
  "/dama.svg",
  "/mvv&mk.png",
  "/abhiram.jpg",
  "/aadithri.png",
  "/true.png",
  "/cybex.png",
];

const featuresLeft = [
  "Vetted professionals",
  "Next day availability",
  "Standard cleaning tasks",
];

const featuresRight = [
  "Affordable Prices",
  "Best Quality",
  "Affordable Prices",
];

const ClientPortfolioSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col lg:flex-row items-center gap-24">
          {/* LEFT – LOGOS GRID */}
          <div className="w-full lg:w-1/2 grid grid-cols-2 gap-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="
                  flex h-28 items-center justify-center
                  rounded-2xl bg-white
                  shadow-sm
                "
              >
                <Image
                  src={logo}
                  alt={`Client logo ${index + 1}`}
                  width={140}
                  height={70}
                  className="object-contain"
                />
              </div>
            ))}
          </div>

          {/* RIGHT – CONTENT */}
          <div className="w-full lg:w-1/2">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-[#0F2A1D] md:text-5xl">
              Welcome To Our <br />
              <span className="font-extrabold text-[#36B864]">CLIENT PORTFOLIO</span>
            </h2>

            <p className="mb-10 max-w-xl text-lg text-[#6B7C73]">
              We make your space shine! Professional and reliable cleaning
              service company providing top-notch solutions for homes and
              businesses. Satisfaction guaranteed!
            </p>

            {/* FEATURES */}
            <div className="mb-12 flex gap-16">
              {/* LEFT COLUMN */}
              <div className="space-y-4">
                {featuresLeft.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-lg bg-gray-50 px-5 py-4"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm">
                      ✓
                    </span>
                    <span className="font-medium text-[#0F2A1D]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-4">
                {featuresRight.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-4 rounded-lg bg-gray-50 px-5 py-4"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm">
                      ✓
                    </span>
                    <span className="font-medium text-[#0F2A1D]">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex gap-6">
              <button className="rounded-lg bg-green-500 px-8 py-4 font-semibold text-white hover:bg-green-600">
                Book Now
              </button>
              <button className="rounded-lg border border-gray-400 px-8 py-4 font-semibold hover:bg-gray-100">
                Know More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClientPortfolioSection;
