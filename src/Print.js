import React, { Component } from "react";

class Print extends Component {
  constructor(props) {
    super(props);

    this.state = {
      //   AllData: [],
      datas: [],
    };
  }
  //   componentDidUpdate() {
  //     this.setState({
  //       AllData: this.props.data,
  //     });
  //   }

  handlerDelete(id) {
    const dt = this.props.data.splice(id, 1);
    // const dt = this.props.data.filter((d, i) => i !== id);
    this.setState({ datas: dt });
    // console.log(this.state.data);
    // this.props.deletedata(this.state.data);
  }

  render() {
    return (
      <div>
        <table style={{ border: "1px soild black" }}>
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
                <td>{data.data.fullname}</td>
                <td>{data.data.mobile}</td>
                <td>{data.data.job}</td>
                <td>{data.data.gender}</td>
                <td>{data.data.tnc ? "true" : "false"}</td>
                <td>
                  <button onClick={() => this.handlerDelete()}>DELETE</button>
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
