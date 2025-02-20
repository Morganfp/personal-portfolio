import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Contact from './components/Contact';

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
        className="min-h-[100vh] flex justify-center items-center"
      >
        <Contact />
      </div>
    </>
  );
}

export default App;
