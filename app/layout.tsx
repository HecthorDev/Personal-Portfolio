import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Hector Garcia - Front-end Developer",
    description: "Portfolio of Hector Garcia, a Front-end Developer and React Enthusiast.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} bg-slate-950 text-slate-200 antialiased`}>
                <Navbar />
                {children}
            </body>
        </html>
    );
}
