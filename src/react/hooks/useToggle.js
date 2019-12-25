import { useState } from 'react';

export const useToggle = (isVisible) => {
  const [isOpen, setVisible] = useState(isVisible);

  const toggleHandler = () => setVisible(state => !state);

  return {
    isOpen,
    toggleHandler,
  };
};
