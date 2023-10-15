import { useEffect, useState } from 'react';

function App() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('うに');

  useEffect(() => {
    fetch('http://127.0.0.1:8080/')
      .then(response => response.text())
      .then(data => {
        console.log(data);
      });
  }, []);

  async function sendRequestToActix() {
    const response = await fetch('http://localhost:8080/api/chat', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ question }) // 引数を渡す
    });
  
    const data = await response.json();
    setAnswer(data.answer);
    return data.answer;
  }

  return (
    <div className="App">
      <h1>Hello React!</h1>
      <input type='text' onChange={(e) => setQuestion(e.target.value)}/>
      <button onClick={() => sendRequestToActix()}>テスト</button>
      <p> {answer} </p>
    </div>
  );
}

export default App;