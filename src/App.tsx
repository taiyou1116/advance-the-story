import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    fetch('http://127.0.0.1:8080/')
      .then(response => response.text())
      .then(data => {
        console.log(data);
      });
  }, []);

  return (
    <div className="App">
      <h1>Hello React!</h1>
    </div>
  );
}

export default App;