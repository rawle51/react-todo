const toggleClass = (blockClass, newClass) => {
  const queryBlock = document.querySelector(`.${blockClass}`);

  if(!queryBlock.classList.contains(newClass)) {
    queryBlock.classList.add(`${newClass}`);
  } else {
    queryBlock.classList.remove(`${newClass}`);
  }

  return queryBlock;
}

export default toggleClass;