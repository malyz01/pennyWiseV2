import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IncomeIcon from '@material-ui/icons/LocalAtm';
import ExpenseIcon from '@material-ui/icons/Receipt';
import BudgetIcon from '@material-ui/icons/RateReview';
import { sView } from './styles';

import CustomMenu from '../../CustomMenu';

const StyledMenuItem = withStyles((theme) => ({
  root: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& .MuiListItemIcon-root, & .MuiListItemText-primary': {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const View = (props: IProps) => {
  const c = sView();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const onItemClick = (menuItem: MenuItem) => () => {
    if (props.location.pathname === menuItem) return;
    props.history.push(`/${menuItem}`);
    handleClose();
  };

  return (
    <div className={c.mainContainer}>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        color="primary"
        onClick={handleClick}
      >
        <strong>View Tools</strong>
      </Button>
      <CustomMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
        classes={{ paper: c.menuPaper }}
      >
        <StyledMenuItem onClick={onItemClick('income')}>
          <ListItemIcon>
            <IncomeIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Income" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onItemClick('expense')}>
          <ListItemIcon>
            <ExpenseIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Expense" />
        </StyledMenuItem>
        <StyledMenuItem onClick={onItemClick('budget')}>
          <ListItemIcon>
            <BudgetIcon fontSize="small" />
          </ListItemIcon>
          <ListItemText primary="Budget Tools" />
        </StyledMenuItem>
      </CustomMenu>
    </div>
  );
};

type MenuItem = 'income' | 'expense' | 'budget';

interface IProps extends RouteComponentProps {}

export default withRouter(View);
