/* eslint-disable react/no-array-index-key */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import PageDefault from '../../../components/PageDefault';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '',
  };

  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCategorias([
      ...categorias,
      values,
    ]);
    setValues(valoresIniciais);
  };

  const setValue = (key, value) => {
    setValues({
      ...values,
      [key]: value,
    });
  };

  const handleChange = (e) => {
    const { getAttribute, value } = e.target;
    setValue(
      getAttribute('name'),
      value,
    );
  };

  return (
    <PageDefault>
      <h1>Cadastro de categoria</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>
            Nome da categoria:
            <input
              type="text"
              name="nome"
              value={values.nome}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Descrição:
            <textarea
              type="text"
              name="descricao"
              value={values.descricao}
              onChange={handleChange}
            />
          </label>
        </div>

        <div>
          <label>
            Cor:
            <input
              type="color"
              name="cor"
              value={values.cor}
              onChange={handleChange}
            />
          </label>
        </div>

        <button type="submit">
          Cadastrar
        </button>

        <ul>
          { categorias.map((categoria, index) => (
            <li key={`${categoria}-${index}`}>
              { categoria.nome }
            </li>
          )) }
        </ul>
      </form>

      <Link to="/">
        Ir para home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
