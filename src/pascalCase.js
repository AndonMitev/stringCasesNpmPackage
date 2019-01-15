module.exports = (word, wordIdx, ch, chIdx) => {
  if (wordIdx === 0) {
    return ch.toLowerCase();
  } else {
    if (chIdx === 0) {
      return ch.toUpperCase();
    }
    return ch.toLowerCase();
  }
}