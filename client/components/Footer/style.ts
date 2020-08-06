import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { NavigationFullscreenExit } from 'material-ui/svg-icons';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      textAlign: 'center'
    },
    conetentContainer1: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 1em'
    }
  })
);