const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name){
  drivers.push("Ralph");
}

function destructivelyPrependDriver(name){
  drivers.unshift("Bob");
} 