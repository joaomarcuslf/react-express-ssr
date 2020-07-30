import React from 'react';

import { NavLink } from 'react-router-dom';

import UiComponents from './base/UiComponents';

const LinkTo = ({ children, to, outSourced }) => (
  outSourced
    ? (
      <a className="images-section-item" href={to} target="blank">
        {children}
      </a>
    )
    : (
      <NavLink className="images-section-item" to={to}>
        {children}
      </NavLink>
    )
);

class ImagesSection extends UiComponents {
  observableProps = [
    'is-dark',
    'is-light',
  ];

  render() {
    const { items, title } = this.props;

    const outSourced = this.props['out-sourced'];

    const className = this.buildClassname();

    return (
      <section className={`hero images-section${className}`}>
        <div className="hero-body">
          <h1 className="images-section-title">{title}</h1>

          {items.length > 1 && (
          <div className="images-section-group">
            {items.map(({
              src, alt, description, linkTo,
            }) => (
              <LinkTo className="images-section-item" to={linkTo} outSourced={outSourced} key={`${linkTo}-${src}`}>
                <img
                  className="images-section-image"
                  src={src}
                  alt={alt}
                />

                {description && (
                  <h2 className="images-section-subtitle">
                    {description}
                  </h2>
                )}
              </LinkTo>
            ))}
          </div>
          )}
        </div>
      </section>
    );
  }
}

export default ImagesSection;
