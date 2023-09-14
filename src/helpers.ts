const hola = (name = '') => {
  return `Hola ${name}`;
};

const cassete = (artist = '') => {
  return `Playing... ${artist}`;
};
console.log(
  '🚀 ~ file: helpers.ts:8 ~ cassete ~ cassete:',
  cassete('bruno mars'),
);

console.log('🚀 ~ file: helpers.ts:4 ~ hola ~ hola:', hola('juan'));
