import Speaker from './Speaker';
import {data} from "../../SpeakerData";
import {useState, useEffect} from "react";

function SpeakersList({ showSession}) {

    const [speakersData, setSpeakersData] = useState([]); 

    const delay = (ms) => new Promise((resolve) => setTimeout (resolve,ms));

    // Lo useEffect non è asincrono, quindi mi darà errore la promise, quindi creo una funzione async dentro
    useEffect(() => {
        async function delayFunc(){
            await delay(2000);
            setSpeakersData(data);
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

    return (
        <div className="container speakers-list">
        <div className="row">
        {speakersData.map(function (speaker) {
            return (
            <Speaker 
                key={speaker.id} 
                speaker={speaker} 
                showSession={showSession}
                onFavoriteToggle={() => {onFavoriteToggle(speaker.id)}} 
                />
            );
        })}
        </div>
        </div>
    )
}

export default SpeakersList;