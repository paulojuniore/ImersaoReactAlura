import React from 'react';
import './Menu.css';

import { Link } from 'react-router-dom';
import Logo from '../../assets/pauloflix.png';

// Componenete do botão criado com css puro
// import ButtonLink from '../ButtonLink'

// Componente do botão criado com styled-components
import Button from '../Button';

function Menu() {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Pauloflix logo" />
      </Link>

      <Button as={Link} to="/cadastro/video" className="ButtonLink">
        Novo vídeo
      </Button>
    </nav>
  );
}

export default Menu;
