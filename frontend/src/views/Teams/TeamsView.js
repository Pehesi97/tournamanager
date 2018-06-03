/* React Imports */
import React, { Component } from 'react';

/* Effects Imports */
import Fade from '@material-ui/core/Fade';

/* Grid */
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

/* Navigation */
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import InfoIcon from '@material-ui/icons/Info';
import ViewListIcon from '@material-ui/icons/ViewList';
import ContactMailIcon from '@material-ui/icons/ContactMail';

/* Card */
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

class TeamsView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 0,
        }
    }

    handleChange = (event, value) => {
        this.setState({ value });
    };    

    render() {
        return (
            <Fade in={true}>
                <div>
                    <Grid container spacing={8}>
                        <Grid item xs={12}>
                            <Paper>
                                <Tabs
                                value={this.state.value}
                                onChange={this.handleChange}
                                fullWidth
                                indicatorColor="secondary"
                                textColor="secondary"
                                centered
                                >
                                <Tab label="Sumário" icon={<InfoIcon />} />
                                <Tab label="Lista de Membros" icon={<ViewListIcon />} />
                                <Tab label="Contato" icon={<ContactMailIcon />} />
                                </Tabs>
                            </Paper>
                        </Grid>
                        <Grid item xs={12}>
                        </Grid>
                    </Grid>
                </div>
            </Fade>
        );
    }
}

export default TeamsView;