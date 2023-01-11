import './Main.css';
import Home from './Home.jsx';
import About from './About.jsx';
import Cats from './Cats.jsx';

function Main({onNav, page}){
 
    return (
        <main>
            {page === 'Home' && <Home/>}
            {page === 'About' && <About onNav={onNav}/>}
            {page === 'Cats' && <Cats/>}
        </main>
    );
}

export default Main;