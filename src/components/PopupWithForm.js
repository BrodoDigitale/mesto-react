export function PopupWithForm(props) {

return (
    <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : null}`}   >
    <form className="edit-form edit-form_profile" name={props.name} noValidate>
        <button className="popup__close-button transition" type="button" area-label="Закрыть" onClick={props.onClose}></button>
        <h2 className="edit-form__header">{props.title}</h2>
        {props.children}
    </form>
</div>
)
}