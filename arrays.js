var chocolateBars = ['snickers', 'hundred grand', 'kitkat', 'skittles']

function addElementToBeginningOfArray (arr, element) {
  return [element, ...arr]
}

function destructivelyAddElementToBeginningOfArray (arr, element) {
  arr.unshift(element)
  return arr
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

function removeElementFromBeginningOfArray(arr) {
  return arr.slice(1)
}

function destructivelyRemoveElementFromEndOfArray(arr) {
  arr.pop()
  return arr
}

function removeElementFromEndOfArray(arr) {
  return arr.slice(0, length(arr) - 1)
}
