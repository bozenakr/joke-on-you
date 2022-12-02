import './App.scss';
import axios from 'axios';

const dogs = ['šuo', 'šunius', 'Bobikas', 'kudlius', 'Šarikas', 'avigalvis'];

function App() {
    return (
        <div className="App">
            <div className="App-header">
                {dogs.map((dog, i) => (
                    <div key={i} className="square">
                        {dog}
                    </div>
                ))}
            </div>
        </div>
    );
}

export default App;
