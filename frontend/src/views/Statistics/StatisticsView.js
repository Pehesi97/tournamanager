/* React Imports */
import React, { Component } from 'react';

/* Effects Imports */
import Fade from '@material-ui/core/Fade';

class StatisticsView extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fade in={true}>
                <p>StatisticsView</p>
            </Fade>
        );
    }
}

export default StatisticsView;