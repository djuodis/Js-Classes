// 1 UŽDUOTIS

function Movie(name, year, director, budget, income) {
    this.name = name 
    this.year = year 
    this.director = director 
    this.budget = budget 
    this.income = income 
  }
  
  Movie.prototype.getIntroduction = function() {
    return this.name + ' ' + this.year + ' ' + this.director 
  } 
  
  Movie.prototype.getProfit = function() {
    return this.income - this.budget 
  } 

  var movie = new Movie('Kovos klubas', 1999, 'David Fincher', 63000000, 100900000) 

  console.log(movie.getIntroduction())
  console.log(movie.getProfit())
  

  console.log('========&&======')



//   2.1 UŽDUOTIS

class Car {
    constructor(marke, model, year) {
      this.marke = marke
      this.model = model
      this.year = year
    }
  
    getIntroduction() {
        return `${this.marke} ${this.model}`
    }
  
    getAge() {
        const currentYear = new Date().getFullYear()
        const age = currentYear - this.year
        return (age <= 10) ? '10 metų arba naujesnis' : '11 metų arba senesnis'
      }
  }

const car1 = new Car('Audi', 'A6', 2007 )
console.log(car1.getIntroduction())
console.log(car1.getAge())



console.log('========&&======')


// 2.2 UŽDUOTIS
class Motorcycle extends Car {
    constructor(marke, model, year, wheels){
        super(marke, model, year)
        this.wheels = wheels
    }
    getWheelsNumber(){
        if(this.wheels === 2){
        return ("Motociklas turi du ratus")
        }
        else if (this.wheels === 3)
        return ("Motociklas turi tris ratus")
    }
}
const motorcycle1 = new Motorcycle('Kawasaki' , 'NINJA H2R', 2023, 2 )

console.log(motorcycle1.getIntroduction())
console.log(motorcycle1.getAge())
console.log(motorcycle1.getWheelsNumber())