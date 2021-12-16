import logo from './logo.svg';
import './App.css';
const blah = process.env.REACT_APP_whee
function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo"/>
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
                <p>A const: {blah}</p>
                <p>Using an env variable: {process.env.REACT_APP_NOT_SECRET_CODE} and one from a file: {process.env.REACT_APP_whee} and running {process.env.NODE_ENV} mode</p>
            </header>
        </div>
    );
}

export default App;
