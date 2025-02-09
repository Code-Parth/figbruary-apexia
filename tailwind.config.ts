import type { Config } from "tailwindcss";
import tailwindcssAnimate from "tailwindcss-animate";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				'pop-pink': '#F56EBD',
				'pop-blue': '#5551FF',
				'pop-green': '#12D861',
				'pop-purple': '#6D1DBA',
				'pop-orange': '#FF8A22',
				'pop-yellow': '#F1FF48',
				'updated-blue': '#00B6FF',
				'snow-white': '#FAFAFA',
				'slate-black': '#222222',
				'graphite-gray': '#333333',
				'midnight-black': '#121212',
				'blue-10': '#EEF5FF',
				'blue-20': '#C7E1FF',
				'blue-30': '#A1CCFF',
				'blue-40': '#7BB7FF',
				'blue-50': '#519BF4',
				'blue-60': '#3C80D2',
				'blue-70': '#2A67B0',
				'blue-80': '#1C508E',
				'blue-90': '#103A6C',
				'blue-100': '#08264A',
				'red-10': '#FFECEA',
				'red-20': '#FFC3BD',
				'red-30': '#FF998F',
				'red-40': '#FF7061',
				'red-50': '#FF4633',
				'red-60': '#DD3220',
				'red-70': '#BB2111',
				'red-80': '#991406',
				'red-90': '#770B00',
				'red-100': '#550800',
				'orange-10': '#FFF9EF',
				'orange-20': '#FFECCD',
				'orange-30': '#FFDFAA',
				'orange-40': '#FFD388',
				'orange-50': '#FFC665',
				'orange-60': '#DDA84F',
				'orange-70': '#BB8C3B',
				'orange-80': '#99702A',
				'orange-90': '#77551C',
				'orange-100': '#553C11',
				'pink-10': '#FFF1F6',
				'pink-20': '#FFC8DC',
				'pink-30': '#FFA0C2',
				'pink-40': '#F673A2',
				'pink-50': '#D95F8A',
				'pink-60': '#BC4C74',
				'pink-70': '#9F3B5F',
				'pink-80': '#812C4B',
				'pink-90': '#641F38',
				'pink-100': '#471426',
				'light-blue-10': '#FAFDFF',
				'light-blue-20': '#E3F6FF',
				'light-blue-30': '#CDEFFF',
				'light-blue-40': '#B9DCEC',
				'light-blue-50': '#A1C3D3',
				'light-blue-60': '#8AAAB9',
				'light-blue-70': '#7492A0',
				'light-blue-80': '#5F7A86',
				'light-blue-90': '#4A626D',
				'light-blue-100': '#374A53',
				'light-green-10': '#FBFFF0',
				'light-green-20': '#EEFFC2',
				'light-green-30': '#E2FF95',
				'light-green-40': '#CDF564',
				'light-green-50': '#B3D851',
				'light-green-60': '#99BB3F',
				'light-green-70': '#7F9E30',
				'light-green-80': '#678023',
				'light-green-90': '#4E6317',
				'light-green-100': '#37460E',
				'yellow-10': '#FFFDEA',
				'yellow-20': '#FFF8BB',
				'yellow-30': '#FFF38C',
				'yellow-40': '#FFEF5C',
				'yellow-50': '#F7E32C',
				'yellow-60': '#D5C31A',
				'yellow-70': '#B3A30C',
				'yellow-80': '#918302',
				'yellow-90': '#6F6400',
				'yellow-100': '#4D4500',
				black: '#000000',
				white: '#FFFFFF',
				'core-red': '#ff4633',
				'core-pink': '#d95f8a',
				'core-blue': '#519bf4',
				'core-orange': '#ffc665',
				'core-yellow': '#f7e32c',
				'core-light-blue': '#a1c3d3',
				'core-light-green': '#cdf564',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				chart: {
					'1': 'hsl(var(--chart-1))',
					'2': 'hsl(var(--chart-2))',
					'3': 'hsl(var(--chart-3))',
					'4': 'hsl(var(--chart-4))',
					'5': 'hsl(var(--chart-5))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			animation: {
				'spin-slow': 'spin 2s linear infinite',
				'spin-reverse-slow': 'spin-reverse 3s linear infinite',
				marquee: 'marquee var(--duration) linear infinite',
				'marquee-vertical': 'marquee-vertical var(--duration) linear infinite',
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out'
			},
			keyframes: {
				'spin-reverse': {
					'0%': {
						transform: 'rotate(0deg)'
					},
					'100%': {
						transform: 'rotate(-360deg)'
					}
				},
				marquee: {
					from: {
						transform: 'translateX(0)'
					},
					to: {
						transform: 'translateX(calc(-100% - var(--gap)))'
					}
				},
				'marquee-vertical': {
					from: {
						transform: 'translateY(0)'
					},
					to: {
						transform: 'translateY(calc(-100% - var(--gap)))'
					}
				},
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				}
			}
		}
	},

	plugins: [tailwindcssAnimate],
} satisfies Config;
