const titleCase = require('./titleCase');
const lowerCase = require('./lowerCase');
const upperCase = require('./upperCase');
const pascalCase = require('./pascalCase');

const validCases = {
  titleCase,
  lowerCase,
  upperCase,
  pascalCase
}

module.exports = (formatCase, sentence) => {
  let output = '';

  sentence
    .split(' ')
    .forEach((word, wordIdx) =>
      word
      .split('')
      .forEach((ch, chIdx) => {
        if (validCases[formatCase]) {
          output += validCases[formatCase](word, wordIdx, ch, chIdx);
        };
      }))


  return output.trim();
}