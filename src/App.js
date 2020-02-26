import React from "react";
import axios from "axios";
import {setConfig, getConfig} from "./okta_config";

import "./App.css";

function App() {
  const [error, setError] = React.useState("");
  const [resultReady, setResultReady] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(`/config.json`)
      .then(res => {
        const config = res.data;        
        setConfig(config);
        setResultReady(true);
      })
      .catch(e => {
        console.log(e);
        const rString = randomString(
          32,
          "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
        );

        setError(rString);
      });
  }, [error]);

  function randomString(length, chars) {
    var result = "";
    for (var i = length; i > 0; --i)
      result += chars[Math.floor(Math.random() * chars.length)];
    return result;
  }

  console.log(getConfig());
  return resultReady ? <div className="App">Hello World!</div> : null;
}

export default App;
