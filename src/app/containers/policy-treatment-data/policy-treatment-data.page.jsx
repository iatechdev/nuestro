import React, { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
import BannerTop from "../../components/banner-top/banner-top";
import './policy-treatment-data.page.css';
import Modal from "../../components/modal/modal.component";
import axios from 'axios';


const Preview = ({ history }) =>{

    /*const [nit] = useState(JSON.parse(localStorage.getItem("Token")));
    const { register,handleSubmit, errors} = useForm();
    const [state, setState] = useState(false);
    const [authdata, setAuth] = useState({});
    const onSubmit = dataForm => {formGuard(dataForm)};*/



    /*function calc(){
        var heightPage = parseInt(window.getComputedStyle(document.querySelector(".Box")).height);
            document.querySelector('.Box').style.height = heightPage + "px";
        }
    
        function openModalHandler(){
            window.scroll ({
            top: 0,
            left: 0,
            behavior: 'smooth'});
            let body = document.getElementsByTagName("body")[0];
            body.style.overflow = "hidden";
            setState(true);
        }
    
    
        function closeModal(){
            let body = document.getElementsByTagName("body")[0];
            body.style.overflow = "initial";
            setState(false);  
        }
    
        function aceptModal() {
            let validModal = document.getElementById("autoriza_datos_c");
            validModal= validModal.checked = true;
            //validAuthdata = validModal;
            setState(false);  
            authdata.autoriza_datos_c = true;
            let body = document.getElementsByTagName("body")[0];
            body.style.overflow = "initial";
        }
    
        document.addEventListener("DOMContentLoaded", calc);

      
    async function getAuth(){
        await axios.get(`https://master-ccoa.iatech.com.co:4001/api/themes/themescustomer?doc=${nit.nit}`).then((response) =>{
            if(response.status === 200 && response.data){
                setAuth(response.data.responde[0]);
                
            }

        }).catch((error)=>{
            console.log(error);
        });
    }


    function handleChange(e) {
        setAuth({...authdata, [e.target.name] : e.target.checked })
    }

    async function formGuard(){
       

        await axios.put(`https://master-ccoa.iatech.com.co:4001/api/themes/authData_nit/${authdata.id_c}`,
        {
            autoriza_datos_c : authdata.autoriza_datos_c
            
        }).then((response) =>{
            history.push('/save');        
        }).catch((error)=>{
            console.log(error);
        });
    }
 


    useEffect(() => {
        getAuth();
    },[]);*/
    

    return(

        <React.Fragment>
        <div id="modal">
                <Modal> </Modal>
            </div>
            <div className="Box">
                <BannerTop title="CONFIRMA / ACTUALIZA TUS DATOS"/>
               <div className='PolicyDataPage'>
                    <div className="lineGray">
                        <h2>RAZÓN SOCIAL</h2>
                        <h2>NIT. <span> </span> </h2>
                    </div>
                    <h3> HABEAS DATA  </h3>
                    <p className="paragraph mg-top-55-i"> NUESTRO cuenta con datos personales suministrados por usted en este formulario, los cuales se utilizan expresamente conforme se ha establecido en la política de tratamiento de información.</p>
                    <h4 > VER POLÍTICA </h4>
                    <p className="paragraph"> Teniendo en cuenta lo anterior, al guardar, autoriza a la CCOA que la información suministrada en este documento sea incorporada en su base de datos, entendiendo que el tratamiento de los datos personales por parte de la compañía tiene una finalidad legítima de acuerdo a la Ley y la Constitución </p>
                    <form >
                        <div className="form">
                        <div>
                            <label className="content-input">
                                    <input type="checkbox"  />
                                    <i></i>
                                    
                            </label>
                            <label className="style-font" htmlFor="autoriza_datos_c"> Autorizo el uso de datos personales </label>
                        </div>
            
                        </div>
                        <div className ="errorRequiredAuth">  </div> 
                        <button > Guardar </button>

                    </form>
               </div>
            </div>
            
        </React.Fragment>
    )
}
export default Preview;