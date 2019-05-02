import { useState } from 'react';

const useToggle = ({ isVisible }) => {
  const [isOpen, setVisible] = useState(isVisible);

  const toggleHandler = () => setVisible(value => ({ isOpen: !value }));

  return {
    isOpen,
    toggleHandler,
  };
};

export default useToggle;
