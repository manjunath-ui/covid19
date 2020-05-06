import React from 'react';

export default class Hospital extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            issues: [
                // This is just sample data, real data should be retrieved from the Backend
                {
                    symptom: "Cold",
                    description: "Having running nose for a few days",
                    patientId: '12345'
                },
                {
                    symptom: "Breathlessness",
                    description: "feeling breathless after exerting even a mild effort into physical activity",
                    patientId: '24231'
                }
            ],
            availableAmbulances: [
                "AMB1",
                "AMB2",
                "AMB3",
                "AMB4"
            ],
            selectedAmbulance: "None"
        }
    } 

    componentDidMount() {
        // Make an API call to retrieve the list of issues in the neighbourhood of the hospital
    }

    dispatchAmbulance = () => {
        console.log(this.state.selectedAmbulance);
    }

    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                <select value={this.state.selectedAmbulance} onChange={this.handleChange} name='selectedAmbulance'>
                    <option value="None" disabled={true}>Ambulances</option>
                    {
                        this.state.availableAmbulances.map( (ambulance, index) => {
                            return (
                                <option value={ambulance} key={index}>
                                    {ambulance}
                                </option>
                            )
                        })
                    }
                </select>
                <ul>
                    {
                        this.state.issues.map( (issue, index) => {
                            return (
                                <li key={index}>
                                    <h4>
                                        {issue.symptom}
                                    </h4>
                                    <div>
                                        {issue.description}
                                    </div>
                                    <button onClick={this.dispatchAmbulance} disabled={this.state.selectedAmbulance === "None"}>Dispatch</button>
                                </li>
                            )
                        })
                    }
                </ul>
            </div> 
        )
    }
}