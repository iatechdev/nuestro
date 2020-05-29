import React, { useState }  from 'react';
import { useForm } from 'react-hook-form'
import BannerBottom from '../../components/banner-bottom/banner-bottom';
import Logo from '../../../assets/images/logo-cooa.png';
import ErrorIcon  from "../../../assets/icons/error_Icon.svg";
import './home-page.css';
import axios from "axios";


const Home = ({ history, data, ref }) =>{

    /*const { register, handleSubmit, errors} = useForm(0);
    const [login, setLogin] = useState(0);
    const [stateButton, setStateButton] = useState(true);
    const [stateDOM, setStateDOM] = useState(false);
    let dataValue = undefined;

    document.addEventListener("change", () => {setStateDOM(true)});

    const onSubmit = dataForm => {
        if(stateButton){
            setStateButton(false);
            dataValue = dataForm;
            Auth(dataValue);
        } else if(!stateButton){
            alert("espere un momento por favor");
        }
    }
    
   async function Auth(dataValue) {
       await axios.post('https://master-ccoa.iatech.com.co:4001/api/auth/validateuser',
       {nit : dataValue.nit }).then((response)  => {
            if(response.status === 200 && response.data.ok === true){
                const token = {auth : true, nit : dataValue.nit }
                setStateButton(true);
                localStorage.setItem("Token", JSON.stringify(token)); 
                history.push('/preview');           
            }else if(response.status === 204){
                setStateButton(true);              
                setLogin(1);
            }
        }).catch((error)=>{
            console.log(error);
        });
    }

   function show() {
        console.log(login);
    }

function calc(){
    let heightPage = parseInt(window.getComputedStyle(document.querySelector(".Box")).height);
        document.querySelector('.Box').style.height = heightPage + "px";
}

document.addEventListener("DOMContentLoaded", calc);*/


    return(
        <React.Fragment>
            <div className="Box">
            <div className='HomePage'>
                <img src={Logo} alt="LOGO COOA"  title="Logo COOA" />
                <p> Bienvenido a la plataforma de actualización de datos <br className="brr" /> y autorización de habeas data de la CCOA </p>
                <form>
                    <input type="text" autoComplete="off" name="nit" placeholder="Digite el NIT"/> 
                    <div className ="errorRequired"> </div> 
                   <div className="notLogin"> <img src={ErrorIcon} className="icon-error" alt="Icono de Error" title="Icono de Error"/> <div className="info-error"> El NIT ingresado no se encuentra en nuestra base de datos. <span> Intente nuevamente</span> </div> </div>  
                    <button> Enviar </button>
                </form>
            </div>
            <BannerBottom/>                  
            </div>
        </React.Fragment>
    )
}
export default Home;