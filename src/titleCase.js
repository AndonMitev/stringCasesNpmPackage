module.exports = (word, wordIdx, ch, chIdx) => {
  if (chIdx === 0) {
    return ch.toUpperCase();
  } else if (chIdx === word.length - 1) {
    return ch.toLowerCase() + ' '
  }
  return ch.toLowerCase();
}