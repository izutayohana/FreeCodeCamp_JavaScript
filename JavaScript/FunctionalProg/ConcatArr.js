function nonMutatingConcat(original, attach) {
    // Only change code below this line
  return original.concat(attach);
  
    // Only change code above this line
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);

  // this can also be used instead of using the push method. It is better because it does not change the original array. 