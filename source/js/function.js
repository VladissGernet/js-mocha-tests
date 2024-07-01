const initFunction = (n) => {
  const s = n.toString(2).replace(/0?1(1*)(0*)$/, '10$2$1');
  return parseInt(s, 2);
};

export { initFunction };
