import { Grid, Typography } from "@material-ui/core";
import TextField from '@material-ui/core/TextField';
import {
  createStyles,
  makeStyles,
  useTheme,
  Theme,
} from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import React, { useState } from "react";
import CustomAccordion from "../../../../custom-components/accordian/accordian";
import CustomDropdown from "../../../../custom-components/dropdown/dropdown";
import CustomTable from "../../../../custom-components/table/table";
import CustomUpload from "../../../../custom-components/upload/upload";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    emission_box: {
      width: "100%",
      position: "relative",
    },
    enviroment_box: {
      background: "#f0f7ff",

      padding: "50px 20px",
      minWidth: "200px",
      height: "91vh",
    },
  })
);
const EmisionsComponent: React.FC = () => {
  const classes = useStyles();

  const row_data1 = [
    {
      Component: (
        <CustomDropdown
          title=""
          data={[{ dropdown_title: "Stationary Combustion", value: "sdasd" }]}
        />
      ),
    },
    {
      Component: (
        <CustomDropdown
          title=""
          data={[{ dropdown_title: "Butane", value: "sdasd" }]}
        />
      ),
    },
    {
      Component: (
        <TextField variant="outlined"  size="small" />
          
      ),
    },
    {
      Component: (
        <CustomUpload value={100} />
      ),
    },
    {
      Component: (
        <CustomUpload value={0} />
      ),
    },
    {
      Component: (
        <CustomUpload value={0} />
      ),
    },
    {
        Component: (
          <CustomDropdown
            title=""
            data={[{ dropdown_title: "Assigned to", value: "sdasd" }]}
          />
        ),
      },
  ];

  const [checkboxstate,setCheckboxstate]=useState('emissions')

  return (
    <div className={classes.emission_box}>
      <div style={{ display: "flex" }}>
        <div className={classes.enviroment_box}>
          <Typography style={{ fontWeight: "bold", marginBottom: "20px" }}>
            Environment
          </Typography>

          <div style={{ display: "flex", marginBottom: "10px" }}>
            <input style={{background:"#0cbdf3"}} onClick={()=>{setCheckboxstate('emissions')}}  checked={checkboxstate==='emissions'} id="emissions" type="checkbox" />
            <label style={{ marginLeft: "7px",color:checkboxstate==='emissions'? "#0cbdf3":"black",fontWeight:checkboxstate==='emissions'? 700:400}} htmlFor="emissions">
              Emissions
            </label>
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
          <input style={{background:"#0cbdf3"}} onClick={()=>{setCheckboxstate('energy')}} checked={checkboxstate==='energy'} id="energy" type="checkbox" />

            <label style={{ marginLeft: "7px",color:checkboxstate==='energy'? "#0cbdf3":"black",fontWeight:checkboxstate==='energy'? 700:400}} htmlFor="energy">
              Energy
            </label>
          </div>
          <div style={{ display: "flex", marginBottom: "10px" }}>
          <input style={{background:"#0cbdf3"}} onClick={()=>{setCheckboxstate('waste')}} checked={checkboxstate==='waste'} id="waste" type="checkbox" />

            <label style={{ marginLeft: "7px",color:checkboxstate==='waste'? "#0cbdf3":"black",fontWeight:checkboxstate==='waste'? 700:400}} htmlFor="waste">
              Waste
            </label>
          </div>
        </div>
        <div style={{  padding: "20px", width: "100%" }}>
          <div
            style={{
              display: "flex",
              padding: "20px",
              width: "100%",
              background: "#f0f7ff",
              borderRadius: "6px",
            }}
          >
            {/* <div style={{display:"flex",flexDirection:"column",marginRight:"10px" }} >
            <label style={{color:"gray",marginBottom:"5px"}} >Select Location</label>
            <select style={{padding:"10px 10px", width:"200px",border:"2px solid rgba(0,0,0,0.1)",borderRadius:"6px"}}>
              <option>Mohali</option>
            </select>
          </div> */}
            <CustomDropdown
              title={"Select Location"}
              data={[{ dropdown_title: "Mohali", value: "mohali" }]}
            />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                marginRight: "10px",
              }}
            >
              <label style={{ color: "gray", marginBottom: "5px" }}>
                Select Year
              </label>
              <select
                style={{
                  padding: "10px 10px",
                  width: "200px",
                  border: "2px solid rgba(0,0,0,0.1)",
                  borderRadius: "6px",
                }}
              >
                <option>2019 - 2020</option>
              </select>
            </div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              <label style={{ color: "gray", marginBottom: "5px" }}>
                Select Quarter
              </label>
              <select
                style={{
                  padding: "10px 10px",
                  width: "200px",
                  border: "2px solid rgba(0,0,0,0.1)",
                  borderRadius: "6px",
                }}
              >
                <option>Q1: Jan/Mar</option>
              </select>
            </div>
          </div>
          <div
            style={{
              marginTop: "25px",
            }}
          >
            <CustomAccordion title="Scope 1" open={true} >
              <CustomTable
                rows={row_data1}
                columns={[
                  { title: "Category" },
                  { title: "Fuel" },
                  { title: "Unit" },
                  { title: "Jan" },
                  { title: "Feb" },
                  { title: "Mar" },
                  { title: "Assigned to" },
                ]}
              />
            </CustomAccordion>
            <CustomAccordion title="Scope 2" open={false} >
              <CustomTable
                rows={row_data1}
                columns={[
                  { title: "Category" },
                  { title: "Fuel" },
                  { title: "Unit" },
                  { title: "Jan" },
                  { title: "Feb" },
                  { title: "Mar" },
                  { title: "Assigned to" },
                ]}
              />
            </CustomAccordion>
            <CustomAccordion title="Scope 3" open={false} >
              <CustomTable
                rows={row_data1}
                columns={[
                  { title: "Category" },
                  { title: "Fuel" },
                  { title: "Unit" },
                  { title: "Jan" },
                  { title: "Feb" },
                  { title: "Mar" },
                  { title: "Assigned to" },
                ]}
              />
            </CustomAccordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmisionsComponent;
