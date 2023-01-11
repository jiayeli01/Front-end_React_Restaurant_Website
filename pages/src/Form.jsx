import './Form.css';
import {useState} from 'react';

function Form(){
    function onSubmit(event){
        event.preventDefault();
    }

    const[name, setName] = useState('');
    const isNameInValid = !name;
    const[email, setEmail] = useState('');
    const isEmailValid = !email;

    return (
        <form onSubmit= {onSubmit} className='form'>
             <div className='div'>
                <label for="name">Name: </label>
                <input className='nameInput' value={name}  onInput={event => {setName(event.target.value)}}  name='name'></input>
                <span className='nameInputError'>{ isNameInValid && "Required Field!" }</span>
            </div>
            <div className='div' id="emailGroup">
                <label htmlFor='email'>Email: </label>
                <input name ="email" className='emailInput' value={email} onInput={event => {setEmail(event.target.value)}}></input>
                <span className='emailInputError'>{isEmailValid &&"Required Field!"}</span>
            </div>
            <div className='div' id="re-emailGroup">
                <label htmlFor='re-email'>Confirm Email: </label>
                <input type="text" name ="re-email" className='reEmailInput'></input>
                <span className='reemailInputError'></span>
            </div>
            <div className='div'>
                <input type="checkbox" name="annoy_me" ></input>
                <label htmlFor='checkbox'>
                Do you want us to send you annoying emails?
                </label>
            </div>
            <div className='div'>
                <label htmlFor='dropdown'>Interest Information: 
                </label>
                    <select name="tier" id="dropdown" >
                        <option value="">Please Select</option>
                        <option value="1">New Products</option>
                        <option value="2">Sales</option>
                        <option value="3">Ship Cookies</option>
                    </select>
            </div>
            <div className='div' id="button">
                <button>Register</button>
            </div>
        </form>
    );
}

export default Form;