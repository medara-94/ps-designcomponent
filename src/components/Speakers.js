import SpeakersList from "./SpeakersList";
import SpeakersToolbar from "./SpeakersToolbar";
import { useState } from "react";
import {ListProvider} from "../store/listContext";
 

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
                
            <ListProvider> 
                <SpeakersList 
                    showSession={showSession}
                    />    
            </ListProvider>
        </>
    )
}

export default Speakers;