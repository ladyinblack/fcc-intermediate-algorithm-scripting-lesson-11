// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Convert HTML Entities</h1>`;

/**
 * Convert the characters &, <, >, " (double quote), and ' (apostrophe), in a string to their corresponding HTML entities.
 */

function convertHTML(str) {
  const chrObj = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&apos;',
  };
  // const regex = /[^\w\s]/g;
  let retStr = str;
  for (let i = 0; i < str.length; i++) {
    for (let j = 0; j < Object.keys(chrObj).length; j++) {
      // console.log(
      //   str[i],
      //   Object.keys(chrObj)[j],
      //   str[i] == Object.keys(chrObj)[j]
      // );
      if (str[i] == Object.keys(chrObj)[j]) {
        retStr = retStr.replaceAll(
          Object.keys(chrObj)[j],
          Object.values(chrObj)[j]
        );
      }
    }
  }
  return retStr;
}

console.log(convertHTML('Dolce & Gabbana'));
console.log(convertHTML('Hamburgers < Pizza < Tacos'));
console.log(convertHTML('Sixty > twelve'));
console.log(convertHTML('Stuff in "quotation marks"'));
console.log(convertHTML("Schindler's List"));
console.log(convertHTML('<>'));
console.log(convertHTML('abc'));
