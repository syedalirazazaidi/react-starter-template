import React from 'react';

function App() {
  const [count, setCount] = React.useState(0);
  React.useEffect(() => {
    console.log('ji');
  }, []);
  setCount(2);

  return (
    <div>
      <input
        value={count}
        type="text"
        placeholder="searching  for other"
        width="80px"
        name="search"
        height="90px"
      />
    </div>
  );
}

export default App;
