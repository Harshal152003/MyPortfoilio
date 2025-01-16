
import './App.css';
import "./component/Header"
import Header from './component/Header';
import HeroSection from './component/HeroSection';
import ProjectsSection from './component/ProjectSection';
import SkillsSection from './component/SkillsSection';
import EducationSection from './component/EducationSection';
import Contact from './component/Contact';



function App() {
  return (
    <div className="App">
      <Header/>
      <div className="h-screen flex items-center justify-center relative overflow-hidden">
      {/* Live Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-gray-900 to-gray-800 animate-gradient bg-[length:300%_300%]"></div>
      
      {/* Content */}
      <div className="relative text-white z-10 text-center">
        <h1 className="text-5xl font-bold">Welcome to My Portfolio</h1>
        <p className="mt-4 text-xl">Creating dynamic and modern designs</p>
        
      </div>
      
    
    
      </div>
      <div>
      <HeroSection />
      <ProjectsSection/>
      <SkillsSection/>
      <EducationSection/>
      <Contact/>
      </div>
    
    </div>
  );
}

export default App;
