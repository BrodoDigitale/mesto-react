
import React from 'react';
import {api} from '../utils/api'
import avatar from '../images/Старик_Букашкин.jpg'
import { Card } from './Card';

export function Main (props) {
    const [userName, setUserName] = React.useState('Б.У.Кашкин');
    const [userDescription, setUserDescription] = React.useState('Уральский поэт');
    const [userAvatar, setUserAvatar] = React.useState(avatar);
    const [cards, renderCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserData()
        .then((res)=> {
            setUserName(res.name)
            setUserDescription(res.about)
            setUserAvatar(res.avatar)
        })
        .catch(err => console.log(err));
      }, 
      []);

      React.useEffect(() => {
        api.getInitialCards()
        .then((res)=> {
            renderCards(res)
        })
        .catch(err => console.log(err));
      }, []);


    return(
    <main className="content">
            <section className="profile">
                <div className="profile__info">
                    <button className="profile__avatar-button" type="button" aria-label="Сменить_аватар" 
                    onClick={props.onEditAvatar}/>
                    <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})`}}/>
                    <div className="profile__grid">
                      <div className="profile__name-wrapper">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button transition" type="button" aria-label="Редактировать_профиль"
                        onClick={props.onEditProfile}/>
                      </div>
                        <p className="profile__about">{userDescription}</p>
                    </div>
                </div>
                <button className="profile__add-button transition" type="button" aria-label="Добавить_изображение"
                onClick={props.onAddPlace}/>
            </section>
            <section className="elements">
                 <ul className="elements__list">
                 {cards.map((card) => {
                     return(
                        <Card 
                        card={card}
                        key={card._id}
                        onCardClick={props.onCardClick}
                        />
                     )
                 })
            }
                 </ul>
            </section>
        </main>
    )
}
