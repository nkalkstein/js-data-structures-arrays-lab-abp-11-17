const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name) {
  drivers.unshift("Bob");
}

function destructivelyRemoveLastDriver() {
  drivers.pop()
}

function destructivelyRemoveFirstDriver() {
  drivers.shift()
}

function appendDriver(name) {
  newList = [...drivers.slice(0), name]
  return newList
}

function prependDriver(name) {
  newList = [name, ...drivers.slice(0)]
  return newList
}

function removeLastDriver() {
  newList = drivers.slice(0, drivers.length-1)
  return newList
}

function removeFirstDriver() {
  newList = drivers.slice(1, drivers.length)
  return newList
}
