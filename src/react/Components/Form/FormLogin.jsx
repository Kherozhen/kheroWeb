import { useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEyeSlash , faEye } from '@fortawesome/free-solid-svg-icons';

function FormLogin() {

    const [showPassword, setShowPassword] = useState(false);

    return (
        <>
            <form className="form">
                <div className='inputsForm'>
                    <div className="formText">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                        >  
                        </input>
                        <label htmlFor="password">Password</label>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                        />
                        <button 
                            className="showPassword"
                            type="button"
                            onClick={() => setShowPassword(!showPassword)}>
                            <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                        </button>
                    </div>
                </div>
                <button type="submit">Connexion</button>
            </form>
        </>
    );
}

export default FormLogin;