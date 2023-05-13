import React, {useContext} from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function Main(props) {
    const currentUser = useContext(CurrentUserContext);
    const { name, about, avatar } = currentUser;

    return (
        <main className='content'>
            <section className='profile'>
                <div className='profile__data'>
                    <div className='profile__pic'>
                        <button
                            className='profile__pic-button'
                            type='button'
                            onClick={props.onEditAvatar}
                        ></button>
                        <img
                            src={avatar}
                            alt='Ваш аватар'
                            className='profile__pic-avatar'
                            loading='eager'
                        />
                    </div>
                    <div className='profile__text'>
                        <div className='profile__info'>
                            <h1 className='profile__name'>{name}</h1>
                            <button
                                className='profile__edit-button'
                                type='button'
                                aria-label='Редактировать'
                                onClick={props.onEditProfile}
                            ></button>
                        </div>
                        <p className='profile__about'>{about}</p>
                    </div>
                </div>
                <button
                    className='profile__add-button'
                    type='button'
                    aria-label='Добавить'
                    onClick={props.onAddPlace}
                ></button>
            </section>
            <section
                className='gallery'
                aria-label='Секция с фотографиями'
            >
                {props.cards.map((card) =>(
                    <Card
                        key={card._id}
                        card={card}
                        onCardClick={props.onCardClick}
                        onCardLike={props.onCardLike}
                        onCardDelete={props.onCardDelete}
                    />
                ))}
            </section>

            {/*Попап подтверждения удаления фотокарточки*/}
            {/*<div className='popup popup_confirm'>*/}
            {/*    <div className='popup__container'>*/}
            {/*        <button*/}
            {/*            className='popup__close-button popup__close-edit'*/}
            {/*            type='button'*/}
            {/*            aria-label='Закрыть'*/}
            {/*        ></button>*/}
            {/*        <h3 className='popup__title-confirm'>Вы уверены?</h3>*/}
            {/*        <form className='popup__form' name='confirm-form' noValidate>*/}
            {/*            <button*/}
            {/*                className='popup__save'*/}
            {/*                type='submit'*/}
            {/*                aria-label='Да'*/}
            {/*            >Да*/}
            {/*            </button>*/}
            {/*        </form>*/}
            {/*    </div>*/}
            {/*</div>*/}
        </main>
    )
}

export default Main;