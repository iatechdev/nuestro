import React from 'react';

import './modal.component.css';

const modal = (props) => {
    return (
        <React.Fragment>
        <div className="modalComponent"> 
            <div className="modal-wrapper"
                style={{
                    transform: props.show ? 'translateY(0vh)' : 'null',
                    display: props.show ? 'flex' : 'none',

            }}>

                <div className="container-modal">
                    <div className="container-close">
                        <i className="material-icons" onClick={props.close}> cancel </i>
                    </div>

                    <h2 className="titleModal"> POLÍTICA DE TRATAMIENTO DE DATOS </h2>
                    <div className="C-H-D" aria-label="::container-habeas-data::">
                        <div className="B-S" aria-label="::box-shadow-white::"></div>
                        <p className="P-C-H-D" aria-label="::paragrah-container-habeas-data::"> La Cámara de Comercio del Oriente Antioqueño dispone de mecanismos que garantizan la protección, recolección y buen uso de los datos personales en calidad de responsable o encargada del tratamiento de Datos Personales y en cumplimiento de lo establecido en la ley 1581 de 2012, el Decreto Reglamentario 1377 de 2013 y demás normas vigentes. <br/>  <br/> Los datos administrados o tratados son de naturaleza pública, debido a que su tratamiento se realiza por mandato legal y en cumplimiento a una función pública delegada.  Sin perjuicio de lo anterior, la <strong>  Cámara de Comercio del Oriente Antioqueño </strong> también trata datos personales no públicos, de carácter privado y semiprivado con el fin de llevar a cabo el desarrollo de sus funciones. <br/>  <br/> El manejo y tratamiento de datos personales dentro de la Cámara de Comercio del Oriente Antioqueño está enmarcado bajo los siguientes principios: <strong> Acceso y Circulación, Confidencialidad, Finalidad, Legalidad, Libertad, Seguridad, Transparencia, Veracidad o Calidad</strong>.  <br/> <br/> La Cámara de Comercio del Oriente Antioqueño advierte que, trata sin previa autorización del Titular los datos personales de naturaleza pública y los contenidos en los registros públicos, estos últimos por tratarse de una función pública reglada reconocida por la Ley.  Esta situación no implica que no se adopten las medidas necesarias que garanticen el cumplimiento de los otros principios y obligaciones contempladas en la Ley 1581 de 2012 y demás normas que regulen esta materia a cargo de la Cámara. <br/> <br/> <strong>MECANISMOS PARA CONOCER LA POLÍTICA DE TRATAMIENTO</strong> <br/> <br/> El Titular puede acceder a nuestra Política de tratamiento de datos personales, ingresando a nuestra página web <a href="https://www.ccoa.org.co/" target="_blank">www.ccoa.org.co</a>, en el correo electrónico <strong> protecciondedatos@ccoa.org.co </strong> o en las oficinas de atención al cliente en nuestras sedes: <br/> <br/> - Rionegro Carrera 47 # 64A-263, teléfono: 5312514 <br/> <br/>  - La Ceja Calle 20 No. 22-59/61 y 22-49 teléfono: 553 80 33 <br/> <br/> - Guatapé Carrera 31 No. 31 – 28 teléfono: 861 00 94 <br/> <br/>  - Sonsón Primer piso del Palacio Municipal teléfono: 869479</p>
                    </div>
                        <button className="BTN-A" aria-label="::Button-acept::" onClick={props.acept}> Aceptar </button>

                </div>           


            </div>
            </div>
        </React.Fragment>
        
    )
}

export default modal;