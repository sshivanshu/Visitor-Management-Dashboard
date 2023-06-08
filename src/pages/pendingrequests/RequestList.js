import React from "react";

import axios from "axios";
import Requestbox from "./Requestbox";

function RequestList(request) {
  const requests = request.requests;

  return (
    <div className="requestslist">
      {requests.length > 0 ? (
        requests.map((r, key) => <Requestbox r={r} key={key} />)
      ) : (
        <>
          <div className="emptymsg">There are no pending requests</div>
        </>
      )}
    </div>
  );
}

export default RequestList;
