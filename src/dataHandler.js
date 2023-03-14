import data from './data/harrypotter/harry.js';
// estas funciones son de ejemplo

export const buscar = () => {
  return data.books;
};

export const filtrar = (name) => {
  const traerPersonaje = data.characters.toLoWerCase;

 
}

export const ordenar = (tipo) => {
  const libros = data.books;

  if (tipo === "a-z")
    return libros.sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // names must be equal
      return 0;
    });

  if (tipo === "z-a")
    return libros.sort((a, b) => {
      const nameA = a.title.toUpperCase();
      const nameB = b.title.toUpperCase();
      if (nameA < nameB) {
        return 1;
      }
      if (nameA > nameB) {
        return -1;
      }
      // names must be equal
      return 0;
    });
};