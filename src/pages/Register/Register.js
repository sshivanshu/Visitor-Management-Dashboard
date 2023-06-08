import axios from "axios";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./register.css";

export default function Register() {
  document.body.style.backgroundImage = "url('bg.svg')";
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
      axios.post(urltosend, datatosend).then((response) => {
        console.log(response.data);
        if (response.data.success === true) {
          document.body.attributeStyleMap.clear();
          navigate("/");
        } else {
          setError(response.data.msg);
        }
      });
    }
  };
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
      <a href="/" className="swtch">
        Already have an account, Log In
      </a>
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
