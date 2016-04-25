import React from 'react';
import { connect } from 'react-redux'
import { browserHistory } from 'react-router'
import Explore from '../components/Explore';

export default class App extends React.Component {

    render() {
        const {children} = this.props;
        return (
            <div>
                <Explore />
                <hr />
                {children}
            </div>
        )
    }
}