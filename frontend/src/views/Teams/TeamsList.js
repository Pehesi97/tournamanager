/* React Imports */
import React, { Component } from 'react';

/* Effects Imports */
import Fade from '@material-ui/core/Fade';

/* Grid */
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

/* List */
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { NavLink } from 'react-router-dom';
import Button from '@material-ui/core/Button';

/* Search */
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Search from '@material-ui/icons/Search';

/* HTTP Imports */
import axios from 'axios';

function generate(element) {
    return [0, 1, 2].map(value =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

class TeamsList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            team: [],
        }
    }

    componentDidMount() {
        axios.get('http://localhost:3000/api/team').then(res => {
            this.setState({
                team: this.state.team.concat(res.data),
            });
        });
    }

    render(){
        return (
        <Fade in={true}>
            <Grid container spacing={16}>
            <Grid item xs={12}>
            <Typography variant="title">
                Lista dos Times
            </Typography>
            </Grid>
            <Grid item xs={10}>
                <TextField
                    fullWidth
                    id="input-with-icon-textfield"
                    label="Pesquise os Times"
                    InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                        <Search />
                        </InputAdornment>
                    ),
                    }}
                />
            </Grid>
            <Grid item xs={2}>
                <Button variant="raised" color="primary" style={{width:'100%', height:45}}>Procurar</Button>
            </Grid>
            <Grid item xs={12}>
                <div>
                <List>
                {this.state.team.map(team => {
                        return(
                            <ListItem>
                                    <ListItemAvatar>
                                    <Avatar alt="Wizard" src={team.logo} />
                                    </ListItemAvatar>
                                    <ListItemText
                                    primary={team.name}
                                    />
                                <NavLink to="/teams/view" >
                                <Button color="secondary">
                                    Profile
                                </Button>
                                </NavLink>
                            </ListItem>
                    );
                })}
                </List>
                </div>
            </Grid>
        </Grid>
        </Fade>
        );
    }
}

export default TeamsList;