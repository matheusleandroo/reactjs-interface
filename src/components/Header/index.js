import React, { Component } from 'react';
import iconPerfil from '../../assets/icon_perfil.png';
 
import './header.css';

class Header extends Component {
  render() {
    return (
      <header id="header">
        <h2>React Interface</h2>
        <div id="header-perfil">
          <h5 id="header-perfil-title">Meu perfil</h5>
          <img width='25' src={iconPerfil} />
        </div>
      </header>
    );
  };
};

export default Header;
