import React from 'react';
import './TextInput.css'

function TextInput({value, onChange}) {

    return (    
        <input 
            type="text"
            className="task-input__text"
            value={ value }
            placeholder="Ingresa la tarea"
            onChange={ onChange }    
        />
    )
}

export default TextInput; 