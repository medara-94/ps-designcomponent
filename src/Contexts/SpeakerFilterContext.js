import { createContext } from "react";
import useSpeakerFilter from "../hooks/useSpeakerFilter";

const SpeakerFilterContext = createContext();

function SpeakerFilterProvider({ children, startingShowSessions = true, startingEventYear="2022"}) {
    const { 
        showSessions, setShowSessions,
        eventYear, setEventYear, EVENT_YEARS,
        searchQuery, setSearchQuery 
    } = useSpeakerFilter(startingShowSessions,startingEventYear);

    return(
        <SpeakerFilterContext.Provider value={ {
                                                showSessions, setShowSessions,
                                                eventYear, setEventYear, EVENT_YEARS,
                                                searchQuery, setSearchQuery } }>
            {children}
        </SpeakerFilterContext.Provider>
    )
}

export { SpeakerFilterContext, SpeakerFilterProvider};