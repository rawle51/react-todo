import React, { useState, createContext } from 'react';
import { element } from 'prop-types';

export const { Consumer, Provider } = createContext({}, () => {});

export const TodoProvider = ({
  children,
}) => {
  const [state, setState] = useState([]);

  return (
    <Provider value={[state, setState]}>
      {children}
    </Provider>
  );
};

TodoProvider.propTypes = {
  children: element.isRequired,
};
