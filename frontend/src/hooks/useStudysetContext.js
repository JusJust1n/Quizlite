import { StudysetContext } from "../context/StudysetContext";
import { useContext } from "react";

export const useStudysetsContext = () => {
    const context = useContext(StudysetContext)

    if (!context) {
        throw Error('useStudysetsContext must be used inside a StudysetsContext Provider')
    }

    return context
}