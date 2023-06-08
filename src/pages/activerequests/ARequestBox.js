import React, { useState, useEffect } from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import GradeIcon from "@mui/icons-material/Grade";
import { Button } from "@mui/material";
import axios from "axios";

function ARequestBox(props) {
  const { r } = props;
  const [show, setshow] = useState(false);
  const [moredeets, setmoredeets] = useState({});
  const getmoredata = (id) => {
    axios
      .post("https://hms-server-rahulsharma4329.koyeb.app/getmoredata", {
        id: id,
      })
      .then((response) => {
        console.log(response);
        if (response.data.success == true) setmoredeets(response.data.data[0]);
      });
  };
  useEffect(() => {
    getmoredata(r._id);
  }, []);

  const toggledeets = () => {
    if (show == false) {
      setshow(true);
    } else setshow(false);
  };

  console.log(moredeets);
  return (
    <div className="requestbox">
      <div className="basicdeet">
        <div className="vname">
          {/* <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              borderRadius: "1rem",
              marginRight: "1rem",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          /> */}
          <img src={moredeets.Image} alt="" className="vimage" />
          <div className="vlabel">Visitor Name : </div>
          {r.name}
        </div>
        <div className="vphone">
          <LocalPhoneTwoToneIcon
            style={{
              color: "green",
              marginRight: "5px",
            }}
          />
          <div className="vlabel">Visitor Phone No. : </div>
          {r.phone}
        </div>
        <div className="vdate">
          <CalendarMonthTwoToneIcon
            style={{
              marginRight: "5px",
            }}
          />
          <div className="vlabel">Visiting Date : </div>
          {r.date}
        </div>
        <div className="apbtns">
          <Button
            variant="outlined"
            style={{
              marginRight: "1rem",
              color: "rgb(130, 106, 251)",
              border: "1px solid rgb(130, 106, 251)",
              fontSize: "10px",
              padding: "0",
            }}
            size="small"
            onClick={toggledeets}
          >
            View Details
          </Button>
        </div>
      </div>
      <div className="moredeets" style={{ display: show ? "flex" : "none" }}>
        <div className="vaddress">
          <HomeIcon
            className="icon"
            style={{
              color: "crimson",
              borderRadius: "1rem",
              marginRight: "1rem",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
          <div className="vlabel">Visitor Address : </div>
          {r.address}
        </div>
        <div className="vemail">
          <EmailIcon
            className="icon"
            style={{
              color: "grey",
              borderRadius: "1rem",
              marginRight: "1rem",
            }}
          />
          <div className="vlabel"> Visitor Email ID:</div> {r.email}
        </div>
        <div className="vpurpose">
          <GradeIcon
            className="icon"
            style={{
              color: "grey",
              borderRadius: "1rem",
              marginRight: "1rem",
            }}
          />
          <div className="vlabel">Visitor Purpose of Visit: </div>
          {r.purpose}
        </div>
        <div className="vcname moredeet">
          <div className="vlabel">Visitor Company Name: </div>
          {moredeets.company}
        </div>
        <div className="vvehicle moredeet">
          <div className="vlabel">Visitor Vehicle: </div>
          {moredeets.vdetails}
        </div>
        <div className="vcwifi moredeet">
          <div className="vlabel"> WIFI Required: </div>
          {moredeets.wifi}
        </div>
        <div className="vcdevice moredeet">
          <div className="vlabel"> Device Name: </div>
          {moredeets.device}
        </div>
        <div className="vcdevicetype moredeet">
          <div className="vlabel"> Device Type </div>
          {moredeets.devicetype}
        </div>
        <div className="vcdeviceserial moredeet">
          <div className="vlabel"> Device Serial Number : </div>
          {moredeets.deviceserial}
        </div>
        <div className="vqrcode moredeet">
          <div className="vlabel"> QR Code : </div>
          <img src={moredeets.qrcode} alt="" />
        </div>
      </div>
    </div>
  );
}

export default ARequestBox;
