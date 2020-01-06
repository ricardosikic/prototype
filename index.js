// Object prototype

let animal = {
  eat: true,
  walk() {
    alert("animal caminando");
  }
}

// [[prototype]]

let rabbit = {
  eat: true,
  __proto__: animal
}

console.log(rabbit.walk())