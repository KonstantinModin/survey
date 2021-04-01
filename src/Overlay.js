import React from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import okImg from "./img/ok.png";
import xImg from "./img/x.png";

const Overlay = ({ overlayMessage, onClick }) => {
  const { width, height } = useWindowSize();

  const header =
    overlayMessage === "no" ? (
      <span>
        <strong>Thank you!</strong> We didn't doubt you!
      </span>
    ) : (
      <strong>You managed to click it! Bravo!</strong>
    );

  React.useEffect(() => {
    const x = window.scrollX;
    const y = window.scrollY;
    window.onscroll = () => {
      window.scrollTo(x, y);
    };

    return () => {
      window.onscroll = () => {};
    };
  }, []);

  return (
    <div className="Overlay" onClick={onClick}>
      <Confetti width={width} height={height} />
      <div className="Dialog">
        <div className="Text">
          <div className="OverlayHeader">
            <div>
              <img
                src={okImg}
                alt="okImg"
                style={{
                  marginRight: "0.5rem",
                  position: "relative",
                  top: "7px",
                }}
              />
              {header}
            </div>
            <div>
              <img
                src={xImg}
                alt="xImg"
                style={{ position: "relative", left: "10px" }}
              />
            </div>
          </div>
          <p style={{ color: "green" }}>Happy 1st April Fools' Day!</p>
          <p>Herzliche Grüße</p>
          <p>
            <strong>Your CHECK24</strong>
          </p>
        </div>
        <div className="RepeateButton">
          <button>repeat survey</button>
        </div>
      </div>
    </div>
  );
};

export default Overlay;
