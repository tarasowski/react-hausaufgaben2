/*
Aufgabe 2: Formulareingaben verwalten

Erstelle eine React-Komponente, die ein Eingabefeld anzeigt. ✅
Der eingegebene Text soll in Echtzeit unter dem Eingabefeld angezeigt werden.


*/

import { useState } from "react"

function Form() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    function handleNameInput(event) {
        const nameInputValue = event.target.value
        setName(nameInputValue)
    }
    function handleEmailInput(event) {
        const emailInputValue = event.target.value
        setEmail(emailInputValue)
    }

    return (
        <div>
            <form>
                <h1>Das ist mein Formular</h1>
                <label htmlFor="name">Name:</label>
                <input onInput={handleNameInput} name="name" type="text" placeholder="Name" />
                <br />
                <label htmlFor="email">Email:</label>
                <input onInput={handleEmailInput} name="email" type="email" placeholder="Email" />
                <button type="submit">Absenden</button>
            </form>
            <div>
                <h1>Hier wird die Eingabe ausgegeben:</h1>
                <p>Der eingegebene Name ist: {name} </p>
                <p>Der eingegebene Email ist: {email} </p>
            </div>
        </div>
    )
}

export default Form