import React from 'react';
import './Menu.css';

import Logo from '../../assets/pauloflix.png';
import ButtonLink from '../ButtonLink'

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Pauloflix logo"/>
      </a>

      <ButtonLink href="/" className="ButtonLink">
        Novo vídeo
      </ButtonLink>
    </nav>
  )
}

export default Menu;