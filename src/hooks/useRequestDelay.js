import {useState, useEffect} from "react";

//Esporto così non devo ripetermi negli altri componenti
export const REQUEST_STATUS = {
    LOADING: "loading",
    SUCCESS: "success",
    FAILURE: "failure",   
};

function useRequestDelay(delayTime = 1000, initialData=[]){
    const [data, setData] = useState(initialData); 
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
                setData(data);
            } catch(e) {
                setRequestStatus(REQUEST_STATUS.FAILURE);
                setError(e);
            }
        }
        delayFunc();           
    }, []); //Gli passo l'array vuoto per evitare che venga renderizzato ad ogni cambio stato

    //Sostituisce la vecchia funzione specifica generalizzandola
    function updateRecord(recordUpdated){
        const newRecords = data.map(function (rec){
            return rec.id === recordUpdated.id ? recordUpdated : rec;
        });

        async function delayFunction(){
            try {
                await delay(delayTime);
                setData(newRecords);
            } catch (error){
                console.log("error thrown inside delayFunction", error);
            }
        }
        delayFunction();
    }

    return{
        data, 
        requestStatus,
        error,
        updateRecord, 
    };
}

export default useRequestDelay;