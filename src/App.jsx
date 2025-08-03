import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Hero from './components/Hero';
import Questionbox from './components/Questionbox';
import Prompt from './Prompt'; // or './pages/Prompt' depending on your structure

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Hero /><Questionbox /></>} />
        <Route path="/nature" element={<Prompt />} />
      </Routes>
    </Router>
  );
}

export default App;
