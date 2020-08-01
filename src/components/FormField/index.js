/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Input = styled.input`

`;

function FormField({
  label, type, name, value, onChange,
}) {
  const isTextarea = type === 'textarea';
  const tag = isTextarea ? 'textarea' : 'input';
  return (
    <div>
      <label>
        { label }
        <Input
          as={tag}
          type={type}
          name={name}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
