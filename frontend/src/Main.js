/* React import */
import React, { Component } from "react";

/* Material design import */
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

/* Parts imports */
import MiniDrawer from './parts/Template';

/* Fontface imports */
import 'typeface-roboto';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#F44336',
    }
  },
});

class Main extends Component {
  render() {
    return (
        <MuiThemeProvider theme={theme}>
            <MiniDrawer />
        </MuiThemeProvider>
    );
  }
}
 
export default Main;