import Contador from './components/Contador';
//import Pelicula from './components/Pelicula'
import TiraPeliculas from './components/TiraPeliculas'

function App() {
  return (
    <div className="App">
      <header className="App-header">
    
      </header>
      <main>
        <TiraPeliculas />
        <Contador inicial={0}/>
      </main>
    </div>
  );
}

export default App;
