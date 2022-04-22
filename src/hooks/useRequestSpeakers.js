import {data} from "../../SpeakerData";
import {useState, useEffect} from "react";

//Esporto così non devo ripetermi negli altri componenti
export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",   
};

function useRequestSpeakers(delayTime = 1000){
    const [speakersData, setSpeakersData] = useState([]); 
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");


    const delay = (ms) => new Promise((resolve) => setTimeout (resolve,ms));

    // Lo useEffect non è asincrono, quindi mi darà errore la promise, quindi creo una funzione async dentro
    useEffect(() => {
        async function delayFunc(){
            try
            {
                await delay(delayTime);
                // throw "Had Error."
                setRequestStatus(REQUEST_STATUS.SUCCESS); //Renderizza nuovamente, come ad ogni cambio stato
                setSpeakersData(data);
            } catch(e) {
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(e);
            }
        }
        delayFunc();           
    }, []); //Gli passo l'array vuoto per evitare che venga renderizzato ad ogni cambio stato

    function onFavoriteToggle(id) {
        //Recupero la referenza dell'oggetto che voglio modificare
        const speakerRecPrevious = speakersData.find(function (rec) {
            return rec.id === id;
        });
        //Creo un nuovo oggetto con i parametri aggiornati
        const speakerRecUpdated = {
            //Riporto i valori dell'oggetto originale
            ...speakerRecPrevious,
            //E poi aggiorno il valore da modificare
            favorite: !speakerRecPrevious.favorite
        };
        // speakerData è un array, quindi aggiorno solo l'elemento modificato
        const speakersDataNew = speakersData.map(function (rec){
            return rec.id === id ? speakerRecUpdated: rec;
        });
        setSpeakersData(speakersDataNew);
    }

    return{
        speakersData, requestStatus, error,
        onFavoriteToggle, 
    };
}

export default useRequestSpeakers;