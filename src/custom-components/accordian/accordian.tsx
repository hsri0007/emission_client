import React, { useState } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: '100%',
      marginTop:"15px",
      borderRadius:"6px",
      boxShadow:"0px 3px 10px rgba(0,0,0,0.01)",
      border:"1px solid rgba(0,0,0,0.1)"
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightBold,
      color:"#0cbdf3",
    },
  }),
);

interface IAccordianProps{
    children:React.ReactChild,
    title:string,
    open:boolean
}

const CustomAccordion:React.FC<IAccordianProps>=({children,title,open})=> {
    const [state,setState]=useState(open);
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Accordion  expanded={state} elevation={0} style={{borderRadius:"6px",}} >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          onClick={()=>{setState(!state)}}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>{title}</Typography>
        </AccordionSummary>
        {/* <AccordionDetails> */}
         {children}
        {/* </AccordionDetails> */}
      </Accordion>  
    </div>
  );
}


export default CustomAccordion;