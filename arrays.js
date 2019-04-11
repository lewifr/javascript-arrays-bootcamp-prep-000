var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (arr, element) {
  arr.unshift(element)
  return arr
}

function destructivelyAddElementToBeginningOfArray (arr, element) {
  return [element, ...arr]
}

function addElementToEndOfArray (arr, element) {
  arr.push(element)
  return arr
}

function destructivelyAddElementToEndOfArray (arr, element) {
  return [...arr, element]
}

function accessElementInArray(arr, index) {
  return arr[index]
}

function destructivelyRemoveElementFromBeginningOfArray(arr) {
  arr.unshift()
  return arr
}
