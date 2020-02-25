import React, { Component } from 'react';

class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term : ''
        }
    }
    // onInputChange = (e) => {
    //     this.setState({term: e.target.value})
    // }
    render() {
        const { onSubmit } = this.props;
        const { term } = this.state;
        return(
            <div className = "ui segment">
                <form className = "ui form" onSubmit = {() => onSubmit(term)}>
                    <div className = "field">
                        <label>Image search</label>
                      <input type = "text" value = {term}
                      onChange = {(e) =>  this.setState({term: e.target.value})} />
                    </div>
                 </form>
            </div>
        )
    }
}

export default SearchBar;