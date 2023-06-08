import React, { Component } from "react";
import QrReader from "react-qr-scanner";
import "./qrscanner.scss";
import axios from "axios";
class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delay: 100,
      result: "No result",
    };

    this.handleScan = this.handleScan.bind(this);
  }
  navigate = () => {
    this.props.navigation.navigate("LoginPage");
    console.log("working");
  };
  handleScan(data) {
    if (data != null) {
      axios
        .post("https://hms-server-rahulsharma4329.koyeb.app/updateqrinfo", {
          id: data.text,
        })
        .then((response) => {
          console.log(response);
          if (response.data.success == true) {
            document.location.href = "activerequests";
          }
        });
    }
    this.setState({
      result: data,
    });
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    const previewStyle = {
      height: 240,
      width: 320,
    };

    return (
      <div>
        <div className="scannerwrapper">
          <h1 className="qrtitle">Please scan the QRcode here</h1>
          <div className="qrcontainer">
            <QrReader
              delay={this.state.delay}
              style={previewStyle}
              onError={this.handleError}
              onScan={this.handleScan}
              className={"qrscannerstream"}
            />
            <p className="Data">
              {this.state.result ? this.state.result.text : ""}
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Test;
