import Speaker from './Speaker';

function SpeakersList({data, showSession}) {
    return (
        <div className="container speakers-list">
        <div className="row">
        {data.map(function (speaker) {
            return (
            <Speaker 
                key={speaker.id} 
                speaker={speaker} 
                showSession={showSession}
                />
            );
        })}
        </div>
        </div>
    )
}

export default SpeakersList;