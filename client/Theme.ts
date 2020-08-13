import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Ubuntu',
    h1: {
      fontFamily: 'Boogaloo'
    },
    h2: {
      fontFamily: 'Boogaloo'
    },
    h3: {
      fontFamily: 'Boogaloo'
    }
  },
  palette: {
    primary: {
      main: '#00A6A4'
    },
    secondary: {
      main: '#d1a435'
    },
    neutral: {
      main: '#faf6f6'
    }
  }
});

declare module '@material-ui/core/styles/createPalette' {
  interface Palette {
    neutral: Palette['primary'];
  }
  interface PaletteOptions {
    neutral: PaletteOptions['primary'];
  }
}

export default theme;
