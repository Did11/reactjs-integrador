import logo from './logo.svg';
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

const MENU_CONFIG = {
    configColor: {
        background: '#f4f5fa',
        itemBackground: '#d0d0d0',
        itemColor: '#666',
        itemActive: '#a8a8a8',
    },
    idFirstNivel: 150,
    menuItems: [
        { name: 'Another Action', isFolder: false, id: 148, idPadre: 150 },
        { name: 'sub menu', isFolder: true, id: 2, idPadre: 150 },
        { name: 'Action', isFolder: false, id: 3, idPadre: 2 },
        { name: 'Another action', isFolder: false, id: 4, idPadre: 2 },
        { name: 'sub menu', isFolder: true, id: 5, idPadre: 2 },
        { name: 'Another action', isFolder: false, id: 55, idPadre: 5 },
        { name: 'something else here', isFolder: false, id: 56, idPadre: 5 },
    ],
};

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Menu data={MENU_CONFIG} />
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
