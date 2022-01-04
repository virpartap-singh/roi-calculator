import React from 'react';
import './ButtonComponent.css';

function ButtonComponent({title, selected}) {
    return (
        <div className={`btn ${selected && 'btn_selected'}`}>
            <button>{title}</button>
        </div>
    )
}

export default ButtonComponent
