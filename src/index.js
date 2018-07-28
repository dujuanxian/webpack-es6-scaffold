import './../style.css';
import {sqrt} from './math';

const log = (...values) => {
  const [a, b] = values;
  document.writeln(a);
  document.writeln('</br>');
  document.writeln(b);
  document.writeln('</br>');
};

log(sqrt, sqrt(10));
