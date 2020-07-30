import React from 'react';

import UiComponents from './base/UiComponents';

class Banner extends UiComponents {
  observableProps = [
    'is-danger',
    'is-dark',
    'is-info',
    'is-light',
    'is-link',
    'is-success',
    'is-warning',
  ];

  render() {
    const { title, subtitle } = this.props;

    const className = this.buildClassname();

    return (
      <section className={`hero ${className}`}>
        <div className="hero-body">
          <h1 className="title">{title}</h1>
          <h2 className="subtitle">{subtitle}</h2>
        </div>
      </section>
    );
  }
}

export default Banner;
