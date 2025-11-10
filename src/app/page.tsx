import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        {/* About/Hero Section */}
        <section id="about" className="py-20">
          <Hero />
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">My Projects</h2>
            <p className="mt-4 text-gray-600">Check out some of my recent work</p>
          </div>
          <Projects />
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">My Skills</h2>
            <p className="mt-4 text-gray-600">Technologies I work with</p>
          </div>
          <Skills />
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <Contact />
        </section>
      </main>
    </div>
  );
}
