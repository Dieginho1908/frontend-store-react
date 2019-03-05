import React from 'react';
import './Contacto.css'

const Contacto = () => {
    return (
        <form>
            <legend>
                Formulario de contacto
            </legend>
            <div className="input-field">
                <label htmlFor="">Nombre:</label>
                <input type="text" placeholder="tu nombre"/>
            </div>
            <div className="input-field">
                <label htmlFor="">Email:</label>
                <input type="email" placeholder="tu email"/>
            </div>
            <div className="input-field">
                <label htmlFor="">Mensaje:</label>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="input-field enviar">
                <input type="submit" value='Enviar'/>
            </div>
        </form>
    );
};

export default Contacto;