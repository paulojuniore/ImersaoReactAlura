import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Cadastro de vídeos</h1>

      <Link to="/cadastro/categoria">
        Nova categoria
      </Link>
    </PageDefault>
  );
}

export default CadastroVideo;
