import { useState } from 'react';

const useInputValue = () => {
  const [value, setValue] = useState({});

  const handleChange = e => setValue(e.target.value);

  return {
    value,
    handleChange,
  };
};

export default useInputValue;
