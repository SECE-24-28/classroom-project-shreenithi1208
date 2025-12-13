import { Routes, Route } from 'react-router-dom';
import './css/App.css';
import Landing from './components/functionalComponent/Landing.jsx';
import Home from './components/functionalComponent/Home.jsx';
import About from './components/functionalComponent/About.jsx';
import LearningReact from './components/functionalComponent/LearningReact.jsx';
import Contact from './components/functionalComponent/Contact.jsx';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/learn-react" element={<LearningReact />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
