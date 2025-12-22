"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AboutUs() {
  return (
    <section className="w-full bg-white min-h-[80vh] items-center py-16 px-6 lg:px-12">
      <div className="max-w-7xl mx-2 flex flex-row  gap-12 px-6 lg:px-12">
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center max-w-xl lg:mx-0"
        >
          <p className="text-sm tracking-wider font-semibold text-gray-500 mb-2">
            ABOUT US
          </p>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight mb-6">
            Logistics and Manpower <br /> Services
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-4">
            LAMPS is a trusted facilities management company offering end-to-end
            housekeeping, cleaning, maintenance, and manpower solutions.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We provide trained, skilled, and verified professionals to ensure
            clean, safe, and efficient environments for homes, societies,
            hospitals, industries, offices, and institutions.
          </p>

          <Link
            href="/contact"
            className="inline-block bg-green-500 text-white px-8 py-3 rounded-lg font-semibold shadow hover:bg-green-600 hover:shadow-lg active:scale-95 transition-all"
          >
            Get a quote
          </Link>
        </motion.div>

        {/* Wrapper */}
        <div className="relative flex justify-center items-center w-[260px] h-[260px] lg:w-[380px] lg:h-[380px]">
          {/* BIG IMAGE FRAME */}
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 160 }}
            className="rounded-3xl border-[10px] border-green-500 overflow-hidden w-full h-full"
          >
            <Image
              src="/about/cleaning-main.jpg"
              alt="Main Cleaning"
              width={600}
              height={600}
              className="object-cover w-full h-full"
            />
          </motion.div>

          {/* SMALL OVERLAY IMAGE */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="absolute rounded-2xl bg-white p-[6px] overflow-hidden shadow-md w-[140px] h-[140px] lg:w-[180px] lg:h-[180px]"
          >
            <Image
              src="/about/cleaning-small.jpg"
              alt="Worker"
              width={400}
              height={400}
              className="object-cover w-full h-full rounded-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
