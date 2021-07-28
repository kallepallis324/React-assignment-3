import "../App.css"

let Card = ({ cardResponseSend }) => {
    return (<>
        {cardResponseSend && cardResponseSend.length ? cardResponseSend.map((ite, index) => {
            return (<>
                <div className="cardsDiv" key={index}>
                    <a className="cardsDivLink" href="./s">
                        <img className="cardsDivImg" src={ite.small_image} alt={ite.title} />
                        <div className="cardsDivPara">
                            <h3>{ite.title}</h3>
                            <p>{ite.authorname} <span>| {ite.posted_on.substring(0, 10)}</span></p>
                            <div>{ite.description}<span>...</span></div>
                        </div>
                    </a>
                </div>
            </>)
        }) : null}
    </>)
}
export default Card;