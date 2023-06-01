import React from "react";
import "./style2.css";
export default function Neweventform2() {
  return (
    <section className="container">
      <header>Registration Form</header>
      <form action="#" className="form">
        <div className="input-box">
          <label>Company Name</label>
          <input type="text" placeholder="Enter company name" required />
        </div>
        <div className="input-box">
          <label>Select the country</label>
          <div className="select-box">
            <select>
              <option hidden>Country</option>
              <option>India</option>
              <option>USA</option>
              <option>UK</option>
              <option>Japan</option>
              <option>Germany</option>
            </select>
          </div>
        </div>
        <div className="input-box">
          <label>Upload your photo</label>
          <input type="file" name="UploadFile" />
        </div>
        <div className="input-box">
          <label>Vehicle Details</label>
          <input
            type="alphanumeric"
            placeholder="Enter vehicle details if applicable"
          />
        </div>
        <div className="input-box">
          <label>Device details</label>
          <input type="text" placeholder="Details" required />
          <div className="column">
            <div className="select-box">
              <select>
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
              required
            />
          </div>

          <div className="wifi-box">
            <h3>WiFi is required</h3>
            <div className="wifi-option">
              <div className="wifi">
                <input type="radio" id="check-yes" name="wifi" checked />
                <label for="check-yes">Yes</label>
              </div>
              <div className="wifi">
                <input type="radio" id="check-No" name="wifi" />
                <label for="check-No">No</label>
              </div>
            </div>
          </div>
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
}
