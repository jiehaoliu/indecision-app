// arguments object - no longer bound with arrow function

const add = (a, b) => {
    //console.log(arguments)
    return a+b
}

console.log(add(55,1,10001))

// this keyword - no longer bound

const user = {
    name: 'Jiehao',
    cities: ['toronto','vancouver','shanghai'],
    printPlacesLived(){
        return this.cities.map((city) => this.name + ' has lived in ' + city)
        
    }
}

console.log(user.printPlacesLived())

const multiplier = {
    numbers: [10,20,30],
    multiplyBy : 3,
    multiply(){
        return this.numbers.map((number) => this.multiplyBy*number)
    }
}

console.log(multiplier.multiply())