export function ImagePopup(props) {
    return(
        <div className={`popup popup_show-image ${props.card ? 'popup_opened' : null}`}>
        <div className="popup__container">
            <button className="popup__close-button transition" type="button" area-label="Закрыть" onClick={props.onClose}></button>
            <img className="popup__img" src={props.card.link} alt="#" />
            <h2 className="popup__title"></h2>
        </div>
    </div>
    )
}