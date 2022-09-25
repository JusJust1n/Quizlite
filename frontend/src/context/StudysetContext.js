import { createContext, useReducer } from 'react'

export const StudysetContext = createContext()

export const studysetsReducer = (state, action) => {
    switch (action.type) {
        case 'SET_STUDYSETS':
            return {
                studysets: action.payload
            }
        case 'CREATE_STUDYSETS':
            return {
                studysets: [action.payload, ...state.studysets]
            }
        case 'DELETE_STUDYSET':
            return {
                studysets: state.studysets.filter((w) => w._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const StudysetContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(studysetsReducer, {
        studysets: null
    })

    //dispatch({type: 'SET_STUDYSETS', payload: [{}, {}]})

    return (
        <StudysetContext.Provider value={{...state, dispatch}}>
            { children }
        </StudysetContext.Provider>
    )
}