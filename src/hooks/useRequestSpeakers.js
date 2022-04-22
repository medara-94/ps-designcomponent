import {data} from "../../SpeakerData";
import {useState, useEffect} from "react";

function useRequestSpeakers(delayTime = 1000){
    const [speakersData, setSpeakersData] = useState([]); 
    const [isLoading, setIsLoading] = useState(true); //Stato iniziale a true perchè all'apertura stà caricando
    const [hasErrored, setHasErrored] = useState(false);
    const [error, setError] = useState("");


    const delay = (ms) => new Promise((resolve) => setTimeout (resolve,ms));

    // Lo useEffect non è asincrono, quindi mi darà errore la promise, quindi creo una funzione async dentro
    useEffect(() => {
        async function delayFunc(){
            try
            {
                await delay(delayTime);
                // throw "Had Error."
                setIsLoading(false); //Renderizza nuovamente, come ad ogni cambio stato
                setSpeakersData(data);
            } catch(e) {
                setIsLoading(false);
                setHasErrored(true);
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
        speakersData, isLoading, hasErrored,error,
        onFavoriteToggle, 
    };
}

export default useRequestSpeakers;