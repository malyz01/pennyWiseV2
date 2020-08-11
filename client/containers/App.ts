import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sApp = makeStyles((theme: Theme) =>
  createStyles({
    fern: {
      height: '500px',
      right: '-20px',
      bottom: '0',
      position: 'absolute',
      zIndex: 'auto'
    }
  })
);