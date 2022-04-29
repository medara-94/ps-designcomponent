import {data} from '../../SpeakerData';
import React, { useState, createContext } from "react";

const ListContext = React.createContext({list: null, updateRecord: () => {} })

export const ListProvider = props => {
    const [list, setList]  = useState(data)

    function updateRecord(recordUpdated){
        const originalRecords =[...list];
        const newRecords = list.map(function (rec){
            return rec.id === recordUpdated.id ? recordUpdated : rec;
        });

        setList(newRecords);
    }

    return <ListContext.Provider value={{list: list, updateRecord: updateRecord }}>
                {props.children}
           </ListContext.Provider>
}

export default ListContext 