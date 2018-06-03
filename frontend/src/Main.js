/* React import */
import React, { Component } from "react";

/* Material design import */
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { createMuiTheme } from '@material-ui/core/styles';

/* Parts imports */
import MiniDrawer from './parts/Template';

class Main extends Component {
  render() {
    return (
        <MuiThemeProvider>
            <MiniDrawer />
        </MuiThemeProvider>
    );
  }
}
 
export default Main;