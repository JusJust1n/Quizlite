const StudysetDetails = ({ studyset }) => {
    return (
        <div className="studyset-details">
            <h4>{studyset.title}</h4>
            <p><strong>Description</strong>{studyset.desc}</p>
            <p><strong>Terms:</strong>{studyset.cards}</p>
            <p>{studyset.createdAt}</p>
        </div>
    )
}

export default StudysetDetails