//import './App.css';
import React from 'react';
import { Header } from "./Header";
import { Main } from "./Main";
import { Footer } from "./Footer";
import { ImagePopup } from "./ImagePopup";
import { PopupWithForm } from "./PopupWithForm";


export function App() {
    const [isEditProfilePopupOpen, openEditProfilePopup] = React.useState(false);
    const [isAddPlacePopupOpen, openAddPlacePopup] = React.useState(false);
    const [isEditAvatarPopupOpen, openEditavatarPopup] = React.useState(false);
    const [selectedCard, handleCardClick] = React.useState(false);

    function handleEditAvatarClick() {
        openEditavatarPopup(true)
    }
    function handleEditProfileClick() {
        openEditProfilePopup(true)
    }
    function handleAddPlaceClick() {
        openAddPlacePopup(true)
    }

    function closeAllPopups() {
        openEditavatarPopup(false)
        openEditProfilePopup(false)
        openAddPlacePopup(false)
        handleCardClick(false)
    }
  return (
  <>
    <div className="page"> 
    <Header />
    <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
    <Footer />
    </div>
<section className="popups">
    <PopupWithForm 
    name={'editAvatar'}
    title={'Обновить аватар'}
    isOpen={isEditAvatarPopupOpen}
    onClose={closeAllPopups}>
        <input className="edit-form__input edit-form__avatarLink" id="edit-form__avatarLink" placeholder="Ссылка на аватар" type="url" name="link" value="" required />
        <span className="edit-form__error" id="edit-form__avatarLink-error"></span>
        <button className="edit-form__button" type="submit" aria-label="Сохранить">Сохранить</button>
    </PopupWithForm>

    <PopupWithForm 
    name={'addPlace'}
    title={'Новое место'}
    isOpen={isAddPlacePopupOpen}
    onClose={closeAllPopups}>
            <input className="edit-form__input edit-form__input_value_place" id="edit-form__placeName" placeholder="Название" type="text" name="name" value="" required minLength="3" maxLength="30"/>
            <span className="edit-form__error" id="edit-form__placeName-error"></span>
            <input className="edit-form__input edit-form__input_value_placePhoto" id="edit-form__placePhoto" placeholder="Ссылка на картинку" type="url" name="link" value="" required/>
            <span className="edit-form__error" id="edit-form__placePhoto-error"></span>
            <button className="edit-form__button" type="submit" aria-label="Создать">Создать</button>
    </PopupWithForm>   
    <PopupWithForm 
    name={'editProfile'}
    title={'Редактировать профиль'}
    isOpen={isEditProfilePopupOpen}
    onClose={closeAllPopups}>
        <input className="edit-form__input edit-form__input_value_name" type="text" id="edit-form__name" name="userName" value="" required minLength="2" maxLength="40" placeholder="Имя"/>
        <span className="edit-form__error" id="edit-form__name-error"></span>
        <input className="edit-form__input edit-form__input_value_about" type="text" id="edit-form__about" name="userInfo" value="" required minLength="2" maxLength="200" placeholder="Вид деятельности"/>
        <span className="edit-form__error" id="edit-form__about-error"></span>
        <button className="edit-form__button" type="submit" aria-label="Сохранить">Сохранить</button>
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