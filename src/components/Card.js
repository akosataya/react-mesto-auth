import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Card ({card, onCardClick, onCardLike, onCardDelete}) {
    const currentUser = useContext(CurrentUserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card.owner._id === currentUser._id;

    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = (
    `gallery__like-button ${isLiked && 'gallery__like-button_active'}`
    );

    function handleCardClick() {
        onCardClick(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleDeleteClick() {
        onCardDelete(card);
    }

    return (
        <li className='gallery__item' key={card._id}>
            <img
                className='gallery__photo'
                alt={card.name}
                src={card.link}
                onClick={handleCardClick}
            />
            <div className='gallery__description'>
                <h2 className='gallery__title'>{card.name}</h2>
                <div className='gallery__like'>
                    <button
                        className={cardLikeButtonClassName}
                        type='button'
                        aria-label='Лайк'
                        onClick={handleLikeClick}
                    ></button>
                    <p className='gallery__like-counter'>{card.likes.length}</p>
                </div>
            </div>
            {isOwn && (
                <button
                className='gallery__delete-button'
                type='button'
                aria-label='Мусорка'
                onClick={handleDeleteClick}
            ></button>
            )}
        </li>
    )
}

export default Card;