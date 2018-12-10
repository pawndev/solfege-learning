import { createContext } from 'react';

const WebMidi: any = require('webmidi');

interface IStore {
  WebMidi: any,
  inputs?: object[],
}

const store: IStore = {
  WebMidi,
  inputs: null,
};

const {Consumer, Provider} = createContext(store);
