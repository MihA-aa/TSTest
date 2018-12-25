import React, { ReactNode } from 'react'

import { Step } from '../step'
import  * as helpers from '../../helpers'
import { Buttons } from '../buttons'
import { Result } from '../result'
import { Step as StepModel, Car } from '../../data';

import './styles.css'

interface WizardProps {
    steps: StepModel[];
    data: Car[];
}

interface WizardState {
    currentStepNumber: number;
    model: any
}

export default class Wizard extends React.Component<WizardProps, WizardState> {
    private steps: StepModel[];
    private data: Car[];
    private currentStep: StepModel;

    constructor(props: WizardProps) {
        super(props);
        
		this.steps = this.props.steps;
		this.data = this.props.data;
        this.state = {
            currentStepNumber: 1,
            model: helpers.getModelFromSteps(this.steps)
        };
        this.currentStep = this.getCurrentStep();
    }
    
	getCurrentStep = (): StepModel =>
		this.steps.find(step => step.order === this.state.currentStepNumber)!;

    currentStepIsDirty = (): boolean => 
        this.state.currentStepNumber > this.steps.length
        || this.getFilteredOptions().includes(this.state.model[this.currentStep.type]);
    
    nextStep = (): void => {
        this.setState((prevState) => ({ currentStepNumber: prevState.currentStepNumber + 1 }))
    };

    previousStep = (): void => {
        this.setState((prevState) => ({ currentStepNumber: prevState.currentStepNumber - 1 }));
    }

    setStepValue = (value: string) => (): void => {
        this.setState((prevState) => ({
            model: { ...prevState.model, [this.currentStep.type]: value}
        }));
    }

    getTitle = (): string =>
        this.state.currentStepNumber > this.steps.length
            ? 'Result'
            : this.currentStep.type;

    render(): ReactNode {
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
		let filterModel: any = {};
		var filterTypes = this.steps
			.filter(step => step.order < this.currentStep.order)
			.map(step => step.type);
		filterTypes.forEach(filter => { filterModel[filter] = this.state.model[filter] });

        const firstFilterKey = Object.keys(filterModel)[0];
        if(firstFilterKey && filterModel[firstFilterKey]){
            options = helpers.flexFilter(options, filterModel);
        }
        
        return options
            .map((model: any) => model[this.currentStep.type.toLowerCase()])
            .filter(helpers.distinct);
    }
}