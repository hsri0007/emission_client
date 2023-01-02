import React from "react";

interface IDataProps{
    dropdown_title:string | number;
    value:string | number;
}

interface ICustomProps {
    title:string;
    data:IDataProps[]
}

const CustomDropdown:React.FC<ICustomProps> = (props) => {
  const { title, data } = props;
  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          marginRight: "10px",
        }}
      >
        <label style={{ color: "gray", marginBottom: "5px" }}>{title}</label>
        <select
          {...props}
          style={{
            padding: "10px 10px",
            width: "200px",
            border: "2px solid rgba(0,0,0,0.1)",
            borderRadius: "6px",
          }}
        >
          {data.map(({ dropdown_title, value }, i) => (
            <option key={i}>{dropdown_title}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CustomDropdown;
