var animal = 'dog'

function myAnimal() {
  return animal
}

function yourAnimal() {
  var animal = 'cat'
  return animal
}

function add2() {
  const two = 2
  var n = 5
    return n + two
}

var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

function theFunk() {
  return function() {
    return funkyFunction
    
  }
}
