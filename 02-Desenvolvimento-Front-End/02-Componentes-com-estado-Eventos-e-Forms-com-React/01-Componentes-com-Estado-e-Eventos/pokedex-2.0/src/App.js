import './App.css';
import Pokedex from './components/pokedex';
import Header from './components/header';
import Footer from './components/footer';

function App() {
  return (
    <main className="main">
      <Header />
      <Pokedex />
      <Footer />
    </main>
  );
}

export default App;
