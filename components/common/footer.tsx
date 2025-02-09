"use client";

import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { START_DATE } from "@/data/prompts_data";

const socials = [
    { name: "Discord", href: "https://discord.gg/GwsBzGZnYc", src: "/socials/Discord.svg" },
    { name: "Instagram", href: "https://instagram.com/apexia_club", src: "/socials/Instagram.svg" },
    { name: "LinkedIn", href: "https://linkedin.com/company/apexia-community", src: "/socials/LinkedIn.svg" },
    { name: "Twitter", href: "https://twitter.com/apexia_club", src: "/socials/Twitter.svg" },
];

export default function Footer() {
    const pathname = usePathname();
    const [activeSection, setActiveSection] = useState<string | null>(null);


    const today = new Date();
    const isLaunched: boolean = today > START_DATE ? true : false;

    useEffect(() => {
        const handleScroll = () => {
            const sections = document.querySelectorAll(".section");

            sections.forEach((section) => {
                const rect = section.getBoundingClientRect();

                if (rect.top <= 80 && rect.bottom >= 80) {
                    setActiveSection(section.id);
                }
            });
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <footer className={cn("w-full", pathname === "/prompts" ? "" : "bg-blue-10")}>
            <div className="w-full max-w-[90vw] mx-auto border border-t border-black" />
            <div className="w-full max-w-[90vw] mx-auto flex justify-between items-center py-8 max-md:gap-4">
                <Image
                    src="/Figbruary-Logo.svg"
                    alt="Logo"
                    width={286}
                    height={64}
                    className="max-md:w-40"
                />
                <div className="flex items-center gap-5 font-medium text-xl max-sm:text-sm max-md:gap-2">
                    <Link href="./#home" className={cn(activeSection === "home" ? "active" : "", "cursor-none")}>
                        Home
                    </Link>
                    {/* <Link href="/prompts" className="cursor-none">Prompts</Link> */}
                    {isLaunched && (<Link href="/prompts" className="cursor-none">Prompts</Link>)}
                    <Link href="./#faqs" className={cn(activeSection === "faqs" ? "active" : "", "cursor-none")}>
                        FAQs
                    </Link>
                </div>
            </div>
            <div className="bg-core-pink py-8 text-black text-xl px-6 border-rl-2 border-t-2 border-black rounded-t-xl shadow-[8px_-4px_0px_0px_rgba(0,0,0,1)] max-sm:shadow-[4px_-2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-y-1 transition-all duration-200">
                <div className="flex w-full max-w-[90vw] mx-auto max-sm:flex-col-reverse justify-between max-sm:gap-5">
                    <div className="flex justify-between items-center w-full gap-4 max-sm:gap-2">
                        <Link href="https://apexia.club" className="text-xl max-sm:text-base cursor-none">
                            apexia©{new Date().getFullYear()}
                        </Link>
                        <div className="flex gap-5 max-sm:gap-2 max-sm:justify-center">
                            {socials.map((social, index) => (
                                <Link
                                    key={index}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="size-8 cursor-none"
                                >
                                    <Image
                                        src={social.src}
                                        width={24}
                                        height={24}
                                        alt={social.name}
                                        className="hover:scale-110 size-8 max-sm:size-6 transition-all duration-200 ease-in"
                                    />
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
