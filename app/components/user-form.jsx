import React from 'react';

import { withTranslation } from 'react-i18next';

class UserForm extends React.Component {
  constructor() {
    super();
    this.state = { name: 'Teste', email: '' };
  }

  onFormSubmit = (event) => {
    event.preventDefault();

    console.log(this.state);
  };

  onNameChangeHandler = (event) => {
    this.setState({ name: event.target.value });
  };

  onEmailChangeHandler = (event) => {
    this.setState({ email: event.target.value });
  };

  render() {
    const { name, email } = this.state;
    const { t } = this.props;

    return (
      <div className="container is-fluid">
        <form className="form" onSubmit={this.onFormSubmit}>
          <div className="field">
            <label className="label" htmlFor="name-input" defaultValue="Name">
              {t('form-name')}
              :

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
              {t('form-email')}
              :

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
              <button className="button is-link" type="submit">{t('form-submit')}</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}
export default withTranslation()(UserForm);
