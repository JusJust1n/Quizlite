import { useEffect } from 'react'
import { useStudysetsContext } from '../hooks/useStudysetContext'

// components
import StudysetDetails from '../components/StudysetDetails'
import StudysetForm from '../components/StudysetForm'

const Home = () => {
    //const [studysets, setStudysets] = useState(null)
    const {studysets, dispatch} = useStudysetsContext()

    useEffect(() => {
        const fetchStudysets = async () => {
            const response = await fetch('/api/studysets')
            const json = await response.json()

            if (response.ok) {
                //setStudysets(json)
                dispatch({type: 'SET_STUDYSETS', payload: json})
            }
        }

        fetchStudysets()
    }, [dispatch])

    return (
        <div className="home">
            <div className="studysets">
                {studysets && studysets.map((studyset) => (
                    <StudysetDetails key={studyset._id} studyset={studyset} />
                ))}
            </div>
            <StudysetForm />
        </div>
    )
}

export default Home;