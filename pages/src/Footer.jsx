import './Footer.css';

const menu = [
    {
        name:'Terms',
        path:'#',
    },
    {
        name:'Privacy',
        path:'#',
    },
    {
        name:'Security',
        path:'#',
    },
];


function Footer(){
    const list = menu.map(item =>{
        return(
            <li className='footer-item' key={item.name}>
                <a className='footer-link' href={item.path}>
                    {item.name}
                </a>
            </li>
        );
    });
    
    return (
        <footer className='footer'>
            <ul className='footer-list'>
                {list}
            </ul>
        </footer>
    );
}

export default Footer;