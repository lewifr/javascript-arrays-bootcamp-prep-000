var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (arr, element) {
  arr.unshift(element)
  return arr
}

function destructivelyAddElementToBeginningOfArray (arr, element) {
  return [element, ...arr]
}