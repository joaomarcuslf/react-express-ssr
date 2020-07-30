import React from 'react';

export default class UiComponentsBase extends React.Component {
  observableProps = [];

  buildClassname() {
    const { props } = this;
    const { className = '' } = props;

    return this.observableProps.reduce((acc, nxt) => (props[nxt] ? `${acc} ${nxt}` : acc), className);
  }
}
