import React, { Component } from 'react';

class ExampleComponent extends Component {
  // 1. Initialization: Called before anything else
  constructor(props) {
    super(props);
    this.state = { count: 0 };
    // Binding methods is necessary if not using arrow functions
    this.handleIncrement = this.handleIncrement.bind(this);
  }

  // 2. Mounting: Called once after the component is added to the DOM
  componentDidMount() {
    console.log('Component mounted. Good place for API calls.');
  }

  // 3. Optimization: Determines if re-rendering is needed
  // shouldComponentUpdate(nextProps, nextState) {
  //   return nextState.count !== this.state.count;
  // }

  // 4. Updating: Called immediately after an update occurs
  componentDidUpdate(prevProps, prevState) {
    if (prevState.count !== this.state.count) {
      console.log('Component updated to count:', this.state.count);
    }
  }

  // 5. Unmounting: Called just before a component is destroyed
  componentWillUnmount() {
    console.log('Component will unmount. Clean up timers or subscriptions here.');
  }

  // Custom Event Handler
  handleIncrement() {
    this.setState((prevState) => ({ count: prevState.count + 1 }));
  }

  // 6. Rendering: The only required method; returns JSX
  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleIncrement}>Increment</button>
      </div>
    );
  }
}

export default ExampleComponent;
