import Home from './components/Home'
import Project from './components/Project';
import About from './components/About';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Container from './components/Container'
function App() {
  
  return (
    <>
      <Container>
        <Home />
        <About />
        <Project />
        <Contact />
        <Resume />
      </Container>
    </> 
  );
}

export default App;
