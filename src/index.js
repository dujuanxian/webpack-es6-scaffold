import './../style.css';

const a = "hello";
const b = ["world", "girl"];

const log = (...values) => {
  document.write(values);
};

log(a, b);
