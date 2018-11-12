import * as React from 'react';
import { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

import NoteButton from '../../common/components/musical-score/button';
import Staff from '../../common/components/musical-score/staff';

import { MusicalNote } from '../../utils/note/type';

const WebMidi: any = require('webmidi');
const Tone: any = require('tone');

interface IState {
  note_triggered?: MusicalNote;
}

const synth = new Tone.Synth().toMaster();

export default class Home extends Component<{}, IState> {
  public state: IState = {
    note_triggered: null
  };

  constructor(props: {}) {
    super(props);

    WebMidi.enable((err: any) => {
      const input = WebMidi.getInputByName('Keystation Mini 32');
      // const input = WebMidi.getInputByName("Keystation Mini 32 MIDI 1");
      input.addListener('noteon', 'all', (e: any) => {
        // console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ').');
        synth.triggerAttack(e.note.name + e.note.octave);
        this.setState({ note_triggered: e.note.name.toUpperCase() });
      });
      input.addListener('noteoff', 'all', (e: any) => synth.triggerRelease());
    });
  }

  public onButtonClick = (note_name: MusicalNote) => {
    this.setState({ note_triggered: note_name });
    // console.log(note_name);
  };

  public render() {
    return (
      <Fragment>
        <Link to="/menu">Menu</Link>
        <Staff note_trigger={this.state.note_triggered} />
        <div className="button-group">
          <NoteButton note="C" octave={4} onClick={this.onButtonClick} />
          <NoteButton note="D" octave={4} onClick={this.onButtonClick} />
          <NoteButton note="E" octave={4} onClick={this.onButtonClick} />
          <NoteButton note="F" octave={4} onClick={this.onButtonClick} />
          <NoteButton note="G" octave={4} onClick={this.onButtonClick} />
          <NoteButton note="A" octave={4} onClick={this.onButtonClick} />
          <NoteButton note="B" octave={4} onClick={this.onButtonClick} />
        </div>
      </Fragment>
    );
  }
}
