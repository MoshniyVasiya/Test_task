import React from 'react';
import logo from './logo.svg'
import './App.css';
import { Link } from 'react-router-dom';

export default class Nav extends React.Component { 
    
    render(){ 
        const linkStyle = { 
            color:'white',
            textDecoration:'none',
        };  
        return( 
            <nav className="App-header items-positioning" style={{flexDirection:"row", justifyContent:"space-between"}}> 
            <img className="App-logo" src={logo} alt="logo"/>  
                <ul className="nav-links items-positioning">
                    <Link to="/" style={linkStyle}>
                        <li>На главную</li>
                    </Link>
                    <Link to="/news" style={linkStyle}>
                        <li>Новости</li>
                    </Link>
                    <Link to="/profile" style={linkStyle}>
                        <li>Профиль</li>
                    </Link>
                </ul>
            </nav>
        )
    }
};