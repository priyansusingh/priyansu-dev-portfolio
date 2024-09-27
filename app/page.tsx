import PortfolioBackground from "./components/PortfolioBackground";
import HeroSection from "./section/Hero";
import Navbar from "./section/Navbar";

export default function PortfolioLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative min-h-screen">
      <PortfolioBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection/>
        <main className="pt-16">
          {children}
        </main>
      </div>
    </div>
  )
}