import * as React from 'react';
import { Component, ReactChildren } from 'react';
import Note from './note';
import { MusicalNote } from '../../../utils/note/type';

type Props = {
  children?: ReactChildren;
  clear: () => void;
  note_trigger?: MusicalNote;
};

type State = {
  index: number;
  notes: MusicalNote[];
};

function shuffle(a: Array<any>) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default class Staff extends Component<Props, State> {
  state: State = {
    index: 0,
    notes: shuffle(['C', 'D', 'E', 'F', 'G', 'A', 'B'])
  };

  static getDerivedStateFromProps(nextProps: Props, state: State) {
    const { index, notes } = state;
    const { clear, note_trigger } = nextProps;

    if (note_trigger) {
      if (notes[index] === note_trigger) {
        return { notes: notes.slice(1) };
      } else {
      }
    }
    return state;
  }

  render() {
    const { notes } = this.state;

    return (
      <div className="staff">
        {notes.map((n: MusicalNote, index: number) => (
          <Note key={index} name={n} />
        ))}
      </div>
    );
  }
}
