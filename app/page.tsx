"use client";

import Link from "next/link";
import Image from "next/image";
import { shapes } from "@/lib/shapes";
import { FAQData } from "@/data/faq_data";
import { useState, useEffect } from "react";
import { Label } from "@/components/ui/label";
import Header from "@/components/common/header";
import Footer from "@/components/common/footer";
import { BlurFade } from "@/components/blurFade";
import Section from "@/components/common/section";
import { Marquee } from "@/components/marquee/marquee";
import PromptCard from "@/components/common/promptCard";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";
import { prompts_Data, START_DATE } from "@/data/prompts_data";
import { HeroSection, HeroSectionMobile } from "@/components/heroSection";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function HomePage() {
    const today = new Date();

    const [windowWidth, setWindowWidth] = useState<number | null>(null);
    const [isAnimationComplete, setIsAnimationComplete] = useState(false);

    const isLaunched: boolean = today > START_DATE ? true : false;

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const handleResize = () => setWindowWidth(window.innerWidth);
            window.addEventListener('resize', handleResize);

            handleResize();

            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const [grid, setGrid] = useState({
        x: 0,
        y: 0
    });

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

    const todayPrompt = prompts_Data.find((prompt) => prompt.day === "Today");
    const tomorrowPrompt = prompts_Data.find((prompt) => prompt.day === "Tomorrow");

    const shocasePrompts = todayPrompt ? [todayPrompt] : tomorrowPrompt ? [tomorrowPrompt] : [];

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

                    <div className="absolute -left-9 top-4 max-sm:hidden">
                        <div className="animate-spin-slow">
                            <shapes.Shape01 />
                        </div>
                    </div>

                    <div className="absolute -right-16 top-12 max-sm:hidden">
                        <div className="animate-spin-reverse-slow">
                            <shapes.Shape04 />
                        </div>
                    </div>

                    <div className="absolute -left-9 top-[80vh] max-sm:hidden">
                        <div className="animate-spin-slow">
                            <shapes.Shape02 />
                        </div>
                    </div>

                    <div className="absolute -right-16 top-[90vh]  max-sm:hidden">
                        <div className="animate-spin-slow">
                            <shapes.Shape03 />
                        </div>
                    </div>
                </div>
            </div>

            <div className="relative z-10 min-h-screen w-full">
                <Section id="home">
                    <div className="w-screen mx-auto flex flex-col items-center justify-center">
                        <div className="w-full flex flex-col items-center">
                            <div className="w-full max-w-[90vw] mx-auto pt-8">
                                <Header />
                            </div>
                            <div className="w-full h-[80vh] flex flex-col items-center justify-between">
                                <div className="w-full h-[75vh] max-sm:h-[60vh]">
                                    <div className="relative w-full h-full flex items-center justify-center">
                                        {isAnimationComplete || (windowWidth && windowWidth <= 1024) ? (
                                            <BlurFade inView>
                                                {windowWidth && windowWidth > 1024 ? <HeroSection /> : <HeroSectionMobile />}
                                            </BlurFade>
                                        ) : (
                                            <DotLottieReact
                                                autoplay
                                                loop={false}
                                                backgroundColor="transparent"
                                                dotLottieRefCallback={(dotLottie) => {
                                                    dotLottie?.addEventListener("complete", () => {
                                                        setIsAnimationComplete(true);
                                                    });
                                                }}
                                                src="/lottie/NOcJarG37w.lottie"
                                            />
                                        )}

                                    </div>
                                </div>
                                <div className="h-[5vh] w-full bg-blue-10 border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0 hover:translate-y-1 transition-all duration-200 flex items-center">
                                    <Marquee className="w-full [--duration:20s]">
                                        <shapes.Shape04 className="size-6 animate-spin-slow" />
                                        <Label className="flex items-center">
                                            7 days
                                        </Label>
                                        <shapes.Shape01 className="size-6 animate-spin-reverse-slow" />
                                        <Label className="flex items-center">
                                            7 prompts
                                        </Label>
                                        <shapes.Shape02 className="size-6 animate-spin-slow" />
                                        <Label className="flex items-center">
                                            Unleash Creativity
                                        </Label>
                                        <shapes.Shape04 className="size-6 animate-spin-slow" />
                                        <Label className="flex items-center">
                                            7 days
                                        </Label>
                                        <shapes.Shape01 className="size-6 animate-spin-reverse-slow" />
                                        <Label className="flex items-center">
                                            7 prompts
                                        </Label>
                                        <shapes.Shape02 className="size-6 animate-spin-slow" />
                                        <Label className="flex items-center">
                                            Unleash Creativity
                                        </Label>
                                    </Marquee>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>
            </div>

            {isLaunched ? (
                <div className="relative z-10 min-h-fit w-full">
                    <div className="w-screen min-h-screen mx-auto flex flex-col items-center justify-center">
                        <div className="w-full flex flex-col gap-16 items-center">
                            <Label className="text-5xl max-sm:text-2xl font-bold">
                                <span className="text-core-pink">Today&apos;s</span>
                                <span> </span>
                                <span>Prompt</span>
                            </Label>
                            <div className="w-full flex flex-col items-center justify-center gap-8">
                                {shocasePrompts.map((prompt) => (
                                    <PromptCard key={prompt.id} data={prompt} />
                                ))}
                                <Link
                                    href="./prompts"
                                    className="mt-6 cursor-none bg-core-pink flex gap-2 items-center text-black text-xl max-sm:text-sm font-medium px-4 py-2 border-2 border-black rounded-full shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] max-sm:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                                >
                                    Checkout other Prompts
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="24"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                    >
                                        <path
                                            d="M20.0001 11.9998H4.00012"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                        <path
                                            d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                                            stroke="black"
                                            strokeWidth="1.5"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        />
                                    </svg>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div className="relative z-10 min-h-fit w-full">
                    <div className="w-screen min-h-[40vh] mx-auto flex flex-col items-center justify-center">
                        <div className="w-full flex flex-col gap-16 items-center">
                            <Label className="text-5xl max-sm:text-2xl font-bold">
                                <span>Prompts</span>
                                <span className="text-core-pink"> Dropping</span>
                                <span> Tommorrow</span>
                            </Label>
                        </div>
                    </div>
                </div>
            )}

            <div className="relative z-10 w-full bg-black">
                <div className="py-20 px-8 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 gap-4">
                    <div className="w-full flex flex-col p-8 gap-y-6 max-sm:gap-y-3 max-sm:p-4 *: bg-blue-10 border-4 border-blue-10 rounded-2xl shadow-[8px_8px_0px_0px_rgba(217,95,138,1)] max-sm:shadow-[4px_4px_0px_0px_rgba(217,95,138,1)] hover:shadow-none hover:translate-x-2 hover:translate-y-2 transition-all duration-200">
                        <Label className="cursor-none text-5xl max-sm:text-2xl font-bold text-black">What is figbruary?</Label>
                        <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
                            Figbruary is a fictional month created by combining Figma + February where you can experiment and design things daily to push the limits.
                        </Label>
                        <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
                            For every 24 hour day within this 7 days timespan we have prepared a prompt with instructions for you to design and create.
                        </Label>
                        <Label className="cursor-none text-xl max-sm:text-xs font-normal text-pop-blue text-justify">
                            PS. - You don’t have to follow the prompt exactly. Or even at all.
                        </Label>
                        <Label className="cursor-none text-xl max-sm:text-xs font-normal text-black text-justify">
                            Share your work and tag it with <strong>#ApexiaDesigns, #figbruary or #figbruary2025</strong>
                        </Label>
                    </div>
                    <div className="w-full flex items-center justify-center">
                        <Image
                            src="/Illustration.svg"
                            alt="figbruary"
                            width={634}
                            height={382}
                        />
                    </div>
                </div>
            </div>

            <Section id="faqs">
                <div className="relative z-10 w-full py-24 max-sm:py-12 max-sm:gap-6 flex flex-col gap-12 items-center bg-blue-10 cursor-none">
                    <Label className="flex w-full max-sm:text-2xl items-center justify-center  text-5xl font-bold text-black cursor-none gap-2">
                        Frequently
                        <span className="text-pop-orange">
                            Asked
                        </span>
                        Questions
                    </Label>
                    <div className="w-full max-w-[90vw] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 max-sm:space-x-0 space-x-4">
                        <div className="w-full flex flex-col cursor-none">
                            <Accordion type="single" collapsible className="cursor-none">
                                {FAQData[0].map((item, index) => (
                                    <AccordionItem value={item.value} key={index} className="cursor-none">
                                        <AccordionTrigger className="cursor-none">{item.question}</AccordionTrigger>
                                        <AccordionContent className="cursor-none">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                        <div className="w-full flex flex-col">
                            <Accordion type="single" collapsible>
                                {FAQData[1].map((item, index) => (
                                    <AccordionItem value={item.value} key={index} className="cursor-none">
                                        <AccordionTrigger className="cursor-none">{item.question}</AccordionTrigger>
                                        <AccordionContent className="cursor-none">
                                            {item.answer}
                                        </AccordionContent>
                                    </AccordionItem>
                                ))}
                            </Accordion>
                        </div>
                    </div>
                </div>
            </Section>

            <div className="relative z-10">
                <Footer />
            </div>
        </div >
    );
}
