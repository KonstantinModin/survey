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
    const vectorLeft = 180;

    const [topDif, leftDif] = directions[
      (Math.random() * directions.length) | 0
    ];

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
            <input type="radio" id="huey" name="age" />
            <label htmlFor="huey">... - 25</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="dewey" name="age" />
            <label htmlFor="dewey">25 - 30</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="louie" name="age" />
            <label htmlFor="louie">30 - 35</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="louie1" name="age" />
            <label htmlFor="louie">35 - ...</label>
          </div>

          <p>2. Please select your role in company:</p>
          <div className="RadioDiv">
            <input type="radio" id="huey2" name="role" />
            <label htmlFor="huey">Developer</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="devops" name="role" />
            <label htmlFor="huey">DevOps</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="louie3" name="role" />
            <label htmlFor="louie">Product Manager</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="louie4" name="role" />
            <label htmlFor="louie">QA</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="louie5" name="role" />
            <label htmlFor="louie">Manager</label>
          </div>

          <p>3. How much time are you working in company:</p>
          <div className="RadioDiv">
            <input type="radio" id="huey21" name="time" />
            <label htmlFor="huey">... - 1 year</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="louie32" name="time" />
            <label htmlFor="louie">1 year - 2 years</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="louie43" name="time" />
            <label htmlFor="louie">2 years - 4 years</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="louie54" name="time" />
            <label htmlFor="louie">4 years - ... </label>
          </div>

          <p>4. Your favorite lunch drink is :</p>
          <div className="RadioDiv">
            <input type="radio" id="huey2111" name="drink" />
            <label htmlFor="huey">Tea</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="louie3222" name="drink" />
            <label htmlFor="louie">Coffee</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="louie4333" name="drink" />
            <label htmlFor="louie">Milk</label>
          </div>
          <div className="RadioDiv">
            <input type="radio" id="louie5433" name="drink" />
            <label htmlFor="louie">Tequila shot</label>
          </div>

          <p>5. Would you like to receive more salary:</p>
          <div className="Buttons">
            <button onClick={noButtonHandler}>no</button>
            <button
              onMouseMove={onMouseEnterHandler}
              onTransitionEnd={onTransitionEndHandler}
              onClick={yesButtonHandler}
              style={{ top: `${top}px`, left: `${left}px` }}
            >
              yes
            </button>
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
