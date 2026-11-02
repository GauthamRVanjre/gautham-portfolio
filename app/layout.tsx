import type { Metadata } from "next";
import "./globals.css";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
import { Analytics } from "@vercel/analytics/react";
import NavBar from "./nav/NavBar";
import AnimatedDiv from "./components/AnimatedDiv";

const protest = localFont({
  src: "../public/fonts/ProtestRiot-Regular.ttf",
  variable: "--font-protest",
});
const poppins = localFont({
  src: "../public/fonts/Poppins-Regular.ttf",
});

export const metadata: Metadata = {
  title: "Gautham Vanjre",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} ${protest.variable}`}>
        <AnimatedDiv>
          <NextTopLoader color="#38bdf8" />

          <NavBar />
          {children}
          <Analytics />
          <div className="text-center text-xs opacity-45 my-4 text-zinc-600 dark:text-zinc-400">
            <p>Copyright &copy; 2024 Gautham Vanjre. All Rights Reserved. </p>
            <p>Designed by Me Built with NextJS.</p>
          </div>
        </AnimatedDiv>
      </body>
    </html>
  );
}
