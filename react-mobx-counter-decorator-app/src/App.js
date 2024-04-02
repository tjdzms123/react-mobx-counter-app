import { observer } from 'mobx-react';
import React, { Component } from 'react';

@observer
export class App extends Component {
  render() {
    const myCounter = this.props.counter;
    return (
      <div>
        {' '}
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
      </div>
    );
  }
}

export default App;
