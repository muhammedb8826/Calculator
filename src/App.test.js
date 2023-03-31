import renderer from 'react-test-renderer';
import calculate from './logic/calculate';
import operate from './logic/operate';
import Calculator from './Components/Calculator';
import Home from './Components/Home';
import Quote from './Components/Quote';

describe('Test for calculate', () => {
  it('4 + 4 = 8', () => {
    const obj = {
      total: '4',
      next: '4',
      operation: '+',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('8');
  });
  it('4 - 4 = 0', () => {
    const obj = {
      total: '4',
      next: '4',
      operation: '-',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('0');
  });
  it('4 x 4 = 16', () => {
    const obj = {
      total: '4',
      next: '4',
      operation: 'x',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('16');
  });
  it('4 ÷ 4 = 1', () => {
    const obj = {
      total: '4',
      next: '4',
      operation: '÷',
    };
    const res = calculate(obj, '=');
    expect(res.total).toBe('1');
  });
});

describe('Test for operate', () => {
  it('4 + 5 equals 9', () => {
    const result = operate(4, 5, '+');
    expect(result).toBe('9');
  });
  it('4 - 5 equals -1', () => {
    const result = operate(4, 5, '-');
    expect(result).toBe('-1');
  });
  it('4 x 5 equals 20', () => {
    const result = operate(4, 5, 'x');
    expect(result).toBe('20');
  });
  it('4 ÷ 5 equals 0.8', () => {
    const result = operate(4, 5, '÷');
    expect(result).toBe('0.8');
  });
  it('4 % 5 equals 4', () => {
    const result = operate(4, 5, '%');
    expect(result).toBe('4');
  });
});

describe('Components render Correctly', () => {
  it('Calculator renders correctly', () => {
    const tree = renderer
      .create(<Calculator />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Home renders correctly', () => {
    const tree = renderer
      .create(<Home />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
  it('Quote renders correctly', () => {
    const tree = renderer
      .create(<Quote />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
