import * as React from 'react';
import { Component, ReactChild } from 'react';

interface IProps {
  children: ReactChild
}

export default class Layout extends Component<IProps, {}> {
  public render() {
    return (
      <div className="grid-container">
        {this.props.children}
      </div>
    );
  }
}
