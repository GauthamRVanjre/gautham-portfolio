import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import localFont from "next/font/local";
import NextTopLoader from "nextjs-toploader";
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
    <html lang="en">
      <body className={`${poppins.className} ${protest.variable}`}>
        <AnimatedDiv>
          <ThemeProvider attribute="class" defaultTheme="dark">
            <NextTopLoader
              color={
                "linear-gradient(26deg,#e60073 0%,#ff1493 16.66%, #ff4500 33.33%,#ff8c00 50%)"
              }
            />

            <NavBar />
            {children}
            <div className="text-center text-xs opacity-45 my-4 text-zinc-600 dark:text-zinc-400">
              <p>Copyright &copy; 2024 Gautham Vanjre. All Rights Reserved. </p>
              <p>Designed by Me Built with NextJS.</p>
            </div>
          </ThemeProvider>
        </AnimatedDiv>
      </body>
    </html>
  );
}
