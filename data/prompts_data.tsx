export interface PromptType {
    id: number;
    date: Date;
    day: "Today" | "Tomorrow" | "Upcoming" | "End";
    title: string;
    description: string;
    resources: {
        url: string | null;
        title: string;
    }[];
    tags: {
        title: string;
        color: "blue" | "green" | "light-blue" | "red";
    }[];
}

export const START_DATE = new Date("2025-02-09T00:00:00+05:30");

function setDay(date: Date): "Today" | "Tomorrow" | "Upcoming" | "End" {
    const currentDate = new Date();
    const diff = date.getDate() - currentDate.getDate();
    if (diff === 0) {
        return "Today";
    } else if (diff === 1) {
        return "Tomorrow";
    } else if (diff > 1) {
        return "Upcoming";
    } else {
        return "End";
    }
}

function setIncrementedDate(date: Date, days: number): Date {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + days);
    return newDate;
}

export const prompts_Data: PromptType[] = [
    {
        id: 1,
        date: setIncrementedDate(START_DATE, 0),
        day: setDay(setIncrementedDate(START_DATE, 0)),
        title: "Typography as the Hero",
        description: "Create a poster or UI section where typography is the main element—no images, just text! Play with fonts, size, and layout to create visual impact.",
        resources: [
            {
                url: "https://pangrampangram.com/",
                title: "Pangram Pangram",
            },
            {
                url: "https://www.dafont.com/",
                title: "Da Fonts",
            },
            {
                url: "https://dirtylinestudio.com/",
                title: "Dirtyline Studio",
            },
            {
                url:"",
                title: ""
            }
        ],
        tags: [
            {
                title: "Typography",
                color: "light-blue",
            },
            {
                title: "Poster",
                color: "green",
            }
        ],
    },
    {
        id: 2,
        date: setIncrementedDate(START_DATE, 1),
        day: setDay(setIncrementedDate(START_DATE, 1)),
        title: "Gradient Exploration",
        description: "Experiment with gradients in UI or graphic design! Design a background, button set, or full-screen layout that uses gradients creatively.",
        resources: [
            {
                url: "https://gradienthunt.com/",
                title: "Gradient Hunt",
            },
            {
                url: "https://webgradients.com/",
                title: "WebGradients",
            },
            {
                url: "https://www.figma.com/community/plugin/1174390287006360600",
                title: "Gradient Figma Plugin"
            }
        ],
        tags: [
            {
                title: "Gradients",
                color: "green",
            },
            {
                title: "UI",
                color: "blue",
            }
        ],
    },
    {
        id: 3,
        date: setIncrementedDate(START_DATE, 2),
        day: setDay(setIncrementedDate(START_DATE, 2)),
        title: "Minimalist Landing Page",
        description: "Create a simple & clean landing page for a product, portfolio, or even a coffee shop. Focus on negative space, clear typography, and simplicity.",
        resources: [
            {
                url: "https://www.figma.com/community/website-templates",
                title: "Figma Community - Website Tempaltes",
            },
            {
                url: "https://www.awwwards.com/websites/minimal/",
                title: "Awwwards - Minimal Websites",
            },
        ],
        tags: [
            {
                title: "Landing Page",
                color: "green",
            },
            {
                title: "Minimalist",
                color: "blue",
            }
        ],
    },
    {
        id: 4,
        date: setIncrementedDate(START_DATE, 3),
        day: setDay(setIncrementedDate(START_DATE, 3)),
        title: "Bento UI",
        description: "Design a simple dashboard, profile, or landing page UI using the Bento Grid layout—a clean, modular, and organized style!",
        resources: [
            {
                url: "https://bentogrids.com/",
                title: "Bento Grids",
            },
            {
                url: "https://dribbble.com/tags/bento-grids",
                title: "Dribbble - Bento Grids",
            }
        ],
        tags: [
            {
                title: "UI",
                color: "blue",
            },
            {
                title: "Bento Grid",
                color: "green",
            }
        ],
    },
    {
        id: 5,
        date: setIncrementedDate(START_DATE, 4),
        day: setDay(setIncrementedDate(START_DATE, 4)),
        title: "Brutalist Poster Design",
        description: "Create a bold, raw, and striking poster with a brutalist style—high contrast, sharp edges, and minimal decoration!",
        resources: [
            {
                url: "https://brutalistwebsites.com/",
                title: "Brutalist Websites",
            },
            {
                url: "https://dribbble.com/tags/brutalism",
                title: "Dribbble - Brutalism",
            },
        ],
        tags: [
            {
                title: "Poster",
                color: "green",
            },
            {
                title: "Brutalism",
                color: "red",
            }
        ],
    },
    {
        id: 6,
        date: setIncrementedDate(START_DATE, 5),
        day: setDay(setIncrementedDate(START_DATE, 5)),
        title: "Valentine Theme Wearable",
        description: "Design a Valentine-themed wearable—this could be a T-shirt graphic, smartwatch UI, fitness tracker design, or even sneaker branding! Mix romantic color palettes, heart motifs, or futuristic Valentine aesthetics.",
        resources: [
            {
                url: "null",
                title: "",
            },
            {
                url: "null",
                title: "",
            },
        ],
        tags: [
            {
                title: "Valentine Theme",
                color: "red",
            },
            {
                title: "Wearable",
                color: "blue",
            }
        ],
    },
    {
        id: 7,
        date: setIncrementedDate(START_DATE, 6),
        day: setDay(setIncrementedDate(START_DATE, 6)),
        title: "Open Design (Create Anything!)",
        description: "Your choice! It could be UI, branding, posters, an app concept, or an experimental piece. Let your creativity flow!",
        resources: [
            {
                url: null,
                title: "No limits!",
            },
            {
                url: null,
                title: "Explore any source of inspiration!",
            },
        ],
        tags: [
            {
                title: "Open Design",
                color: "green",
            },
            {
                title: "Creative",
                color: "blue",
            }
        ],
    },
];
