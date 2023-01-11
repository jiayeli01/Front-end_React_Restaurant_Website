import './Home.css';
import {useState} from 'react';
import Form from './Form';


function Home(){
    const [active1, setActive1] = useState('true');
    const [active2, setActive2] = useState('true');
    const [active3, setActive3] = useState('false');
    const [active4, setActive4] = useState('false');
    
     return(
        <div className='page-home'>
            <h2 className='home-header'>Introduction of Sunshine Kitty Cafe!</h2>
            <ul className="accordian">
                <li className='accordian_item'>
                    <button className='accordian_title' onClick={(e) => setActive1(!active1)}>Introduction</button>
                    <div className={active1 ? "accordian_content_open" : "accordian_content"}>
                    Step into a world of feline wonder at our kitty café! A purrfect blend of coffee and cats, our café offers a relaxing and playful atmosphere where visitors can enjoy delicious coffee and tea drinks while interacting with our friendly and adoptable feline friends. Whether you're a cat lover or just looking for a unique and cozy spot to relax, our café is the purrfect destination. Visit us today!
                    </div>
                </li>
                <li className='accordian_item'>
                    <button className='accordian_title' onClick={(e) => setActive2(!active2)}>Featured</button>
                    <div className={active2 ? "accordian_content_open" : "accordian_content"}>
                        Pudding, Cookies, Cheese cake, Tiramisu, Egg tarr
                    </div>
                </li>
                <li className='accordian_item'>
                    <button className='accordian_title' onClick={(e) => setActive3(!active3)}>Contact</button>
                    <div className={active3 ? "accordian_content_open" : "accordian_content"}>
                        <div>
                            Address: 3600 Meridian Ave. Ste A. San Jose
                        </div>
                        <div>
                            Phone : 199-299-3499
                        </div>
                        <div>
                            Email Address: maxcathouse123@gmail.com
                        </div>
                    </div>
                </li>
                <li className='accordian_item'>
                    <button className='accordian_title' onClick={(e) => setActive4(!active4)}>User Register</button>
                    <div className={active4 ? "accordian_content_open" : "accordian_content"}>
                    <Form className='form'/>
                    </div>
                </li>
            </ul>
        </div>
    );
}


export default Home;