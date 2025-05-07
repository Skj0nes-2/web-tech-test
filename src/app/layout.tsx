import "~/styles/globals.css";

import { type Metadata } from "next";
import { Comfortaa } from "next/font/google";

export const metadata: Metadata = {
  title: "Sunori",
  description: "The proffesional games site.",
  icons: [{ rel: "icon", url: "/favicon.svg" }],
};

const comfortaa = Comfortaa({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: 'swap',
});

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={comfortaa.className}>
      <body className="bg-white text-black dark:bg-black dark:text-white">
        {children}
      </body>
    </html>
  );
}
