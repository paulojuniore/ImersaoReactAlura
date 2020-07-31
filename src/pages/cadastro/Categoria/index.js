import React from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  return (
    <PageDefault>
      <h1>Cadastro de categorias</h1>

      <Link to='/cadastro/video'>
        Novo vídeo
      </Link>
    </PageDefault>
  )
}

export default CadastroCategoria;