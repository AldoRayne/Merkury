import React, { Component } from 'react';

import '../styles/Get-Started-Page.css';
import '../styles/Login-register-tabs-style.css';

import Login_Register_Tabs from "./Login-register-tabs";
import Site_Logo from "./Site_Logo";

class Get_Started extends Component {
    render() {
        return (
            <div className='container-fluid get-started'>
                <div className='container d-flex justify-content-center'>
                    <div className='get-started-form'>
                        <Site_Logo/>
                        <Login_Register_Tabs/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Get_Started;
