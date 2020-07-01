import React from 'react';

class Index extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Teste', email: '' };
  }

  onFormSubmit = (event) => {
    event.preventDefault();
  };

  onNameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    const { name, email } = this.state;
    return (
      <div>
        <h1>Smoke -h</h1>
        <form onSubmit={this.onFormSubmit}>
          <div>
            <label htmlFor="name-input" defaultValue="Name">
              Name:
              {' '}
            </label>
            <input
              name="name-input"
              onChange={this.onNameChangeHandler}
              type="text"
              value={name}
            />
          </div>
          <br />
          <div>
            <label htmlFor="email-input" defaultValue="Email">
              Email:
              {' '}
            </label>
            <input
              name="email-input"
              onChange={this.onEmailChangeHandler}
              type="email"
              placeholder="email"
              value={email}
            />
          </div>
          <br />
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
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
      </div>
    );
  }
}
export default Index;
