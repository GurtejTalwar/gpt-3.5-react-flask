import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState('');

  const handlePromptChange = (e) => {
    setPrompt(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/gpt`,
        { prompt }
      );
      setResponse(response.data.response);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>GPT API Application</h1>
        <div>
          <input type="text" value={prompt} onChange={handlePromptChange} />
          <button onClick={handleSubmit}>Submit</button>
        </div>
        {response && <div className="response-container">{response}</div>}
      </header>
    </div>
  );
}

export default App;
  