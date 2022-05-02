import {useState} from "react";

function useSpeakerFilter(startingShowSession){
    const [showSessions, setShowSessions] = useState(startingShowSession);

    return {
        showSessions,
        setShowSessions,
    }
}

export default useSpeakerFilter;