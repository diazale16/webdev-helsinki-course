const object2 = {
  name: 'Full Stack web application development',
  level: 'intermediate studies',
  size: 5,
}

const object1 = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    studies: object2,
    location: {
      city: "Cordoba",
      province: "Cordoba pr."
    }
  }

const object3 = {
  name: {
    first: 'Dan',
    last: 'Abramov',
  },
  grades: [2, 3, 5, 3],
  department: 'Stanford University',
}

console.log(object1.partner)