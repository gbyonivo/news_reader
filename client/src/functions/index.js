export const filterList = (list, filterText, property) =>
  list.filter(item => item[property].toUpperCase().match(filterText.toUpperCase()));
