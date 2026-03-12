import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Home/Sheard/Navbar";
import Footer from "@/Components/Home/Sheard/Footer";
import NextAuthprovider from "@/provider/NextAuthprovider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "600", "800"],
});
export const metadata = {
  title: {
    default: "Home Care",
    template: "%s | Home Care",
  },
  description:
    "Experience the pinnacle of design and functionality. Explore our curated collection of high-performance gear tailored for the modern elite.",
  metadataBase: new URL("https://care-app-phi.vercel.app/"),

  openGraph: {
    title: "Home Care | Luxury Redefined",
    description:
      "Elevate your lifestyle with our latest performance collection. Engineered for those who demand more.",
    url: "https://care-app-phi.vercel.app/",
    siteName: "Home Care",
    images: [
      {
        url: "https://i.ibb.co.com/QjMLMR5P/image.png", // Your Home Preview
        width: 1200,
        height: 630,
        alt: "Home Care Home Page - Premium Interface",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Home Care | Performance Gear",
    description:
      "The intersection of luxury and utility. Shop the new collection.",
    images: ["https://i.ibb.co.com/QjMLMR5P/image.png"],
  },

  icons: {
    icon: "https://i.ibb.co.com/RTkF6y9T/image.png", // Your Logo
    apple: "https://i.ibb.co.com/RTkF6y9T/image.png",
  },

  themeColor: "#0D0D0D", // Matches your dark UI
};

export default function RootLayout({ children }) {
  return (
    <NextAuthprovider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} ${poppins.className} antialiased`}
        >
          <header className="md:max-w-11/12 mt-1.5 mb-3 md:mx-auto my-5">
            <Navbar></Navbar>
          </header>
          <main className="md:max-w-11/12 mx-3 md:mx-auto mb-5 min-h-[calc(100vh-244px)]">
            {children}
          </main>
          <footer className="">
            <Footer></Footer>
          </footer>
        </body>
      </html>
    </NextAuthprovider>
  );
}
