import { useEffect, useState } from 'react'

// components
import StudysetDetails from '../components/StudysetDetails'

const Home = () => {
    const [studysets, setStudysets] = useState(null)


    useEffect(() => {
        const fetchStudysets = async () => {
            const response = await fetch('/api/studysets')
            const json = await response.json()

            if (response.ok) {
                setStudysets(json)
            }
        }

        fetchStudysets()
    }, [])

    return (
        <div className="home">
            <div className="studysets">
                {studysets && studysets.map((studyset) => (
                    <StudysetDetails key={studyset._id} studyset={studyset} />
                ))}
            </div>
        </div>
    )
}

export default Home;