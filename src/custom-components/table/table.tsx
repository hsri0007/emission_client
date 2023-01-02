import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Button, Divider } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    // minWidth: 650,
  },
});




export default function CustomTable({columns,rows}) {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="caption table">
        <TableHead style={{background:"#f0f7ff",}}>
          <TableRow>
            {
                columns?.map(({title,align},i)=><TableCell>{title}</TableCell>)
            }
          </TableRow>
        </TableHead>
        <TableBody>
        <TableRow  >
          {rows.map(({Component},i) => (   
              <TableCell style={{padding:"5px"}} key={i} component="th" scope="row">
                {Component}
              </TableCell>
          ))}
          </TableRow>
        <TableRow  >
          {rows.map(({Component},i) => (   
              <TableCell  style={{padding:"5px"}} key={i} component="th" scope="row">
                {Component}
              </TableCell>
          ))}
          </TableRow>
          <Divider/>
          <Button style={{padding:"10px",margin:"10px 2px" ,color:"#0cbdf3"}} >+ Add New</Button>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
