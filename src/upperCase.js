module.exports = (word, wordIdx, ch, chIdx) => {
  if (chIdx === word.length - 1) {
    return ch.toUpperCase() + ' ';
  }
  return ch.toUpperCase();
}