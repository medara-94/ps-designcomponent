import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";
import { useState } from "react";

function Speakers({ theme, setTheme}) {
    const [showSession, setShowSession] = useState(true);
    return(
        /* React Fragment*/
        <>
            <SpeakersToolbar 
                theme={theme} 
                setTheme={setTheme} 
                showSession={showSession}
                setShowSession={setShowSession}/>
            <SpeakersList 
                showSession={showSession}
                />
        </>
    )
}

export default Speakers;