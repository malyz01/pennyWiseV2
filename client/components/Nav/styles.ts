import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      height: '100px',
      background: 'black',
      color: 'white',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }
  })
);
