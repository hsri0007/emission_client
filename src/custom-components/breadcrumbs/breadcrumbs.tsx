import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      '& > * + *': {
        marginTop: theme.spacing(2),
      },
    },
  }),
);

function handleClick(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function CustomBreadCrumb() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
    
      <Breadcrumbs separator={<NavigateNextIcon fontSize="small" />} aria-label="breadcrumb">
        <Link  color="inherit" href="/" onClick={handleClick}>
         <HomeOutlinedIcon style={{marginBottom:"-5px"}} />
        </Link>
        <Link color="inherit" href="/" onClick={handleClick}>
          Collect
        </Link>
        <Link color="inherit" href="/getting-started/installation/" onClick={handleClick}>
          Environment
        </Link>
        <Typography style={{color:"#0cbdf3",fontWeight:700}} >Emissions</Typography>
      </Breadcrumbs>
    </div>
  );
}
