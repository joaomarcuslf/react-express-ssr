import React from 'react';

import { NavLink } from 'react-router-dom';
import { withTranslation } from 'react-i18next';

import UiComponents from './base/UiComponents';

class SkillsSection extends UiComponents {
  observableProps = ['is-dark', 'is-light'];

  render() {
    const {
      items, title, seeMore, t,
    } = this.props;

    const className = this.buildClassname();

    return (
      <section className={`hero skills-section${className}`}>
        <div className="hero-body">
          <h1 className="skills-section-title">{title}</h1>

          <div className="skills-section-group">
            {items.map((skill) => (
              <div className="skills-section-item card" key={skill.name}>
                <div className="card-content">
                  <div className="media">
                    <div className="media-content">
                      <p className="skills-section-title is-4">
                        {t(skill.name)}
                      </p>
                    </div>
                  </div>

                  <div className="content">
                    <progress
                      className="progress is-success"
                      value={skill.progress}
                      max="100"
                    >
                      {`${skill.progress}%`}
                    </progress>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {seeMore && (
            <div className="has-text-right">
              <NavLink to="/about-me">{t('text-see-more')}</NavLink>
            </div>
          )}
        </div>
      </section>
    );
  }
}

export default withTranslation()(SkillsSection);
