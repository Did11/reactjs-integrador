import './App.css';
import DrawClass from './components/DrawClass/DrawClass';
import Menu from './components/Menu/Menu';

const CLASS_UML_PERSON = {
    name: 'Person',
    attributes: ['+name: str', '+phoneNumber: str', '+emailAddress: str'],
    methods: ['+purcharseParkinPass()'],
    borderColor: '#DE2D2D',
    headColor: '#DC2DDE',
    textColor: '#333333'
};

const CLASS_UML_ADRESS = {
    name: 'Adress',
    attributes: ['+street: str', '+city: str', '+state: str', '+postalCode: int', '+country: str'],
    methods: ['-validate(): bool', '+outputAsLabel: str'],
    borderColor: '#0000FF',
    headColor: '#87CEEB',
    textColor: '#333333'
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Menu />
            </header>
            <main>
                <div className="DrawClass-container">
                    <DrawClass data={CLASS_UML_PERSON} />
                    <DrawClass data={CLASS_UML_ADRESS} />
                </div>
            </main>
        </div>
    );
}

export default App;
