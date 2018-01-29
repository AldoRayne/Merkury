import React, { Component } from 'react';
import { findDOMNode } from 'react-dom';
import { TabContent, TabPane, Nav, NavItem, NavLink, Row, Col, Button } from 'reactstrap';
import classnames from 'classnames';
import $ from 'jquery';

import '../styles/Primary-button.css';

class Login_Register_Tabs extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            activeTab: '1'
        };
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }

    render() {
        return (
            <div>
                <Nav tabs>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '1' })}
                            onClick={() => { this.toggle('1'); }}>
                            Register
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink
                            className={classnames({ active: this.state.activeTab === '2' })}
                            onClick={() => { this.toggle('2'); }}>
                            Login
                        </NavLink>
                    </NavItem>
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    <TabPane tabId='1'>
                        <h2 id='1' className='get-started-title text-center'>Hi <span>there!</span></h2>
                        <Row>
                            <Col sm='12'>
                                <form id='reg_form' className='authorisation-form d-flex flex-column align-items-center'>
                                    <ul className=''>
                                        <li className='username'><input id='user_reg' type='text' placeholder='Username'/></li>
                                        <li className='password'><input id='password_reg' type='text' placeholder='Password'/></li>
                                        <li className='email'><input type='text' placeholder='E-mail'/></li>
                                    </ul>
                                    <Button onClick={ () => {

                                        let user_data = {
                                            username: $('#user_reg').val(),
                                            password: $('#password_reg').val(),
                                            email: $('.email input').val()
                                        };

                                        localStorage.setItem('user_storage', JSON.stringify(user_data));

                                        $('#reg_form').trigger('reset');

                                    }}>Enter</Button>
                                </form>
                            </Col>
                        </Row>
                    </TabPane>
                    <TabPane tabId='2'>
                        <h2 className='get-started-title text-center'>Welcome <span>back!</span></h2>
                        <Row>
                            <Col sm='12'>
                                <form id='login_form' className='authorisation-form d-flex flex-column align-items-center'>
                                    <ul className=''>
                                        <li className='username'><input id='user_login' type='text' placeholder='Username'/></li>
                                        <li className='password'><input id='password_login' type='text' placeholder='Password'/></li>
                                    </ul>
                                    <Button onClick={ () => {

                                        let user_check = {
                                            username: $('#user_login').val(),
                                            password: $('#password_login').val()
                                        };

                                        let user = JSON.parse(localStorage.getItem('user_storage')).username,
                                            pass = JSON.parse(localStorage.getItem('user_storage')).password;

                                        ((user === user_check.username) && (pass === user_check.password)
                                            ?
                                                (
                                                    $('#login_form').trigger('reset')
                                                    (document.location.href = 'http://localhost:8080/home')
                                                    (localStorage.clear())
                                                )

                                            : alert('Введите правильный логин и/или пароль'));

                                    }}>Enter</Button>
                                </form>
                            </Col>
                        </Row>
                    </TabPane>
                </TabContent>
            </div>
        );
    }
}

export default Login_Register_Tabs;

