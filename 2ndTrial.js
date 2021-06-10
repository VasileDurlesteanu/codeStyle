function pow(x, n) {
  let result = 1;

  for(let i = 0; i < n; i++) {
    result *= x; 
  }
  //space in between has to be
  return result;
}

let x = prompt("x?", ''), // ""
    n = prompt("n?", '') //""

if (n <= 0) {
  alert(`Power ${n} is not supported, 
  please enter an integer number greater than zero`);
} else {
// no space here
  alert( pow(x,n) )
}