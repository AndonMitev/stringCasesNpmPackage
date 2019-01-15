const splittingSentenceToWords = require('./splittingSentence');

const caseConvertor = (formatCase, inputStr) => {
  if (!inputStr || typeof inputStr !== 'string') {
    throw new Error('Provide a string');
  }
  return splittingSentenceToWords(formatCase, inputStr);
}

console.log(caseConvertor('snakeCase', 'SAD da we'));