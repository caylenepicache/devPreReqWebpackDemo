import _ from 'lodash';
import '../src/style.css';
import Icon from './icon.png';

function component() {
    const element = document.createElement('div');
  
    // Lodash, currently included via a script, is required for this line to work
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    const myIcon = newImage();
    myIcon.src = Icon;
  
    return element;
  }
  
  document.body.appendChild(component());