/*
Aufgabe 1: Einfache Zustandsverwaltung in einer Komponente

Erstelle eine React-Komponente, die einen Button anzeigt. 

Jedes Mal, wenn der Button geklickt wird, soll die Anzahl der Klicks im Text aktualisiert und angezeigt werden.
*/

import { useState } from "react"

function Button() {
    const [count, setCount] = useState(0)
    const [inputValue, setInputValue] = useState("")

    function handleClick(event) {
        console.log("geklickt")
        setCount(count + 1)
    }

    function handleInput(event) {
        const value = event.target.value
        console.log(value)
    }

    function handleSelect(event) {
        console.log("neue auswahl getroffen")
    }
    return (
        <div>
            <input value={inputValue} type="text" onInput={handleInput} />
            {count}
            <button onClick={handleClick}>Mein Button</button>
            <select onChange={handleSelect}>
                <option value="a">A</option>
                <option value="b">B</option>
                <option value="c">C</option>
                <option value="d">D</option>
            </select>
        </div>
    )
}

export default Button