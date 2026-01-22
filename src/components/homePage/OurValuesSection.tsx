const OurValuesSection = () => {
  return (
    <section className="relative bg-[#36B864] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* SECTION TITLE */}
        <h2 className="mb-16 text-center text-4xl font-bold text-white md:text-5xl">
          Our Values
        </h2>

        {/* CARDS */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
          {/* VISION */}
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h3 className="mb-6 text-center text-xl font-bold text-gray-900">
              VISION
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>
                • Deliver reliable & standardized facility services at
                affordable prices.
              </li>
              <li>
                • Provide trained, skilled, and background-verified workforce.
              </li>
              <li>
                • Follow strict SOPs, checklists & supervision systems across
                all projects.
              </li>
              <li>
                • Ensure transparency, timely execution & quick customer
                support.
              </li>
              <li>
                • Build long-term relationships through quality, trust &
                accountability.
              </li>
            </ul>
          </div>

          {/* MISSION */}
          <div className="rounded-3xl bg-white p-10 shadow-lg">
            <h3 className="mb-6 text-center text-xl font-bold text-gray-900">
              MISSION
            </h3>

            <ul className="space-y-4 text-gray-600">
              <li>
                • Deliver reliable & standardized facility services at
                affordable prices.
              </li>
              <li>
                • Provide trained, skilled, and background-verified workforce.
              </li>
              <li>
                • Follow strict SOPs, checklists & supervision systems across
                all projects.
              </li>
              <li>
                • Ensure transparency, timely execution & quick customer
                support.
              </li>
              <li>
                • Build long-term relationships through quality, trust &
                accountability.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurValuesSection;
