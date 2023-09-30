import {useState} from 'react';
import classes from './Counter.module.scss'

interface CounterProps {
  className?: string;
}

export const Counter = ({className}: CounterProps) => {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    setCounter(counter + 1)
  }

  return (
    <div>
      <p>{counter}</p>
      <button className={classes.b} onClick={increment}>Add</button>
    </div>
  );
};
