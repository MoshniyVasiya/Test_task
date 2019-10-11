import React from 'react';
import {
    Redirect,
    withRouter,
  } from 'react-router-dom';
  import './App.css';

localStorage.setItem('key','false');


export const authentication = {
    isAuthenticated: false,
    authenticate(cb) {
        if(localStorage.getItem('key') === "true")
            this.isAuthenticated = true
            setTimeout(cb, 1800)
    },
    signout(cb) {
        if(localStorage.getItem('key') === "false")
            this.isAuthenticated = false
            setTimeout(cb, 1500)
    }
  };

export const AuthButton = withRouter (({ history }) => (    
    authentication.isAuthenticated ? (    
        <div className="App-header items-positioning bottom"> 
            Вы вошли в профиль <button style={{ marginLeft:"20px"}} className="form-button" onClick={() => {
                localStorage.setItem('key','false');
                authentication.signout(() => history.push("/"))
            }}>Выйти</button>
        </div>
    ) : (   
        <div className="App-header items-positioning bottom">Вы не вошли в профиль.</div>
    )
))

export default class Login extends React.Component {
    constructor() { 
        super()
        this.state = {
            redirectToReferrer: false,
            wrongCredentials: "none",
            usernameValid: false,
            passwordValid: false,
          }
        this.handlePasswordInputBound = this.handlePasswordInput.bind(this);
        this.handleUsernameInputBound = this.handleUsernameInput.bind(this);
        this.handleSubmitBound = this.handleSubmit.bind(this);

    }
       

    
    handleUsernameInput(e) {
        let value = e.target.value;
       if ( value === "Admin" ){    
           this.setState({usernameValid: true})
       }}
    handlePasswordInput(e) {
        let value = e.target.value;
       if ( value === "12345" ){    
           this.setState({passwordValid: true})
       }}   
    handleSubmit(e) {   
        e.preventDefault();
        
        if(this.state.usernameValid === true && this.state.passwordValid === true){ 
            localStorage.setItem('key', 'true')
        }else{  
            this.setState({wrongCredentials: "block"})
        }
        authentication.authenticate(() => {   
            this.setState(() => ({  
                redirectToReferrer: true,
                wrongCredentials: "none",
            }))
        })

    }
    
    

    render(){ 
        const { from } = this.props.location.state || { from: { pathname: "/" }}
        const { redirectToReferrer } = this.state

        if (redirectToReferrer === true) {
        return <Redirect to={from} />
    }
    console.log(localStorage.getItem('key')) 
    console.log(this.state.redirectToReferrer)  
    console.log(this.state.usernameValid) 
        return( 
            <div className="form-field items-positioning">
                <form name="form" onSubmit={this.handleSubmitBound}>  
                    <div className="form-items">   
                        <label htmlFor="username">Имя пользователя</label>
                        <input type="text" name="username" className="form-input"
                         value={this.state.username}
                         placeholder="Username"
                         onChange={this.handleUsernameInputBound} />
                    </div>
                        
                    <div className="form-items">   
                        <label htmlFor="password">Пароль</label>
                        <input type="password" name="password" className="form-input"
                         value={this.state.password}
                         placeholder="Password"
                         onChange={this.handlePasswordInputBound} />
                    </div>

                    <div className="form-items">   
                        <button className="form-button">Войти</button>
                    </div>
                </form>
                <div className="wrong-credentials" style={{display:`${this.state.wrongCredentials}`}}> 
                    <p>Имя пользователя или пароль введены не верно.</p>
                </div>
            </div>
        )
    }
};