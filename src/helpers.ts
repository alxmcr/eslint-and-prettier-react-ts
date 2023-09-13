const hola = (name = "") => {
  const nu = 5;
  return `Hola ${name}`;
};

const cassete = (artist = "") => {
  return `Playing... ${artist}`;
};

console.log("🚀 ~ file: helpers.ts:4 ~ hola ~ hola:", hola("juan"));
