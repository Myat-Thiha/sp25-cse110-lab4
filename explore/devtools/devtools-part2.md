1. The values from the input fields were strings. Adding two strings resulted in string concatenation instead of numerical addition.
2. Convert `num1` and `num2` to numbers using `Number()`:
```js
let result = Number(num1) + Number(num2);