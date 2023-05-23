import {expectType} from 'tsd';
import removeCommas from './index.js';

expectType<string>(removeCommas('1,333,337'));
