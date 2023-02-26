import React, { useState } from "react";
class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { id: "", password: "", cards: [] };
  }

  handleIdChange(e) {
    this.setState({ id: e.target.value });
  }

  handlePasswordChange(e) {
    this.setState({ password: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const idRegEx = /^[a-zA-Z0-9]+$/;
    const passwordRegEx = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    if (
      !idRegEx.test(this.state.id) ||
      !passwordRegEx.test(this.state.password)
    ) {
      alert(
        "Id and Password must not have special character and at least 8 characters"
      );
    } else {
      this.setState((prevState) => ({
        cards: [
          ...prevState.cards,
          { id: this.state.id, password: this.state.password },
        ],
        id: "",
        password: "",
      }));
      this.state.cards.map((card) => {
        console.log(`Id: ${card.id} Password: ${card.password}`);
      });
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div className="row m-5">
            <h1 className="mt-5 mb-5">LoginPage</h1>
            <div className="col-6">
              <div className="row mb-3">
                <div className="d-flex col-2">Id :</div>
                <input
                  class="my-form-control col-9"
                  type="text"
                  value={this.state.id}
                  onChange={(e) => this.handleIdChange(e)}
                />
              </div>

              <div className="row">
                <div className="col-2">Password:</div>
                <input
                  className="my-form-control col-9"
                  type="password"
                  value={this.state.password}
                  onChange={(e) => this.handlePasswordChange(e)}
                />
              </div>
            </div>
            <div className="col-2">
              <button type="submit" class="btn btn-warning w-100 h-100">
                ADD
              </button>
            </div>
          </div>
        </form>

        <div className="row">
          {this.state.cards.map((card, index) => (
            <div className="card col-3 m-3" key={index}>
              <div className="card-body text-center">
                <h5 className="card-title mr-auto">Id: {card.id}</h5>
                <h5 className="card-title mr-auto">Password: {card.password}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
export default LoginForm;
