import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export const sIndex = makeStyles((theme: Theme) =>
  createStyles({
    btn: {
      minWidth: '94px !important',
      marginLeft: '1em !important'
    }
  })
);

export const sView = makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      display: 'inline-flex'
    },
    menuPaper: {
      border: '.5px solid #d3d4d5',
      marginTop: '.6em'
    }
  })
);
