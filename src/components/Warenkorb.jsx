import { useState } from "react"

const products = ["brot", "gemüse", "fleisch"]

function Warenkorb() {
    const [productInput, setProductInput] = useState("")
    const [warenkorb, setWarenkorb] = useState(products)

    function handleProductInput(event) {
        const productInputValue = event.target.value
        setProductInput(productInputValue)

    }

    function handleProduct() {
        setWarenkorb([...warenkorb, productInput])
        setProductInput("")
    }
    return (
        <div>
            <input onInput={handleProductInput} type="text" placeholder="Dein Produkt..." />
            <button onClick={handleProduct}>Produkt hinzufügen</button>
            <ul>
                {warenkorb.map((product, index) => {
                    return <li key={index}>{product}</li>
                })}
            </ul>


        </div>
    )
}

export default Warenkorb