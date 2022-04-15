import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";
import { useState } from "react";

function Speakers({ data, theme, setTheme}) {
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
                data={data}
                showSession={showSession}
                />
        </>
    )
}

export default Speakers;