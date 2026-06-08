import { useState } from "react";

export function Bio() {
    const [bio, setBio] = useState("Escreva algo sobre você...");
    const [textoEditado, setTextoEditado] = useState(bio);
    const [editando, setEditando] = useState(false);

    function salvarBio() {
        setBio(textoEditado);
        setEditando(false);
    }

    return (
        <div className="bio-card">

            {!editando ? (
                <>
                    <div className="bio-header">
                        <h4>Biografia</h4>

                        <button
                            className="editar-bio"
                            onClick={() => setEditando(true)}
                        >
                            Editar
                        </button>
                    </div>

                    <div className="bio-container">
                        <p>{bio}</p>
                    </div>
                </>
            ) : (
                <>
                    <div className="painel-edicao">
                        <h4>Biografia</h4>
                        <textarea
                            value={textoEditado}
                            onChange={(e) =>
                                setTextoEditado(e.target.value)
                            }
                            placeholder="Escreva algo sobre você..."
                        />

                        <div className="acoes-bio">
                            <button
                                className="salvar"
                                onClick={salvarBio}
                            >
                                Salvar
                            </button>

                            <button
                                className="cancelar"
                                onClick={() => {
                                    setTextoEditado(bio);
                                    setEditando(false);
                                }}
                            >
                                Cancelar
                            </button>
                        </div>
                    </div>
                </>
            )}

        </div>
    );
}