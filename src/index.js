import _ from 'lodash';
import printMe from './print';
import './style.css';

if (process.env.NODE_ENV !== 'production') {
  console.log('development env!!!');
}

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['hello', 'webpack', 'print']);
  element.classList.add('hello');

  btn.innerHTML = 'click me';
  btn.onclick = printMe;
  element.appendChild(btn);

  return element;
}

document.body.appendChild(component());
