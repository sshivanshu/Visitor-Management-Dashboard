import React from "react";
import "./style.css";
import axios from "axios";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Neweventform1() {
  document.body.style.backgroundImage = "url('bg.svg')";

  const navigate = useNavigate();

  const [Name, setName] = useState("");
  const [email, setemail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [purpose, setPurpose] = useState("");
  const [address, setAddress] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [errormsg, seterrormsg] = useState("");
  const onchangeName = (e) => {
    setName(e.target.value);
  };
  const onemailchange = (e) => {
    setemail(e.target.value);
  };
  const onchangePhone = (e) => {
    setPhone(e.target.value);
  };
  const onchangedate = (e) => {
    setDate(e.target.value);
  };
  const onchangepurpose = (e) => {
    setPurpose(e.target.value);
  };
  const onchangeaddress = (e) => {
    setAddress(e.target.value);
  };
  const onchagnecountry = (e) => {
    setCountry(e.target.value);
  };
  const onchangecity = (e) => {
    setCity(e.target.value);
  };

  const Submitform = (e) => {
    e.preventDefault();
    if (
      phone == null ||
      date == null ||
      purpose == null ||
      address == null ||
      country == null ||
      city == null
    ) {
      seterrormsg("Please Fill all the fields");
    } else {
      seterrormsg("");
      const send_response = {
        name: Name,
        email: email,
        phone: phone,
        date: date,
        purpose: purpose,
        status: "open",
        address: address,
        country: country,
        city: city,
      };
      let urltosend =
        "https://hms-server-rahulsharma4329.koyeb.app/savevisitappointment";
      let datatosend = send_response;
      axios.post(urltosend, datatosend).then((response) => {
        console.log(response.data);
        if (response.data.success === true) {
          // alert("Your request is submitted successfully");
          document.body.attributeStyleMap.clear();
          navigate("/typage");
        } else {
          alert("something wrong happened");
        }
      });
    }
  };

  return (
    <div className="wrapperforform1">
      <section className="registerform">
        <h1>Schedule Visit Form</h1>
        <form action="#" className="form">
          <div className="input-box">
            <label>Full Name</label>
            <input
              type="text"
              placeholder="Enter full name"
              required
              value={Name}
              onChange={onchangeName}
            />
          </div>
          <div className="input-box">
            <label>Email Address</label>
            <input
              type="text"
              placeholder="Enter email address"
              required
              value={email}
              onChange={onemailchange}
            />
          </div>
          <div className="column">
            <div className="input-box">
              <label>Phone Number</label>
              <input
                type="text"
                placeholder="Enter phone number"
                required
                value={phone}
                onChange={onchangePhone}
              />
            </div>
            <div className="input-box">
              <label>Appointment Date</label>
              <input
                type="date"
                placeholder="Enter appointment date"
                required
                value={date}
                onChange={onchangedate}
              />
            </div>
          </div>
          <div className="input-box">
            <label>Purpose of visit</label>
            <input
              type="text"
              placeholder="Enter the purpose of visit"
              required
              value={purpose}
              onChange={onchangepurpose}
            />
          </div>
          <div className="input-box address">
            <label>Address</label>
            <input
              type="text"
              placeholder="Enter street address"
              required
              value={address}
              onChange={onchangeaddress}
            />
            <div className="column">
              <input
                type="text"
                placeholder="Country"
                required
                value={country}
                onChange={onchagnecountry}
              />
              <input
                type="text"
                placeholder="Enter your city"
                required
                value={city}
                onChange={onchangecity}
              />
            </div>
          </div>
          <div className="errormsg">{errormsg}</div>
          <button onClick={Submitform}>Submit</button>
        </form>
      </section>
    </div>
  );
}
