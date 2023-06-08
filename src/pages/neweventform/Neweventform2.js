import React from "react";
import "./style2.css";
import axios from "axios";
import { useState } from "react";
import FileBase64 from "react-file-base64";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";

export default function Neweventform2() {
  const navigate = useNavigate();

  document.body.style.backgroundImage = "url('bg.svg')";
  let [searchParams, setSearchParams] = useSearchParams();
  const [qrcode, setqrcode] = useState("");
  const [CName, setCName] = useState("");
  const [country, setcountry] = useState("");
  const [photo, setphoto] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [Device, setdevice] = useState("");
  const [devicetype, setdevicetype] = useState("");
  const [deviceserial, setdeviceserial] = useState("");
  const [wifi, setWifi] = useState("Yes");
  const [item, setItem] = useState({ title: "", image: "" });
  const oncnameachange = (e) => {
    setCName(e.target.value);
  };
  const oncountrychange = (e) => {
    setcountry(e.target.value);
  };
  const onphotochange = (e) => {
    setphoto(e.target.value);
  };
  const onvehiclechange = (e) => {
    setVehicle(e.target.value);
  };
  const ondevicechange = (e) => {
    setdevice(e.target.value);
  };
  const ondevicetypechange = (e) => {
    setdevicetype(e.target.value);
  };
  const ondeviceserialchange = (e) => {
    setdeviceserial(e.target.value);
  };
  const onwifichange = (e) => {
    setWifi(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const appid = searchParams.get("id");

    const data = {
      cname: CName,
      country: country,
      photo: item.image,
      vehicle: vehicle,
      device: Device,
      devicetype: devicetype,
      deviceserial: deviceserial,
      wifi: wifi,
      qrcode: `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${appid}`,
      appid: appid,
    };
    // console.log(data);
    try {
      axios
        .post(
          "https://hms-server-rahulsharma4329.koyeb.app/savefurtherdata",
          data
        )
        .then((response) => {
          if (response.data.success == true) {
            navigate("/typage");
          }
        });
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="wrapperforform1">
      <img src={qrcode} />
      <section className="registerform">
        <h1>Please enter these details</h1>
        <form action="" className="form" onSubmit={handleSubmit}>
          <div className="input-box">
            <label>Company Name</label>
            <input
              type="text"
              placeholder="Enter company name"
              required
              value={CName}
              onChange={oncnameachange}
            />
          </div>
          <div className="input-box">
            <label>Enter the country</label>
            <input
              type="text"
              placeholder="Enter country name"
              required
              value={country}
              onChange={oncountrychange}
            />
          </div>
          <div className="input-box">
            <label>Upload your photo</label>
            {/* <input
              type="file"
              name="UploadFile"
              // value={photo}
              onChange={(e) => setphoto(e.target.files[0])}
            /> */}
            <FileBase64
              type="file"
              multiple={false}
              onDone={({ base64 }) => setItem({ ...item, image: base64 })}
            />
          </div>
          <div className="input-box">
            <label>Vehicle Details</label>
            <input
              type="alphanumeric"
              placeholder="Enter vehicle details if applicable"
              value={vehicle}
              onChange={onvehiclechange}
            />
          </div>
          <div className="input-box">
            <label>Device details</label>
            <input
              type="text"
              placeholder="Details"
              required
              value={Device}
              onChange={ondevicechange}
            />
            <div className="column">
              <div className="select-box">
                <select value={devicetype} onChange={ondevicetypechange}>
                  <option hidden>Device type</option>
                  <option>Laptop</option>
                  <option>Mobile</option>
                  <option>Tablet</option>
                  <option>Mp3 Player</option>
                  <option>Others</option>
                </select>
              </div>
              <input
                type="text"
                placeholder="Enter device serial number"
                value={deviceserial}
                onChange={ondeviceserialchange}
                required
              />
            </div>

            <div className="wifi-box">
              <h3>WiFi is required</h3>
              <div className="wifi-option">
                <div className="wifi">
                  <input
                    type="radio"
                    id="check-yes"
                    name="wifi"
                    checked
                    onChange={() => {
                      setWifi("Yes");
                    }}
                  />
                  <label for="check-yes">Yes</label>
                </div>
                <div className="wifi">
                  <input
                    type="radio"
                    id="check-No"
                    name="wifi"
                    onChange={() => {
                      setWifi("No");
                    }}
                  />
                  <label for="check-No">No</label>
                </div>
              </div>
            </div>
          </div>
          <button type="submit">Submit</button>
        </form>
      </section>
    </div>
  );
}
