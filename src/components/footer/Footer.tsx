import React from 'react';
import Appsettings from '../../configs/appsettings';
import './footer.scss';
import FooterWidget from './FooterWidget';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="fLists">
            <FooterWidget/>
            <FooterWidget/>
            <FooterWidget/>
            <FooterWidget/>
            <FooterWidget/>
            <FooterWidget/>
        </div>
        <div className="fText">Copyright &copy; {`${new Date().getFullYear()} - ${Appsettings.appName}`} </div>
    </div>
  )
}

export default Footer