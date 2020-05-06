import React from 'react';

export default class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '', 
            password: '',
            accountType: 'patient'
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        if(this.state.accountType === 'patient')
            this.props.history.push('/patient/symptoms');
        else 
            this.props.history.push('/hospital/issues');
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        Email:
                        <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder="abc@xyz.mn"/>
                    </label>
                    <br/>
                    <label>
                        Password:
                        <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                    </label>
                    <br/>
                    <select value={this.state.accountType} onChange={this.handleChange} name="accountType">
                        <option value="patient">Patient</option>
                        <option value="hospital">Hospital</option>
                    </select>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    }
}