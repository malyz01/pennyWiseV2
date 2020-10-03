import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    mainContainer: {
      maxWidth: '800px',
      border: 'solid 1px black',
      borderRadius: '2.5em',
      minHeight: '15em',
      margin: '2em auto',
      padding: '2em 5em'
    },
    line: {
      margin: '2em 0'
    }
  })
);
