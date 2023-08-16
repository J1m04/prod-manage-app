function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = JSON.stringify(args);
      if (key in cache) {
        return cache[key];
      }
      const functionOutput = fn(...args);
      cache[key] = functionOutput;
      return functionOutput;
    }
  }
  function memo(fn) {
    const cache ={};
    return function(a,b) {
        const key =  JSON.stringify([a,b]);
        if (key in cache) {
            return cache[key];
          }
          const functionOutput = fn(a,b);
          cache[key] = functionOutput;
      return functionOutput;
    }
  }
  
  function fib(n) {
    function fibHelper(n) {
      if (n <= 1) {
        return n;
      }
      return fib(n - 1) + fib(n - 2); // Use the original fib function, not memoizedFib
    }
  
    return fibHelper(n);
  }
  
  function sum(a,b) {
    console.log("running");
    return a+b;
  }
  function self (a) {
    console.log("self");
    return a;
  }
  function memo1 (fn){
    const memory = {};
    return (x)=>{
        if(memory[x]){
            return memory[x];
        }
        memory[x]=fn(x);
        return memory[x];
    }
  }
let memF = memo1(self);
console.log(memF(6));
console.log(memF(6));
console.log(memF(6));
console.log(memF(6));