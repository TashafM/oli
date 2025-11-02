"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { FaClock, FaChevronRight, FaStar, FaTimes, FaUser } from "react-icons/fa";
import s1 from '../../../public/s1.jpg'

export default function StoriesSection() {
  const [mounted, setMounted] = useState(false);
  const [active, setActive] = useState(null); // active story for modal
  useEffect(() => setMounted(true), []);

  // Lock body scroll when modal is open (and avoid layout shift)
  useEffect(() => {
    if (typeof window === "undefined") return;
    const body = document.body;
    if (active) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      body.style.overflow = "hidden";
      if (scrollbarWidth > 0) body.style.paddingRight = `${scrollbarWidth}px`;
    } else {
      body.style.overflow = "";
      body.style.paddingRight = "";
    }
    return () => {
      body.style.overflow = "";
      body.style.paddingRight = "";
    };
  }, [active]);

  useEffect(() => {
    function onEsc(e) {
      if (e.key === "Escape") setActive(null);
    }
    if (active) document.addEventListener("keydown", onEsc);
    return () => document.removeEventListener("keydown", onEsc);
  }, [active]);

  const STORIES = [
    {
      id: "robotics-week",
      title: "Young Innovators Shine at Robotics Week",
      excerpt:
        "Our Class 6 girls built their first line-following bot—teamwork, curiosity, and giggles all the way!",
      content:
        "During Robotics Week, learners explored sensors, block coding, and debugging. The finale showcased line-followers and obstacle-avoiders built from scratch. The biggest win? Confidence: ‘I can build this!’",
      cover: 'https://res.cloudinary.com/dxsjfends/image/upload/v1761756628/s1_anoln7.jpg',
      category: "Academics",
      date: "2025-08-20",
      readTime: "3 min",
      author: "STEM Team",
      tags: ["Robotics", "Coding", "Innovation"],
    },
    {
      id: "skating-gold",
      title: "Victory in Motion: Gold at Inter-School Skating",
      excerpt:
        "Speed, balance, and belief—our skating team clinched gold against 12 schools in the city meet.",
      content:
        "Weeks of disciplined practice paid off as our girls delivered flawless runs and team spirit. Coaches praised their focus and graceful sportsmanship—on and off the rink.",
      cover: "https://res.cloudinary.com/dxsjfends/image/upload/v1761756844/rollerskating-commercially-eligable-awesome-2022-11-10-09-54-26-utc-scaled-2_ku8rkm.jpg",
      category: "Sports",
      date: "2025-07-05",
      readTime: "2 min",
      author: "Sports Dept.",
      tags: ["Skating", "Teamwork", "Discipline"],
    },
    {
      id: "deeniyat-week",
      title: "Faith in Action: Deeniyat Week Highlights",
      excerpt:
        "Kindness journals, daily adaab circles, and heartwarming reflections from students across grades.",
      content:
        "Our Deeniyat Week blended learning with practice—akhlaaq sessions, charity drive, and Hadith-of-the-day. Families joined the closing dua where students shared how small acts shape strong character.",
      cover: "https://res.cloudinary.com/dxsjfends/image/upload/v1761756945/Online_Quran_Class_yaf5h7.jpg",
      category: "Deeniyat",
      date: "2025-06-15",
      readTime: "3 min",
      author: "Deeniyat Faculty",
      tags: ["Akhlaaq", "Values", "Community"],
    },
    {
      id: "green-week",
      title: "Gardening with Heart: 200 Saplings Planted",
      excerpt:
        "Tiny hands, big change—students nurtured a mini orchard and learnt composting basics.",
      content:
        "The Environment Club hosted workshops on soil, seed selection, and watering cycles. Parents pitched in for a Saturday clean-up. Together we planted hope—one sapling at a time.",
      cover: "https://res.cloudinary.com/dxsjfends/image/upload/v1761757072/istockphoto-1248915720-612x612_avgxge.jpg",
      category: "Environment",
      date: "2025-08-02",
      readTime: "2 min",
      author: "Eco Club",
      tags: ["Gardening", "Sustainability", "Service"],
    },
    {
      id: "basketball-camp",
      title: "Hoops & Heart: Basketball Fundamentals Camp",
      excerpt:
        "From dribble drills to teamwork huddles—confidence grew with every pass and shot.",
      content:
        "Our week-long camp focused on footwork, coordination, and game sense. Mentors emphasized resilience and positive communication. Several first-timers are now regulars at practice!",
      cover: "https://res.cloudinary.com/dxsjfends/image/upload/v1761757156/basketball-statistics-670_evltnw.jpg",
      category: "Sports",
      date: "2025-09-12",
      readTime: "4 min",
      author: "PE Staff",
      tags: ["Basketball", "Confidence", "Fitness"],
    },
    {
      id: "innovation-fair",
      title: "Innovation Fair Inspires Young Minds",
      excerpt:
        "Students showcased creative projects—from solar cars to automated plant watering systems.",
      content:
        "The Innovation Fair brought together bright minds across classes to present sustainable and creative solutions. Parents and teachers praised the clarity of ideas and teamwork.",
      cover: "https://res.cloudinary.com/dxsjfends/image/upload/v1761757279/63d9ef37e6867f911d758119c3cc35f9_lce1b7.jpg",
      category: "Academics",
      date: "2025-09-25",
      readTime: "5 min",
      author: "Science Club",
      tags: ["STEM", "Sustainability", "Showcase"],
    },
  ];

  return (
    <section className="relative bg-white py-20">
      <div className="mx-auto max-w-6xl px-4" aria-hidden={!!active}>
        <div className="mb-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full text-gray-400 border bg-white/70 px-3 py-1 text-lg font-medium shadow-sm mb-5">
            <FaStar className="text-yellow-500" /> Our School Stories
          </div>
          {/* <h2 className="mt-3 text-3xl font-semibold text-slate-900 md:text-4xl">
            Moments that Inspire
          </h2> */}
          <h2 className="text-3xl md:text-6xl font-bold text-[#273e06]">
            Moments that Inspire
          </h2>
          {/* <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            Real snapshots of learning, faith, sport, and service—where every girl writes her own story.
          </p> */}

          <p className="md:text-lg text-slate-600 mt-5">
            Real snapshots of learning, faith, sport, and service<br/> —where every girl writes her own story.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {STORIES.slice(0, 6).map((story) => (
            <div
              key={story.id}
              className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-lg"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={story.cover}
                  alt={story.title}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 rounded-full bg-white/80 px-3 py-1 text-xs font-semibold text-slate-900">
                  {story.category}
                </div>
              </div>

              <div className="space-y-2 p-4">
                <h3 className="line-clamp-2 text-lg font-semibold text-slate-900">
                  {story.title}
                </h3>
                <div className="flex items-center gap-3 text-xs text-slate-500">
                  <span className="inline-flex items-center gap-1">
                    <FaClock /> {story.readTime}
                  </span>
                  <span className="h-1 w-1 rounded-full bg-slate-300" />
                  <span>{mounted ? new Date(story.date).toLocaleDateString() : story.date}</span>
                </div>
                <p className="line-clamp-3 text-sm text-slate-600">{story.excerpt}</p>
                <button
                  onClick={() => setActive(story)}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:border-slate-300 mt-2 cursor-pointer"
                  aria-label={`Read story: ${story.title}`}
                >
                  Read Story <FaChevronRight className="text-slate-500" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-black/50 p-0 md:items-center md:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="story-title"
          onClick={() => setActive(null)}
        >
          <div
            className="relative w-full max-w-3xl overflow-hidden rounded-t-2xl bg-white shadow-2xl md:rounded-2xl border-gray-700"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setActive(null)}
              className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-slate-700 shadow hover:bg-white cursor-pointer"
              aria-label="Close"
            >
              <FaTimes className="h-4 w-4" />
            </button>

            <div className="relative h-48 w-full md:h-64">
              <Image
                src={active.cover}
                alt={active.title}
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10" />
              <div className="absolute bottom-3 left-3">
                <span className="rounded-full bg-white/90 px-2.5 py-1 text-xs font-semibold text-slate-900 shadow">
                  {active.category}
                </span>
              </div>
            </div>

            <div className="space-y-3 px-5 py-5 md:px-6 md:py-6">
              <h3 id="story-title" className="text-2xl font-semibold text-slate-900">
                {active.title}
              </h3>
              <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500">
                <span className="inline-flex items-center gap-1">
                  <FaUser className="h-4 w-4" /> {active.author || "School"}
                </span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span className="inline-flex items-center gap-1">
                  <FaClock className="h-4 w-4" /> {active.readTime || "3 min"}
                </span>
                <span className="h-1 w-1 rounded-full bg-slate-300" />
                <span>{new Date(active.date).toLocaleDateString()}</span>
              </div>

              <p className="text-[15px] leading-relaxed text-slate-700">{active.content}</p>

              {active.tags && active.tags.length > 0 && (
                <div className="pt-2">
                  <div className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                    Tags
                  </div>
                  <div className="mt-2 flex flex-wrap gap-1.5">
                    {active.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-slate-200 bg-white px-2 py-0.5 text-[11px] text-slate-600"
                      >
                        #{t}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4">
                <button
                  onClick={() => setActive(null)}
                  className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-800 cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
