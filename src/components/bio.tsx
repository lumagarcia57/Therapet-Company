import { useState } from "react"

export function Bio() {
    const [bio, setBio] = useState("Texto")
    const [showEdit, setShowEdit] = useState(false)
    return (
        <>
            <div className="bio" onClick={() => setShowEdit(true)}>
                <p>
                    {bio}
                </p>
            </div>
            {showEdit === true && (
                <section className="edit">
                    <h1>Editar Bio</h1>
                </section>
            )}
        </>
    )
}