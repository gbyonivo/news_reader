/**
 * @param {array} list - list of objects
 * @param {string} filterText - any text
 * @param {string} property - property common to all objects
 * @returns {array}
 */
export const filterList = (list, filterText, property) =>
  list.filter(item => item[property].toUpperCase().match(filterText.toUpperCase()));
