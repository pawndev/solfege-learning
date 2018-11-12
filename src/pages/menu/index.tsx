import * as React from 'react';
import { Component, Fragment } from 'react';

interface Props {}
interface State {}

export default class Menu extends Component<Props, State> {
  render() {
    return (
      <div>
        <h1>Solfege Learning</h1>
        <div className="sub-menu">
          <select name="key" id="key">
            <option value="sol">Clef de sol</option>
            <option value="fa">Clef de fa</option>
            <option value="sol-fa">Clef de sol et fa</option>
          </select>
          <select name="level" id="level">
            <option value="1">Niveau 1</option>
            <option value="2">Niveau 2</option>
            <option value="3">Niveau 3</option>
            <option value="4">Niveau 4</option>
            <option value="5">Niveau 5</option>
          </select>
        </div>
        <button className="start">Start !</button>
      </div>
    )
  }
}
