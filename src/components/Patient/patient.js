import React from 'react';
import {Route} from 'react-router-dom';
import Symptoms from './Symptons/symptoms';
import Description from './Description/description';

const symptoms =[
    'Fever', 
    'Breathlessness',
    'Cold',
    'Cough',
    'None'
];

export default class Patient extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 4,
            description: '',
        }
    }

    handleSymptomChange = (index) => {
        this.setState({selected: index })
    }

    handleDescriptionChange = (event) => {
        this.setState({description: event.target.value})
    }

    handleIssueSubmit = (event) => {
        event.preventDefault();
        console.log(symptoms[this.state.selected], this.state.description);
        // Here an api call with the token of the patient must be made to add an issue in the backend and assign a hospital
    }

    render() {
        return (
            <div>
                <Route path="/patient/symptoms" render={(props) => <Symptoms {...props} selected={this.state.selected} handleChange={this.handleSymptomChange}/>}/>
                <Route path="/patient/description" render={(props) => <Description {...props} description={this.state.description} handleChange={this.handleDescriptionChange} handleSubmit={this.handleIssueSubmit}/>}/>
            </div>
        )
    }
}