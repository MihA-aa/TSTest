class Property{
	constructor(type, value){
		this.type = type;
		this.value = value;
	}
}

class Car{
	constructor(brand, model, fuel, transmission) {
		this.brand = brand;
		this.model = model;
		this.fuel = fuel;
		this.transmission = transmission;
	}
}

class Step{
	constructor(type, order){
		this.type = type;
		this.order = order;
	}
}

const brand = 'brand';
const model = 'model'
const fuel = 'fuel'
const transmission = 'transmission'

class Brand extends Property{
	constructor(value) {
		super(brand, value)
	}
}

class Model extends Property{
	constructor(value) {
		super(model, value)
	}
}

class Fuel extends Property{
	constructor(value) {
		super(fuel, value)
	}
}

class Transmission extends Property{
	constructor(value) {
		super(transmission, value)
	}
}

const Mechanical = new Transmission('Mechanical')
const Auto = new Transmission('Auto')
const Robotic = new Transmission('Robotic')

const Petrol = new Fuel('Petrol')
const Diesel = new Fuel('Diesel')
const Electricity = new Fuel('Electricity')

const M2 = new Model('M2')
const M3 = new Model('M3')

const A4 = new Model('A4')
const A6 = new Model('A6')

const Fiesta = new Model('Fiesta')
const Focus = new Model('Focus')
const Mustang = new Model('Mustang')

const BMW = new Brand('BMW')
const Audi = new Brand('Audi')
const Ford = new Brand('Ford')

export const steps = [new Step(brand, 1), new Step(model, 2), new Step(fuel, 3), new Step(transmission, 4)];
export const data = [
	new Car(BMW, M2, Petrol, Mechanical), new Car(BMW, M2, Petrol, Auto), new Car(BMW, M2, Petrol, Robotic),
	new Car(BMW, M2, Diesel, Mechanical), new Car(BMW, M2, Diesel, Auto), new Car(BMW, M2, Electricity, Auto),
	new Car(BMW, M2, Petrol, Robotic), new Car(BMW, M3, Petrol, Mechanical), new Car(BMW, M3, Petrol, Auto),
	new Car(BMW, M3, Petrol, Robotic), new Car(BMW, M3, Diesel, Mechanical), new Car(BMW, M3, Diesel, Auto),
	new Car(BMW, M3, Electricity, Auto), new Car(BMW, M3, Petrol, Robotic), new Car(Audi, A4, Petrol, Mechanical),
	new Car(Audi, A4, Petrol, Auto), new Car(Audi, A4, Petrol, Robotic), new Car(Audi, A4, Diesel, Mechanical),
	new Car(Audi, A4, Diesel, Auto), new Car(Audi, A4, Electricity, Auto), new Car(Audi, A6, Petrol, Robotic),
	new Car(Ford, Fiesta, Petrol, Mechanical), new Car(Ford, Fiesta, Petrol, Robotic), new Car(Ford, Fiesta, Diesel, Mechanical),
	new Car(Ford, Fiesta, Diesel, Auto), new Car(Ford, Fiesta, Electricity, Auto), new Car(Ford, Fiesta, Electricity, Robotic),
	new Car(Ford, Focus, Diesel, Auto), new Car(Ford, Focus, Diesel, Auto), new Car(Ford, Focus, Petrol, Robotic),
	new Car(Ford, Mustang, Electricity, Auto), new Car(Ford, Mustang, Electricity, Robotic), new Car(Ford, Mustang, Petrol, Auto),
	new Car(Ford, Mustang, Petrol, Robotic), new Car(Audi, A6, Petrol, Auto), new Car(Audi, A6, Petrol, Mechanical),
	new Car(Audi, A6, Diesel, Mechanical), new Car(Audi, A6, Diesel, Auto), new Car(Audi, A6, Electricity, Auto)
];