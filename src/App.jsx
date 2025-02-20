import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';
import { FaReact } from 'react-icons/fa';

function App() {
  return (
    <>
      <div className="h-[100vh]">
        {/* Header + Hero */}
        <Header />
        <Hero />
      </div>
      {/* Projects */}
      <div id="projects" className="min-h-[100vh]">
        <Projects />
      </div>
      <div
        id="contact"
        className="min-h-[100vh] flex justify-center items-center relative"
      >
        <Contact />
        <p className="absolute bottom-0 left-0 mb-6 ml-6 text-xs text-white hover:text-[#00FFBB] md:text-sm">
          <span className="flex gap-1">
            Built with <FaReact color="#00FFBB" /> React <br />
          </span>
          Thanks for stopping by!
        </p>
      </div>
    </>
  );
}

export default App;
