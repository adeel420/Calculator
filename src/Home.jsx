import React, { useState } from 'react';

function Home() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    setInput(input + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput(input.slice(0, -1));
  };

  const calculateResult = () => {
    try {
      setInput(eval(input).toString()); // Avoid using eval in production; use a safe math library instead.
    } catch {
      setInput('Error');
    }
  };

  return (
    <div>
      <div className="container">
        <form>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            
          />
        </form>
        <div className="cont">
          <div className="row">
            <button onClick={handleClear} className="button">AC</button>
            <button onClick={handleDelete} className="button">Del</button>
            <button onClick={() => handleClick('.')} className="button">.</button>
            <button onClick={() => handleClick('/')} className="button">/</button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('7')} className="button">7</button>
            <button onClick={() => handleClick('8')} className="button">8</button>
            <button onClick={() => handleClick('9')} className="button">9</button>
            <button onClick={() => handleClick('*')} className="button">X</button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('4')} className="button">4</button>
            <button onClick={() => handleClick('5')} className="button">5</button>
            <button onClick={() => handleClick('6')} className="button">6</button>
            <button onClick={() => handleClick('-')} className="button">-</button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('1')} className="button">1</button>
            <button onClick={() => handleClick('2')} className="button">2</button>
            <button onClick={() => handleClick('3')} className="button">3</button>
            <button onClick={() => handleClick('+')} className="button">+</button>
          </div>
          <div className="row">
            <button onClick={() => handleClick('00')} className="button">00</button>
            <button onClick={() => handleClick('0')} className="button">0</button>
            <button onClick={calculateResult} className="equal">=</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
