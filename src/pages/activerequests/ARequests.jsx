import React from "react";

import axios from "axios";
import ARequestBox from "./ARequestBox";

function ARequests(request) {
  const requests = request.requests;
  return (
    <div className="aRequests">
      {requests.length > 0 ? (
        requests.map((r, key) => <ARequestBox r={r} key={key} />)
      ) : (
        <>
          <div className="emptymsg">There are no active requests</div>
        </>
      )}
    </div>
  );
}

export default ARequests;
