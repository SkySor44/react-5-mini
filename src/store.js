import {createStore} from 'redux';
import reducer from './ducks/counter.js';

export default createStore(reducer);