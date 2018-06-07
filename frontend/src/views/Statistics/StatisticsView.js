/* React Imports */
import React, { Component } from 'react';

/* Material-ui imports */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

// Card Imports
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';

/* HTTP Imports */
import axios from 'axios';

/* Effects Imports */
import Fade from '@material-ui/core/Fade';

class StatisticsView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            totalMatches: {}
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/statistics/totalMatches').then(res => {
            this.setState({
                totalMatches: res.data,
            });
        });
    }

    render() {
        return (
            <Fade in={true}>
                <Grid item xs={4}>
                    <Card>
                        <CardHeader title="Total de jogos">
                        </CardHeader>
                        <CardContent>
                            <Typography variant="body2">{this.state.totalMatches.count}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            </Fade>
        );
    }
}

export default StatisticsView;