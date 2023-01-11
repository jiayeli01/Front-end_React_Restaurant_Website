import './App.css';
import { useState } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';


function App() {
  const[ page, setPage ] = useState('Home');
  const[ theme, setTheme ] = useState('light');

  function onNav(event){
    const target = event.target.dataset.target;
    if(target){
      event.preventDefault();
      setPage(target);
    }
  }

  function toggleTheme(){
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }
  
  return (
    <div className={`app ${theme}`}>
      <Header onNav={onNav} theme={theme} toggleTheme={toggleTheme}/>
      <Main onNav={onNav} page={page}/>
      <Footer/>
    </div>
  );
}

export default App;
