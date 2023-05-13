import logoPath from "../images/header-logo.svg";

function Header() {
    return (
        <header className='header'>
            <img
                src={logoPath}
                alt='Логотип'
                className='header__logo'
                loading='eager'
            />
        </header>
    )
}

export default Header;