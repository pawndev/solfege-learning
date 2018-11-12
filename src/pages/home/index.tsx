import * as React from 'react';
import { Component, Fragment } from 'react';
import { Link } from 'react-router-dom'

import Staff from '../../common/components/musical-score/staff';

import { MusicalNote } from '../../utils/note/type';

const WebMidi: any = require('webmidi');
const Tone: any = require('tone');

interface Props {}
interface State {
  note_triggered?: MusicalNote;
}

const synth = new Tone.Synth().toMaster();

export default class Home extends Component<Props, State> {
  state: State = {
    note_triggered: null
  };

  constructor(props: Props) {
    super(props);

    WebMidi.enable((err: any) => {
      const input = WebMidi.getInputByName('Keystation Mini 32');
      //const input = WebMidi.getInputByName("Keystation Mini 32 MIDI 1");
      input.addListener('noteon', 'all', (e: any) => {
        console.log("Received 'noteon' message (" + e.note.name + e.note.octave + ').');
        synth.triggerAttack(e.note.name + e.note.octave);
        this.setState({ note_triggered: e.note.name.toUpperCase() });
      });
      input.addListener('noteoff', 'all', (e: any) => synth.triggerRelease());
    });
  }

  clearTriggering = () => this.setState({ note_triggered: null });

  onButtonClick = (note_name: MusicalNote) => {
    this.setState({ note_triggered: note_name });
    console.log(note_name);
  };

  render() {
    return (
      <Fragment>
        <Link to="/menu">Menu</Link>
        <Staff clear={this.clearTriggering} note_trigger={this.state.note_triggered} />
        <div className="button-group">
          <button onClick={_ => this.onButtonClick('C')}>C</button>
          <button onClick={_ => this.onButtonClick('D')}>D</button>
          <button onClick={_ => this.onButtonClick('E')}>E</button>
          <button onClick={_ => this.onButtonClick('F')}>F</button>
          <button onClick={_ => this.onButtonClick('G')}>G</button>
          <button onClick={_ => this.onButtonClick('A')}>A</button>
          <button onClick={_ => this.onButtonClick('B')}>B</button>
        </div>
      </Fragment>
    );
  }
}
