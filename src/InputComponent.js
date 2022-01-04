import React from 'react';
import './InputComponent.css';

function InputComponent({placeholder}) {
    return (
        <div className="input_component">
            <input placeholder={placeholder} type="text"/>
        </div>
    )
}

export default InputComponent;
