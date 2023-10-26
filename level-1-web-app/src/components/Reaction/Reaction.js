import "./Reaction.scss";

function Reaction ({reaction}) {
    const {count, symbol} = reaction;
    

    return (
        <div className="reaction">
            <div className={`emoji-${symbol}`}></div>
            <p>{count}</p>
        </div>
    )
}

export default Reaction;