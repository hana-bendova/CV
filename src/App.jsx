import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Welcome />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <footer>Created on July 2025</footer>
    </>
  );
};

export default App;
