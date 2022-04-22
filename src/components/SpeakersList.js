import Speaker from './Speaker';
import ReactPlaceHolder from 'react-placeholder';
import useRequestSpeakers, {REQUEST_STATUS} from '../hooks/useRequestSpeakers';

function SpeakersList({ showSession}) {

    const {
        speakersData, requestStatus, error,
        onFavoriteToggle, 
    } = useRequestSpeakers(2000)

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
                            onFavoriteToggle={() => {onFavoriteToggle(speaker.id)}} 
                            />
                        );
                    })}
                    </div>
            </ReactPlaceHolder>
        </div>
    )
}

export default SpeakersList;