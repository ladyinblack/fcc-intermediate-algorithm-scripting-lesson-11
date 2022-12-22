## ALTERNATE SOLUTIONS 

### Solution 1
```js
function convertHTML(str) {
  // Split by character to avoid problems.

  var temp = str.split("");

  // Since we are only checking for a few HTML elements, use a switch

  for (var i = 0; i < temp.length; i++) {
    switch (temp[i]) {
      case "<":
        temp[i] = "&lt;";
        break;
      case "&":
        temp[i] = "&amp;";
        break;
      case ">":
        temp[i] = "&gt;";
        break;
      case '"':
        temp[i] = "&quot;";
        break;
      case "'":
        temp[i] = "&apos;";
        break;
    }
  }

  temp = temp.join("");
  return temp;
}

//test here
convertHTML("Dolce & Gabbana");
```

### Code Explanation
- Assign **temp** to `str.split('')`, which creates an array containing each individual character in the passed in string.
- Pass each character in the newly created array into a `switch()` statement.
- Replace the HTML entities with their corresponding HTML entity string (i.e. `'&'` becomes `'&amp;'` in line 51)
- `temp.join('')` converts the array of characters into a string to be returned.

### REFERENCE LINKS
- [`str.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [`arr.join()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)
- [switch statement](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/switch)

### Solution 2
```js
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  // Using a regex, replace characters with it's corresponding html entity
  return str.replace(/([&<>\"'])/g, match => htmlEntities[match]);
}

// test here
convertHTML("Dolce & Gabbana");
```

### Code Explanation
- Create an object to use the Lookup functionality and easily find the characters.
- Use `replace()` to replace characters with regex.
- The first argument for `replace()` is a regex that catches all the target characters and put them into a capturing group.
- The second arguments for `replace()` is a function with the matched character as a parameter.  It returns the corresponding entity from `htmlEntities`.

### REFERENCE LINKS
- [`str.replace()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [Regular Expressions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp)

### Solution 3
```js
function convertHTML(str) {
  // Use Object Lookup to declare as many HTML entities as needed.
  const htmlEntities = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&apos;"
  };
  //Use map function to return a filtered str with all entities changed automatically.
  return str
    .split("")
    .map(entity => htmlEntities[entity] || entity)
    .join("");
}

// test here
convertHTML("Dolce & Gabbana");
```

### Code Explanation
- Create an object to use the Lookup functionality and easily find the characters.
- Split the original string by characters and use map to check for the changed html entity or use the same one.
- The function is added which is what returns the converted entity or the original one if there is no conversion.
- Lastly we join all the characters once again.

**NOTE:** that if you went the regex route then you don't need to join anything, just make sure you return the whole operation or save it to a variable and then return it.

### REFERENCE LINKS
- [`str.split()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/split)
- [`arr.map()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
- [`arr.join()`](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

