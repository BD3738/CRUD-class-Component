import React, { Component } from "react";
import Input from "./Input";
import Print from "./Print";

class App extends Component {
  constructor(props) {
    super(props);
    // this.dataupdatings = this.dataupdatings.bind(this);
    this.state = {
      data: [],
      ddata: [],
    };
  }

  dataupdatings = (fdata) => {
    this.setState({ ...this.state, data: fdata });
  };
  deletedatas = (fdata) => {
    this.setState({ ...this.state, ddata: fdata });
  };

  componentDidUpdate() {
    console.log("DDATA", this.state.ddata);
  }

  render() {
    return (
      <div>
        <Input dataupdating={this.dataupdatings} ddata={this.state.ddata} />
        <Print data={this.state.data} deletedata={this.deletedatas} />
      </div>
    );
  }
}

export default App;
