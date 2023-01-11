import './ThemeSwitcher.css';

function ThemeSwitcher({ className, theme, toggleTheme}){
    return(
        <span className={`${className} theme-switcher`}>
            <button  type='button' className="toggle" onClick={toggleTheme}>{theme}</button>
        </span>
    );
}

export default ThemeSwitcher;