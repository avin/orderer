import React from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'

export class App extends React.Component {

    render() {
        const { children, inputValue } = this.props
        return (
            <div>
                <Explore value={inputValue}
                         onChange={this.handleChange} />
                <hr />
                {children}
            </div>
        )
    }
}