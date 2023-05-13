function ImagePopup ({isOpen, card, onClose}) {
    return (
        <div
            className={`popup popup_place-photo ${isOpen ? `popup_opened` : ''}`}
            onClick={onClose}
        >
            <div className='popup__photo-container'>
                <button
                    className='popup__close-button popup__close-photo'
                    type='button'
                ></button>
                <figure className='popup__photo-item'>
                    <img
                        className='popup__photo'
                        src={card.link}
                        alt={card.name}
                    />
                    <figcaption className='popup__photo-caption'>{card.name}</figcaption>
                </figure>
            </div>
        </div>
    )
}

export default ImagePopup;