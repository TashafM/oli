
'use client'
import React from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, EffectFade } from 'swiper/modules'

// Swiper core styles
import 'swiper/css'
import 'swiper/css/effect-fade'

import banner1 from '../../../public/b1.jpg'
import banner2 from '../../../public/b2.jpg'
import banner3 from '../../../public/b3.jpg'

const slides = [
  {
    img: banner1,
    title: 'Empowering Girls with Knowledge, Faith & Confidence',
    subtitle: 'An ICSE-affiliated Islamic School shaping future-ready young women.',
    ctaPrimary: { label: 'Admissions Open 2025', href: 'admissions' },
    ctaSecondary: { label: 'Download Prospectus', href: '/' },
  },
  {
    img: banner2,
    title: 'Where Modern Education meets Islamic Values',
    subtitle: 'Smart classes, AI-based learning, and Deeniyat — nurturing intellect with Imaan.',
    ctaPrimary: { label: 'Admissions Open 2025', href: 'admissions' },
    ctaSecondary: { label: 'Download Prospectus', href: '/' },
  },
  {
    img: banner3,
    title: 'Balancing Academics, Sports & Spiritual Growth',
    subtitle: 'From classrooms to courts — building confident, disciplined, and compassionate leaders.',
    ctaPrimary: { label: 'Admissions Open 2025', href: 'admissions' },
    ctaSecondary: { label: 'Download Prospectus', href: '/' },
  },
]

const HeroSection = () => {
  return (
    <section className="w-full h-[90vh] md:h-screen relative">
      <Swiper
        modules={[Autoplay, EffectFade]}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        slidesPerView={1}
        loop
        autoplay={{ delay: 3500, disableOnInteraction: false }}
        speed={1600}
        className="w-full h-full"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-[100vh] relative">
              {/* Background image */}
              <Image
                src={s.img}
                alt={s.title}
                fill
                className="object-cover"
                priority={i === 0}
              />

              {/* Black overlay */}
              <div className="absolute inset-0 bg-black/70 z-[1]" />

              {/* 🔻 Bottom-aligned overlay content */}
              <div className="absolute bottom-40 md:bottom-20 left-0 right-0 z-[2] pb-16 px-4 md:px-12 lg:px-20 text-center">
                <div className="max-w-5xl mx-auto">
                  <h1 className="text-white text-4xl md:text-5xl font-semibold leading-tight drop-shadow-sm">
                    {s.title}
                  </h1>
                  <p className="mt-3 md:mt-4 text-white/90 text-base md:text-lg">
                    {s.subtitle}
                  </p>

                  {/* Buttons */}
                  <div className="mt-6 flex flex-wrap items-center gap-3 justify-center">
                    <a
                      href={s.ctaPrimary.href}
                      className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-base md:text-base font-medium bg-white text-black shadow hover:opacity-90 transition"
                    >
                      {s.ctaPrimary.label}
                    </a>
                    <a
                      href={s.ctaSecondary.href}
                      className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-base md:text-base font-medium border border-white/70 text-white hover:bg-white/10 transition"
                    >
                      {s.ctaSecondary.label}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  )
}

export default HeroSection

