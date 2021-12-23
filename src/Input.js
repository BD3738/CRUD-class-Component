import React, { Component } from "react";
import "./App.css";

class Input extends Component {
  constructor(props) {
    super(props);
    this.handlerSubmit = this.handlerSubmit.bind(this);
    this.handlerGetInput = this.handlerGetInput.bind(this);
    this.handlerEdit = this.handlerEdit.bind(this);

    this.state = {
      data: [],
      Person: {
        fullname: "",
        mobile: "",
        job: "",
        gender: "",
        tnc: false,
      },
      id: "",
      tog: "",
     
    };
  }

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
    e.preventDefault();

    this.setState(
      {
        ...this.state,
        data: [...this.state.data, this.state.Person],
      },
      () => {
        // console.log("FDATA", this.state.data);
        this.setState({
          ...this.state,
          Person: {
            fullname: "",
            mobile: "",
            job: "",
            gender: "",
            tnc: false,
          },
        });
        this.props.dataupdating(this.state.data);
      }
    );
  }
  handlerEdit(e) {
    e.preventDefault();
    if (this.state.tog === false) {
      this.setState({
        ...this.state,
        data: [...this.state.data, this.state.Person],
      });
    } else {
      this.setState(
        {
          ...this.state,
          data: this.state.data.map((item, i) => {
            if (i === this.state.id) {
              return this.state.Person;
            }
            return item;
          }),
        },
        () => {
          this.setState({
            ...this.state,
            Person: {
              fullname: "",
              mobile: "",
              job: "",
              gender: "",
              tnc: false,
            },
          });

          this.props.dataupdating(this.state.data);
        }
      );

      this.setState({ tog: false });
    }
  }
  componentDidUpdate(pP) {
    if (this.props.edata !== pP.edata) {
      this.setState({ Person: this.props.edata });
      this.setState({ id: this.props.ids });
      this.setState({ tog: this.props.tog });
      if (this.props.ddata) {
        this.setState({ data: this.props.ddata });
      }
    }
  }

  render() {
    return (
      <div className="main">
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
            value={this.state.Person.job ?? ""}
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
              name="gender"
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
          {this.state.tog ? (
            <button onClick={this.handlerEdit}>Edit</button>
          ) : (
            <button onClick={this.handlerSubmit}>Submit</button>
          )}
        </form>
      </div>
    );
  }
}
export default Input;
