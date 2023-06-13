
import './App.css';
import About from './component/about/About';
import Contact from './component/contact/Contact';
import Footer from './component/footer/Footer';
import Home from './component/home/Home';
import Navbar from './component/navbar/Navbar';
import Projects from './component/projects/Projects';
import Resume from './component/resume/Resume';
import Skills from './component/skills/Skills';

function App() {
  return (
<>
<Navbar/>
<Home/>
<About/>
<Resume/>
<Projects/>
<Skills/>
<Contact/> 
<Footer/>
</>
  );
}

export default App;
