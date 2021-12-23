import React, { Component } from "react";

class Print extends Component {
  constructor(props) {
    super(props);
    // this.handlerEdit = this.handlerEdit.bind(this);
    this.state = {};
  }

  handlerDelete(id) {
    const dt = this.props.data.splice(id, 1);
    this.props.deletedata(dt);
  }
  handlerEdit(id) {
    const dt = this.props.data.find((d, i) => i === id);
    this.props.editdata(dt);

    this.props.getid(id);
    this.props.getTog(true);
  }

  // componentDidUpdate() {

  // }

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Mobile</th>
              <th>Job</th>
              <th>Gender</th>
              <th>Teams and condition</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.props?.data?.map((data, i) => (
              <tr key={i}>
                <td>{data?.fullname}</td>
                <td>{data?.mobile}</td>
                <td>{data?.job}</td>
                <td>{data?.gender}</td>
                <td>{data?.tnc ? "true" : "false"}</td>
                <td>
                  <button onClick={() => this.handlerDelete(i)}>DELETE</button>
                </td>
                <td>
                  <button onClick={() => this.handlerEdit(i)}>EDIT</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
export default Print;
