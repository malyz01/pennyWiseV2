import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import { NavigationFullscreenExit } from 'material-ui/svg-icons';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      textAlign: 'center'
    }
  })
);

export const sFooterItems = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0 1em'
    }
  })
);