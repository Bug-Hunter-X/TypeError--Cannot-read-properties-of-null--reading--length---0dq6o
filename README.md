# JavaScript Bug: TypeError: Cannot read properties of null (reading 'length')

This repository demonstrates a common JavaScript error: attempting to access the 'length' property of a null or undefined value.  The `bug.js` file contains the erroneous code, while `bugSolution.js` offers a corrected version.

## Bug Description
The `foo` function in `bug.js` aims to return the length of an object.  However, it lacks proper null and undefined checks, leading to a `TypeError` when the input `x` is null or undefined. 

## Solution
The `bugSolution.js` file solves this by explicitly checking if `x` is null or undefined before accessing its `length` property.  This avoids the error and provides a more robust solution.