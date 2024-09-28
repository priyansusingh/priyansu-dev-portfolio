import PortfolioBackground from "../components/PortfolioBackground";
import HeroSection from "../section/Hero";
import Navbar from "../section/Navbar";
import ProjectSection from "../section/Projects";
import SkillsSection from "../section/Skills";

export function PortfolioLayout() {
  return (
    <div className="relative min-h-screen">
      <PortfolioBackground />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <section id="skills" className="py-20"> {/* Skills Section */}
          <SkillsSection />
        </section>
        <section id="projects" className="py-20"> {/* Projects Section */}
          <ProjectSection />
        </section>
      </div>
    </div>
  );
}
