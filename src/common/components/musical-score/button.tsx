import * as React from 'react';
import { Component, MouseEvent } from 'react';

import { MusicalNote, Octave } from '../../../utils/note/type';

interface IProps {
  note: MusicalNote,
  octave: Octave,
  onClick: (note_name: MusicalNote) => void
}

export default class NoteButton extends Component<IProps, {}> {
  public onButtonClick = (_e: MouseEvent<HTMLElement>) => this.props.onClick(this.props.note);

  public render() {
    return (
      <button onClick={this.onButtonClick}>{this.props.note}{this.props.octave}</button>
    );
  }
}
