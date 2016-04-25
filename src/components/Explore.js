import React from 'react';
import { Link } from 'react-router'

export default class Explore extends React.Component {
    render(){
        return (
            <div>
                <ul>
                    <li><Link to="/">Index</Link></li>
                    <li><Link to="/page">Page</Link></li>
                    <li><a href="/page">PAGE</a></li>
                </ul>
            </div>
        )
    }
}