import React from 'react';
import Logo from '../../../assets/images/logo_ccoa_white.png'
import './banner-top.css';


const BannerTop = (props) =>{

    return(

        <React.Fragment>
               <div className='BannerTopCompoment'>
                   <img src={Logo} alt="Logo COOA" width="200" height="110" className="logo" title="Logo COOA" />
                    <h1>{props.title} </h1>  
               </div>

               
           </React.Fragment>
    )
}
export default BannerTop;