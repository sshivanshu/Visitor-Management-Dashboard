import React from "react";
import "./style.css";

export default function Neweventform1() {
  return (
    <section class="container">
      <header>Registration Form</header>
      <form action="#" class="form">
        <div class="input-box">
          <label>Full Name</label>
          <input type="text" placeholder="Enter full name" required />
        </div>
        <div class="input-box">
          <label>Email Address</label>
          <input type="text" placeholder="Enter email address" required />
        </div>
        <div class="column">
          <div class="input-box">
            <label>Phone Number</label>
            <input type="number" placeholder="Enter phone number" required />
          </div>
          <div class="input-box">
            <label>Appointment Date</label>
            <input type="date" placeholder="Enter appointment date" required />
          </div>
        </div>
        <div class="input-box">
          <label>Purpose of visit</label>
          <input
            type="text"
            placeholder="Enter the purpose of visit"
            required
          />
        </div>
        <div class="input-box address">
          <label>Address</label>
          <input type="text" placeholder="Enter street address" required />
          <div class="column">
            <input type="text" placeholder="Country" required />
            <input type="text" placeholder="Enter your city" required />
          </div>
        </div>
        <button>Submit</button>
      </form>
    </section>
  );
}
