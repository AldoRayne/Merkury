import React, { Component } from 'react';

import '../styles/Get-Started-Page.css';
import '../styles/Login-register-tabs-style.css';

import Login_Register_Tabs from "./Login-register-tabs";

class Get_Started extends Component {
    render() {
        return (
            <div className='container-fluid get-started'>
                <div className='container d-flex justify-content-center'>
                    <div className='get-started-form'>
                        <h1 className='get-started-logo'>
                            <a href='#'><img src='../../images/logo.png' width='65px' height='65px'/></a>
                            <span className='get-started-logo-title'>Merkury</span>
                        </h1>
                        <Login_Register_Tabs/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Get_Started;
