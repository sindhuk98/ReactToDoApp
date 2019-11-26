import React, { Component } from 'react';


class Name extends Component {
    state = {
        input: ''
    }
    //Handle Change
    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    };

    //Handle Submit
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.name(this.state.input);
        this.setState({
            input: ''
        });
    };
    render() {
        return (
            <div class="container">
                <div className="row">
                    <div class="col s6 offset-s3">
                        <input type="text" value={this.state.input} onChange={this.handleChange} placeholder="Enter your name" />
                    </div>
                    <div class="col s6 offset-s5">
                        <input type="submit" value="Submit" onClick={this.handleSubmit} />
                    </div>
                </div>
            </div>
        )
    }
}

export default Name;
