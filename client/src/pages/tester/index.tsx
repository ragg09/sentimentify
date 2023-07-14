import Container from '@/components/Container';
import Button from '@/components/Button';
import Headings from '@/components/Headings';
import {
  decrement,
  increment,
  incrementByAmount
} from '@/redux/features/counter/counterSlice';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { alertError, alertSuccess, alertWarning } from '@/utils';
import { Fragment, useState, type ReactNode, FormEvent } from 'react';

const Testpage = (): ReactNode => {
  const handleToastify = () => {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    switch (randomNumber) {
      case 1:
        alertSuccess('Success!');
        break;
      case 2:
        alertWarning('Warning!');
        break;
      case 3:
        alertError('Error!');
        break;
      default:
        alertError('Invalid!');
    }
  };

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch();
  const [incrementBy, setIncrementBy] = useState(0);
  const handleIncrementForm = (e: FormEvent): void => {
    e.preventDefault();
    dispatch(incrementByAmount(incrementBy));
  };

  return (
    <Fragment>
      <Container>
        <p>Tailwind Settings</p>
        <Headings option="h6" text="Heading Component" />
      </Container>

      <Container>
        <p>Toastify Testing</p>
        <Button text="Random Toast" onClick={handleToastify} />
      </Container>

      <Container>
        <p>Redux Toolkit Test</p>
        <div className="text-center space-y-2">
          <h2 className="text-[5rem]">{count}</h2>
          <div className="space-x-2 text-[1.2rem]">
            <button
              className="border p-1 px-4 rounded-md"
              onClick={() => dispatch(decrement())}
            >
              -
            </button>
            <button
              className="border p-1 px-4 rounded-md"
              onClick={() => dispatch(increment())}
            >
              +
            </button>
          </div>

          <form onSubmit={handleIncrementForm} className="space-x-2">
            <label htmlFor="amount">Increment by:</label>
            <input
              onChange={(e) => {
                setIncrementBy(+e.target.value);
              }}
              required
              className="border p-1 rounded-md"
              id="amount"
              type="number"
              value={incrementBy}
            />
            <button className="border p-1 px-4 rounded-md">+</button>
          </form>
        </div>
      </Container>
    </Fragment>
  );
};

export default Testpage;
