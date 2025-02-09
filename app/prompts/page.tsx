"use client";

import { shapes } from "@/lib/shapes";
import { useEffect, useState } from "react";
import { Label } from "@/components/ui/label";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import PromptCard from "@/components/common/promptCard";
import { usePathname, useRouter } from "next/navigation";
import { prompts_Data, START_DATE } from "@/data/prompts_data";

export default function PromptsPage() {
    const router = useRouter();
    const pathname = usePathname();

    const today = new Date();

    const isLaunched: boolean = today > START_DATE ? true : false;

    const [grid, setGrid] = useState({
        x: 0,
        y: 0
    });

    useEffect(() => {
        if (pathname === "/prompts" && !isLaunched) {
            router.push("../")
        }
    }, [isLaunched, pathname, router])

    useEffect(() => {
        const handleResize = () => {
            setGrid({
                x: Math.floor(window.innerWidth / 40),
                y: Math.floor(window.innerHeight / 40)
            });
        };
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="w-screen flex flex-col">
            <div className="fixed inset-0 z-0 pointer-events-none">
                <div className="h-full w-full">
                    <div className="absolute inset-0 flex">
                        {Array.from({ length: grid.x }).map((_, index) => (
                            <div
                                key={`col-${index}`}
                                className="h-full border-r border-graphite-gray/40"
                                style={{ width: `${100 / grid.x}%` }}
                            />
                        ))}
                    </div>

                    <div className="absolute inset-0 flex flex-col">
                        {Array.from({ length: grid.y }).map((_, index) => (
                            <div
                                key={`row-${index}`}
                                className="w-full border-b border-graphite-gray/40"
                                style={{ height: `${100 / grid.y}%` }}
                            />
                        ))}
                    </div>

                    <div className="absolute -left-9 top-4">
                        <div className="animate-spin-reverse-slow">
                            <shapes.Shape01 />
                        </div>
                    </div>

                    <div className="absolute -right-16 top-12">
                        <div className="animate-spin-slow">
                            <shapes.Shape04 />
                        </div>
                    </div>

                    <div className="absolute -left-9 top-[80vh]">
                        <div className="animate-spin-slow">
                            <shapes.Shape02 />
                        </div>
                    </div>

                    <div className="absolute -right-16 top-[90vh]">
                        <div className="animate-spin-slow">
                            <shapes.Shape03 />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 min-h-screen w-full">
                <div className="w-screen mx-auto flex flex-col items-center justify-center">
                    <div className="w-full flex flex-col items-center">
                        <div className="w-full max-w-[90vw] mx-auto pt-8">
                            <Header />
                        </div>

                        <div className="py-24 max-sm:py-12 w-full flex flex-col items-center">
                            <Label className="flex w-full items-center justify-center text-5xl max-sm:text-2xl text-core-pink font-bold cursor-none gap-2">
                                Prompts
                            </Label>
                            <Label className="text-xl max-sm:text-sm max-sm:text-center font-normal py-8 max-sm:py-2">
                                7 days. 7 prompts. Unlimited creativity—let&apos;s design!
                            </Label>
                            <div className="py-8 max-sm:py-4 flex flex-wrap justify-center gap-x-8 max-sm:gap-y-6 gap-y-12 w-full max-w-[90vw] mx-auto">
                                {prompts_Data.map((data) => (
                                    <div
                                        key={data.id}
                                        className="w-full md:w-[600px] flex items-center justify-center"
                                    >
                                        <PromptCard data={data} />
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <div className="relative z-10">
                <Footer />
            </div>
        </div>
    );
}