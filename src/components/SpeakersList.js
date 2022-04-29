import Speaker from './Speaker';
import ReactPlaceHolder from 'react-placeholder';
import useRequestDelay, {REQUEST_STATUS} from '../hooks/useRequestDelay';
import {data} from '../../SpeakerData';
import { useContext } from 'react';
import  ListContext from '../store/listContext';

function SpeakersList({ showSession}) {

    const providerListData = useContext(ListContext)

    return (
        <div className="container speakers-list">
                    <div className="row">
                    {providerListData.list.map(function (speaker) {
                        return (
                        <Speaker 
                            key={speaker.id} 
                            speaker={speaker} 
                            showSession={showSession}
                            onFavoriteToggle={(doneCallback) => {
                                updateRecord({
                                    ...speaker,
                                    favorite: !speaker.favorite,
                                }, doneCallback);
                            }} 
                            />
                        );
                    })}
                    </div>
        </div>
    ) 
    /*
    const {
        data: speakersData, 
        requestStatus, 
        error,
        updateRecord, 
    } = useRequestDelay(2000, data)



    if (requestStatus === REQUEST_STATUS.FAILURE){
        return(
            <div className="text-danger">
                ERROR: <b>loading Speaker Data Failed {error} </b>
            </div>    
        )
    }

   // if (isLoading === true) return <div>Loading...</div> //Esce quì

    return (
        <div className="container speakers-list">
            <ReactPlaceHolder
                type="media"
                rows={15}
                className="speakerslist-placeholder"
                ready={requestStatus === REQUEST_STATUS.SUCCESS}>
                    <div className="row">
                    {speakersData.map(function (speaker) {
                        return (
                        <Speaker 
                            key={speaker.id} 
                            speaker={speaker} 
                            showSession={showSession}
                            onFavoriteToggle={(doneCallback) => {
                                updateRecord({
                                    ...speaker,
                                    favorite: !speaker.favorite,
                                }, doneCallback);
                            }} 
                            />
                        );
                    })}
                    </div>
            </ReactPlaceHolder>
        </div>
    ) */
}

export default SpeakersList;