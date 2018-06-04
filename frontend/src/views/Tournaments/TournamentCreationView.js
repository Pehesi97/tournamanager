/* React imports */
import React, { Component } from 'react';

/* Material componets imports */
import { Grid, Typography, Stepper, Step, StepLabel, Card, CardActions, CardContent, Button } from '@material-ui/core';

/* Router imports */
import { NavLink } from "react-router-dom";

/* HTTP Imports */
import axios from 'axios';

/* Effects Imports */
import Fade from '@material-ui/core/Fade';

class TournamentCreationView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            activeStep: 0,
        }
    }

    firstStep() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="body2">Formulario 1</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="raised" color="primary" onClick={this.handleNextStep}>Próximo</Button>
                </CardActions>
            </Card>
        );
    }
    
    secondStep() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="body2">Formulario 2</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="raised" color="primary" onClick={this.handleBackStep}>Anterior</Button>
                    <Button variant="raised" color="primary" onClick={this.handleNextStep}>Próximo</Button>
                </CardActions>
            </Card>
        );
    }
    
    thirdStep() {
        return (
            <Card>
                <CardContent>
                    <Typography variant="body2">Formulario 3</Typography>
                </CardContent>
                <CardActions>
                    <Button variant="raised" color="primary" onClick={this.handleBackStep}>Anterior</Button>
                </CardActions>
            </Card>
        );
    }

    handleBackStep = () => {
        if(this.state.activeStep > 0)
            this.setState({
                activeStep: this.state.activeStep - 1,
            });
    }

    handleNextStep = () => {
        this.setState({
            activeStep: this.state.activeStep + 1,
        });
    }

    getSteps() {
        return [
            'Adicione uma imagem e crie um nome bem legal', 
            'Fale um pouco sobre esse torneio com a gente', 
            'Estamos, quase terminando, agora é só contar pro mundo'
        ];
    }

    getStepContent(stepIndex) {
        switch (stepIndex) {
            case 0:
                return this.firstStep();
            case 1:
                return this.secondStep();
            case 2:
                return this.thirdStep();
        }
    }

    render() {
        var steps = this.getSteps();

        return(
            <Grid container spacing={8}>
                <Grid item xs={12}>
                    <Stepper activeStep={this.state.activeStep} alternativeLabel elevation={2}>
                        {steps.map(label => {
                            return (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                            );
                        })}
                    </Stepper>
                </Grid>
                <Grid item xs={12}>
                    {this.getStepContent(this.state.activeStep)}
                </Grid>
            </Grid>
        );
    }
}

export default TournamentCreationView;