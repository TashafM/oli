import React from "react";
import Image from "next/image";
import bg from "../../../public/bg.webp";
import logo from "../../../public/olividya.png";

const AboutSchool = () => {
    return (
        <div className="relative w-full py-20 md:h-screen flex items-center justify-center text-white">
            {/* Background image */}
            <Image
                src={bg}
                alt="Background"
                fill
                className="object-cover -z-10"
                priority
            />

            {/* Overlay content */}
            <div className="relative z-10 text-center px-6">
                <Image src={logo} alt="olividya school logo" className="w-[180px] md:w-[300px] mb-5 m-auto" />
                <h1 className="text-3xl md:text-7xl font-bold mb-4 text-[#273e06]">About Our School</h1>
                <p className="max-w-5xl mx-auto text-[14px] md:text-xl md:mt-10 text-gray-600 md:leading-loose leading-relaxed  text-center">
                    Welcome to <b>Olividya - The Girls Academy</b> -- an ICSE board school for girls that combines modern education with strong moral and spiritual values. Currently up to class 7<sup>th</sup> (proposed till 12<sup>th</sup>), our school aims to shape confident, creative, and compassionate young girls through academic excellence, sports, and Deeniyat education.
                </p>

                <div className="drawer-bg cursor-pointer mt-6 w-[80%]  py-2 rounded-full md:text-xl md:w-fit m-auto md:px-10 md:mt-10 md:py-3" >
                    Read More
                </div>
            </div>

            {/* Optional dark overlay for better text contrast */}
            <div className="absolute inset-0  -z-5" />


        </div>
    );
};

export default AboutSchool;
