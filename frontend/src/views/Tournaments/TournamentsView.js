/* React Imports */
import React, { Component } from 'react';

/* Material-ui imports */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
// Card Imports
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

/* HTTP Imports */
import axios from 'axios';

/* Effects Imports */
import Fade from '@material-ui/core/Fade';

class TournamentsView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            tournaments: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/tournaments').then(res => {
            this.setState({
                tournaments: this.state.tournaments.concat(res.data),
            });
        });
    }

    render() {
        return (
            <Fade in={true}>
                <Grid container spacing={8}>
                    {this.state.tournaments.map(tournament => {
                        return(
                            <Grid item xs={4}>
                                <Card>
                                    <CardContent>
                                        <Typography variant="body2">{tournament.game}</Typography>
                                    </CardContent>
                                </Card>
                            </Grid>
                        );
                    })}
                </Grid>
            </Fade>
        );
    }
}

export default TournamentsView;