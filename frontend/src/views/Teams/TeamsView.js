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
import Tooltip from '@material-ui/core/Tooltip';

/* Dialog */
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';

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

/* Esta funcao é a que gera o numero de membros, tem uqe ser implementada com a API */
  function generate(element) {
    return [0, 1, 2].map(value =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
/* Define as propriedades da transicao */
  function Transition(props) {
    return <Slide direction="up" {...props} />;
  }

class TeamsView extends Component {
    state = {
        value: 0,
        diagOpen: false,
    };
    
      handleClickOpen = () => {
        this.setState({ diagOpen: true });
      };
    
      handleClose = () => {
        this.setState({ diagOpen: false });
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
                                </Tabs>
                                {value === 0 && <TabContainer>
                                    <Grid container spacing={8}>
                                    <Grid item xs={4}>
                                        <Image
                                            src="https://image.freepik.com/vetores-gratis/violet-wizard-e-sport-logo-team_22252-29.jpg"
                                        />
                                    </Grid>
                                    <Grid item xs={8}>
                                        <Typography Slide variant="headline" component="h3">
                                            Nome do Time
                                        </Typography>
                                        <Typography Fade component="p">
                                            Nome Admins
                                        </Typography>
                                        <br/>
                                        <Typography Slide variant="headline" component="h3">
                                            Contato
                                        </Typography>
                                        <Typography Fade component="p">
                                            <b>Email:</b> wizard@abc.com.br
                                        </Typography>
                                        <Typography Fade component="p">
                                            <b>Twitter:</b> @WizardTeam
                                        </Typography>
                                        <Typography Fade component="p">
                                            <b>Facebook:</b> WizardLOL
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
                                            <ListItemIcon>
                                            <Tooltip id="tooltip-icon" title="Contato">
                                                <IconButton onClick={this.handleClickOpen} aria-label="Contato">
                                                <ContactMailIcon />
                                                </IconButton>
                                            </Tooltip>
                                            </ListItemIcon>
                                            <ListItemText
                                            primary="Jose das cove"
                                            />
                                            <ListItemSecondaryAction>
                                            <Tooltip id="tooltip-icon" title="Delete">
                                            <IconButton disabled aria-label="Delete">
                                                <DeleteIcon />
                                            </IconButton>
                                            </Tooltip>
                                            </ListItemSecondaryAction>
                                        </ListItem>,
                                        )}
                                    </List>
                                    </div>
                                    <br/>
                                    <Typography variant="title">
                                        Reservas
                                    </Typography>
                                    <div>
                                    <List>
                                        {generate(
                                        <ListItem>
                                            <ListItemIcon>
                                            <Tooltip id="tooltip-icon" title="Contato">
                                                <IconButton onClick={this.handleClickOpen} aria-label="Contato">
                                                <ContactMailIcon />
                                                </IconButton>
                                            </Tooltip>
                                            </ListItemIcon>
                                            <ListItemText
                                            primary="Jose dos alface"
                                            />
                                            <ListItemSecondaryAction>
                                            <Tooltip id="tooltip-icon" title="Delete">
                                            <IconButton disabled aria-label="Delete">
                                                <DeleteIcon />
                                            </IconButton>
                                            </Tooltip>
                                            </ListItemSecondaryAction>
                                        </ListItem>,
                                        )}
                                    </List>
                                    </div>
                                    <Dialog
                                    open={this.state.diagOpen}
                                    TransitionComponent={Transition}
                                    keepMounted
                                    onClose={this.handleClose}
                                    aria-labelledby="alert-dialog-slide-title"
                                    aria-describedby="alert-dialog-slide-description"
                                    >
                                    <DialogTitle id="alert-dialog-slide-title">
                                        {"Informações do Membro"}
                                    </DialogTitle>
                                    <DialogContent>
                                        <DialogContentText id="alert-dialog-slide-description">
                                        <b>Nome:</b> João Lucas da Silva Ribeiro
                                        </DialogContentText>
                                        <DialogContentText id="alert-dialog-slide-description">
                                        <b>NickName:</b> jlribeiro-BR
                                        </DialogContentText>
                                        <DialogContentText id="alert-dialog-slide-description">
                                        <b>Email:</b> joaolucas.jlsr@gmail.com
                                        </DialogContentText>
                                        <DialogContentText id="alert-dialog-slide-description">
                                        <b>Registrado:</b> Sim
                                        </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                        <Button disabled onClick={this.handleClose} color="primary">
                                        Editar
                                        </Button>
                                        <Button onClick={this.handleClose} color="primary">
                                        Close
                                        </Button>
                                    </DialogActions>
                                    </Dialog>
                                </TabContainer>}
                            </Paper>
                        </Grid>
                    </Grid>
                </div>
            </Fade>
        );
    }
}

export default TeamsView;