import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
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
  		keyframes: {
  			shimmer: {
  				'0%': { backgroundPosition: '-200% 0' },
  				'100%': { backgroundPosition: '200% 0' },
  			},
  			pulseGlow: {
  				'0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
  				'50%': { opacity: '0.8', transform: 'scale(1.05)' },
  			},
  			float: {
  				'0%, 100%': { transform: 'translateY(0px)' },
  				'50%': { transform: 'translateY(-10px)' },
  			},
  			marquee: {
  				'0%': { transform: 'translateX(0%)' },
  				'100%': { transform: 'translateX(-50%)' },
  			},
  			marqueeReverse: {
  				'0%': { transform: 'translateX(-50%)' },
  				'100%': { transform: 'translateX(0%)' },
  			},
  			spinSlow: {
  				'0%': { transform: 'rotate(0deg)' },
  				'100%': { transform: 'rotate(360deg)' },
  			},
  		},
  		animation: {
  			shimmer: 'shimmer 4s linear infinite',
  			pulseGlow: 'pulseGlow 6s ease-in-out infinite',
  			float: 'float 5s ease-in-out infinite',
  			marquee: 'marquee 30s linear infinite',
  			marqueeReverse: 'marqueeReverse 30s linear infinite',
  			spinSlow: 'spinSlow 20s linear infinite',
  		},
  		boxShadow: {
  			'glow-sm': '0 0 15px -3px rgba(99, 102, 241, 0.25)',
  			'glow-md': '0 0 25px -4px rgba(99, 102, 241, 0.35)',
  			'glow-lg': '0 0 40px -6px rgba(124, 58, 237, 0.45)',
  			'glow-cyan': '0 0 30px -5px rgba(6, 182, 212, 0.35)',
  		},
  	},
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
