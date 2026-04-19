import React from 'react';
class Eg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: props.count || 0
    };
  }

  incrementCount = () => {
    this.setState((prev) => ({ count: prev.count + 1 }));
  };

  componentDidMount() {
    console.log(`Component mounted with count: ${this.state.count}`);
  }

  render() {
    return (
      <>
        <h1>Count: {this.state.count}</h1>
        <button onClick={() => this.incrementCount()}>Increment</button>
      </>
    );
  }
}

export default Eg;
