import Image from "next/image";

const logos = [
  "/Vaishaki.png",
  "/ramky.png",
  "/dama.svg",
  "/mvv&mk.png",
  "/abhiram.jpg",
  "/aadithri.png",
];

const features1 = [
  "Vetted professionals",
  "Affordable Prices",
  "Next day availability",
];

const features2 = [
  "Best Quality",
  "Standard cleaning tasks",
  "Affordable Prices",
];
const ClientPortfolioSection = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* 🔥 FORCE SIDE-BY-SIDE */}
        <div className="flex flex-col md:flex-row items-center gap-24">
          {/* LEFT – LOGOS */}
          <div className="w-full md:w-1/2 grid grid-cols-2 gap-8">
            {logos.map((logo, index) => (
              <div
                key={index}
                className="flex h-28 items-center justify-center rounded-2xl bg-white"
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
          <div className="w-full md:w-1/2">
            <h2 className="mb-6 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
              Welcome To Our <br />
              <span className="text-green-600">CLIENT PORTFOLIO</span>
            </h2>

            <p className="mb-8 max-w-xl text-lg text-gray-600">
              We make your space shine! Professional and reliable cleaning
              service company providing top-notch solutions for homes and
              businesses. Satisfaction guaranteed!
            </p>

            {/* FEATURES – FORCE 3 COLUMNS */}
            <div className="flex flex-row gap-20 w-auto">
              <div className="mb-10 grid grid-cols-3 gap-4">
                {features1.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-3"
                  >
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500 text-white text-sm font-semibold">
                      ✓
                    </span>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mb-10 grid grid-cols-3 gap-4">
                {features2.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 rounded-lg bg-gray-50 px-4 py-3"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-500 text-white text-sm font-semibold">
                      ✓
                    </span>
                    <span className="text-gray-800 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            {/* CTA */}
            <div className="flex gap-4">
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
