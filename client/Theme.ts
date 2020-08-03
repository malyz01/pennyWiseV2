import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Ubuntu',
    h1: {
      fontFamily: 'Boogaloo'
    },
    h2: {
      fontFamily: 'Boogaloo'
    }
  },
  palette: {
    primary: {
      main: '#00A6A4'
    },
    secondary: {
      main: '#d1a435'
    }
  }
});

export default theme;
