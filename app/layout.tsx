import { Providers } from "@/app/providers";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from "@heroui/navbar";
import type { Metadata, Viewport } from "next";
import { JetBrains_Mono } from "next/font/google";
import Link from "next/link";
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
                <Navbar className={"h-30 bg-cat-base"}>
                    <NavbarBrand>
                        <span className={"text-sm text-cat-sapphire lg:text-lg"}>LigmaCorp. Ltd.</span>
                    </NavbarBrand>
                    <NavbarContent className={"hidden gap-4 text-cat-peach sm:flex"} justify={"center"}>
                        <NavbarItem>
                            <Link href={"/"}>Home</Link>
                        </NavbarItem>
                        /
                        <NavbarItem>
                            <Link href={"/posts/intro"}>Intro</Link>
                        </NavbarItem>
                    </NavbarContent>
                    <NavbarContent justify={"end"}>
                        <NavbarItem className={"text-sm text-cat-green lg:text-lg"}>
                            <Link href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}>Free Steam Key!!!!</Link>
                        </NavbarItem>
                    </NavbarContent>
                </Navbar>
                <Providers>
                    <div className={"bg-cat-base text-cat-text [&_a]:text-cat-red [&_a]:underline"}>{children}</div>
                </Providers>
            </body>
        </html>
    );
}
