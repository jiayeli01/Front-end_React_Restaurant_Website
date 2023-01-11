import './GlobalNav.css';

const menu = [
    {
    name: "Home",
    path: "/",
    },
    {
    name: "About",
    path: "/about.html",
    },
    {
    name: "Cats",
    path: "/cats.html",
    },
    ];

function GlobalNav({ onNav }){
    const list = menu.map( item => {
        return (
            <li className="global-nav__item" key={item.name}>
                <a onClick={onNav} className="global-nav__link" href={item.path} data-target={item.name}>
                    {item.name}
                </a>
            </li>
        );
    });
    return (
        <nav className={`global-nav`}>
            <li className='global_list'>
                <button className='button'>Navigation</button>
                <ul className="global-nav__list">
                { list }
                </ul>
            </li>
        </nav>
    );
}

export default GlobalNav;