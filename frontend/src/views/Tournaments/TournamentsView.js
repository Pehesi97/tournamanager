/* React Imports */
import React, { Component } from 'react';

/* Effects Imports */
import Fade from '@material-ui/core/Fade';

class TournamentsView extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    render() {
        return (
            <Fade in={true}>
                <p>TournamentsView</p>
            </Fade>
        );
    }
}

export default TournamentsView;