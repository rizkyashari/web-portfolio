import Intro from './components/Intro';
import AboutMe from './components/AboutMe';
import Navbar from './components/Navbar';
import Services from './components/Services';
import RecentWork from './components/RecentWork';

import '../src/App.css'

function App() {
  return (
    <div>
      <Navbar />
      <Intro />
      <AboutMe />
      <Services />
      <RecentWork />
    </div>
  );
}

export default App;
