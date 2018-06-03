/* React Imports */
import React, { Component } from 'react';

/* Effects Imports */
import Fade from '@material-ui/core/Fade';

class TeamsView extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fade in={true}>
                <p>TeamsView</p>
            </Fade>
        );
    }
}

export default TeamsView;