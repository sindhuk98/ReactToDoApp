import React, { Component } from 'react';


class ToDoForm extends Component {
    state = {
        title: '',
        list: []
    }

    //Handle Change to Input text of Title
    handleTitleChange = (e) => {
        this.setState({
            title: e.target.value
        });
    };

    //Handle Change to List text 
    handleListChange = (e) => {
        this.setState({
            list: e.target.value.split(',')
        });
    };

    //Handle Submit of Form
    handleSubmit = (e) => {
        e.preventDefault();
        let todoObj = {
            title: this.state.title,
            list: this.state.list
        };
        this.props.todo(todoObj);
        this.setState({
            title: '',
            list: []
        })
    };
    render() {
        return (
            <div className="container">
                <div className="row">
                    <form onSubmit={this.handleSubmit}>
                        <fieldset className="center-align">
                            <legend>Create your ToDo</legend>
                            <label>Title</label><br />
                            <input type="text" name="title" value={this.state.title} onChange={this.handleTitleChange} /><br />
                            <label>List of ToDo</label><br />
                            <textarea name="list" placeholder="Comma separated List" value={this.state.list} onChange={this.handleListChange}></textarea><br />
                            <input type="submit" value="Create" onClick={this.handleSubmit} />
                        </fieldset>
                    </form>
                </div>
            </div>
        )
    }
}

export default ToDoForm;
