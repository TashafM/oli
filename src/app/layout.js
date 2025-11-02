// app/layout.jsx (or layout.tsx)
import { Manrope } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata = {
  title: {
    default: "Olividya - The Girls Academy | ICSE with Deeniyat",
    template: "%s | Olividya Girls' School",
  },
  description:
    "Olividya - The Girls Academy offers holistic ICSE education integrated with Deeniyat, sports, robotics, and values-based learning — nurturing confident, compassionate, and capable young women.",
  keywords: [
    "Olividya",
    "Olividya - The Girls Academy",
    "ICSE girls school",
    "Islamic school",
    "Deeniyat education",
    "girls school India",
    "smart classes",
    "robotics for girls",
    "gardening activities",
    "swimming skating basketball taekwondo",
  ],
  authors: [{ name: "Olividya - The Girls Academy" }],
  creator: "Olividya",
  publisher: "Olividya - The Girls Academy",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Olividya - The Girls Academy | ICSE with Deeniyat",
    description:
      "An ICSE girls school blending academic excellence with Islamic values, co-curriculars, and character building.",
    url: "https://olividya.vercel.app",
    siteName: "Olividya - The Girls Academy",
    images: [
      {
        url: "https://res.cloudinary.com/dxsjfends/image/upload/v1762065462/Olividya_school_lh3ruj.png", // put this in /public
        width: 1200,
        height: 630,
        alt: "Olividya School Campus",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Olividya - The Girls Academy | ICSE with Deeniyat",
    description:
      "Holistic education for girls — academics, faith, sports, and innovation.",
    images: ["https://res.cloudinary.com/dxsjfends/image/upload/v1762065462/Olividya_school_lh3ruj.png"],
    creator: "@olividya",
  },
  alternates: {
    canonical: "https://olividya.vercel.app",
  },
  category: "Education",
  metadataBase: new URL("https://olividya.vercel.app"),
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* Use className, not variable */}
      <body className={`${manrope.className} antialiased`}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
