import './App.css';
import { AboutMe } from './components/AboutMe';
import Projects from './components/Projects'
const App=()=>{
  return (
    <div className="App">
      <AboutMe/>
      <Projects/>
    </div>
  );
}

export default App;