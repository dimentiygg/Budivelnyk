import AboutUs from './components/AboutUs/AboutUs';
import Contacts from './components/Contacts/Contacts';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import NewCatalog from './components/NewCatalog/NewCatalog';
import Products from './components/Products/Products';

function App() {
  return (
    <>
      <NavBar />

      <main>
        <Hero />
        <AboutUs />
        <Products />
        <NewCatalog />
        <Contacts />
      </main>
    </>
  );
}

export default App;
