
import Menu from "./menu";
import './style.css';

function App() {
  return (
    <>
      <header className="App-header">
          <Menu/>
      </header>
        <main>
            <h1>Welcome to this web page</h1>
        </main>

        <footer className='App-footer'>
            <a href='/about'>About</a>
        </footer>
    </>
  );
}

export default App;
