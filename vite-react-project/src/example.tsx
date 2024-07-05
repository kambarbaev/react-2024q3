// example.tsx
import React from 'react';

class ExampleComponent extends React.Component {
  UNSAFE_componentWillMount() {
    console.log('Component will mount');
  }

  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

export default ExampleComponent;
