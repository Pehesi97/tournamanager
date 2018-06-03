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

/* Image */
import Image from 'material-ui-image'
import Typography from '@material-ui/core/Typography';
import { AppBar } from '@material-ui/core';

/* List */
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

function TabContainer(props) {
    return (
      <Typography component="div" style={{ padding: 8 * 3 }}>
        {props.children}
      </Typography>
    );
  }
  
  TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
  };
  
  const styles = theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  });

  function generate(element) {
    return [0, 1, 2].map(value =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }

class TeamsView extends Component {
    state = {
        value: 0,
    };

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
        const { classes } = this.props;
        const { value } = this.state;
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
                                {value === 0 && <TabContainer>
                                    <Grid container spacing={8}>
                                    <Grid item xs={4}>
                                        <Image
                                            src="https://image.freepik.com/vetores-gratis/violet-wizard-e-sport-logo-team_22252-29.jpg"
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography Fade variant="headline" component="h3">
                                            Nome do Time
                                        </Typography>
                                        <Typography Fade component="p">
                                            Nome Admins
                                        </Typography>
                                    </Grid>
                                    </Grid>
                                </TabContainer>}
                                {value === 1 && <TabContainer>
                                    <Typography variant="title">
                                        Membros Plenos
                                    </Typography>
                                    <div>
                                    <List>
                                        {generate(
                                        <ListItem>
                                            <ListItemAvatar>
                                            <Avatar>
                                                <ContactMailIcon />
                                            </Avatar>
                                            </ListItemAvatar>
                                            <ListItemText
                                            primary="Jose das cove"
                                            />
                                            <ListItemSecondaryAction>
                                            <IconButton aria-label="Delete">
                                                <DeleteIcon />
                                            </IconButton>
                                            </ListItemSecondaryAction>
                                        </ListItem>,
                                        )}
                                    </List>
                                    </div>
                                </TabContainer>}
                                {value === 2 && <TabContainer>
                                    <Typography Fade component="p">
                                        <b>Email:</b> wizard@abc.com.br
                                    </Typography>
                                    <Typography Fade component="p">
                                        <b>Twitter:</b> @WizardTeam
                                    </Typography>
                                    <Typography Fade component="p">
                                        <b>Facebook:</b> WizardLOL
                                    </Typography>
                                </TabContainer>}
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