import React from 'react';
import LogoImg from './images/logo.svg'
import './main.css'
function Logo() {
    return(
        <div className="logo--img">
            <img src={LogoImg} alt="" />
        </div>
    )
}

export default Logo