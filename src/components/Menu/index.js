import React from 'react';
import './Menu.css';

import Logo from '../../assets/pauloflix.png';

// Componenete do botão criado com css puro
//import ButtonLink from '../ButtonLink'

// Componente do botão criado com styled-components
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="Pauloflix logo"/>
      </a>

      <Button as="a" href="/" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  )
}

export default Menu;