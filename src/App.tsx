import React from 'react';
import './App.css';

function App() {

    const names = ["Lorem", "ipsum", "dolor", "sit", "amet", "consectetur."]
    const users = [{name: "Lorem"}, {name: "ipsum"}, {name: "dolor"}, {name: "sit"}, {name: "amet"}, {name: "consectetur."}]
    const liElement = names.map((l,i) => <li key={i}>{l}</li>)
    const liUserElement = users.map(l => <li>{l.name}</li>)
    return (
        <div className="App">
            <ul>
                {liElement}
                {liUserElement}
            </ul>
        </div>
    );
}

export default App;
