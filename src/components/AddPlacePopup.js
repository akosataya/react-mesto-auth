import React, {useState, useEffect} from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup ({isOpen, onClose, onAddPlace, onLoading}) {
    const [name, setName] = useState('');
    const [link, setLink] = useState('');

    useEffect(() => {
        if(!isOpen) {
            setName('');
            setLink('');
        }
    }, [isOpen]);

    function handleChangeName(evt) {
        setName(evt.target.value);
    }

    function handleChangeLink(evt) {
        setLink(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        onAddPlace({
            name,
            link,
        });
    }

    return (
        <PopupWithForm
            className='add'
            isOpen={isOpen}
            title='Новое место'
            onClose={onClose}
            buttontext={onLoading ? 'Сохранение...' : 'Создать'}
            onSubmit={handleSubmit}
        >
            <input
                id='add-name-input'
                className='popup__input popup__input_add_name'
                type='text'
                placeholder='Название'
                name='name'
                minLength='2'
                maxLength='30'
                required
                value={name || ''}
                onChange={handleChangeName}
            />
            <span className='popup__text-error add-name-input-error'></span>
            <input
                id='add-link-input'
                className='popup__input popup__input_add_link'
                type='url'
                placeholder='Ссылка на картинку'
                name='link'
                required
                value={link || ''}
                onChange={handleChangeLink}
            />
            <span className='popup__text-error add-link-input-error'></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup;