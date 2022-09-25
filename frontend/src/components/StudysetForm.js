import { useState } from "react"
import { useStudysetsContext } from "../hooks/useStudysetContext"

const StudysetForm = () => {
    const {dispatch} = useStudysetsContext()

    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [cards, setCards] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const studyset = {title, desc, cards}

        //send a post request, using fethc api
        const response = await fetch('/api/studysets', {
            method: 'POST',
            body: JSON.stringify(studyset),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json

        //see if response was ok
        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setTitle('')
            setDesc('')
            setCards('')
            setError(null)
            setEmptyFields([])
            console.log('New Studyset Created', json)
            dispatch({type: 'CREATE_STUDYSET', payload: json})
        }
    }

    return (
        <form className="create" onSubmit={handleSubmit}>
            <h3>Add a new Studyset</h3>

            <label>Studyset Title:</label>
            <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
                className={emptyFields.includes('title') ? 'error' : ''}
            />

            <label>Description:</label>
            <input
                type="text"
                onChange={(e) => setDesc(e.target.value)}
                value={desc}
                className={emptyFields.includes('desc') ? 'error' : ''}
            />

            <label>Cards:</label>
            <input
                type="text"
                onChange={(e) => setCards(e.target.value)}
                value={cards}
                className={emptyFields.includes('cards') ? 'error' : ''}
            />

            <button>Add Studyset</button>
            {error && <div className="error">{error}</div>}
        </form>
    )
}

export default StudysetForm