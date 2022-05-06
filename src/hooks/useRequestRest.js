import {useState, useEffect} from "react";
import axios from "axios";

//Esporto così non devo ripetermi negli altri componenti
export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",   
};

const restUrl = "api/speakers";

function useRequestRest(){
    const [data, setData] = useState(initialData); 
    const [requestStatus, setRequestStatus] = useState(REQUEST_STATUS.LOADING);
    const [error, setError] = useState("");


    const delay = (ms) => new Promise((resolve) => setTimeout (resolve,ms));

    // Lo useEffect non è asincrono, quindi mi darà errore la promise, quindi creo una funzione async dentro
    useEffect(() => {
        async function delayFunc(){
            try
            {
                // Recupero dal servizio i dati
                const result = await axios.get(restUrl);
                // throw "Had Error."
                setRequestStatus(REQUEST_STATUS.SUCCESS); //Renderizza nuovamente, come ad ogni cambio stato
                setData(result.data);
            } catch(e) {
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(e);
            }
        }
        delayFunc();           
    }, []); //Gli passo l'array vuoto per evitare che venga renderizzato ad ogni cambio stato

    //Sostituisce la vecchia funzione specifica generalizzandola
    function updateRecord(record, doneCallback){
        const originalRecords =[...data];
        const newRecords = data.map(function (rec){
            return rec.id === record.id ? record : rec;
        });

        async function delayFunction(){
            try {
                //Optimistic UI, aggiorno subito, e poi faccio le varie chiamate che potrebbero dare errore
                setData(newRecords);
                // Ogni id genera il suo rest service su pages/api/[id].js
                await axios.put(`${restUrl}/${record.id}`, record);
                // throw "Had Error."
                if (doneCallback){
                    doneCallback();
                }
                
            } catch (error){
                console.log("error thrown inside delayFunction", error);
                if (doneCallback) {
                    doneCallback();
                }
                setData(originalRecords);
            }
        }
        delayFunction();
    }

    function insertRecord(record, doneCallback){
        const originalRecords =[...data];
        const newRecords = [ record, ...data];

        async function delayFunction(){
            try {
                //Optimistic UI, aggiorno subito, e poi faccio le varie chiamate che potrebbero dare errore
                setData(newRecords);
                await axios.post(`${restUrl}/99999`, record);
                // throw "Had Error."
                if (doneCallback){
                    doneCallback();
                }
                
            } catch (error){
                console.log("error thrown inside delayFunction", error);
                if (doneCallback) {
                    doneCallback();
                }
                setData(originalRecords);
            }
        }
        delayFunction();
    }

    function deleteRecord(record, doneCallback){
        const originalRecords =[...data];
        const newRecords = data.filter(function (rec) {
            return rec.id != record.id;
        });

        async function delayFunction(){
            try {
                //Optimistic UI, aggiorno subito, e poi faccio le varie chiamate che potrebbero dare errore
                setData(newRecords);
                await axios.delete(`${restUrl}/${record.id}`, record);
                // throw "Had Error."
                if (doneCallback){
                    doneCallback();
                }
                
            } catch (error){
                console.log("error thrown inside delayFunction", error);
                if (doneCallback) {
                    doneCallback();
                }
                setData(originalRecords);
            }
        }
        delayFunction();
    }

    return{
        data, 
        requestStatus,
        error,
        updateRecord, 
        insertRecord,
        deleteRecord,
    };
}

export default useRequestRest;