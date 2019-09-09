import { createContext } from 'react';

const DeleteContext = createContext({
  deleteItem: () => {}
});

export default DeleteContext;
