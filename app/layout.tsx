import "./globals.css";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import PenCursor from "@/components/common/penCursor";
import Script from "next/script";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Figbruary Apexia",
    description: "Apexia is hosting a mini-version of figbruary. It will be the same concept as figbruary but, will go on for 7 Days.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <head>
                <link href="/favicon/apexia-light.svg" rel="icon" type="image/svg" media="(prefers-color-scheme: light)" />
                <link href="/favicon/apexia-dark.svg" rel="icon" type="image/svg" media="(prefers-color-scheme: dark)" />
                <meta name="description" content="Apexia is hosting a mini-version of figbruary. It will be the same concept as figbruary but, will go on for 7 Days." />
                <meta property="og:url" content="https://figbruary.apexia.club/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Apexia Figbruary" />
                <meta property="og:description" content="Apexia is hosting a mini-version of figbruary. It will be the same concept as figbruary but, will go on for 7 Days." />
                <meta property="og:image" content="https://figbruary.apexia.club/OG_Image.png" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:domain" content="figbruary.apexia.club" />
                <meta property="twitter:url" content="https://figbruary.apexia.club/" />
                <meta name="twitter:title" content="Apexia" />
                <meta name="twitter:description" content="Bits to brilliance, together!" />
                <meta name="twitter:image" content="https://figbruary.apexia.club/OG_Image.png" />

                {/* google Analytics */}
                <Script async src="https://www.googletagmanager.com/gtag/js?id=<YOUR-G-TAG>"></Script>
                <Script id="google-analytics">
                    {
                        `
                            window.dataLayer = window.dataLayer || [];
                            function gtag(){dataLayer.push(arguments);}
                            gtag('js', new Date());
                            gtag('config', '<YOUR-G-TAG>');
                        `
                    }
                </Script>
            </head>
            <body
                className={cn(spaceGrotesk.className, "overflow-x-hidden cursor-none bg-blue-10 select-none scroll-smooth")}
            >
                <PenCursor />
                {children}
            </body>
        </html>
    );
}
