import React from "react";
import {
  FaBook,
  FaLaptopCode,
  FaLeaf,
  FaBasketballBall,
  FaPrayingHands,
  FaShieldAlt,
  FaRobot
} from "react-icons/fa";
import bg from '../../../public/alphabg.png'

const WhyParentsChooseUs = () => {
  const items = [
    {
      icon: <FaLaptopCode />,
      title: "Smart Classes",
      desc: "Technology-enhanced learning.",
    },
    {
      icon: <FaRobot />,
      title: "Robotics & Innovation Lab",
      desc: "Hands-on future skills.",
    },
    {
      icon: <FaLeaf />,
      title: "Gardening & Environment",
      desc: "Practical nature education.",
    },
    {
      icon: <FaBasketballBall />,
      title: "Sports & Fitness",
      desc: "Swimming, skating, basketball, taekwondo.",
    },
    {
      icon: <FaPrayingHands />,
      title: "Deeniyat Education",
      desc: "Moral and spiritual guidance.",
    },
    {
      icon: <FaShieldAlt />,
      title: "Safe Campus",
      desc: "All-girls, CCTV, caring staff.",
    },
  ];

  console.log(bg,'bg')
  return (
    <section className="py-24" style={{backgroundImage:`url(${bg?.src})`}}>
      <div className="max-w-[1200px] mx-auto px-6">
        <header className="text-center mb-12">
          <h2 className="text-3xl md:text-6xl font-bold text-white">
            Why Parents Choose Us
          </h2>
          <p className="md:text-2xl text-gray-200 mt-5">
            Our key features at a glance
          </p>
        </header>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {items.map((card, i) => (
            <div
              key={i}
              className="group bg-gray-50 hover:bg-white rounded-2xl border border-gray-100 hover:border-gray-200 p-5 md:p-6 shadow-md hover:shadow-xl transition-all duration-300 min-h-40 flex flex-col transform hover:-translate-y-2 hover:-rotate-7 hover:scale-[1] "
            >
              <div
                className="text-3xl mb-3"
                style={{ color: "#273e06" }}
              >
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                {card.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {card.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyParentsChooseUs;
