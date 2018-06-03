/* React Imports */
import React, { Component } from 'react';

/* Material-ui imports */
import Grid from '@material-ui/core/Grid';
// Table Imports
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

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
        axios.get('localhost:3000/api/tournaments').then(res => {
            var stateHolder = this.state;
            stateHolder.tournaments.concat(res.data);
            this.setState(stateHolder);
        });
    }

    render() {
        return (
            <Fade in={true}>
                <Grid container spacing={8}>
                    <Grid item xs={12}>
                        <Paper>
                            <Table>
                                <TableHead>
                                    <TableRow>
                                        <TableCell>Nome</TableCell>
                                        <TableCell>Plataforma</TableCell>
                                        <TableCell>Jogo</TableCell>
                                        <TableCell>Início</TableCell>
                                        <TableCell>Término</TableCell>
                                        <TableCell>Actions</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {this.state.tournaments.map(tournament => {
                                        return(
                                            <TableRow key={tournament._id}>
                                                <TableCell>{tournament.name}</TableCell>
                                                <TableCell>{tournament.platform}</TableCell>
                                                <TableCell>{tournament.game}</TableCell>
                                                <TableCell>{tournament.startDate}</TableCell>
                                                <TableCell>{tournament.endDate}</TableCell>
                                                <TableCell>Actions</TableCell>
                                            </TableRow>
                                        );
                                    })}
                                </TableBody>
                            </Table>
                        </Paper>
                    </Grid>
                </Grid>
            </Fade>
        );
    }
}

export default TournamentsView;