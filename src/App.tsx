import About from "./components/About.tsx";
import Contact from "./components/Contact.tsx";
import Education from "./components/Education.tsx";
import Experience from "./components/Experience.tsx";
import Header from "./components/Header.tsx";
import { LeetCodeRanking } from "./components/LeetcodeRank.tsx";
import Projects from "./components/Projects.tsx";
import Skills from "./components/Skills.tsx";
import Tools from "./components/Tools.tsx";
import { DockDemo } from "./DockDemo.tsx";

const App = () => {
  return (
    <div className="my-16">
      <Header />
      <About />
      <Experience />
      <Education />
      <Skills />
      <Tools />
      <LeetCodeRanking username="udaykumar-dhokia" />
      <Projects />
      <Contact />
      <DockDemo />
    </div>
  );
};

export default App;
