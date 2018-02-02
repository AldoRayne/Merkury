import React, {Component} from 'react';

import Page_Header from "./Page_Header";

class Home_Page_Content extends Component {
    render() {
        return (
            <div className='container-fluid'>
                <div className='home-page-content'>
                    <Page_Header/>
                    <h2 className='welcome-title'>
                        Hello {JSON.parse(localStorage.getItem('user_storage')).username}!
                    </h2>
                </div>
            </div>
        )
    }
}

export default Home_Page_Content;
