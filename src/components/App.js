//import './App.css';
import React from 'react';
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { ImagePopup } from "./ImagePopup";
import { PopupWithForm } from "./PopupWithForm";


export function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState({name: '', link: ''})

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true)
    }
    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true)
    }
    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true)
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false)
        setIsEditProfilePopupOpen(false)
        setIsAddPlacePopupOpen(false)
        setSelectedCard({name: '', link: ''})
    }
  return (
  <>
    <div className="page"> 
    <Header />
    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={setSelectedCard}/>
    <Footer />
    </div>
<section className="popups">
    <PopupWithForm 
    name={'editAvatar'}
    title={'Обновить аватар'}
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}
    buttonText={'Сохранить'}>
        <input className="edit-form__input edit-form__avatarLink" id="edit-form__avatarLink" placeholder="Ссылка на аватар" type="url" name="link" value="" required />
        <span className="edit-form__error" id="edit-form__avatarLink-error"></span>
    </PopupWithForm>

    <PopupWithForm 
    name={'addPlace'}
    title={'Новое место'}
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}
    buttonText={'Создать'}>
            <input className="edit-form__input edit-form__input_value_place" id="edit-form__placeName" placeholder="Название" type="text" name="name" value="" required minLength="3" maxLength="30"/>
            <span className="edit-form__error" id="edit-form__placeName-error"></span>
            <input className="edit-form__input edit-form__input_value_placePhoto" id="edit-form__placePhoto" placeholder="Ссылка на картинку" type="url" name="link" value="" required/>
            <span className="edit-form__error" id="edit-form__placePhoto-error"></span>
    </PopupWithForm>   
    <PopupWithForm 
    name={'editProfile'}
    title={'Редактировать профиль'}
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}
    buttonText={'Сохранить'}>
        <input className="edit-form__input edit-form__input_value_name" type="text" id="edit-form__name" name="userName" value="" required minLength="2" maxLength="40" placeholder="Имя"/>
        <span className="edit-form__error" id="edit-form__name-error"></span>
        <input className="edit-form__input edit-form__input_value_about" type="text" id="edit-form__about" name="userInfo" value="" required minLength="2" maxLength="200" placeholder="Вид деятельности"/>
        <span className="edit-form__error" id="edit-form__about-error"></span>
    </PopupWithForm>
    <ImagePopup
    card={selectedCard}
    onClose={closeAllPopups}
    />
</section>
 </>
  );
}

export default App