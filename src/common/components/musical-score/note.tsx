import * as React from 'react';
import { Component } from 'react';

import { MusicalNote, Octave } from '../../../utils/note/type';

interface IDefaultProps {
  octave: Octave;
}

interface IProps {
  name: MusicalNote;
  octave?: Octave;
}

export default class Note extends Component<IProps, {}> {
  public static defaultProps: IDefaultProps = {
    octave: 4
  };

  public render() {
    return <div className={`quarter note ${this.props.name}${this.props.octave}`} />;
  }
}
