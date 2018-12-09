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
            currentStep: 1,
            model: helpers.getModelFromSteps(this.steps)
        };
    }
    
	getCurrentStep = () =>
		this.steps.find(step => step.order === this.state.currentStep);

    currentStepIsDirty = () =>
        this.getCurrentStep() && this.state.model[this.getCurrentStep().type];
    
    nextStep = () => {
        this.setState((prevState) => ({ currentStep: ++prevState.currentStep }))
    };

    previousStep = () => {
        this.setState((prevState) => ({ currentStep: --prevState.currentStep }));
    }

    setStepValue = value => {
        this.setState((prevState) => ({
            model: { ...prevState.model, [this.getCurrentStep().type]: value}
        }));
    }

    getTitle = () =>
        this.state.currentStep > this.steps.length
            ? 'Result'
            : this.getCurrentStep().type;

    render(){
        console.log(this.state.model);
        return (
            <div id='wizard'>
                <fieldset>
		            <legend>{this.getTitle()}</legend>
                    {this.state.currentStep <= this.steps.length
                        ? <Step
                            options={this.getFilteredOptions()}
                            setStepValue={this.setStepValue}
                        />
                        : <Result model={this.state.model}/>
                    }
                </fieldset>
                <Buttons
                    currentStep={this.state.currentStep}
                    stepsCount={this.steps.length}
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
		const currentStep = this.getCurrentStep();
		var filterTypes = this.steps
			.filter(step => step.order < currentStep.order)
			.map(step => step.type);
		filterTypes.forEach(filter => { filterModel[filter] = this.state.model[filter] })

        const firstFilterKey = Object.keys(filterModel)[0];
        if(firstFilterKey && filterModel[firstFilterKey]){
            options = helpers.flexFilter(options, filterModel);
        }
        
        return options
            .map(model => model[currentStep.type].value)
            .filter(helpers.distinct);
    }
}