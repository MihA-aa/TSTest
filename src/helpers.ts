import { Step } from "./data";

const distinct = (value: any, index: number, self: any): boolean => 
    self.indexOf(value) === index;

const getModelFromSteps = (steps: Step[]) => {
    const model: any = {};
    for (const step of steps) {
        model[step.type] = '';
    }
    return model;
}

const flexFilter = (array: any, filter: any): any => {
	let newArray;
	Object.keys(filter).forEach(key => {
		newArray = array.filter((e: any) => e[key.toLowerCase()] === filter[key])
	});
	return newArray;
}

export {
    distinct,
    flexFilter,
    getModelFromSteps,
}