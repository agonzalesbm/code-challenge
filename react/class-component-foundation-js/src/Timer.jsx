import React from 'react';

class Timer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count || 0,
    };
  }

  increment = () => {
    this.setState({ count: this.state.count + 1 });
  };

  componentDidMount() {
    this.timer = setInterval(() => {
      this.increment();
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  render() {
    return (
      <>
        <h1>Counter: {this.state.count}</h1>
        {/* <button onClick={this.increment}>Click!</button> */}
      </>
    );
  }
}

export default Timer;
