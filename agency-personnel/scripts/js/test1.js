//* Test component

const TestComponent = (props) => {
  if (props) {
    return `<div style=${props}><h3>Now we're talking!</h3></div> `;
  }
};

export default TestComponent;
