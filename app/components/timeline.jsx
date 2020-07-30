import React, { useRef } from 'react';

import { useTranslation } from 'react-i18next';

import moment from 'moment';

import useOutsideAlerter from '../hooks/useOutsideAlerter';

const Timeline = ({
  timeline,
  initialDate,
  endDate,
  activeIndex,
  activeEvent,
  selectTimelineEvent,
}) => {
  if (timeline.length === 0) return null;

  const wrapperRef = useRef(null);

  useOutsideAlerter(wrapperRef, () => {
    selectTimelineEvent(-1);
  });

  const { t, i18n } = useTranslation();

  const formattedDate = (date) => {
    moment.locale(i18n.language);

    const fdate = moment(date).format('MMM YYYY');

    return fdate.charAt(0).toUpperCase() + fdate.slice(1);
  };

  return (
    <section className="timeline hero is-light" ref={wrapperRef}>
      <div className="hero-body">
        <h1 className="title">{t('text-timeline')}</h1>

        <div className="timeline-content">
          <div className="initial-date">{formattedDate(initialDate)}</div>

          <div className="timeline-bar" />

          <div className="final-date">{t(endDate)}</div>

          <div className="events">
            {timeline.map((event, index) => (
              <button
                type="button"
                className={`event ${activeIndex === index ? ' is-active' : ''}`}
                onClick={() => selectTimelineEvent(index)}
                key={`${event.company.name} - ${event.name}`}
              >
                <img
                  className="timeline-company-image"
                  src={`/images/companies/${event.company.img}`}
                  alt={`${event.company.name} - ${event.name}`}
                />
              </button>
            ))}
          </div>
        </div>

        {activeIndex !== null && activeIndex >= 0 && (
          <div className="timeline-event-description">
            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure className="image is-48x48">
                      <img
                        src={`/images/companies/${activeEvent.company.img}`}
                        alt={`${activeEvent.company.name} - ${activeEvent.name}`}
                      />
                    </figure>
                  </div>

                  <div className="media-content">
                    <p className="title is-4 has-text-left">
                      {activeEvent.name}
                    </p>

                    <a
                      href={activeEvent.company.ref}
                      taget="blank"
                      className="subtitle is-6 has-text-left"
                    >
                      {activeEvent.company.name}
                    </a>
                  </div>
                </div>

                <div className="content">
                  {activeEvent.description[i18n.language]}
                  <br />
                  <time>{formattedDate(activeEvent.initialDate)}</time>
                  {' '}
                  -
                  {' '}
                  <time>
                    {activeEvent.endDate
                      ? formattedDate(activeEvent.endDate)
                      : t(endDate)}
                  </time>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Timeline;
