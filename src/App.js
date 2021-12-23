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
      edata: [],
      ids: "",
      tog: false,
    };
  }

  dataupdatings = (fdata) => {
    this.setState({ ...this.state, data: fdata });
  };

  editdatas = (fdata) => {
    this.setState({ ...this.state, edata: fdata });
  };
  deletedatas = (fdata) => {
    this.setState({ ...this.state, ddata: fdata });
  };

  getids = (id) => {
    this.setState({ ids: id });
  };
  getTogs = (tog) => {
    this.setState({ tog: tog });
  };

  componentDidUpdate() {
    console.log("edata", this.state.edata);
  }

  render() {
    return (
      <div className="App">
        <div className="input">
          <Input
            dataupdating={this.dataupdatings}
            // ddata={this.state.ddata}
            edata={this.state.edata}
            ids={this.state.ids}
            tog={this.state.tog}
          />
        </div>
        <div>
          <Print
            data={this.state.data}
            // deletedata={this.deletedatas}
            editdata={this.editdatas}
            getid={this.getids}
            getTog={this.getTogs}
            deletedata={this.deletedatas}
          />
        </div>
      </div>
    );
  }
}

export default App;
