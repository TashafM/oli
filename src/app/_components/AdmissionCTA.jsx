"use client";

import { FaArrowRight, FaFileDownload } from "react-icons/fa";
import bg from '../../../public/alphabg.png'

export default function AdmissionCTA() {
  return (
    <section
      className="relative overflow-hidden py-24"
      style={{backgroundImage:`url(${bg?.src})`}}
    >
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      <div className="relative mx-auto max-w-5xl px-6 text-center text-white">
        <h2 className="text-white text-4xl md:text-5xl font-semibold leading-tight drop-shadow-sm">
          Admissions Open for 2025–26
        </h2>
        <p className="mx-auto mt-4 max-w-2xl  md:mt-4 text-white/90 text-base md:text-lg">
          Empowering girls through academic excellence, innovation, and Deeniyat values.
          <br />
          Admissions from <strong>Nursery to Class 7th</strong> (Proposed till Class 12th).
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
          {/* Apply Now Button */}
          <a
            href="/"
            className="group inline-flex items-center gap-2 rounded-full bg-white px-8 py-3 text-base font-semibold text-green-800 shadow-lg transition duration-300  hover:bg-sky-50"
          >
            Apply Now
            <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>

          {/* Prospectus Button */}
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full border-2 border-white px-8 py-3 text-base font-semibold text-white transition duration-300  hover:bg-white hover:text-sky-700"
          >
            <FaFileDownload />
            Download Prospectus
          </a>
        </div>
      </div>

      {/* Optional white gradient at bottom for smooth fade */}
      <div className="absolute bottom-0 left-0 h-16 w-full bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
    </section>
  );
}
