import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0
    };
  }

  switchState = () => {
    const { number } = this.state;
    this.setState({
      number: number === 0 ? 1 : 0
    });
  };

  render() {
    const { number } = this.state;
    let component = number ? <ChildComponentOne /> : <ChildComponentTwo />;
    return (
      <>
        {component}
        <button onClick={this.switchState}>Switch</button>
      </>
    );
  }
}

class ChildComponentOne extends React.Component {
  componentWillUnmount() {
    console.log("Component One will be removed");
  }

  render() {
    return <div>Component One</div>;
  }
}

class ChildComponentTwo extends React.Component {
  componentWillUnmount() {
    console.log("Component Two will be removed");
  }

  render() {
    return <div>Component Two</div>;
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<ParentComponent />, rootElement);
