import React, { useState } from 'react';
import Eval from './middleware/calculate'
import './Theme.css';
import './App.css';

function App() {
  const [result, setResult] = useState('')
  const [theme, setTheme] = useState('Light')
  // css theme
  const body = document.getElementById('body')

  const switchTheme = () => {
    if (theme === 'Light') {
      body.classList.add('body-Dark')
      body.classList.remove('body-Light')
      setTheme('Dark')
    } else {
      body.classList.add('body-Light')
      body.classList.remove('body-Dark')
      setTheme('Light')
    }
  }

  return (
    <>
      <div className={theme} >
        <div className="app">
          <h1> Calculator</h1>
          <div className="box-row">
            <h2>{result}</h2>
            <button className="clear" title={'='} onClick={() => setResult(prev => Eval(prev))}> = </button>
          </div>
          <div className="box-row">
            <button  type="button" title={'1'} onClick={() => setResult(prev => prev += '1')}>1</button>
            <button  type="button" title={'2'} onClick={() => setResult(prev => prev += '2')}>2</button>
            <button  type="button" title={'3'} onClick={() => setResult(prev => prev += '3')}>3</button>
            <button  type="button" title={'C'} onClick={() => setResult('')}>C</button>
          </div>
          <div className="box-row">
            <button type="button" title={'4'} onClick={() => setResult(prev => prev += '4')}>4</button>
            <button type="button" title={'5'} onClick={() => setResult(prev => prev += '5')}>5</button>
            <button type="button" title={'6'} onClick={() => setResult(prev => prev += '6')}>6</button>
            <button type="button" title={'+'} onClick={() => setResult(prev => prev += '+')}>+</button>
          </div>
          <div className="box-row">
            <button type="button" title={'7'} onClick={() => setResult(prev => prev += '7')}>7</button>
            <button type="button" title={'8'} onClick={() => setResult(prev => prev += '8')}>8</button>
            <button type="button" title={'9'} onClick={() => setResult(prev => prev += '9')}>9</button>
            <button type="button" title={'-'} onClick={() => setResult(prev => prev += '-')}>-</button>
          </div>
          <div className="box-row">
            <button type="button" title={'0'} onClick={() => setResult(prev => prev += '0')}>0</button>
            <button type="button" title={'X'} onClick={() => setResult(prev => prev += '*')}>X</button>
            <button type="button" title={'/'} onClick={() => setResult(prev => prev += '/')}>/</button>
            <button type="button" title={'.'} onClick={() => setResult(prev => prev += '.')}>.</button>
          </div>
          <div className="box-row">
            <div className="bottom-buttons">
              <button
                type="button"
                title={'github'}
                onClick={() => window.open('https://github.com/susilo-hartomo/calculator')}
              >
                GitHub
            </button>
              <button type="button" onClick={() => switchTheme()}>
                {theme} Mode
            <span role="img" aria-label=''> 🌙 </span>
              </button>
            </div>
          </div>
        </div>
      </div >
    </>
  );
}

export default App;
