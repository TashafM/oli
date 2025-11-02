"use client";

import React from "react";
import { FaStar, FaQuoteLeft, FaStarHalfAlt } from "react-icons/fa";

const TESTIMONIALS = [
  {
    id: "t1",
    name: "Fatima Ahmed",
    relation: "Parent of Class 4",
    quote:
      "Alhamdulillah, the balance of deen and academics here is excellent. My daughter has grown in confidence and adab.",
    rating: 5,
    avatar: "", // optional: /images/parents/fatima.jpg
  },
  {
    id: "t2",
    name: "Mohammad Yusuf",
    relation: "Parent of Class 6",
    quote:
      "The Deeniyat classes inspired our daughter to lead duas at home. Teachers are kind and highly professional.",
    rating: 5,
    avatar: "",
  },
  {
    id: "t3",
    name: "Ayesha Siddiqua",
    relation: "Parent of Class 2",
    quote:
      "My child comes home eager to share new duas and sunnah manners. A nurturing Islamic environment, mashallah.",
    rating: 4,
    avatar: "",
  },
  {
    id: "t4",
    name: "Imran Khan",
    relation: "Parent of Class 7",
    quote:
      "Sports like swimming and taekwondo, along with strong academics, are a great combination. Discipline with compassion.",
    rating: 5,
    avatar: "",
  },
  {
    id: "t5",
    name: "Zainab Fatima",
    relation: "Parent of Class 5",
    quote:
      "Transparent communication, safe campus, and caring staff. We’re grateful for the Islamic values being reinforced.",
    rating: 5,
    avatar: "",
  },
  {
    id: "t6",
    name: "Khalid Rahman",
    relation: "Parent of Class 3",
    quote:
      "Our daughter loves her teachers and Quran lessons. The school truly blends modern learning with faith.",
    rating: 5,
    avatar: "",
  },
];

export default function ParentsTestimonials({ items = TESTIMONIALS }) {
  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Header — matches StoriesSection */}
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full text-gray-400 border bg-white/70 px-3 py-1 text-lg font-medium shadow-sm mb-5">
            {/* same chip style as your StoriesSection */}
            <span className="inline-block h-2 w-2 rounded-full bg-yellow-400" />
            Parents’ Testimonials
          </div>

          <h2 className="text-3xl md:text-6xl font-bold text-[#273e06]">
            What Parents Say
          </h2>

          <p className="md:text-lg text-slate-600 mt-5">
            Genuine words from our parent community about academics, values, and campus life.
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.slice(0, 6).map((t) => (
            <article
              key={t.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="p-5">
                {/* Top row: avatar + name */}
                <div className="flex items-center gap-3">
                  {t.avatar ? (
                    <img
                      src={t.avatar}
                      alt={t.name}
                      className="h-10 w-10 rounded-full object-cover ring-1 ring-slate-200"
                      loading="lazy"
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white text-xs font-semibold text-slate-700">
                      {t.name
                        .split(" ")
                        .slice(0, 2)
                        .map((n) => n[0]?.toUpperCase())
                        .join("")}
                    </div>
                  )}

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {t.name}
                    </h3>
                    <p className="text-xs text-slate-500">{t.relation}</p>
                  </div>
                </div>

                {/* Rating */}
                <div className="mt-3 flex items-center gap-1 text-amber-400">
                  {Array.from({ length: 5 }).map((_, i) =>
                    i < Math.floor(t.rating || 0) ? (
                      <FaStar key={i} />
                    ) : i < (t.rating || 0) ? (
                      <FaStarHalfAlt key={i} />
                    ) : (
                      <FaStar key={i} className="text-slate-300" />
                    )
                  )}
                </div>

                {/* Quote */}
                <div className="relative mt-4">
                  <FaQuoteLeft className="absolute -left-1 -top-2 text-slate-300" />
                  <p className="pl-6 text-sm leading-relaxed text-slate-600">
                    {t.quote}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
