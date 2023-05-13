function PopupWithForm (props) {
    return (
        <div
            className={`popup ${props.isOpen ? 'popup_opened' : ''}`}
            onClick={props.onClose}
        >
            <div className='popup__container'>
                <button
                    className='popup__close-button'
                    type='button'
                    aria-label='Закрыть'
                    onClick={props.onClose}
                >
                </button>
                <h3 className='popup__title'>{props.title}</h3>
                <form
                    className='popup__form'
                    name={`${props.name}`}
                    onSubmit={props.onSubmit}
                >
                    {props.children}
                    <button
                        className='popup__save'
                        type='submit'
                    >{props.buttontext || 'Сохранить'}
                    </button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;