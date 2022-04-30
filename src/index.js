import _ from 'lodash';
import numRef from './ref.json';

export function numToWord(num) {
  return _.reduce(
    numRef,
    (accm, ref) => {
      return ref.num === num ? ref.word : accm;
    },
    ''
  );
}

export function wordToNum(word) {
  return _.reduce(
    numRef,
    (accm, ref) => {
      return ref.word === word && word.toLowerCase() ? ref.num : accm;
    },
    -1
  );
}
