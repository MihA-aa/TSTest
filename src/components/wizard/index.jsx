import React from 'react'

import { Step } from '../step'
import  * as helpers from '../../helpers'
import { Buttons } from '../buttons'
import { Result } from '../result'

import './styles.css'

export default class Wizard extends React.Component {
    constructor(props){
        super(props);
        
		this.steps = this.props.steps;
		this.data = this.props.data;
        this.state = {
            currentStepNumber: 1,
            model: helpers.getModelFromSteps(this.steps)
        };
    }
    
	getCurrentStep = () =>
		this.steps.find(step => step.order === this.state.currentStepNumber);

    currentStepIsDirty = () => 
        this.state.currentStepNumber > this.steps.length
        || this.getFilteredOptions().includes(this.state.model[this.currentStep.type]);
    
    nextStep = () => {
        this.setState((prevState) => ({ currentStepNumber: ++prevState.currentStepNumber }))
    };

    previousStep = () => {
        this.setState((prevState) => ({ currentStepNumber: --prevState.currentStepNumber }));
    }

    setStepValue = value => {
        this.setState((prevState) => ({
            model: { ...prevState.model, [this.currentStep.type]: value}
        }));
    }

    getTitle = () =>
        this.state.currentStepNumber > this.steps.length
            ? 'Result'
            : this.currentStep.type;

    render(){
        this.currentStep = this.getCurrentStep();
        return (
            <div id='wizard'>
                <fieldset>
		            <legend>{this.getTitle()}</legend>
                    {this.state.currentStepNumber <= this.steps.length
                        ? <Step
                            options={this.getFilteredOptions()}
                            setStepValue={this.setStepValue}
                            stepValue={this.state.model[this.currentStep.type]}
                        />
                        : <Result model={this.state.model}/>
                    }
                </fieldset>
                <Buttons
                    previousButtonIsVisible={this.state.currentStepNumber !== 1}
                    nextButtonIsVisible={this.state.currentStepNumber <= this.steps.length}
                    nextButtonIsDisable={!this.currentStepIsDirty()}
                    nextButtonOnClick={this.nextStep}
                    previousButtonOnClick={this.previousStep}
                />
            </div>
        );
    }
    
    getFilteredOptions(){
		let options = this.data;
		let filterModel = {};
		var filterTypes = this.steps
			.filter(step => step.order < this.currentStep.order)
			.map(step => step.type);
		filterTypes.forEach(filter => { filterModel[filter] = this.state.model[filter] });

        const firstFilterKey = Object.keys(filterModel)[0];
        if(firstFilterKey && filterModel[firstFilterKey]){
            options = helpers.flexFilter(options, filterModel);
        }
        
        return options
            .map(model => model[this.currentStep.type].value)
            .filter(helpers.distinct);
    }
}