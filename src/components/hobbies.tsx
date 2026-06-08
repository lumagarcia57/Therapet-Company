import { useState } from "react";

const HOBBIES_LIST = [
    "Esportes e atividade física",
    "Esportes Radicais",
    "Artes marciais",
    "Musculação",
    "Meditação",
    "Escotismo",
    "Pesca",
    "Hábitos saudáveis",
    "Beleza e bem-estar",
    "Cozinhar",
    "Costura",
    "Jogos de mesa",
    "Games",
    "Instrumentos",
    "Música",
    "Cantar",
    "Composição musical",
    "Livros",
    "Escrita",
    "Jardinagem",
    "Cerâmica",
    "Artesanato",
    "Desenho",
    "Pintura",
    "Teatro",
    "Cinema",
    "Dançar",
    "Passear",
    "Viajar",
    "Colecionismo",
    "Fotografia",
    "Tecnologia",
    "Outros"
]

export function Hobbies() {
    const [adicionar, setAdicionando] = useState(false);
    const [hobbies, setHobbies] = useState<string[]>([])
    const handlerAddHobby = (hobby: string) => {
        if (hobbies.includes(hobby)) return
        setHobbies([...hobbies, hobby])
    }

    return (
        < div className="hobby" >
            <h5>Hobbies:</h5>
            <div className="hobbies-list">
                {hobbies.map(hobby => (
                    <span className="tag-hobby">
                        {hobby}
                    </span>
                ))}
            </div>
            <button
                className="add-hobby"
                onClick={() => setAdicionando(!adicionar)}
            >
                +
            </button>
            {adicionar && (
                <div className="hobbies-options">
                    {
                        HOBBIES_LIST.map(hobby => (
                            <span onClick={() => handlerAddHobby(hobby)} className="hobby-topics">{hobby}</span>
                        ))
                    }
                </div>
            )}
        </div >
    )

}