function foo(x) {
  if (x === null || x === undefined || typeof x !== 'object') {
    return 0; // Handle null, undefined, and non-objects
  } else if (typeof x.length !== 'number') {
    return 0; // Handle objects that doesn't have 'length'
  }
  return x.length;
}