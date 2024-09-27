import PortfolioBackground from "../components/PortfolioBackground";
import HeroSection from "../section/Hero";
import Navbar from "../section/Navbar";

export function PortfolioLayout() {
  return (
    <div className="relative min-h-screen">
      <PortfolioBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection/>
      </div>
    </div>
  )
}