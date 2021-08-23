import Logo from '../images/Logo_mesto.svg'
export function Header() {
    return(
    <header className="header">
        <img className="header__logo" src={Logo} alt="логотип Место" />
    </header>
    )
}