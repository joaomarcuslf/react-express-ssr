import React from 'react';

class UserForm extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Teste', email: '', showResult: false };
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    this.setState({ showResult: true });
  };

  onNameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    const { name, email, showResult } = this.state;
    return (
      <div className="container is-fluid">
        <form className="form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label className="label" htmlFor="name-input" defaultValue="Name">
              Name:

              <div className="control">
                <input
                  id="name-input"
                  name="name-input"
                  className="input"
                  type="text"
                  placeholder="Text input"
                  onChange={this.onNameChangeHandler}
                  value={name}
                />
              </div>
            </label>
          </div>

          <div className="field">
            <label className="label" htmlFor="email-input" defaultValue="Email">
              Email:

              <div className="control">
                <input
                  id="email-input"
                  name="email-input"
                  className="input"
                  type="email"
                  placeholder="Text input"
                  onChange={this.onEmailChangeHandler}
                  value={email}
                />
              </div>
            </label>
          </div>

          <div className="field is-grouped">
            <div className="control">
              <button className="button is-link" type="submit">Submit</button>
            </div>
          </div>
        </form>

        {showResult ? (
          <>
            <span>
              <h5>
                Name:
                {name}
              </h5>
            </span>
            <span>
              <h5>
                Email:
                {email}
              </h5>
            </span>
          </>
        )
          : null}
      </div>
    );
  }
}
export default UserForm;
