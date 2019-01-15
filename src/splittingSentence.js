const titleCase = require('./titleCase');
const lowerCase = require('./lowerCase');
const upperCase = require('./upperCase');
const pascalCase = require('./pascalCase');
const snakeCase = require('./snakeCase');

const validCases = {
  titleCase,
  lowerCase,
  upperCase,
  pascalCase,
  snakeCase
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

  if (formatCase = 'snakeCase') {
    const lastIndexOfUnderScore = output.lastIndexOf('_');
    //TODO: Remove last under score and replace it with empty string;
    return output.replace(output[lastIndexOfUnderScore], '');
  }
  return output.trim();
}