import { useEffect, useState } from 'react';

const useDebounce = (value, timeOut = 500) => {
  const [state, setState] = useState(value);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setState(value);
    }, timeOut);

    return () => clearTimeout(timeoutId);
  }, [value, timeOut]);

  return state;
};

export default useDebounce;
