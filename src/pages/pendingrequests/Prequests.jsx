import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";

import RequestList from "./RequestList";

import "./Prequests.scss";
import axios from "axios";

import React, { useEffect, useState } from "react";

export default function Prequests() {
  const [requests, setrequests] = useState([]);

  useEffect(async () => {
    const rqlist = await axios
      .post("https://hms-server-rahulsharma4329.koyeb.app/getprequests")
      .then((response) => {
        // console.log(response);
        setrequests(response.data.data);
      });
    console.log(requests);
  }, []);
  console.log(requests);
  return (
    <div>
      <div className="home">
        <Sidebar />
        <div className="homeContainer">
          <Navbar />
          <RequestList requests={requests} />
        </div>
      </div>
    </div>
  );
}
{
  /* <Requestbox
                name={request.name}
                phone={request.phone}
                date={request.date}
              /> */
}
