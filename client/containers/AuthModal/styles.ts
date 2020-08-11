import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sModal = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(2, 4, 3),
      minHeight: 500
    }
  })
);
