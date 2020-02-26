import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term : ''
        }
    }
    onFormSubmit = (event) => {
        const { onSubmit } = this.props;
        const { term } = this.state;
        event.preventDefault();
        onSubmit(term);
    }
    render() {
        const { term } = this.state;
        return(
            <div className = "ui segment">
                <form className = "ui form" onSubmit = {this.onFormSubmit}>
                    <div className = "field">
                        <label>Image search</label>
                      <input type = "text" value = {term}
                      onChange = {(event) =>  this.setState({term: event.target.value})} />
                    </div>
                 </form>
            </div>
        )
    }
}

export default SearchBar;