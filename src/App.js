import { observer } from 'mobx-react';
import './App.css';

function App({ myCounter }) {
  return (
    <div
      style={{
        textAlign: 'center',
        padding: '16px',
      }}
    >
      카운트: {myCounter.count}
      <br />
      <br />
      마이너스?: {myCounter.isNegative}
      <br />
      <br />
      <button onClick={() => myCounter.increase()}>+</button>
      <button onClick={() => myCounter.decrease()}>-</button>
    </div>
  );
}

export default observer(App);
