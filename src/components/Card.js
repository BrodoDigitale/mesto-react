export function Card(props) {
function handleClick() {
        props.onCardClick(props.card);
    }  
return(
    <li className="elements__item">
    <button className="elements__delete-btn transition" type="button" area-label="удалить"></button>
    <div  className="elements__img" style={{ backgroundImage: `url(${props.card.link})` }} onClick={handleClick}/>
    <div className="elements__title">
        <h2 className="elements__title-text">{props.card.name}</h2>
        <div className="elements__like-container">
            <button className="elements__like-icon" type="button" aria-label="Нравится">
            </button>
            <p className="elements__like-number">{props.card.likes.length}</p>
        </div>
    </div>
</li>
)
}