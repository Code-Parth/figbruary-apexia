import Link from "next/link";
import { cn } from "@/lib/utils";
import { shapes } from "@/lib/shapes";
import { Label } from "@/components/ui/label";
import { type PromptType } from "@/data/prompts_data";
import { useState } from "react";
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";


export default function PromptCard({ data }: Readonly<{ data: PromptType }>) {
    const [open, setOpen] = useState(false);

    function getOrdinalSuffix(day: number) {
        if (day > 3 && day < 21) return "th";
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    function getDayColor(day: "Today" | "Tomorrow" | "Upcoming" | "End"): string {
        switch (day) {
            case "Today":
                return "pop-green";
            case "Tomorrow":
                return "pop-orange";
            case "Upcoming":
                return "pop-purple";
            case "End":
                return "pop-yellow";
        }
    }

    function getTagColor(color: "blue" | "green" | "light-blue" | "red"): string {
        switch (color) {
            case "blue":
                return "bg-core-blue/55 border-core-blue";
            case "green":
                return "bg-core-light-green/55 border-core-light-green";
            case "light-blue":
                return "bg-core-light-blue/55 border-core-light-blue";
            case "red":
                return "bg-core-red/55 border-core-red";
        }
    }

    const dayColor = getDayColor(data.day);

    return (
        <div className="relative w-[600px] h-[375px]  max-sm:w-[320px] max-sm:h-[200px] hover:translate-x-0 hover:-translate-y-2 transition-all delay-150">
            <shapes.PromptCard />
            <div className="absolute w-[600px] h-[375px] max-sm:w-[320px] max-sm:h-[200px] inset-0 flex flex-col p-8 max-sm:p-4 overflow-hidden">
                <div className="flex max-sm:-space-x-2 pb-4 max-sm:pb-2">
                    <Label className="text-2xl max-sm:text-lg font-bold">
                        {data.date.getDate()}<sup>{getOrdinalSuffix(data.date.getDate())}</sup> {data.date.toLocaleString("default", { month: "short" })}
                    </Label>
                    <Label
                        className={cn(
                            "flex items-center gap-2.5 text-black text-sm max-sm:text-xs font-normal px-2 py-1 rounded-full scale-75 max-sm:scale-[0.60]",
                            {
                                "border-pop-green border-2": dayColor === "pop-green",
                                "border-pop-orange border-2": dayColor === "pop-orange",
                                "border-pop-purple border-2": dayColor === "pop-purple",
                                "border-pop-yellow border-2": dayColor === "pop-yellow",
                            }
                        )}
                    >
                        <span className="relative flex h-3 w-3">
                            <span className={cn(
                                "animate-ping absolute inline-flex h-full w-full rounded-full bg-opacity-75",
                                {
                                    "bg-pop-green": dayColor === "pop-green",
                                    "bg-pop-orange": dayColor === "pop-orange",
                                    "bg-pop-purple": dayColor === "pop-purple",
                                    "bg-pop-yellow": dayColor === "pop-yellow",
                                }
                            )}></span>
                            <span className={cn(
                                "relative inline-flex rounded-full h-3 w-3 opacity-70",
                                {
                                    "bg-pop-green": dayColor === "pop-green",
                                    "bg-pop-orange": dayColor === "pop-orange",
                                    "bg-pop-purple": dayColor === "pop-purple",
                                    "bg-pop-yellow": dayColor === "pop-yellow",
                                }
                            )}></span>
                        </span>
                        {data.day}
                    </Label>
                </div>
                <div className="flex flex-col gap-3 max-sm:gap-1">
                    <Label className="text-3xl max-sm:text-xl font-medium text-pop-blue">{data.title}</Label>
                    <Label className="text-xl max-sm:text-xs font-normal">{data.description}</Label>
                </div>
                <div className="absolute left-0 bottom-8 max-sm:bottom-4 flex w-full px-8 max-sm:px-4">
                    <div className="flex w-full justify-between">
                        <HoverCard open={open} onOpenChange={setOpen}>
                            <HoverCardTrigger
                                className="flex underline max-sm:text-xs"
                                onClick={() => setOpen((prev) => !prev)} // Toggle popover on click
                            >
                                Resources
                            </HoverCardTrigger>
                            <HoverCardContent
                                side="top"
                                className="bg-blue-10 text-black text-xl font-medium px-4 py-2 border-2 border-black rounded-xl shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all duration-200"
                            >
                                <div className="flex flex-col gap-2">
                                    {data.resources.map((resource, index) => (
                                        resource.url === null ? (
                                            <Label key={index} className="text-lg font-normal">
                                                {resource.title}
                                            </Label>
                                        ) : (
                                            <Link
                                                key={index}
                                                target="_blank"
                                                href={resource.url}
                                                className="text-lg cursor-none font-normal text-pop-blue hover:underline"
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent closing when clicking a link
                                                }}
                                            >
                                                {resource.title}
                                            </Link>
                                        )
                                    ))}
                                </div>
                            </HoverCardContent>
                        </HoverCard>
                        <div className="flex items-center gap-2 max-sm:gap-1">
                            {data.tags.map((tag, index) => (
                                <Label
                                    key={index}
                                    className={cn(
                                        "px-2 py-1 max-sm: max-sm:text-[8px] border rounded-full",
                                        getTagColor(tag.color)
                                    )}
                                >
                                    {tag.title}
                                </Label>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
