import * as React from 'react';
import { Component } from 'react';

import { MusicalNote, Octave } from '../../../utils/note/type';

interface DefaultProps {
  octave: Octave
};

interface Props {
  name: MusicalNote,
  octave?: Octave
};
interface State {};

export default class Note extends Component<Props, State> {
  static defaultProps: DefaultProps = {
    octave: 4
  };

  render() {
    return <div className={`quarter note ${this.props.name}${this.props.octave}`}  />
  }
}
