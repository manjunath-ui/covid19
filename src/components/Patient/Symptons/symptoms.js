import React from 'react';

export default class Symptoms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            symptoms: [
                'Fever', 
                'Breathlessness',
                'Cold',
                'Cough',
                'None'
            ]
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.history.push('/patient/description');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    {
                        this.state.symptoms.map( (symptom, index) => (
                            <label key={index}>
                                <input type="checkbox" checked={index === this.props.selected} onChange={() => this.props.handleChange(index)}/>
                                {symptom}
                                <br/>
                            </label>
                        ))
                    }
                    <input type="submit" disabled={this.props.selected === 4}/>
                </form>
            </div>
        )
    }
}