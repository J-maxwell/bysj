/**
 * Created by Administrator on 2018/3/1 0001.
 */
import React, { Component } from 'react';
import './login.css';
import {Input, Button, notification, Modal, Tooltip} from 'antd'
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: '',
            identifyingCode: '',
            captcha: '',
            uniqueId: '',
            normalDisplay: 'block',
            successDisplay: 'none',
            dataSource: [],
            data: '',
            errorMg: '',
        };
        this.handleLogin = this.handleLogin.bind(this)
    }

    handleChange(key,e){
        this.setState({
            [key]:e.target.value,
        })
    }
    handleLogin(){
        // let state = this.state;
        // if (!state.user||!state.pwd||!state.identifyingCode) {
        //     this.setState({
        //         errorMessage:'登录信息不能为空'
        //     });
        //     return
        // }else{
            // this.props.history.push('/home')
        this.props.history.push('/home')
        // }


    }
    componentDidMount(){
        let doc = document.getElementById('login');
        doc.addEventListener('keyup',(e)=>{
            if(e.which===13){
                this.handleLogin()
            }
        });
    }
    render() {
        return (
            <div className="outer-container">
                <div className="inner-container">
                    <div className={'login'} id={'login'}>
                        <img src="/img/login/icon-login-font.png" />
                        <div className="greenBg">
                            <img src="/img/login/icon-login-dn.png" className="computer"/>
                            <div className="inputGroup">
                                <img src="/img/login/icon-login-logo.png" />
                                <div className="username-div">
                                    <img src="/img/login/icon-login-zh.png" />
                                    <input
                                        className={'username'}
                                        onChange={(e)=>this.handleChange('user',e)}
                                        type="text"
                                        placeholder="请输入用户名"
                                        autoFocus
                                    />
                                </div>
                                <div className="password-div">
                                    <img src="/img/login/icon-login-mm.png" />
                                    <input
                                        className={'password'}
                                        onChange={(e)=>this.handleChange('pwd',e)}
                                        type='password'
                                        placeholder="请输入密码"
                                    />
                                </div>
                                <div className="security-div">
                                    <img src="/img/login/icon-login-yzm.png" />
                                    <input
                                        className={'security'}
                                        onChange={(e)=>this.handleChange('identifyingCode',e)}
                                        type='text'
                                        placeholder="请输入验证码"
                                    />
                                    <div className={'yzm'} id="sideBookmark" onClick={this.setCaptcha}> </div>
                                </div>
                                <Tooltip
                                    title={this.state.errorMessage}
                                    trigger={'click'}
                                    visible={!!this.state.errorMessage}
                                >

                                    <Button
                                        onClick={this.handleLogin}
                                        type='primary'
                                        className={'loginBtn'}
                                        style={{width:383,height:50,backgroundColor:'#00b2e2'}}
                                    >登录</Button>
                                </Tooltip>
                                <p className={'forget'} onClick={this.handleClickForget}>忘记密码?</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;