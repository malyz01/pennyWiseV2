import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      height: '100px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
);
