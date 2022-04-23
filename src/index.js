import _ from 'lodash';
import printMe from './print';
import './style.css';
import Icon from './1.jpg';

function component() {
  const element = document.createElement('div');
  const btn = document.createElement('button');

  element.innerHTML = _.join(['hello', 'webpack', 'print']);
  element.classList.add('hello');

  btn.innerHTML = 'click me and check the console';
  btn.onclick = printMe;
  element.appendChild(btn);
  const myIcon = new Image();
  myIcon.src = Icon;
  element.appendChild(myIcon);

  return element;
}

document.body.appendChild(component());
