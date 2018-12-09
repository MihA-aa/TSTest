const distinct = (value, index, self) => 
    self.indexOf(value) === index;

const getModelFromSteps = (steps) => {
    const model = {};
    for (const step of steps) {
        model[step.type] = '';
    }
    return model;
}

const flexFilter = (array, filter) => {
	let newArray;
	Object.keys(filter).forEach(key => {
		newArray = array.filter((e) => e[key].value === filter[key])
	});
	return newArray;
}

export {
    distinct,
    flexFilter,
    getModelFromSteps,
}