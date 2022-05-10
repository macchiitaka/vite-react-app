import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

import { atom, useAtom, useAtomValue, useSetAtom } from "jotai";

const countAtom = atom(0);
const countryAtom = atom("Japan");
const citiesAtom = atom(["Tokyo", "Kyoto", "Osaka"]);
const mangaAtom = atom({
  "Dragon Ball": 1984,
  "One Piece": 1997,
  Naruto: 1999,
});

function App() {
  const [count, setCount] = useAtom(countAtom);
  const country = useAtomValue(countryAtom);
  const cities = useAtomValue(citiesAtom);
  const manga = useAtomValue(mangaAtom);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>{country}</p>
        <ul>
          {cities.map((city) => {
            return <li key={city}>{city}</li>;
          })}
        </ul>

        <p>{manga["Dragon Ball"]}</p>

        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {" | "}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  );
}

export default App;
