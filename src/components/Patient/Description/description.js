import React from 'react';

export default (props) => {
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <label>
                    Describe Your Illness:<br/>
                    <textarea onChange={props.handleChange} value={props.description} />
                </label>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    )
}