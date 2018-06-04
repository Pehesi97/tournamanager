/* React Imports */
import React, { Component } from 'react';

/* Material-ui imports */
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
// Card Imports
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';

/* Router imports */
import { NavLink } from "react-router-dom";

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
                    <Grid item xs={10}>
                        <TextField label="Pesquise pelo nome" style={{width: '100%'}}/>
                    </Grid>
                    <Grid item xs={2}>
                        <NavLink to="/tournaments/new">
                            <Button variant="raised" color="primary" style={{width:'100%', height:45}}>Novo</Button>
                        </NavLink>
                    </Grid>
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