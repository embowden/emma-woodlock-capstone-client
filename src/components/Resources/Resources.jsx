import React from "react";
import { Link } from "react-router-dom";
import "./resources.scss";
import Keyboard from "../Widgets/Keyboard/Keyboard";
import leftQuote from "../../assets/images/left-quote.png";
import rightQuote from "../../assets/images/right-quote.png";
import touchTyping from "../../assets/images/keyboard-start.webp";
import gameNoise from "../../assets/audio/game-button.wav";

const Resources = () => {
  //GAME NOISE ON CLICK EVENT
  let gameSound = new Audio(gameNoise);
  const handleSound = () => {
    gameSound.play();
  };

  return (
    <section className="resources">
      <section className="resources__container">
        <div className="resources__animation">
          <Keyboard />
        </div>
        <h1 className="resources__title">{"{ resources }"}</h1>
        <section className="resources__what">
          <h5 className="resources__what-title">What is touch typing?</h5>
          <p className="resources__what-text">
            Touch typing is a method of typing without the use of the sense of
            sight, or simply by feeling the keyboard.
          </p>
          <img className="resources__keyboard" src={touchTyping} alt="" />
        </section>
        <section className="resources__benefits">
          <img src={leftQuote} alt="" className="resources__left" />
          <img src={rightQuote} alt="" className="resources__right" />
          <h5 className="resources__benefits-title">
            6 benefits of touch typing
          </h5>
          <div className="resources__paragraphs">
            <h4 className="resources__h4">1. Speed </h4>
            <p className="resources__text">
              This is going to be the first and most obvious benefit of learning
              to touch type. A touch typist can easily reach typing speeds above
              75-80 words per minute, while a non-trained individual is around
              10. This is increased by the fact that an accomplished touch
              typist doesn’t have to look at the keyboard. Not only will you
              become more efficient, but you will also be able to direct focus
              where required.
            </p>
            <h4 className="resources__h4">2. Accuracy</h4>
            <p className="resources__text">
              One of the most important things to learn no matter how hard you
              type is to type accurately. This increase your confidence document
              production as you will know what you are writing is spelt
              correctly and grammatically accurate.
            </p>
            <h4 className="resources__h4">3. Time</h4>
            <p className="resources__text">
              If you increase your typing speed for example, from say 30 words
              per minute to 60, you have effectively halved the time it would
              take you to do the same amount of work. An average two finger
              typist, typing at a speed of 10 words per minute, will type a
              170-word section in about 17 minutes. A touch typist, on the other
              hand, typing at an average 60 words per minute, can type the same
              section in around 4 minutes. It has been proven that a trained
              touch typist can save around 20 – 35% of their time used on a
              computer through learning this skill.
            </p>
            <h4 className="resources__h4">4. Decrease Fatigue</h4>
            <p className="resources__text">
              Typing is both psychologically and physically exhausting when done
              for long periods of time. Learning to touch type properly reduces
              mental and physical fatigue. Mentally, it keeps you from having to
              focus on two things at once. All you have to worry about is your
              output, not finding the individual keys. Physically, it keeps you
              from constantly having to bend your head over the keyboard to find
              your next couple of keystrokes.
            </p>
            <h4 className="resources__h4">5. Health</h4>
            <p className="resources__text">
              Overall, touch typing is better for your health. You’re not
              hunched over looking at the keys, and using all of your fingers
              actually reduces the risk for repetitive stress injuries (RSI).
            </p>
            <h4 className="resources__h4">6. Productivity</h4>
            <p className="resources__text">
              By learning touch typing, you shall become more productive and
              even increase your own or your staff’s confidence. Time is nearly
              halved and errors will become near enough non-existent. Touch
              typing is a skill to be proud of and is desired within most
              industries.
            </p>
            <a
              href="https://www.pitman-training.com/advice-hub/pitman-blog/why-is-it-important-to-touch-type/#:~:text=Decrease%20Fatigue%20%2D%20Typing%20is%20both,on%20two%20things%20at%20once."
              className="resources__source"
            >
              -- Pitman Training
            </a>
          </div>
        </section>
        <section className="resources__websites">
          <h5 className="resources__websites-title">Learn to touch type</h5>
          <div className="resources__links">
            <a
              className="resources__anchor"
              target="_blank"
              href="https://www.pitman-training.com/advice-hub/pitman-blog/why-is-it-important-to-touch-type/#:~:text=Decrease%20Fatigue%20%2D%20Typing%20is%20both,on%20two%20things%20at%20once."
            >
              The 6 Benefits of Touch Typing - Pitman Training
            </a>
            <a
              className="resources__anchor"
              target="_blank"
              href="https://www.typingstudy.com/"
            >
              Touch Typing Study - Free Online Training
            </a>
            <a
              className="resources__anchor"
              target="_blank"
              href="https://www.typingclub.com/"
            >
              Typing Club - Free Online Training
            </a>
            <a
              className="resources__anchor"
              target="_blank"
              href="https://www.bbc.co.uk/bitesize/topics/zf2f9j6/articles/z3c6tfr"
            >
              BBC Bitesize - Computing
            </a>
            <a
              className="resources__anchor"
              target="_blank"
              href="https://en.wikipedia.org/wiki/Touch_typing"
            >
              Wikipedia - Touch Typing Defined
            </a>
          </div>
        </section>
        <Link
          onClick={handleSound}
          to="/discover"
          className="resources__return"
        >
          BACK TO THE GAME
        </Link>
      </section>
    </section>
  );
};

export default Resources;
