import { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [obj, setObj] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const calculations = (buttonName) => {
    const res = calculate(obj, buttonName);
    setObj({
      next: res.next,
      total: res.total,
      operation: res.operation,
    });
  };

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">
          {obj.total}
          {' '}
          {obj.operation}
        </div>
        <div className="current-operand">
          {obj.next}
        </div>
      </div>
      <button
        type="button"
        onClick={() => calculations('AC')}
      >
        AC
      </button>
      <button type="button" onClick={() => calculations('+/-')}>+/-</button>
      <button type="button" onClick={() => calculations('%')}>%</button>
      <button type="button" className="operator" onClick={() => calculations('÷')}>÷</button>
      <button type="button" onClick={() => calculations('7')}>7</button>
      <button type="button" onClick={() => calculations('8')}>8</button>
      <button type="button" onClick={() => calculations('9')}>9</button>
      <button type="button" className="operator" onClick={() => calculations('x')}>x</button>
      <button type="button" onClick={() => calculations('4')}>4</button>
      <button type="button" onClick={() => calculations('5')}>5</button>
      <button type="button" onClick={() => calculations('6')}>6</button>
      <button type="button" className="operator" onClick={() => calculations('-')}>-</button>
      <button type="button" onClick={() => calculations('1')}>1</button>
      <button type="button" onClick={() => calculations('2')}>2</button>
      <button type="button" onClick={() => calculations('3')}>3</button>
      <button type="button" className="operator" onClick={() => calculations('+')}>+</button>
      <button type="button" className="span-two" onClick={() => calculations('0')}>0</button>
      <button type="button" onClick={() => calculations('.')}>.</button>
      <button type="button" className="operator" onClick={() => calculations('=')}>=</button>
    </div>
  );
}
