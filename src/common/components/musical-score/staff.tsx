import * as React from 'react';
import { Component, ReactChildren } from 'react';
import { MusicalNote } from '../../../utils/note/type';
import Note from './note';

interface IProps {
  children?: ReactChildren;
  note_trigger?: MusicalNote;
}

interface IState {
  index: number;
  notes: MusicalNote[];
}

function shuffle(a: any[]) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default class Staff extends Component<IProps, IState> {

  public static getDerivedStateFromProps(nextProps: IProps, state: IState) {
    const { index, notes } = state;
    const { note_trigger } = nextProps;

    if (note_trigger) {
      if (notes[index] === note_trigger) {
        return { notes: notes.slice(1) };
      }
    }
    return state;
  }

  public state: IState = {
    index: 0,
    notes: shuffle(['C', 'D', 'E', 'F', 'G', 'A', 'B'])
  };

  public render() {
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
