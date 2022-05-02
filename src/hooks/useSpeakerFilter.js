import {useState} from "react";

function useSpeakerFilter(startingShowSession, startingEventYear){
    const [showSessions, setShowSessions] = useState(startingShowSession);
    const [eventYear, setEventYear] = useState(startingEventYear);
    const [searchQuery, setSearchQuery] = useState("");

    const EVENT_YEARS = ["2016","2017","2018","2019","2020","2021","2022"];

    return {
        showSessions, setShowSessions,
        eventYear, setEventYear, EVENT_YEARS,
        searchQuery, setSearchQuery,
    }
}

export default useSpeakerFilter;