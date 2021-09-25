import React, { useState } from "react";
import ReactGA from "react-ga";
import Overlay from "./Overlay";
import img1 from "./img/img1.jpg";
import img2 from "./img/img2.jpg";

const Survey = () => {
  const eventGA = (category, action, label) => {
    ReactGA.event({
      category,
      action,
      label,
    });
  };

  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [overlayMessage, setOverlayMessage] = useState("");
  const [shouldBeSecondMove, setShouldBeSecondMove] = useState(false);

  const resetHandler = () => {
    eventGA("button", "click", "repeat-button");
    setTop(0);
    setLeft(0);
    setOverlayMessage("");
    window.scrollTo(0, 0);
  };

  const moveTheButton = () => {
    const directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1],
    ];
    const vectorTop = 80;
    const vectorLeft = 150;

    const [topDif, leftDif] =
      directions[(Math.random() * directions.length) | 0];

    setTop((a) => a + vectorTop * topDif);
    setLeft((a) => a + vectorLeft * leftDif);
  };

  const onMouseEnterHandler = () => {
    moveTheButton();
    setShouldBeSecondMove(true);
  };

  const onTransitionEndHandler = () => {
    if (shouldBeSecondMove) {
      moveTheButton();
    }
    setShouldBeSecondMove(false);
  };

  const noButtonHandler = () => {
    eventGA("button", "click", "no-button");
    setOverlayMessage("no");
  };

  const yesButtonHandler = () => {
    eventGA("button", "click", "yes-button");
    setOverlayMessage("yes");
  };

  return (
    <>
      {overlayMessage && (
        <Overlay overlayMessage={overlayMessage} onClick={resetHandler} />
      )}
      <div className={`Survey${overlayMessage ? " Blur" : ""}`}>
        <div className="Top">
          <span className="bold">CHECKito</span>
          <span>Anonymous survey</span>
        </div>
        <div className="TopWhite">
          <span className="bold">+++ VERTRAULICH +++ CONFIDENTIAL +++</span>
          <span>Deutsch | English</span>
        </div>
        <img src={img1} alt="img1" height="127" width="900" />
        <div className="Text">
          <p>
            <strong>Dear CHECKitos,</strong>
          </p>
          <p>
            In order to improve the quality of services for our customers, we
            perform a <strong>100% anonymous survey</strong> among our
            employees. Please find a moment to complete the survey. <br />
            Your feedback is <strong>extremly</strong> important to us!
          </p>
          <p>Herzliche Grüße</p>
          <p>
            <strong>Your CHECK24</strong>
          </p>
        </div>
        <div className="Smile">
          <img src={img2} width="275" alt="img2" />
        </div>

        <div className="Text">
          <p>1. Please select your age range among follows:</p>
          <div className="RadioDiv">
            <input type="radio" id="1a" name="age" />
            <label htmlFor="1a">... - 25</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="1b" name="age" />
            <label htmlFor="1b">25 - 30</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="1c" name="age" />
            <label htmlFor="1c">30 - 35</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="1d" name="age" />
            <label htmlFor="1d">35 - ...</label>
          </div>

          <p>2. Please select your role in company:</p>
          <div className="RadioDiv">
            <input type="radio" id="2a" name="role" />
            <label htmlFor="2a">Developer</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="2b" name="role" />
            <label htmlFor="2b">DevOps</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="2c" name="role" />
            <label htmlFor="2c">Product Manager</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="2d" name="role" />
            <label htmlFor="2d">QA</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="2e" name="role" />
            <label htmlFor="2e">Manager</label>
          </div>

          <p>3. How much time are you working in company:</p>
          <div className="RadioDiv">
            <input type="radio" id="3a" name="time" />
            <label htmlFor="3a">... - 1 year</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="3b" name="time" />
            <label htmlFor="3b">1 year - 2 years</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="3c" name="time" />
            <label htmlFor="3c">2 years - 4 years</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="3d" name="time" />
            <label htmlFor="3d">4 years - ... </label>
          </div>

          <p>4. Your favorite lunch drink is :</p>
          <div className="RadioDiv">
            <input type="radio" id="4a" name="drink" />
            <label htmlFor="4a">Tea</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="4b" name="drink" />
            <label htmlFor="4b">Coffee</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="4c" name="drink" />
            <label htmlFor="4c">Milk</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="4d" name="drink" />
            <label htmlFor="4d">Tequila shot</label>
          </div>

          <p>5. Would you like to receive more salary:</p>
          <div className="Buttons">
            <button onClick={noButtonHandler}>no</button>
            <div
              className="YesButtonOutter"
              onMouseMove={onMouseEnterHandler}
              onMouseOver={onMouseEnterHandler}
              onTransitionEnd={onTransitionEndHandler}
              style={{ top: `${top}px`, left: `${left}px` }}
            >
              <button onClick={yesButtonHandler}>yes</button>
            </div>
          </div>
        </div>
        <img src={img1} alt="img1" height="127" width="900" />
        <div className="Feedback">
          <span>FEEDBACKBOX:</span>
          <p>We look forward to your suggestions, ideas and feedback!</p>
        </div>
      </div>
    </>
  );
};

export default Survey;
