import { useState } from "react"

export function Contador() {
    const [numero, setNumero] = useState(5)
    return (
        <div>
            <h1>{numero}</h1>
            <button onClick={() => setNumero(numero +2)}>tuts</button>
            <button onClick={() => setNumero(numero -2)}>
                tuts tuts
            </button>
        </div>
    )
}