import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import "./activerequests.scss";
import axios from "axios";
import ARequests from "./ARequests";

function Activerequests() {
  const [requests, setrequests] = useState([]);
  useEffect(async () => {
    const rqlist = await axios
      .post("https://hms-server-rahulsharma4329.koyeb.app/getarequests")
      .then((response) => {
        console.log(response);
        setrequests(response.data.data);
      });
    console.log(requests);
  }, []);
  console.log(requests);
  return (
    <div className="activerequests">
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <ARequests requests={requests} />
        </div>
      </div>
    </div>
  );
}

export default Activerequests;
