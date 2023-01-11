import './Header.css';
import GlobalNav from "./GlobalNav";
import ThemeSwitcher from './ThemeSwitcher';

function Header({onNav, theme, toggleTheme}){
    return (
        <header className='header' >
            <GlobalNav className='header-nav' onNav={onNav} />
            <h1 className='header-title'>Welcome to Sunshine Kitty Cafe!</h1>
            <ThemeSwitcher className="themeSwitcher" theme = {theme} toggleTheme = {toggleTheme}/>
        </header>
    );
}

export default Header;