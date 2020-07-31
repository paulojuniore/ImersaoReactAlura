import React from 'react';
import { FooterBase } from './styles';

import Logo from '../../assets/pauloflix.png';

import { Link } from 'react-router-dom';

function Footer() {
  return (
    <FooterBase>
      <div>
        <Link to="/">
          <img className="Logo" src={Logo} alt="Pauloflix logo"/>
        </Link>
      </div>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
