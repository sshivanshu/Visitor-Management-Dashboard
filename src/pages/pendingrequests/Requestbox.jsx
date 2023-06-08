import React, { useState } from "react";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import LocalPhoneTwoToneIcon from "@mui/icons-material/LocalPhoneTwoTone";
import CalendarMonthTwoToneIcon from "@mui/icons-material/CalendarMonthTwoTone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import GradeIcon from "@mui/icons-material/Grade";
import { Button } from "@mui/material";
import axios from "axios";

function Requestbox(props) {
  const { r } = props;
  const [show, setshow] = useState(false);

  const handleapproverequest = async (r) => {
    console.log("callign");
    const updateApStatus = await axios
      .post("https://hms-server-rahulsharma4329.koyeb.app/approvereq", {
        id: r._id,
        email: r.email,
      })
      .then((response) => {
        if (response.data.success == true) {
          window.location.reload(false);
        }
      });
  };
  const handlerejectrequest = async (r) => {
    console.log("callign");
    const updateApStatus = await axios
      .post("https://hms-server-rahulsharma4329.koyeb.app/rejectreq", {
        id: r._id,
        email: r.email,
      })
      .then((response) => {
        if (response.data.success == true) {
          window.location.reload(false);
        }
      });
  };

  const toggledeets = () => {
    if (show == false) {
      setshow(true);
    } else setshow(false);
  };

  return (
    <div className="requestbox">
      <div className="basicdeet">
        <div className="vname">
          <PersonOutlinedIcon
            className="icon"
            style={{
              color: "crimson",
              borderRadius: "1rem",
              marginRight: "1rem",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
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
          <Button
            variant="outlined"
            style={{
              marginRight: "1rem",
              color: "rgb(130, 106, 251)",
              border: "1px solid rgb(130, 106, 251)",
            }}
            onClick={(event) => handleapproverequest(r)}
          >
            Approve
          </Button>
          <Button
            variant="outlined"
            style={{
              marginRight: "1rem",
              color: "rgb(130, 106, 251)",
              border: "1px solid rgb(130, 106, 251)",
            }}
            onClick={(event) => handlerejectrequest(r)}
          >
            Reject
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
      </div>
    </div>
  );
}

export default Requestbox;
