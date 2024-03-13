import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          This is sample application for aws devops
        
        </a>
        <h1 style={{color:'pink'}}>Welcome to CI/CD testing pipeline by using aws services</h1>
        <h2 style={{color:'yellow'}}>This is sample testing application</h2>
      </header>
    </div>
  );
}

export default App;
