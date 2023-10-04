import logo from './logo.svg';
import './App.css';
import DrawClass from './components/DrawClass';

const CLASS_UML = {
    name: 'Person',
    attributes: ['+name:str','+phoneNumber:str','+emailAddress:str'],
    methods:['+purcharseParkinPass()'],
    borderColor:'#DC2DDE',
    headColor:'#DC2DDE',
    textColor:'#333333'
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <DrawClass data={CLASS_UML} />
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
