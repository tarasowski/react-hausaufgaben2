import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Button from "./components/Button"
import Form from "./components/Form"
import Child from "./components/Child"
import Headline from "./components/Headline"
import SpecialButton from "./components/SpecialButton"
import Warenkorb from './components/Warenkorb'



const message = "Hallo, mein Kind!"

function App() {

  return (
    <div>
      <Button />
      <Form />
      <Child message="Hallo mein Kind. Von message" color="grün" />
      <Headline title="Das ist von Dimi" color="green" />
      <Headline title="Das ist von Viktor" color="purple" />
      <SpecialButton label="Löschen" bgColor="red" textColor="black" />
      <SpecialButton label="Absenden" bgColor="black" textColor="white" />
      <input type="date" />
      <br />
      <br />
      <br />
      <br />
      <Warenkorb />
    </div>
  )
}

export default App
