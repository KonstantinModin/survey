import React from "react";
import ReactGA from "react-ga";
import "./App.css";
import Survey from "./Survey";

function App() {
  React.useEffect(() => {
    ReactGA.initialize("UA-120055114-4");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <div className="App">
      <Survey />
      <div className="Mobile">
        <span>Sorry, mobile version is not available.</span>
      </div>
    </div>
  );
}

export default App;
