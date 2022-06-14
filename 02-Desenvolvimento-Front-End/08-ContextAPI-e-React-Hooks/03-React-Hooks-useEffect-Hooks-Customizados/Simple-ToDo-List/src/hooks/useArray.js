import { useState } from 'react';

function useArray() {
  const [array, setArray] = useState([]);

  const add = (item) => {
    setArray([...array, item]);
  }

  return [array, add];
}

export default useArray;
