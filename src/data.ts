export class Car {
	constructor(
		public brand: string,
		public model: string,
		public fuel: Fuel,
		public transmission: Transmission
	) {}
}

export class Step {
	constructor(
		public type: Steps,
		public order: number,
	) {}
}

class Brand {
	constructor(
		public name: string,
		public models: string[]
	) {}
}

enum Fuel {
	Petrol = 'Petrol',
	Diesel = 'Diesel',
	Electricity = 'Electricity',
}

enum Transmission {
	Mechanical = 'Mechanical',
	Auto = 'Auto',
	Robotic = 'Robotic',
}

enum Steps {
	Brand = 'Brand',
	Model = 'Model',
	Fuel = 'Fuel',
	Transmission = 'Transmission',
}

const BMW = new Brand('BMW', ['M2', 'M3']);
const Audi = new Brand('Audi', ['A4', 'A6'])
const Ford = new Brand('Ford', ['Fiesta', 'Focus', 'Mustang'])

export const steps = [
	new Step(Steps.Brand, 1),
	new Step(Steps.Model, 2),
	new Step(Steps.Fuel, 3),
	new Step(Steps.Transmission, 4)
];

export const data = [
	new Car(BMW.name, BMW.models[0], Fuel.Petrol, Transmission.Mechanical),
	new Car(BMW.name, BMW.models[0], Fuel.Petrol, Transmission.Auto),
	new Car(BMW.name, BMW.models[0], Fuel.Petrol, Transmission.Robotic),
	new Car(BMW.name, BMW.models[0], Fuel.Diesel, Transmission.Mechanical),
	new Car(BMW.name, BMW.models[0], Fuel.Diesel, Transmission.Auto),
	new Car(BMW.name, BMW.models[0], Fuel.Electricity, Transmission.Auto),
	new Car(BMW.name, BMW.models[1], Fuel.Petrol, Transmission.Mechanical),
	new Car(BMW.name, BMW.models[1], Fuel.Petrol, Transmission.Auto),
	new Car(BMW.name, BMW.models[1], Fuel.Petrol, Transmission.Robotic),
	new Car(BMW.name, BMW.models[1], Fuel.Diesel, Transmission.Mechanical),
	new Car(BMW.name, BMW.models[1], Fuel.Diesel, Transmission.Auto),
	new Car(BMW.name, BMW.models[1], Fuel.Electricity, Transmission.Auto),
	new Car(BMW.name, BMW.models[1], Fuel.Petrol, Transmission.Robotic),
	new Car(Audi.name, Audi.models[0], Fuel.Petrol, Transmission.Mechanical),
	new Car(Audi.name, Audi.models[0], Fuel.Petrol, Transmission.Auto),
	new Car(Audi.name, Audi.models[0], Fuel.Petrol, Transmission.Robotic),
	new Car(Audi.name, Audi.models[0], Fuel.Diesel, Transmission.Mechanical),
	new Car(Audi.name, Audi.models[0], Fuel.Diesel, Transmission.Auto),
	new Car(Audi.name, Audi.models[0], Fuel.Electricity, Transmission.Auto),
	new Car(Audi.name, Audi.models[0], Fuel.Petrol, Transmission.Robotic),
	new Car(Ford.name, Ford.models[0], Fuel.Petrol, Transmission.Mechanical),
	new Car(Ford.name, Ford.models[0], Fuel.Petrol, Transmission.Robotic),
	new Car(Ford.name, Ford.models[0], Fuel.Diesel, Transmission.Mechanical),
	new Car(Ford.name, Ford.models[0], Fuel.Diesel, Transmission.Auto),
	new Car(Ford.name, Ford.models[0], Fuel.Electricity, Transmission.Auto),
	new Car(Ford.name, Ford.models[0], Fuel.Electricity, Transmission.Robotic),
	new Car(Ford.name, Ford.models[1], Fuel.Diesel, Transmission.Auto),
	new Car(Ford.name, Ford.models[1], Fuel.Petrol, Transmission.Robotic),
	new Car(Ford.name, Ford.models[2], Fuel.Electricity, Transmission.Auto),
	new Car(Ford.name, Ford.models[2], Fuel.Electricity, Transmission.Robotic),
	new Car(Ford.name, Ford.models[2], Fuel.Petrol, Transmission.Auto),
	new Car(Ford.name, Ford.models[2], Fuel.Petrol, Transmission.Robotic), 
	new Car(Audi.name, Audi.models[1], Fuel.Petrol, Transmission.Auto),
	new Car(Audi.name, Audi.models[1], Fuel.Petrol, Transmission.Mechanical),
	new Car(Audi.name, Audi.models[1], Fuel.Diesel, Transmission.Mechanical), 
	new Car(Audi.name, Audi.models[1], Fuel.Diesel, Transmission.Auto),
];