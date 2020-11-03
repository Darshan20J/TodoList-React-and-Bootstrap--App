import React, { Component } from 'react'

export class AddTodo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            todoContent: ''
        }
    }

    onChangeHandler = event => {
        this.setState({ todoContent: event.target.value })
    }

    onSubmit = e => {
        this.props.addTodo(this.state.todoContent)
        this.setState({ todoContent: '' })
        e.preventDefault()
    }


    render() {
        return (
            <div className="container">
                <form className="form-inline" onSubmit={this.onSubmit}>
                    <div className="form-group ml-auto">
                        <input
                            onChange={this.onChangeHandler}
                            className="form-control"
                            type="text"
                            name="todo"
                            placeholder="Meeting with Boss..."
                            autoComplete="off"
                            value={this.state.todoContent}
                        ></input>

                    </div>
                    <div className="form-group mr-auto">
                        <input
                            className="btn btn-primary ml-2"
                            type="submit"
                            value="Add"
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default AddTodo
