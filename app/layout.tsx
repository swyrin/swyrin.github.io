import Navbar from "@/components/Navbar";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import { ReactNode } from "react";

import "./globals.css";

const jbMono = JetBrains_Mono({
    variable: "--font-jb-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Test page please ignore.",
    description: "My take at making the portfolio page.",
};

export const viewport: Viewport = {
    width: "device-width",
    initialScale: 1,
};

export default function RootLayout({
    children,
}: Readonly<{
    children: ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${jbMono.variable}`}>
                <Navbar />
                <div className={"bg-cat-base text-cat-text [&_a]:text-cat-red [&_a]:underline"}>{children}</div>
            </body>
        </html>
    );
}
