import React, {Component} from 'react';

import '../styles/Site-logo.css';

class Site_Logo extends Component {
    render() {
        return (
            <h1 className='site-logo'>
                <a href='#'><img src='../../images/logo.png' width='55px' height='55px'/></a>
                <span className='site-logo-title'>Merkury</span>
            </h1>
        )
    }
}

export default Site_Logo;
