import { useDispatch, useSelector } from 'react-redux';
import { getCounterValue } from '../model/selectors/get-counter-value/get-counter-value';
import { counterActions } from '../model/slice/counter-slice';
import {Button} from "shared/ui/button";

export const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);
  const increment = () => {
    dispatch(counterActions.increment());
  };
  const decrement = () => {
    dispatch(counterActions.decrement());
  };
  return (
    <div>
      <h1 data-testid="value-title">{value}</h1>
      <Button data-testid="increment-btn" onClick={increment}>inc</Button>
      <Button data-testid="decrement-btn" onClick={decrement}>dec</Button>
    </div>
  );
};
