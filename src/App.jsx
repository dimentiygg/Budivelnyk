import AboutUs from './components/AboutUs/AboutUs';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <main>
        <AboutUs />
      </main>
    </>
  );
}

export default App;
