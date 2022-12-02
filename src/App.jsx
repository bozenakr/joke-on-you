import { useEffect } from 'react';
import { useState } from 'react';
import './App.scss';
import axios from 'axios';
import Joke from './Components/Joke';

function App() {
    const [jokes, setJokes] = useState(null);

    useEffect(() => {
        axios
            .get('https://v2.jokeapi.dev/joke/Programming?amount=10')
            .then((res) =>
                setJokes(res.data.map((j) => ({ ...j, show: true })))
            );
    }, []);

    const sort = () => {
        setJokes((j) => [...j].sort((a, b) => a.type - b.type));
    };

    return (
        <div className="App">
            <div className="App-header">
                <button onClick={sort}>Select joke</button>
                <div>
                    {jokes?.map((j) =>
                        j.show === true ? <Joke key={j.id} joke={j} /> : null
                    )}
                </div>
            </div>
        </div>
    );
}

export default App;
