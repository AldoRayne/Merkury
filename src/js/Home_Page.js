import React, { Component } from 'react';

import '../styles/Home-page.css';

import Navigation from "./Navigation";
import Home_Page_Content from "./Home_Page_Content";


class Home_Page extends Component {
    render() {
        return (
            <div className='home-page'>
                <div className='d-flex'>
                    <Navigation/>
                    <Home_Page_Content/>
                </div>
            </div>
        )
    }
}

export default Home_Page;
