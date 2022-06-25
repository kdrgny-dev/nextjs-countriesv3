export const removeEmptySpaceFromString = (str) => {
  return str.replace(/\s+/g, '-').toLowerCase()
}