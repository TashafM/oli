"use client";

import Image from "next/image";
import logo from "../../../public/navlogo.png";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative drawer-bg text-slate-100">
      {/* top accent line */}
      <div className="h-1 w-full primary-color from-sky-500 via-cyan-400 to-emerald-400" />

      <div className="mx-auto max-w-7xl px-6 py-14">
        {/* brand */}
        <div className="flex flex-col  justify-between gap-8 md:flex-row items-center ">
          <div>
            <div className="flex items-center gap-5">
              {/* ✅ place logo here, sized and aligned */}
              <Image
                src={logo}
                alt="OlivIDYA logo"
                
                className="rounded-xl  ring-white/15 object-contain w-40 h-40"
                priority
              />
              {/* <div className="hidden md:block">
                <h3 className="text-xl font-semibold tracking-tight">OLIVIDYA</h3>
                <p className="text-base text-slate-200">
                  ICSE Girls’ School • Nursery–Class 7th (Proposed till 12th)
                </p>
              </div> */}
            </div>

            {/* <p className="mt-4 max-w-md text-sm leading-6 text-slate-200">
              Empowering girls with knowledge, character, and faith through
              rigorous academics and Deeniyat education.
            </p> */}
          </div>
        </div>

        {/* link columns */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <h5 className="text-base font-semibold tracking-wide text-white">Quick Links</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="/" className="text-slate-400 hover:text-white">Home</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">About Us</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Admissions</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Gallery</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Contact</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-base font-semibold tracking-wide text-white">Academics</h5>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href="#" className="text-slate-400 hover:text-white">ICSE Curriculum</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Smart Classes</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Robotics Lab</a></li>
              <li><a href="#" className="text-slate-400 hover:text-white">Gardening</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-base font-semibold tracking-wide text-white">Contact</h5>
            <p className="mt-3 text-sm text-slate-400">[School Address Line] · [City, State, PIN]</p>
            <p className="text-sm text-slate-400">
              Phone: <a href="tel:+91XXXXXXXXXX" className="hover:text-white">+91 XXXXX XXXXX</a><br />
              Email: <a href="mailto:info@school.com" className="hover:text-white">info@school.com</a>
            </p>
            <div className="mt-4">
              <a
                href="https://maps.google.com"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
              >
                Open in Maps
                <ArrowIcon className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* legal bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-5 text-xs text-slate-400 sm:flex-row">
          <p>© {year} Olividya. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function ArrowIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M5 12h14" />
      <path d="M12 5l7 7-7 7" />
    </svg>
  );
}
