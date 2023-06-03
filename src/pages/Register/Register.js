import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  // document.body.style.backgroundImage = "url('bg.svg')";
  const navigate = useNavigate();
  const location = useLocation();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setPhone] = useState("");
  const [roll, setRoll] = useState("");
  const [branch, setBranch] = useState("");
  const [year, setYear] = useState();
  const [hostelname, setHostelname] = useState("");
  const [roomno, setroomno] = useState();
  const [pass, setpass] = useState("");
  const [checkpass, setcheckpass] = useState("");
  const [officerlevel, setofficerlevel] = useState("");
  const [Error, setError] = useState(null);
  //   const role = location.state.role;
  let renderform = "";

  const onchangeName = (e) => {
    setname(e.target.value);
  };
  const onchangeRoll = (e) => {
    setRoll(e.target.value);
  };
  const onchangebranch = (e) => {
    setBranch(e.target.value);
  };
  const onchangeyear = (e) => {
    setYear(e.target.value);
  };
  const onchangehostelname = (e) => {
    setHostelname(e.target.value);
  };
  const onchangeroomno = (e) => {
    setroomno(e.target.value);
  };
  const onchangeEmail = (e) => {
    setemail(e.target.value);
  };
  const onchangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onchangePass = (e) => {
    setpass(e.target.value);
  };
  const onchangecheckpass = (e) => {
    setcheckpass(e.target.value);
  };
  const onchangeofflevel = (e) => {
    setofficerlevel(e.target.value);
  };

  const SubmitRegistration = (e) => {
    e.preventDefault();
    if (pass !== checkpass) {
      alert("Your passwords do not match");
    } else {
      const send_stresponse = {
        name: name,
        username: email,
        phone: phone,
        roll: roll,
        year: year,
        branch: branch,
        hostelname: hostelname,
        roomno: roomno,
        password: pass,
      };
      const send_adresponse = {
        name: name,
        username: email,
        phone: phone,
        officerlevel: officerlevel,
        password: pass,
      };
      const send_response = {
        name: name,
        username: email,
        phone: phone,
        officerlevel: officerlevel,
        password: pass,
        role: "host",
      };
      let urltosend = "https://hms-server-rahulsharma4329.koyeb.app/register";
      let datatosend = send_response;
      //   if (role === "student") {
      //     urltosend = "https://hms-server-rahulsharma4329.koyeb.app/stregister";
      //     datatosend = send_stresponse;
      //     console.log("streg");
      //   } else if (role === "admin") {
      //     urltosend = "https://hms-server-rahulsharma4329.koyeb.app/adregister";
      //     datatosend = send_adresponse;
      //     console.log("dreg");
      //   }
      axios.post(urltosend, datatosend).then((response) => {
        console.log(response.data);
        if (response.data.success === true) {
          document.body.attributeStyleMap.clear();
          navigate("/login");
        } else {
          setError(response.data.msg);
        }
      });
    }
  };
  const stform = (
    <form action="none">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="Name"
        id="name"
        placeholder="Enter your Name"
        value={name}
        onChange={onchangeName}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="Email"
        id="email"
        placeholder="Enter your Email ID"
        value={email}
        onChange={onchangeEmail}
        required
      />
      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        name="Phone"
        id="phone"
        placeholder="Enter your Phone Number"
        value={phone}
        onChange={onchangePhone}
        required
      />
      <label htmlFor="roll">Roll No.</label>
      <input
        type="text"
        name="Roll"
        id="roll"
        placeholder="Enter your Roll no."
        value={roll}
        onChange={onchangeRoll}
        required
      />
      <label htmlFor="branch">Branch</label>
      <input
        type="text"
        name="Branch"
        id="branch"
        placeholder="Enter your Branch"
        value={branch}
        onChange={onchangebranch}
        required
      />
      <label htmlFor="year">Year of Study</label>
      <input
        type="text"
        name="Year"
        id="year"
        placeholder="Enter your year"
        value={year}
        onChange={onchangeyear}
        required
      />
      <label htmlFor="hostelname">Name of your Hostel</label>
      <input
        type="text"
        name="Hostelname"
        id="hostelname"
        placeholder="Enter your Hostel Name"
        value={hostelname}
        onChange={onchangehostelname}
        required
      />
      <label htmlFor="roomno">Room Number</label>
      <input
        type="text"
        name="Roomno"
        id="roomno"
        placeholder="Enter your Room No."
        value={roomno}
        onChange={onchangeroomno}
        required
      />
      <label htmlFor="pass">Create your password</label>
      <input
        type="password"
        name="Pass"
        id="pass"
        placeholder="Enter your password "
        value={pass}
        onChange={onchangePass}
        required
      />
      <label htmlFor="checkpass">Re-type your password</label>
      <input
        type="password"
        name="Checkpass"
        id="checkpass"
        placeholder="ReType your password "
        value={checkpass}
        onChange={onchangecheckpass}
        required
      />
      <button
        type="submit"
        onClick={SubmitRegistration}
        className="regsubmitbutton"
      >
        {" "}
        Register Now
      </button>
    </form>
  );
  const adminform = (
    <form action="none">
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="Name"
        id="name"
        placeholder="Enter Employee Name"
        value={name}
        onChange={onchangeName}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="Email"
        id="email"
        placeholder="Enter Employee Email ID"
        value={email}
        onChange={onchangeEmail}
        required
      />
      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        name="Phone"
        id="phone"
        placeholder="Enter Employee Phone Number"
        value={phone}
        onChange={onchangePhone}
        required
      />
      <label htmlFor="officerlevel">Employee Level</label>
      <input
        type="text"
        name="officerlevel"
        id="officerlevel"
        placeholder="Enter Employee Employee Level"
        value={officerlevel}
        onChange={onchangeofflevel}
        required
      />
      <label htmlFor="pass">Create your password</label>
      <input
        type="password"
        name="Pass"
        id="pass"
        placeholder="Enter Employee password "
        value={pass}
        onChange={onchangePass}
        required
      />
      <label htmlFor="checkpass">Re-type your password</label>
      <input
        type="password"
        name="Checkpass"
        id="checkpass"
        placeholder="ReType Employee password "
        value={checkpass}
        onChange={onchangecheckpass}
        required
      />
      {Error ? <p className="regerrormsg">{Error}</p> : ""}
      <button
        type="submit"
        onClick={SubmitRegistration}
        className="regsubmitbutton"
      >
        {" "}
        Register Now
      </button>
    </form>
  );

  renderform = adminform;

  return (
    <div className="registerpage">
      <div className="container" style={{ padding: 0 }}>
        <div className="registerform">
          <div className="titlemsg">Register Employee</div>
          <div className="leftcolumnreg">{renderform}</div>
        </div>
      </div>
    </div>
  );
}
