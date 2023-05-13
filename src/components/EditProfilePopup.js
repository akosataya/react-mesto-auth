import React, { useContext, useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import PopupWithForm from "./PopupWithForm";

function EditProfilePopup({isOpen, onClose, onUpdateUser, onLoading}) {
    const currentUser = useContext(CurrentUserContext);

    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser, isOpen]);

    useEffect(() => {
        if(!isOpen) {
            setName('');
            setDescription('');
        }
    }, [isOpen]);

    function handleChangeName(evt) {
        setName(evt.target.value);
    }

    function handleChangeDescription(evt) {
        setDescription(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        onUpdateUser({
            name,
            about: description,
        });
    }

    return (
        <PopupWithForm
            name='name'
            className='edit'
            isOpen={isOpen}
            title='Редактировать профиль'
            onClose={onClose}
            buttontext={onLoading ? 'Сохранение...' : 'Сохранить'}
            onSubmit={handleSubmit}
        >
            <input
                value={name || ''}
                id='name-input'
                className='popup__input popup__input_edit_name'
                type='text'
                placeholder='Имя'
                name='name'
                minLength='2'
                maxLength='40'
                required
                onChange={handleChangeName}
            />
            <span className='popup__text-error name-input-error'></span>
            <input
                value={description || ''}
                id='about-input'
                className='popup__input popup__input_edit_about'
                type='text'
                placeholder='О себе'
                name='about'
                minLength='2'
                maxLength='200'
                required
                onChange={handleChangeDescription}
            />
            <span className='popup__text-error about-input-error'></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;