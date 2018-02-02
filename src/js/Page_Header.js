import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { Button } from 'reactstrap';

import '../styles/Page-header.css';
import '../styles/Secondary-button.css';

class Page_Header extends Component {
    render() {
        return (
            <div className='page-header d-flex justify-content-end'>
                <Button color='secondary'><span>Add project</span></Button>
                <i className='fa fa-envelope' aria-hidden="true"/>
                <i className='fa fa-bell' aria-hidden="true"/>
                <a className='profile-icon' href='#'>
                    <img src='../../images/profile-icon.png' width='53px' height='53px'/>
                </a>
            </div>
        )
    }
}

export default Page_Header;
