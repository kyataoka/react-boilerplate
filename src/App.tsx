import { useCallback, useState } from 'react';

const App = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount((count) => count + 1);
  }, []);

  return (
    <>
      <h1>React boilerplate</h1>
      <div>
        <button onClick={handleClick}>count is {count}</button>
      </div>
    </>
  );
};

export { App };
