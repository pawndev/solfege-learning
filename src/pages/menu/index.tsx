import * as React from 'react';
import { Component, Fragment } from 'react';

import Layout from '../../common/components/layout/index';

interface Props {}
interface State {}

export default class Menu extends Component<Props, State> {
  public render() {
    return (
      <Layout>
        <Fragment>
          <div />
          <div>
            <h1>Solfege Learning</h1>
            <div className="center-on-page">
              <div className="select mb1">
                <select className="slct" name="key" id="key">
                  <option value="sol">Clef de sol</option>
                  <option value="fa">Clef de fa</option>
                  <option value="sol-fa">Clef de sol et fa</option>
                </select>
              </div>
              <div className="select mb1">
                <select name="level" id="level">
                  <option value="1">Niveau 1</option>
                  <option value="2">Niveau 2</option>
                  <option value="3">Niveau 3</option>
                  <option value="4">Niveau 4</option>
                  <option value="5">Niveau 5</option>
                </select>
              </div>
              <div className="btn">
                <button className="start">Start !</button>
              </div>
            </div>
          </div>
          <div />
        </Fragment>
      </Layout>
    )
  }
}
