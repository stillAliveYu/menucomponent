import logo from './logo.svg';
import './App.css';
import Menu from "./menu";
import Main from "./menu";

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <Menu/>
      </header>
        <Main></Main>

        <footer className='App-footer'></footer>
    </div>
  );
}

export default App;
