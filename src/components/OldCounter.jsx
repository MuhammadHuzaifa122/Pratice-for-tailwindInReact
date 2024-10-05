import { Component } from "react";

class OldCounter extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      //   count2: 0,
    };
    console.log("Constructor");
  }

  componentDidMount() {
    console.log("Mounted");
  }

  componentDidUpdate() {
    console.log("Updated");
  }

  render() {
    console.log("Rendering");

    const { name } = this.props;
    return (
      <>
        <h2 id="counter-title" className="mt-4">
          {name}
        </h2>
        <div className="flex items-center gap-4 mt-4">
          <button
            className="bg-blue-500 px-4 py-2 rounded "
            onClick={() => this.setState({ count: this.state.count - 1 })}
          >
            -
          </button>
          <h2>{this.state.count}</h2>
          <button
            className="bg-blue-500 px-4 py-2 rounded "
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            +
          </button>
        </div>
        {/* <div className="flex items-center gap-4 mt-4">
          <button
            className="bg-blue-500 px-4 py-2 rounded "
            onClick={() => this.setState({ count2: this.state.count2 - 1 })}
          >
            -
          </button>
          <h2>{this.state.count2}</h2>
          <button
            className="bg-blue-500 px-4 py-2 rounded "
            onClick={() => this.setState({ count2: this.state.count2 + 1 })}
          >
            +
          </button>
        </div> */}
      </>
    );
  }
}
export default OldCounter;
