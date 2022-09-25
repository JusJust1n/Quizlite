import { useStudysetsContext } from "../hooks/useStudysetContext"

const StudysetDetails = ({ studyset }) => {
    const { dispatch } = useStudysetsContext()

    const handleClick = async () => {
        const response = await fetch('/api/studysets/' + studyset._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if (response.ok) {
            dispatch({type: 'DELETE_STUDYSET', payload: json})
        }
    }

    return (
        <div className="studyset-details">
            <h4>{studyset.title}</h4>
            <p><strong>Description</strong>{studyset.desc}</p>
            <p><strong>Terms:</strong>{studyset.cards}</p>
            <p>{studyset.createdAt}</p>
            <span className="material-symbols-outlined" onClick={handleClick}>delete</span>
        </div>
    )
}

export default StudysetDetails