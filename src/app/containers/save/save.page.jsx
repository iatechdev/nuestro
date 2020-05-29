import React from 'react';
import Link from 'react-router-dom';
import Logo from '../../../assets/images/logo-cooa.png';
import './save.page.css';

const Home = ({ history, data, ref }) =>{ 


/*function calc(){
    let heightPage = parseInt(window.getComputedStyle(document.querySelector(".Box-i")).height);
    document.querySelector('.Box-i').style.height = heightPage + "px";
}

document.addEventListener("DOMContentLoaded", calc);*/


    return(
        <React.Fragment>
            <div className="Box-i">
            <div className='SavePage'>
                <img src={Logo} alt="LOGO COOA" title="Logo COOA" />
                <div className="LIN-G" aria-label="::Line-Green::">
                    <p> TUS DATOS HAN SIDO GUARDADOS EXITOSAMENTE </p>
                </div>
                    <p> Gracias por mantenerlos actualizados </p>

                <button><a href="https://www.google.com.co/">ir a la COOA</a></button>
            </div>
            </div>
        </React.Fragment>
    )
}
export default Home;