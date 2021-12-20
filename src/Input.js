import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);
    // this.handlerName = this.handlerName.bind(this);
    // this.handlerMobile = this.handlerMobile.bind(this);
    // this.handlerJob = this.handlerJob.bind(this);
    // this.handlerGender = this.handlerGender.bind(this);
    // this.handlerTNC = this.handlerTNC.bind(this);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerGetInput = this.handlerGetInput.bind(this);

    this.state = {
      // fullname: "",
      // mobile: "",
      // job: "",
      // gender: "",
      // tnc: false,
      data: [],
      Person: {
        fullname: "",
        mobile: "",
        job: "",
        gender: "",
        tnc: false,
      },
    };
  }

  // handlerName(e) {
  //   this.setState({ fullname: e.target.value });
  // }
  // handlerMobile(e) {
  //   this.setState({ mobile: e.target.value });
  // }
  // handlerJob(e) {
  //   this.setState({ job: e.target.value });
  // }
  // handlerGender(e) {
  //   this.setState({ gender: e.target.value });
  // }
  // handlerTNC(e) {
  //   this.setState({ tnc: e.target.checked });
  // }
  handlerGetInput(e) {
    if (e.target.name === "tnc") {
      this.setState({
        ...this.state,
        Person: { ...this.state.Person, [e.target.name]: e.target.checked },
      });
    } else {
      this.setState({
        ...this.state,
        Person: { ...this.state.Person, [e.target.name]: e.target.value },
      });
    }
  }

  handlerSubmit(e) {
    // alert(`name${this.state.data.fullname}`);

    e.preventDefault();

    this.setState(
      {
        ...this.state,
        data: [...this.state.data, { data: this.state.Person }],
      },
      () => {
        console.log("FDATA", this.state.data);
        this.props.dataupdating(this.state.data);
      }
    );
    // this.setState(
    //   {
    //     ...this.state,
    //     data: [
    //       ...this.state.data,
    //       {
    //         fullname: this.state.fullname,
    //         mobile: this.state.mobile,
    //         job: this.state.job,
    //         gender: this.state.gender,
    //         tnc: this.state.tnc,
    //       },
    //     ],
    //   },

    // );
  }
  // componentDidMount() {
  //   this.setState({ data: this.props.ddata });
  // }

  render() {
    return (
      <div>
        <form>
          <label>Name:</label>
          <input
            type="text"
            name="fullname"
            value={this.state.Person.fullname}
            onChange={this.handlerGetInput}
          />
          <br />
          <label>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={this.state.Person.mobile}
            onChange={this.handlerGetInput}
          />
          <br />
          <label>Job:</label>
          <select
            value={this.state.Person.job}
            name="job"
            onChange={this.handlerGetInput}
          >
            <option>React</option>
            <option>Anguler</option>
            <option>Vue</option>
            <option>Threeeee</option>
          </select>
          <br />
          <div>
            <label>Gender:</label>
            <input
              type="radio"
              value="Male"
              name="gender"
              checked={this.state.Person.gender === "Male"}
              onChange={this.handlerGetInput}
            />
            <label>Male</label>
            <input
              type="radio"
              value="Female"
              gender="gender"
              checked={this.state.Person.gender === "Female"}
              onChange={this.handlerGetInput}
            />
            <label>Female</label>
            <input
              type="radio"
              value="Other"
              name="gender"
              checked={this.state.Person.gender === "Other"}
              onChange={this.handlerGetInput}
            />
            <label>Other</label>
          </div>

          <input
            type="checkbox"
            name="tnc"
            checked={this.state.Person.tnc}
            onChange={this.handlerGetInput}
          />

          <label>Trems and Condition</label>
          <br />
          <button onClick={this.handlerSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default Input;
